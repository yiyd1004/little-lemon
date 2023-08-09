import Review from "./Review";

function Testimonials() {
    const reviewData = [
        {
            name: "Sara",
            profileImg: "personA.png",
            review: `"Seriously cannot stop
                thinking about the Turkish
                Mac n' Cheese!!"`,
        },
        {
            name: "David",
            profileImg: "personB.png",
            review: `"Definitely the best
                restaurant."`,
        },
        {
            name: "Eli",
            profileImg: "personC.png",
            review: `"This is the most delicious
                pasta I have ever tasted"`,
        },
        {
            name: "Eric",
            profileImg: "personD.png",
            review: `"I recommend trying the
                dessert!!"`,
        },
    ];

    return (
        <section
            id="testimonials"
            className="w-full py-5 mobile:py-8 bg-little-lemon-green"
        >
            <div className="w-full flex flex-col mobile:mx-auto mobile:w-[68%]">
                <span className="font-Markazi-Text font-medium text-[3.5rem] min-[20rem]:text-[4rem] text-center text-little-lemon-yellow">
                    Testimonials
                </span>
                <div className="pt-8 pb-8 flex flex-wrap gap-y-8 gap-x-4 justify-center testimonial-card-container:justify-between">
                    {reviewData.map((data) => (
                        <Review
                            key={data.name}
                            name={data.name}
                            profileImg={data.profileImg}
                            review={data.review}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
