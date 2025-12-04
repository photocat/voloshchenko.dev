import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { APP_HEADER_MOBILE_HEIGHT, APP_HEADER_DESKTOP_HEIGHT} from "@/lib/constants";

/**
 * Combines class names using clsx and merges them with tailwind-merge.
 * @param inputs - Class names to combine.
 * @returns The combined class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Attempts to smoothly scroll to an element with the ID from the given href's hash.
 * Adjusts for fixed header offset and updates the URL hash without jumping.
 * @param href - The href containing the hash of the target element.
 * @returns True if the scroll was successful, false otherwise.
 */
export const trySmoothScroll = (href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return false;

    const el = document.getElementById(hash);
    if (!el) return false;

    const yOffset = window.innerWidth < 1024 ? APP_HEADER_MOBILE_HEIGHT : APP_HEADER_DESKTOP_HEIGHT;
    const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    history.replaceState(null, "", `#${hash}`);
    return true;
};
