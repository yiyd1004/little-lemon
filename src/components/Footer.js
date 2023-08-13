import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { MENU } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareXTwitter,
    faSquareFacebook,
    faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.png";

function Footer() {
    const location = useLocation();
    const containerStyle = "flex flex-col items-center";
    const textStyle = "font-Karla text-[1.25]";

    const handleClick = (id) => {
        console.log(location.pathname, id);
        if (location.pathname === "/") {
            const element = document.getElementById(
                id === "home" ? "navbar" : id
            );
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    return (
        <footer
            id="footer"
            className="w-full min-h-[22.5rem] bg-little-lemon-green"
        >
            <div className="flex flex-col footer:flex-row relative w-full footer:w-[68%] footer:mx-auto items-center footer:items-start footer:justify-between py-10">
                <img
                    src={logo}
                    alt="little lemon log"
                    className="w-[4rem] footer:w-[6rem] mb-10"
                    loading="lazy"
                />
                <div className={`${containerStyle} mb-10`}>
                    <span
                        className={`${textStyle} font-bold text-little-lemon-yellow mb-6`}
                    >
                        Navigation
                    </span>
                    <ul>
                        {Object.values(MENU).map((menu) => (
                            <div
                                key={menu.id}
                                className={`${containerStyle} ${textStyle} font-medium text-white mb-2 select-none`}
                            >
                                <Link
                                    to={menu.path}
                                    onClick={() => handleClick(menu.id)}
                                >
                                    {[...menu.id][0].toUpperCase() +
                                        [...menu.id].slice(1).join("")}
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className={`${containerStyle} mb-10`}>
                    <span
                        className={`${textStyle} font-bold text-little-lemon-yellow mb-6`}
                    >
                        Contact
                    </span>
                    <div className={containerStyle}>
                        <span
                            className={`${textStyle} font-medium text-white mb-2`}
                        >
                            111 11th Ave NE
                        </span>
                        <span
                            className={`${textStyle} font-medium text-white mb-2`}
                        >
                            (123) 456 - 7890
                        </span>
                        <span
                            className={`${textStyle} font-medium text-white mb-2`}
                        >
                            little_lemon@test.com
                        </span>
                    </div>
                </div>
                <div className={containerStyle}>
                    <span
                        className={`${textStyle} font-bold text-little-lemon-yellow mb-6`}
                    >
                        Social
                    </span>
                    <div
                        className={`${containerStyle} footer:min-w-[13.875rem] footer:flex-row footer:justify-between`}
                    >
                        <Link
                            to="https://twitter.com/"
                            style={{
                                marginBottom: "2rem",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faSquareXTwitter}
                                size="3x"
                                style={{
                                    color: "#ffffff",
                                }}
                            />
                        </Link>
                        <Link
                            to="https://facebook.com"
                            style={{
                                marginBottom: "2rem",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faSquareFacebook}
                                size="3x"
                                style={{
                                    color: "#ffffff",
                                }}
                            />
                        </Link>

                        <Link
                            to="https://instagram.com"
                            style={{
                                marginBottom: "2rem",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faSquareInstagram}
                                size="3x"
                                style={{
                                    color: "#ffffff",
                                }}
                            />
                        </Link>
                    </div>
                </div>
                <span className="absolute bottom-4 left-[50%] -translate-x-[50%] text-white text-sm whitespace-nowrap">
                    Copyright @ Little Lemon Restaurant
                </span>
            </div>
        </footer>
    );
}

export default Footer;
