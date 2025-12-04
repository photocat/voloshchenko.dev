/**
 * Header component that hides on scroll down and shows on scroll up.
 * @returns {JSX.Element} The header element.
 */

"use client";
import Link from "next/link";
import { APP_NAME, APP_URL, APP_HEADER_SCROLL_DELTA, APP_HEADER_HIDE_OFFSET } from "@/lib/constants";
import { Menu } from "@/components/shared/header/menu";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            const currentY = window.scrollY;
            if (Math.abs(currentY - lastScrollY.current) < APP_HEADER_SCROLL_DELTA) return;

            setHidden(currentY > lastScrollY.current && currentY > APP_HEADER_HIDE_OFFSET);
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full fixed top-0 bg-[var(--background)] z-50 shadow-md transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
            <div className="flex items-center justify-between px-8 xl:px-15 py-3 xl:py-4">
                <Link href={APP_URL}>
                    <p className="site-logo">{APP_NAME}</p>
                </Link>
                <Menu />
            </div>
        </header>
    );
};
