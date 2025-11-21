export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Voloshchenko.dev';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Personal site of Andrii Voloshchenko';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const APP_MAIN_NAVIGATION = [
    { id: 'main-nav-item-1', title: 'work', href: '/#work' },
    { id: 'main-nav-item-2', title: 'about', href: '/#about' },
    { id: 'main-nav-item-3', title: 'contact', href: '/#contact' },
];
export const APP_THEME_MODES = [
    { id: 'theme-mode-1', title: 'light', icon: 'Sun' },
    { id: 'theme-mode-2', title: 'dark', icon: 'Moon' },
    { id: 'theme-mode-3', title: 'system', icon: 'SunMoon' },
]
export const PROJECTS = [
    {
        id: 'project-1',
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects and skills as a front-end developer.',
        imageUrl: '/project.jpg',
        projectUrl: 'https://voloshchenko.dev',
        githubUrl: 'https://github.com/photocat',
        info: {
            client: 'Self-initiated',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
            year: '2025',
            role: 'Front-end Developer',
            challenges: ['Designing a responsive layout', 'Optimizing performance for fast load times'],
        },
        tag: ['featured', 'web development'],
    },
    {
        id: 'project-2',
        title: 'E-commerce Platform',
        description: 'Developed a full-featured e-commerce platform with user authentication, product management, and payment integration.',
        imageUrl: '/project.jpg',
        projectUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/photocat',
        info: {
            client: 'Example Corp',
            technologies: ['React', 'Node.js', 'MongoDB'],
            year: '2024',
            role: 'Full Stack Developer',
            challenges: ['Implementing secure payment processing', 'Ensuring scalability for high traffic'],
        },
        tag: [],
    },
    {
        id: 'project-3',
        title: 'Blog Platform',
        description: 'Created a blogging platform that allows users to create, edit, and share blog posts with a rich text editor.',
        imageUrl: '/project.jpg',
        projectUrl: 'https://example-blog.com',
        githubUrl: 'https://github.com/photocat',
        info: {
            client: 'Blogify Inc',
            technologies: ['Vue.js', 'Firebase', 'Quill.js'],
            year: '2023',
            role: 'Front-end Developer',
            challenges: ['Integrating a rich text editor', 'Implementing real-time updates with Firebase'],
        },
        tag: ['web development'],
    }
];

export const APP_ABOUT_ME = {
    title: 'I am a front-end developer based in Warsaw. Has Mechanical Engineering background.',
    text: 'I am a front-end developer based in Warsaw looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing basketball, photography and playing DOTA2. Learning more to improve skill.',
};

export const APP_SOCIAL_LINKS = {
    github: 'https://github.com/photocat/',
    linkedin: 'https://www.linkedin.com/in/andrii-voloshchenko/',
    instagram: 'https://www.instagram.com/ph0t0cat/',
    telegram: 'https://t.me/Ph0t0cat/',
}
