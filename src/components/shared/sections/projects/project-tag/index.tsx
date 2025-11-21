import { ProjectTagType } from "@/types";

const ProjectTag = ({ tag } : { tag: ProjectTagType }) => {
    return (
        <span className="text-xs bg-zinc-200 dark:bg-zinc-500 text-zinc-900 dark:text-zinc-100 px-2 py-1 rounded-full">
            {tag}
        </span>
    );
};

export default ProjectTag;
