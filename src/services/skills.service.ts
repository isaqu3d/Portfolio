import client from "@/lib/sanity/client";
import { Skill } from "@/types";

export async function getSkills(category?: string): Promise<Skill[]> {
  const filter = category ? `&& category == "${category}"` : "";

  const query = `
    *[_type == "skill" ${filter}] | order(order asc, name asc) {
      _id,
      _createdAt,
      _updatedAt,
      name,
      slug,
      logo,
      category,
      description,
      proficiency,
      color,
      order,
      featured
    }
  `;

  try {
    const skills = await client.fetch<Skill[]>(query);
    return skills || [];
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}

export async function getSkillBySlug(slug: string): Promise<Skill | null> {
  const query = `
    *[_type == "skill" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      name,
      slug,
      logo,
      category,
      description,
      proficiency,
      color,
      order,
      featured
    }
  `;

  try {
    const skill = await client.fetch<Skill>(query, { slug });
    return skill || null;
  } catch (error) {
    console.error("Error fetching skill:", error);
    return null;
  }
}

export async function getFeaturedSkills(): Promise<Skill[]> {
  const query = `
    *[_type == "skill" && featured == true] | order(order asc, name asc) {
      _id,
      _createdAt,
      _updatedAt,
      name,
      slug,
      logo,
      category,
      description,
      proficiency,
      color,
      order,
      featured
    }
  `;

  try {
    const skills = await client.fetch<Skill[]>(query);
    return skills || [];
  } catch (error) {
    console.error("Error fetching featured skills:", error);
    return [];
  }
}
