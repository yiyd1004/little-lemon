import { Link } from "react-router-dom";
import Button from "../components/Button";

function Confirm() {
    return (
        <section className="flex flex-col items-center pt-5 pb-8 justify-center h-[calc(100vh-6rem-22.5rem)]">
            <span className="w-fit font-Markazi-Text font-medium text-center text-[4rem] leading-[4rem] text-little-lemon-yellow">
                Reservation Confirmed
            </span>
            <span className="text-little-lemon-green font-Karla font-medium text-center text-[1.25rem] leading-[2.5rem] mt-10 px-6">
                We are please to inform you that your reservation request has
                been received and confirmed.
                <br /> Your confirmation number is #
                {Math.floor(100000000 + Math.random() * 900000000)}
            </span>
            <Link to="/" className="mt-10">
                <Button text="Back to home" />
            </Link>
        </section>
    );
}

export default Confirm;
