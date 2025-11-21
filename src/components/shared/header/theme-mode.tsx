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
import { LiaSun, LiaMoon, LiaCogSolid} from "react-icons/lia";
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

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-zinc-100 hover:dark:bg-zinc-800">
                    {theme === 'light' ?
                        <LiaSun /> :
                        theme === 'dark' ?
                            <LiaMoon /> :
                            <LiaCogSolid />
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Choose theme mode</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {APP_THEME_MODES.map((mode) => {
                    const IconComponent = mode.icon === 'Sun' ? LiaSun : mode.icon === 'Moon' ? LiaMoon : LiaCogSolid;
                    return (
                        <Button
                            key={mode.id}
                            variant="ghost"
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
