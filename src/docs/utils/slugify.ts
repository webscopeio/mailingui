export function slugifyTitle(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-") // Replace consecutive hyphens with a single hyphen
    .trim(); // Trim leading/trailing hyphens

  return slug;
}
