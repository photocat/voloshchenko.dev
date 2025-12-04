export type Project = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl?: string;
    client?: string;
    technologies?: string[];
    year?: string;
    role?: string;
    challenges?: string[];
    tag?: string[];
}

export type ProjectInfoItemType = string | string[];

export type ProjectTagType = string;
