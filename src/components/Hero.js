import Button from "./Button";
import restaurantFood from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

function Hero() {
    const data = {
        title: "Little Lemon",
        location: "Chicago",
        description: `We are family owned
                    Mediterranean restaurant,
                    focused on traditional recipes
                    served with a modern
                    twist.`,
    };

    return (
        <section
            id="hero"
            className="relative w-[100vw] bg-food-image bg-center bg-cover mobile:bg-little-lemon-green mobile:bg-none"
        >
            <div className="relative w-full mobile:w-[68%] m-auto">
                <div className="grid mobile:block bg-black bg-opacity-50 mobile:bg-transparent pt-5 pb-8 mobile:pb-11 px-10 mobile:px-0">
                    <div className="text-center mobile:text-start w-fit mx-auto mobile:mx-0 font-Markazi-Text font-medium text-little-lemon-yellow text-[4rem] leading-[4rem]">
                        {data.title}
                    </div>
                    <div className="w-fit mx-auto mobile:mx-0 font-Markazi-Text text-white font-medium text-[2.5rem] leading-[2.5rem] translate-y-[-0.5rem] mobile:translate-y-[-0.5rem]">
                        {data.location}
                    </div>
                    <div className="mx-auto mobile:mx-0 w-fit text-center mobile:text-start font-Karla font-medium text-white text-lg pt-[1rem] whitespace-pre-line">
                        {data.description}
                    </div>
                    <div className="mt-7 mx-auto">
                        <Link to="/reservation">
                            <Button text="Reserve a Table" />
                        </Link>
                    </div>
                </div>
                <img
                    src={restaurantFood}
                    alt="food"
                    className="absolute w-[20rem] h-[25rem] top-[3rem] right-0 rounded-[16px] hidden mobile:block"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default Hero;
