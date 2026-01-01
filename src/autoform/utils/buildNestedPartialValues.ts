export function buildNestedPartialValues(
  paths: string[],
  values: any[]
): Record<string, any> {
  const result: Record<string, any> = {};

  paths.forEach((path, index) => {
    const parts = path.split(".");
    let current = result;

    parts.forEach((part, i) => {
      const isLast = i === parts.length - 1;
      const isIndex = !isNaN(Number(part));

      if (isLast) {
        current[part] = values[index];
      } else {
        if (!(part in current)) {
          current[part] = isIndex ? [] : {};
        }
        current = current[part];
      }
    });
  });

  return result;
}
