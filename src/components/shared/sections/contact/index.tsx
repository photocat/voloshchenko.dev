/**
 * Contact Section Component
 * This component renders the contact section of the webpage, including a contact form and social media links.
 * @return {JSX.Element} The Contact section component.
 */

import { APP_MAIN_NAVIGATION } from "@/lib/constants";
import { APP_SOCIAL_LINKS } from "@/lib/constants";
import SectionWrapper from "../section-wrapper";
import ContactForm from "./contact-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LiaGithub, LiaLinkedinIn, LiaInstagram, LiaTelegram } from "react-icons/lia";

const Contact = () => {
    return (
        <SectionWrapper id={APP_MAIN_NAVIGATION[2].title} className="items-start mb-10 lg:mb-20">
            <div className="flex-1/2">
                <h2 className="title-md">Let’s connect</h2>
                <p>Say hello at <a className="text-emerald-700 hover:underline" href="mailto:andrii.voloshchenko@gmail.com">andrii.voloshchenko@gmail.com</a></p>
                <p className="mb-10 lg:mb-20">For more info, here’s my <a className="text-emerald-700 hover:underline" href='/cv.pdf' download="CV-Senior Frontend Software Engineer-Andrii Voloshchenko">resume</a></p>
                <div className="flex flex-wrap gap-4">
                    { Object.keys(APP_SOCIAL_LINKS).map(link => {
                        return (
                            <Button key={link}  size="icon" asChild variant="secondary" className="bg-emerald-700 hover:bg-emerald-600 text-neutral-50 rounded-full">
                                <Link href={APP_SOCIAL_LINKS[link as keyof typeof APP_SOCIAL_LINKS]} target="_blank" rel="noopener noreferrer">
                                    {link === 'linkedin' && <LiaLinkedinIn />}
                                    {link === 'github' && <LiaGithub />}
                                    {link === 'instagram' && <LiaInstagram />}
                                    {link === 'telegram' && <LiaTelegram />}
                                </Link>
                            </Button>
                        );
                    })}
                </div>
            </div>
            <div className="flex-1/2">
                <ContactForm />
            </div>
        </SectionWrapper>
    );
}

export default Contact;
