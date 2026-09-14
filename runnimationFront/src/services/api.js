const API_BASE_URL = "https://localhost:7051/api";

export async function getRecentReleases() {
  const response = await fetch(`${API_BASE_URL}/shows/recent-releases`);

  if (!response.ok) {
    throw new Error("Error al obtener los estrenos recientes");
  }

  return response.json();
}