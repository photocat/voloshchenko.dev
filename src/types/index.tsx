export type ProjectInfo = {
    client?: string;
    technologies?: string[];
    year?: string;
    role?: string;
    challenges?: string[];
}

export type Project = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl?: string;
    info: ProjectInfo;
    tag?: string[];
}

export type ProjectInfoItemType = string | string[];

export type ProjectTagType = string;
