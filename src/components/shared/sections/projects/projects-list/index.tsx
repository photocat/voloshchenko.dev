import { PROJECTS } from "@/lib/constants";
import ProjectItem from "../project-item";

const ProjectList = () => {
    return (
        <ul className="flex flex-col gap-8 lg:gap-20">
            {PROJECTS.map((project) => (
                <li key={ project.id } className="list-none">
                    <ProjectItem project={ project } />
                </li>
            ))}
        </ul>
    );
};

export default ProjectList;
