export function normalizeFieldPath(path: string): string {
  return path.replace(/\.\d+\./g, ".");
}
