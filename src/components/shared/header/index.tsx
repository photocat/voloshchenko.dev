import Link from "next/link";
import { APP_NAME, APP_URL } from "@/lib/constants";
import { Menu } from "@/components/shared/header/menu";

export const Header = () => {
    return (
        <header className="w-full">
            <div className="flex items-center justify-between px-8 xl:px-15 py-4 xl:py-6">
                <Link href={APP_URL}>
                    <p className="site-logo">
                        { APP_NAME }
                    </p>
                </Link>
                <Menu />
            </div>
        </header>
    );
};
