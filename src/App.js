import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Reservation from "./pages/reservation";
import Confirm from "./pages/confirm";
import UnderConstruction from "./components/UnderConstruction";

function App() {
    const navBarRef = useRef(null);
    const [isVisible, setVisible] = useState(false);

    const handleClick = (id) => {
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
        <BrowserRouter basename={process.env.REACT_APP_API_URL}>
            <NavBar ref={navBarRef} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/confirm" element={<Confirm />} />
                <Route path="/nan" element={<UnderConstruction />} />
            </Routes>
            <Footer />
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
        </BrowserRouter>
    );
}

export default App;
