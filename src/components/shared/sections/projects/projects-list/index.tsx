/**
 * Project List Component
 * Renders a list of project items.
 * @returns {JSX.Element} The Project List component.
 */

import { getProjects } from "@/lib/project-service";
import ProjectItem from "../project-item";

const ProjectList = async () => {
    const projects = await getProjects();

    return (
        <ul className="flex flex-col gap-8 lg:gap-20">
            {projects.map((project) => (
                <li key={ project.id } className="list-none">
                    <ProjectItem project={ project } />
                </li>
            ))}
        </ul>
    );
};

export default ProjectList;
