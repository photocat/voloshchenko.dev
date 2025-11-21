import Intro from "@/components/shared/sections/introduction";
import Projects from "@/components/shared/sections/projects";
import Separator from "@/components/shared/separator";
import About from "@/components/shared/sections/about";
import Contact from "@/components/shared/sections/contact";

const Home = () => {
    return (
        <div className="page">
            <Intro />
            <Separator />
            <Projects />
            <Separator />
            <About />
            <Separator />
            <Contact />
            <Separator />
        </div>
    );
}

export default Home;
