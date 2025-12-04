/**
 * Footer component
 * @returns {JSX.Element} The footer element
 */

import {APP_NAME} from "@/lib/constants";

export const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center py-4 px-15 border-t border-gray-300 dark:border-gray-700">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} {APP_NAME}
            </p>
        </footer>
    );
};
