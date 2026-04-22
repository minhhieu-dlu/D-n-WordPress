const DEFAULT_API = "http://127.0.0.1:8000/wp-json/wp/v2";

const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL || DEFAULT_API;

export async function fetchWp(path) {
  const url = `${baseUrl}${path}`;
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch {
    return null;
  }
}

export async function getLatestPosts(limit = 3) {
  const data = await fetchWp(`/posts?per_page=${limit}&_embed`);
  return Array.isArray(data) ? data : [];
}

export async function getProjects(limit = 6) {
  const data = await fetchWp(`/portfolio_project?per_page=${limit}&_embed`);
  return Array.isArray(data) ? data : [];
}
