import languageEncoding from "detect-file-encoding-and-language";
import Papa from "papaparse";

export async function parseCsv<U>(file: File): Promise<U[]> {
  const rows: Array<U> = [];

  const info = await languageEncoding(file);

  return new Promise<U[]>((resolve, reject) => {
    Papa.parse<U, File>(file, {
      delimiter: ",",
      header: true,
      dynamicTyping: false,
      encoding: info.encoding ?? "UTF-8",
      complete: () => {
        resolve(rows);
      },
      step: (r) => {
        rows.push(r.data);
      },
      error: (err) => {
        reject(err);
      },
    });
  });
}
