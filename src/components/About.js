import chefImg1 from "../assets/Mario-and-Adrian-A.jpg";
import chefImg2 from "../assets/Mario-and-Adrian-B.jpg";

function About() {
    const data = {
        title: "Little Lemon",
        location: "Chicago",
        description: `Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
                Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim
                velit mollit.`,
    };

    return (
        <section
            id="about"
            className="relative about:py-8 w-full bg-chef-image bg-center bg-cover about:bg-white about:bg-none"
        >
            <div className="flex relative about:mb-12 about:justify-between w-full about:w-[68%] m-auto">
                <div className="grid relative w-full about:block font-medium bg-black bg-opacity-50 about:bg-transparent pt-10 about:pt-5 pb-12 about:pb-11 px-10 about:px-0">
                    <div className="flex justify-center about:justify-start w-fit mx-auto about:mx-0">
                        <span className="font-Markazi-Text text-little-lemon-yellow text-[4rem] leading-[4rem] text-center about:text-start">
                            {data.title}
                        </span>
                    </div>
                    <div className="w-fit mx-auto about:mx-0 translate-y-[-0.5rem] about:translate-y-[-0.5rem]">
                        <span className="font-Markazi-Text text-white about:text-little-lemon-green text-[2.5rem] leading-[2.5rem] text-center about:text-start">
                            {data.location}
                        </span>
                    </div>
                    <div className="mx-auto mt-4 about:mx-0 pt-[1rem]">
                        <span className="font-Karla text-white about:text-black text-lg whitespace-pre-line text-center about:text-start">
                            {data.description}
                        </span>
                    </div>
                </div>
                <div className="flex absolute top-0 right-0 w-fit h-fit pt-5">
                    <img
                        src={chefImg1}
                        alt="food"
                        className="w-[18rem] h-[23rem] rounded-[16px] object-cover hidden about:block scale-x-flip outline outline-1 translate-x-[30%] translate-y-[20%]"
                        loading="lazy"
                    />
                    <img
                        src={chefImg2}
                        alt="food"
                        className="w-[18rem] h-[23rem] rounded-[16px] object-cover hidden about:block outline outline-1 z-50"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
