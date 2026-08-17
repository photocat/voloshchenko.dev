import { prisma } from '@/lib/prisma';

export default async function TestDatabaseConnection() {
  try {
    // Just test the connection by fetching a single project
    const projects = await prisma.project.findMany({ take: 1 });
    console.log('Successfully connected to database, found', projects.length, 'projects');
    return true;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    return false;
  }
}