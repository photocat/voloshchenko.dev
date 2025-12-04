/**
 * Menu component for site navigation.
 * Displays a horizontal menu on large screens and a hamburger menu on smaller screens.
 * Includes theme mode toggle.
 */

import React from "react";
import { APP_URL, APP_MAIN_NAVIGATION } from "@/lib/constants";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet";
import { LiaBarsSolid } from "react-icons/lia";
import ThemeMode from '@/components/shared/header/theme-mode';
import { trySmoothScroll } from "@/lib/utils";

export const Menu = () => {

    const handleNavClick = (href: string) => (e: React.MouseEvent) => {
        if (trySmoothScroll(href)) e.preventDefault();
    }

    return (
        <div className="">
            <nav className="hidden lg:flex items-center gap-8">
                {APP_MAIN_NAVIGATION.map((navItem) => (
                    <Link
                        href={APP_URL + navItem.href}
                        key={navItem.id}
                        className="capitalize text-base hover:underline"
                        onClick={handleNavClick(navItem.href)}
                    >
                        { navItem.title }
                    </Link>
                ))}
                <ThemeMode />
            </nav>
            <nav className="flex items-center justify-center lg:hidden">
                <Sheet>
                    <SheetTrigger className="btn-ghost btn-circle btn">
                        <LiaBarsSolid />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start py-4 px-8">
                        <SheetTitle className="uppercase text-xlg">Menu</SheetTitle>
                        {APP_MAIN_NAVIGATION.map((navItem) => (
                            <Link
                                href={APP_URL + navItem.href}
                                key={navItem.id}
                                className="capitalize text-base hover:underline"
                                onClick={handleNavClick(navItem.href)}
                            >
                                { navItem.title }
                            </Link>
                        ))}
                        <SheetDescription></SheetDescription>
                        <SheetFooter className="w-full p-0 items-end">
                            <ThemeMode />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};
