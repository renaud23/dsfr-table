import {
  Activity,
  type ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import "./index.css";
import { classNames } from "@lib/utils/classNames";

function getItemsFromDragEvent(e: DragEvent) {
  return [...(e?.dataTransfer?.items ?? [])].filter((it) => it.kind === "file");
}

type DropFilesProps = {
  onDropFile?: (file?: File) => void;
  className?: string;
  id?: string;
  file?: File;
};

function ErrorFileType() {
  return (
    <div className="fr-messages-group">
      <p className="fr-message fr-message--error">
        Format de fichier non supporté
      </p>
    </div>
  );
}

export function DropFiles({
  onDropFile,
  className,
  id = "upload-file",
}: DropFilesProps) {
  const [onError, setOnError] = useState(false);
  const zoneEl = useRef<HTMLDivElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const drop = useCallback((e: DragEvent) => {
    const items = getItemsFromDragEvent(e);
    if (items.length) {
      e.preventDefault();
    }
  }, []);

  const dragAndDrop = useCallback((e: DragEvent) => {
    const items = getItemsFromDragEvent(e);
    if (items.length) {
      e.preventDefault();
      if (!zoneEl.current?.contains(e.target as Node)) {
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = "none";
        }
      }
    }
  }, []);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        if (e.target.files[0].type.startsWith("text/csv")) {
          onDropFile?.(e.target.files[0]);
          setOnError(false);
        } else {
          onDropFile?.(undefined);
          setOnError(true);
        }
      }
    },
    [onDropFile],
  );

  useEffect(() => {
    window.addEventListener("drop", drop);
    window.addEventListener("dragover", dragAndDrop);
    return () => {
      window.removeEventListener("drop", drop);
      window.removeEventListener("dragover", dragAndDrop);
    };
  }, [drop, dragAndDrop]);

  return (
    <div
      className={classNames(
        "drag-drop-files",
        "fr-upload-group",
        className ?? "",
        { "fr-upload-group--error": onError },
      )}
      ref={zoneEl}
      onDragOver={(e) => {
        const items = [...e.dataTransfer.items].filter(
          (it) => it.kind === "file",
        );
        if (items.length > 0) {
          e.preventDefault();
          if (items.some((it) => it.type.startsWith("text/csv"))) {
            e.dataTransfer.dropEffect = "copy";
          } else {
            e.dataTransfer.dropEffect = "none";
          }
        }
      }}
      onDrop={(e) => {
        e.preventDefault();
        const files = [...e.dataTransfer.items]
          .map((it) => it.getAsFile())
          .filter((f) => f);
        if (files.length) {
          onDropFile?.(files[0] ?? undefined);
        }
      }}
    >
      <img
        src="images/upload-file.svg"
        alt=""
        aria-hidden="true"
        style={{ width: "4rem", margin: "auto" }}
      />
      <label className="fr-label" htmlFor={id}>
        Glissez-déposez votre fichier CSV
        <span className="fr-hint-text">
          Indication : taille maximale : XXX Mo. Formats supportés : csv. Un
          seul fichier possible.
        </span>
      </label>
      <div className="input-file">
        <input
          className={classNames("fr-upload", "input-file")}
          aria-describedby="upload-3-messages"
          type="file"
          id={id}
          name="upload"
          onChange={onChange}
          ref={inputEl}
          accept=".csv"
        />
        <Activity mode={onError ? "visible" : "hidden"}>
          <ErrorFileType />
        </Activity>
      </div>
    </div>
  );
}
