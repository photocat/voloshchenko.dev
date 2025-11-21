'use client';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
    return (
        <form>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" placeholder="Type your name" />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Type your email" />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input type="text" id="subject" placeholder="Type subject" />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your message here." />
                </div>
                <Button type="submit" className="bg-emerald-700 hover:bg-emerald-600 text-neutral-50 w-fit">Send Message</Button>
            </div>
        </form>
    );
};

export default ContactForm;
