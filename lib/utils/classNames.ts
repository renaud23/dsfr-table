type Arguments =
  | string[]
  | [...string[]]
  | [Record<string, boolean>]
  | [string | undefined, Record<string, boolean>]
  | [...(string | undefined)[], Record<string, boolean>];

export function classNames(...args: Arguments): string {
  if (!args.length) {
    return "";
  }

  if (args.length === 1) {
    const [first] = args;
    if (typeof first === "string") {
      return first;
    }
    if (typeof first === "object") {
      return preparedOptionals(first);
    }
  }
  return (
    args.reduce((a, n, i) => {
      if (i < args.length - 1 || typeof n === "string") {
        return `${a} ${n}`;
      }
      if (typeof n === "object") {
        return `${a} ${preparedOptionals(n)}`;
      }
      return a;
    }, "") as string
  ).trim();
}

function preparedOptionals(optionals: Record<string, boolean>) {
  return Object.entries(optionals)
    .reduce((a, [name, state]) => (state ? `${a} ${name}` : a), "")
    .trim();
}

export function appendClassNames(className: string, classNames?: string[]) {
  if (classNames && classNames.length) {
    return `${className} ${classNames.join(" ")}`;
  }

  return className;
}
