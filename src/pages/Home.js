import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";

function Home() {
    return (
        <>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
        </>
    );
}

export default Home;
