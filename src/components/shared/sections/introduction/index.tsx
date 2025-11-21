'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LiaLinkedinIn, LiaGithub, LiaPaperPlane } from "react-icons/lia";
import SectionWrapper from "@/components/shared/sections/section-wrapper";
import { APP_NAME, APP_URL, APP_SOCIAL_LINKS } from "@/lib/constants";
import ProfileImage from '../../../../../public/photo.jpg';
import LightProfileImage from '../../../../../public/photo-light.jpg';

const Intro = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    return (
        <SectionWrapper>
            <div className="flex-[1_0_auto] lg:order-2 flex justify-center items-center">
                {mounted ? (
                    <Image
                        className={"rounded-lg shadow-lg dark:shadow-none shadow-zinc-900"}
                        src={theme === 'light' ? LightProfileImage : ProfileImage}
                        alt={APP_NAME}
                        width={1024}
                        height={1536}
                        style={{ width: 'auto', height: '70vh', maxHeight: '35rem' }}
                        loading="eager"
                    />
                ) : (
                    <div
                        className="rounded-lg shadow-lg dark:shadow-none shadow-zinc-900 bg-neutral-200 dark:bg-neutral-800"
                        style={{ width: 'auto', height: '70vh', maxHeight: '35rem' }}
                        aria-hidden
                    />
                )}
            </div>
            <div className="flex-[0_1_auto] lg:order-1 gap-2 flex-col">
                <h1 className="title">Hi, I am <br />Andrii Voloshchenko.</h1>
                <p className="lg:max-w-3/4 mb-5 lg:mb-8">
                    A Warsaw based front-end developer passionate about building accessible and user friendly websites.
                </p>
                <div className="flex flex-wrap mt-4 gap-4">
                    <Button asChild variant="default" className="rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-neutral-50">
                        <Link href={APP_URL + '/#contact'}>
                            Contact me
                            <LiaPaperPlane className="ml-1" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full hover:bg-zinc-100 hover:dark:bg-zinc-800" size="icon">
                        <Link href={APP_SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="View LinkedIn profile">
                            <LiaLinkedinIn />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full hover:bg-zinc-100 hover:dark:bg-zinc-800" size="icon">
                        <Link href={APP_SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile">
                            <LiaGithub />
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Intro;
