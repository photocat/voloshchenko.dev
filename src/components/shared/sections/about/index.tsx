/**
 * About Me Section
 * @returns {JSX.Element} The About Me section component
 */

import {APP_MAIN_NAVIGATION, APP_ABOUT_ME, APP_URL} from "@/lib/constants";
import SectionWrapper from "../section-wrapper";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
    return (
        <SectionWrapper id={APP_MAIN_NAVIGATION[1].title}>
            <div className="flex gap-x-8 flex-wrap">
                <div className="flex-[1_1_100%] lg:flex-1 lg:max-w-[30rem]">
                    <h2 className="title-md">About Me</h2>
                </div>
                <div className="flex-1">
                    <h3 className="title-sm">{ APP_ABOUT_ME.title }</h3>
                    <p className="mb-5 lg:mb-10">{ APP_ABOUT_ME.text }</p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild variant="secondary" className="bg-emerald-700 hover:bg-emerald-600 text-neutral-50">
                            <Link href={`${ APP_URL }/#contact`}>
                                More about me
                                <LinkIcon className="ml-1" size={16} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default About;
