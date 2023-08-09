import React from "react";

function Button({ text }) {
    const style = [
        "bg-little-lemon-yellow",
        "min-w-[12rem] max-h-[2.5rem]",
        "px-3",
        "py-2",
        "rounded-[16px]",
        "font-Karla",
        "font-bold",
        "hover:ring",
        "hover:ring-amber-200",
        "transform active:scale-110 transition-transform",
    ].join(" ");

    return <button className={style}>{text}</button>;
}

export default Button;
