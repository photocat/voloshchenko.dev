import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LiaGithub, LiaExternalLinkAltSolid } from "react-icons/lia";
import ProjectInfoItem from "../project-info-item";
import ProjectTag from "../project-tag";


const ProjectItem = ({ project }: { project: Project}) => {
    return (
        <div className="flex flex-wrap">
            <div className="flex flex-[1_1_100%] lg:flex-1/2 bg-neutral-500 dark:bg-neutral-800 p-[3rem_1rem_1rem] lg:px-14 items-center justify-center relative">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={1024}
                    height={1024}
                    className="rounded-lg shadow-lg dark:shadow-none shadow-zinc-900"
                    style={{width: '100%', height: 'auto'}}
                />
                {project.tag && (
                    <div className="mt-2 flex flex-wrap gap-2 absolute top-1 lg:top-2 left-4">
                        {project.tag.map((tag, index: number) => (
                            <ProjectTag key={ tag + index } tag={ tag } />
                        ))}
                    </div>
                )}
            </div>
            <div className="flex-1 lg:flex-1/2 px-0 lg:px-12 py-6 lg:py-14">
                <h3 className="title-sm">{project.title}</h3>
                <p className="mb-8">{project.description}</p>
                <ul className="flex flex-col">
                    {project.info.client && (
                        <ProjectInfoItem name="Client" item={project.info.client } />
                    )}
                    {project.info.role && (
                        <ProjectInfoItem name="Role" item={project.info.role } />
                    )}
                    {project.info.year && (
                        <ProjectInfoItem name="Year" item={project.info.year } />
                    )}
                    {project.info.technologies && (
                        <ProjectInfoItem name="Technologies" item={project.info.technologies } />
                    )}
                    {project.info.challenges && (
                        <ProjectInfoItem name="Challenges" item={project.info.challenges } />
                    )}
                </ul>
                <div className="flex flex-wrap gap-4 lf:gap-8 mt-8">
                    {project.projectUrl && (
                        <Button asChild variant="secondary" className="bg-emerald-700 hover:bg-emerald-600 text-neutral-50">
                            <Link href={project.projectUrl} passHref>
                                <LiaExternalLinkAltSolid />
                                View Project
                            </Link>
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button asChild variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-neutral-50">
                            <Link href={project.githubUrl} passHref>
                                <LiaGithub />
                                View on GitHub
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
