export function resolveDependsOnNew(fieldPath: string, dependsOn: string[]): string[] {
  const fieldParts = fieldPath.split('.');

  const indexPositions: Array<{ pos: number; value: string }> = [];

  fieldParts.forEach((part, i) => {
    if (!isNaN(Number(part))) {
      indexPositions.push({ pos: i, value: part });
    }
  });

  return dependsOn.map((dep) => {
    const depParts = dep.split('.');
    const resolved = [...depParts];

    indexPositions.forEach(({ pos, value }) => {
      if (pos <= resolved.length) {
        resolved.splice(pos, 0, value);
      }
    });

    return resolved.join('.');
  });
}
