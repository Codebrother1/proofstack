export function normalizeTitle(title) {
  if (typeof title !== "string") {
    throw new TypeError("title must be a non-empty string");
  }

  const normalized = title.trim().replace(/\s+/g, " ");
  if (normalized === "") {
    throw new TypeError("title must be a non-empty string");
  }

  return normalized;
}
