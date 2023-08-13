import { NavLink } from "react-router-dom";

function NavBtn({ text, path, isMobile, onClick }) {
    const baseListStyle =
        "h-[80%] mx-[12px] text-xl font-Karla font-bold text-little-lemon-green " +
        "hover:underline hover:decoration-little-lemon-green hover:underline-offset-[6px]";

    const mobileListStyle =
        baseListStyle + " flex justify-center py-3 border-b-2";
    const listStyle = `inline ` + baseListStyle;

    return (
        <li className={isMobile ? mobileListStyle : listStyle}>
            <NavLink to={path} onClick={() => onClick(text)}>
                {[...text][0].toUpperCase() + [...text].slice(1).join("")}
            </NavLink>
        </li>
    );
}

export default NavBtn;
