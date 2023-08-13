import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === "#about") {
            const element = document.getElementById("about");
            if (element) {
                element.scrollIntoView({ behavior: "instant" });
            }
        }
    }, []);

    return (
        <main>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    );
}

export default Home;
