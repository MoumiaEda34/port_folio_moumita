import { client } from "./client";

export async function getProjectData() {
  const query = `*[_type == "Projects"] | order(_createdAt asc) {
    title,
    description,
    "image": image.asset->url,
  }`;

  try {
    const data = await client.fetch(query);
    console.log("Sanity Response:", data);
    return data;
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
}