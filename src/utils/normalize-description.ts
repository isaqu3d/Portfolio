export function normalizeDescription(desc: any): any[] {
  if (!desc) return [];
  return Array.isArray(desc) ? desc : [desc];
}
