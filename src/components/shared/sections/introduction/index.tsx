import Image from 'next/image';
import Link from 'next/link';
import {APP_NAME, APP_URL} from "@/lib/constants";
import ProfileImage from '../../../../../public/photo.jpg';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, SendHorizontal } from 'lucide-react';
import SectionWrapper from "@/components/shared/sections/section-wrapper";

const Intro = () => {
    return (
        <SectionWrapper>
            <div className="flex-[1_0_auto] lg:order-2 flex justify-center items-center">
                <Image
                    className={"rounded-lg shadow-lg dark:shadow-none shadow-zinc-900"}
                    src={ProfileImage}
                    alt={ APP_NAME }
                    width={1024}
                    height={1536}
                    style={{width:'auto',height:'70vh', maxHeight: '35rem'}}
                    loading="eager"
                />
            </div>
            <div className="flex-[0_1_auto] lg:order-1 gap-2 flex-col">
                <h1 className="title">Hi, i am <br />Andrii Voloshchenko.</h1>
                <p className="section__description lg:max-w-1/2 mb-5 lg:mb-8">
                    A Warsaw based front-end developer passionate about building accessible and user friendly websites.
                </p>
                <div className="flex flex-wrap mt-4 gap-4">
                    <Button asChild variant="outline" className="rounded-2xl hover:bg-zinc-100 hover:dark:bg-zinc-800">
                        <Link href={`${ APP_URL }/#contact`}>
                            Contact me
                            <SendHorizontal className="ml-2" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full hover:bg-zinc-100 hover:dark:bg-zinc-800" size="icon">
                        <Link href="https://www.linkedin.com/in/andrii-voloshchenko/" target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full hover:bg-zinc-100 hover:dark:bg-zinc-800" size="icon">
                        <Link href="https://github.com/photocat" target="_blank" rel="noopener noreferrer">
                            <Github />
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Intro;
