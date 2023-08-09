import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useState } from "react";
import logo from "../assets/Logo.svg";
import NavBtn from "./NavBtn";

export const SECTION_IDS = {
    HOME: "home",
    MENU: "menu",
    RESERVATIONS: "reservations",
    ORDER_ONLINE: "order online",
    ABOUT: "about",
    LOGIN: "login",
};

const NavBar = forwardRef(function NavBar(props, navBarRef) {
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    const handleClick = (id) => {
        handleMenuBtn();

        if (location.pathname === "/" && id !== SECTION_IDS.HOME) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    const handleMenuBtn = () => {
        setOpen((prev) => !prev);
    };

    return (
        <header
            id="navbar"
            ref={navBarRef}
            className="relative z-10 h-24 w-full"
        >
            <div className="h-[100%] w-[100%] mobile:w-[68%] flex mx-auto py-[10px] justify-between z-0">
                <img
                    src={logo}
                    alt="Little Lemon Logo"
                    className="max-h-[70%] max-w-[12.375rem] self-center mx-auto navbar:mx-0 justify-start"
                />
                <div className="hidden navbar:block self-center">
                    <ul>
                        {Object.values(SECTION_IDS).map((v) => (
                            <NavBtn
                                key={v}
                                isMobile={false}
                                text={v}
                                onClick={handleClick}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className={`absolute ${
                    isOpen ? "block" : "hidden"
                } navbar:hidden w-full content-center bg-white`}
            >
                <ul>
                    {Object.values(SECTION_IDS).map((v) => (
                        <NavBtn
                            key={v}
                            isMobile={true}
                            text={v}
                            onClick={handleClick}
                        />
                    ))}
                </ul>
            </div>
            <div
                className="absolute top-[50%] left-[25px] translate-y-[-50%] navbar:hidden"
                onClick={handleMenuBtn}
            >
                {isOpen ? (
                    <FontAwesomeIcon
                        icon={faX}
                        size="2x"
                        className="text-little-lemon-green"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faBars}
                        size="2x"
                        className="text-little-lemon-green"
                    />
                )}
            </div>
        </header>
    );
});

export default NavBar;
