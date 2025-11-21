import Link from "next/link";
import { APP_NAME, APP_URL } from "@/lib/constants";
import { Menu } from "@/components/shared/header/menu";

export const Header = () => {
    return (
        <header className="w-full fixed top-0 left-0 bg-[var(--background)] z-50 shadow-md">
            <div className="flex items-center justify-between px-8 xl:px-15 py-3 xl:py-4">
                <Link href={ APP_URL }>
                    <p className="site-logo">
                        { APP_NAME }
                    </p>
                </Link>
                <Menu />
            </div>
        </header>
    );
};
