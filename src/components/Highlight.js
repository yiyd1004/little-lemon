import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

function Highlight({ name, price, fileName, description }) {
    const handleClick = () => {
        console.log("click");
    };

    return (
        <div className="flex min-h-[25rem] flex-[0_0_16.5rem] flex-col rounded-t-[16px] bg-highlight-grey hover:shadow-2xl">
            <img
                src={require(`../assets/${fileName}`)}
                alt="greek salad"
                className="w-full h-[12.5rem] object-cover rounded-t-[16px]"
                loading="lazy"
            />
            <div className="flex justify-between mt-5 mx-5">
                <span className="font-Markazi-Text font-bold text-[1.375rem] leading-[1.375rem]">
                    {name}
                </span>
                <span className="font-Karla font-medium text-[1.125rem] leading-[1.375rem] text-highligh-price">
                    {price}
                </span>
            </div>
            <span className="my-6 mx-5 font-Karla font-medium text-[1rem] leading-[1.2rem] text-little-lemon-green">
                {description}
            </span>
            <span
                className="mt-auto mb-5 mx-5 font-medium text-[1rem] pointer-events-auto cursor-pointer active:text-little-lemon-green hover:text-shadow-lg hover:shadow-little-lemon-green select-none"
                onClick={handleClick}
            >
                Order for delivery{" "}
                <FontAwesomeIcon icon={faMotorcycle} className="ml-2" />
            </span>
        </div>
    );
}

export default Highlight;
