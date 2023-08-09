import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

function App() {
    const navBarRef = useRef(null);
    const [isVisible, setVisible] = useState(false);

    const handleClick = (id) => {
        console.log("click");
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useEffect(() => {
        const ref = navBarRef.current;
        console.log(ref);
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setVisible(entry.isIntersecting);
        });

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [navBarRef]);

    return (
        <Router>
            <NavBar ref={navBarRef} />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                </Routes>
            </main>
            <div
                className={`fixed w-fit h-fit bottom-5 right-5 mobile:bottom-10 mobile:right-10 opacity-60 ${
                    isVisible ? "hidden" : "block"
                }`}
                onClick={() => handleClick("navbar")}
            >
                <FontAwesomeIcon
                    icon={faSquareCaretUp}
                    size="3x"
                    style={{ color: "#d3d3d3" }}
                />
            </div>
        </Router>
    );
}

export default App;
