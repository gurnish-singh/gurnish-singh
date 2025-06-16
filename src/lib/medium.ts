
export async function getMediumPosts() {
  const response = await fetch('/api/medium');
  if (!response.ok) {
    throw new Error('Failed to fetch Medium posts');
  }
  return await response.json();
}
