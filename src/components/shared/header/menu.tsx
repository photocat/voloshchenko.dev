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
import { Menu as MenuIcon } from 'lucide-react';
import ThemeMode from '@/components/shared/header/theme-mode';

export const Menu = () => {
    return (
        <div className="">
            <nav className="hidden lg:flex items-center gap-8">
                {APP_MAIN_NAVIGATION.map((navItem) => (
                    <Link href={APP_URL + navItem.href} key={navItem.id} className="capitalize text-base hover:underline">
                        { navItem.title }
                    </Link>
                ))}
                <ThemeMode />
            </nav>
            <nav className="flex items-center justify-center lg:hidden">
                <Sheet>
                    <SheetTrigger className="btn-ghost btn-circle btn">
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start py-4 px-8">
                        <SheetTitle className="uppercase text-sm">Menu</SheetTitle>
                        {APP_MAIN_NAVIGATION.map((navItem) => (
                            <Link key={navItem.id} href={APP_URL + navItem.href} className="w-full text-base capitalize active:underline">
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
