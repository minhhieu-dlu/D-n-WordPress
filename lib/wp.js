const DEFAULT_API = "http://127.0.0.1:8000/wp-json/wp/v2";

const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL || DEFAULT_API;

export async function fetchWp(path) {
  const url = `${baseUrl}${path}`;
  const res = await fetch(url, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`WordPress API error ${res.status}: ${url}`);
  }

  return res.json();
}

export async function getLatestPosts(limit = 3) {
  return fetchWp(`/posts?per_page=${limit}&_embed`);
}

export async function getProjects(limit = 6) {
  try {
    return await fetchWp(`/portfolio_project?per_page=${limit}&_embed`);
  } catch {
    return [];
  }
}
