import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { Project } from "@/types";

type ProjectWithTechnologies = Prisma.ProjectGetPayload<{
  include: { technologies: true };
}>;

const toProject = (project: ProjectWithTechnologies): Project => ({
  id: project.id,
  title: project.title,
  description: project.description,
  imageUrl: project.imageUrl,
  projectUrl: project.projectUrl,
  githubUrl: project.githubUrl,
  client: project.client,
  technologies: project.technologies.map((t) => t.name),
  year: String(project.year),
  role: project.role,
  challenges: project.challenges,
  tag: project.tags,
});

export const getProjects = async (): Promise<Project[]> => {
  const projects = await prisma.project.findMany({
    include: { technologies: true },
    orderBy: { year: "desc" },
  });

  return projects.map(toProject);
};

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  const project = await prisma.project.findUnique({
    where: { slug },
    include: { technologies: true },
  });

  return project ? toProject(project) : null;
};
