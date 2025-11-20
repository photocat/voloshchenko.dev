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
