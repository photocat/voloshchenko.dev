import { APP_MAIN_NAVIGATION } from "@/lib/constants";
import SectionWrapper from "../section-wrapper";
import ProjectList from "@/components/shared/sections/projects/projects-list";

const Projects = () => {
    return (
        <SectionWrapper id={APP_MAIN_NAVIGATION[0].title} className="flex-col items-start">
            <div className="flex flex-col mb-5 lg:mb-10">
                <h2 className="title-md">Featured Projects</h2>
                <p className="lg:max-w-3/4">Here are some of the selected projects that showcase my passion for front-end development.</p>
            </div>
            <ProjectList />
        </SectionWrapper>
    )
}

export default Projects;
