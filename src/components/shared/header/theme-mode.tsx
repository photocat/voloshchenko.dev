/**
 * ThemeMode component allows users to switch between different theme modes (light, dark).
 * It uses the next-themes library for theme management and a dropdown menu for selection.
 */

'use client';

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LiaSun, LiaMoon } from "react-icons/lia";
import { APP_THEME_MODES } from "@/lib/constants";

const ThemeMode = () => {
    const { theme, setTheme } = useTheme();
    const [ open, setOpen ] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const themeChangeHandler = (newTheme: string) => {
        setTheme(newTheme);
        setOpen(false);
    }

    // Determine which icon to show based on current theme
    const getIconForCurrentTheme = () => {
        if (theme === 'system') {
            // When system theme is active, we determine the icon based on system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? <LiaMoon /> : <LiaSun />;
        }
        return theme === 'light' ? <LiaSun /> : <LiaMoon />;
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-zinc-100 hover:dark:bg-zinc-800">
                    {getIconForCurrentTheme()}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Choose theme mode</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {APP_THEME_MODES.map((mode) => {
                    const IconComponent = mode.icon === 'Sun' ? LiaSun : LiaMoon;
                    return (
                        <Button
                            key={mode.id}
                            variant={theme === mode.title ? "default" : "ghost"}
                            size="sm"
                            className="w-full justify-start capitalize"
                            onClick={() => themeChangeHandler(mode.title)}
                        >
                            <IconComponent className="mr-2" />
                            {mode.title}
                        </Button>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeMode;
