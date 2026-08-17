import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { PROJECTS } from "../src/lib/constants";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

async function main() {
  for (const project of PROJECTS) {
    await prisma.project.upsert({
      where: { slug: slugify(project.title) },
      update: {
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        projectUrl: project.projectUrl,
        githubUrl: project.githubUrl,
        client: project.client,
        year: Number(project.year),
        role: project.role,
        challenges: project.challenges,
        tags: project.tag,
        technologies: {
          connectOrCreate: project.technologies.map((name) => ({
            where: { name },
            create: { name, icon: "" },
          })),
        },
      },
      create: {
        slug: slugify(project.title),
        title: project.title,
        description: project.description,
        imageUrl: project.imageUrl,
        projectUrl: project.projectUrl,
        githubUrl: project.githubUrl,
        client: project.client,
        year: Number(project.year),
        role: project.role,
        challenges: project.challenges,
        tags: project.tag,
        technologies: {
          connectOrCreate: project.technologies.map((name) => ({
            where: { name },
            create: { name, icon: "" },
          })),
        },
      },
    });
  }

  console.log(`Seeded ${PROJECTS.length} projects.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
