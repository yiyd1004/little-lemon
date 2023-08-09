import Button from "./Button";
import Highlight from "./Highlight";

function Highlights() {
    const data = {
        title: "This weeks specials!",
        specials: [
            {
                name: "Greek Salad",
                price: "$12.99",
                imageFile: "greek-salad.jpg",
                description: `The famous greek salad of
                            crispy lettuce, peppers, olives
                            and our Chicago style feta
                            cheese, garnished with
                            crunch garlic and rosemary
                            croutons.`,
            },
            {
                name: "Bruchetta",
                price: "$ 5.99",
                imageFile: "bruchetta.png",
                description: `Our Bruschetta is made from
                            grilled bread that has been
                            smeared with garlic and
                            seasoned with salt and olive
                            oil.`,
            },
            {
                name: "Lemon Dessert",
                price: "$ 5.00",
                imageFile: "lemon-dessert.jpg",
                description: `This comes straight from
                            grandma's recipe book, every
                            last ingredient has been
                            sourced and is as authentic
                            as can be imagined.`,
            },
        ],
    };

    return (
        <section id="highlights" className="w-full">
            <div className="flex flex-col justify-center pt-5 pb-16 mobile:mt-20 mobile:mx-auto mobile:w-[68%]">
                <div className="w-full flex flex-col highlight:flex-row justify-center mobile:justify-between">
                    <span className="self-center font-Markazi-Text font-medium text-[4rem] leading-[4rem] text-little-lemon-green text-center mobile:text-start">
                        {data.title}
                    </span>
                    <div className="self-center mt-5 mb-9 highlight:my-0">
                        <Button text="Online Menu" />
                    </div>
                </div>
                <div className="w-[80%] mobile:w-full h-fit mt-5 mx-auto flex flex-wrap gap-8 justify-center highlight-card-container:justify-between">
                    {data.specials.map((special) => (
                        <Highlight
                            key={special.name}
                            name={special.name}
                            price={special.price}
                            fileName={special.imageFile}
                            description={special.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Highlights;
