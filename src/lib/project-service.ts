import { prisma } from '@/lib/prisma';

export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      technologies: true,
    },
    orderBy: {
      year: 'desc',
    },
  });
  
  return projects.map(project => ({
    id: project.id,
    title: project.title,
    description: project.description,
    imageUrl: project.imageUrl,
    projectUrl: project.projectUrl,
    githubUrl: project.githubUrl,
    client: project.client,
    technologies: project.technologies.map(t => t.name),
    year: project.year.toString(), // Convert to string for compatibility
    role: project.role,
    challenges: project.challenges,
    tag: [] // This would need to be implemented if we have tags in DB
  }));
};

export const getProjectBySlug = async (slug: string) => {
  const project = await prisma.project.findUnique({
    where: {
      slug,
    },
    include: {
      technologies: true,
    },
  });
  
  if (!project) return null;
  
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    imageUrl: project.imageUrl,
    projectUrl: project.projectUrl,
    githubUrl: project.githubUrl,
    client: project.client,
    technologies: project.technologies.map(t => t.name),
    year: project.year.toString(), // Convert to string for compatibility
    role: project.role,
    challenges: project.challenges,
    tag: [] // This would need to be implemented if we have tags in DB
  };
};

export const getTechnologies = async () => {
  return await prisma.tecnology.findMany();
};