import { ProjectInfoItemType } from "@/types";

const ProjectInfoItem = ({ name, item } : { name: string, item: ProjectInfoItemType}) => {
    return (
        <li className="flex flex-1 justify-between flex-wrap gap-y-1 gap-x-4 py-2 lg:py-4 border-b border-(color:--color-border)">
            <strong className="min-w-[8rem] font-bold dark:text-white text-(color:--foreground)">
                {name}:
            </strong>
            <span>
                {item instanceof Array ? item.join(", ") : item}
            </span>
        </li>
    );
};

export default ProjectInfoItem;
