import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Review({ name, profileImg, review }) {
    const starIconStyle = {
        color: "#FDCC0D",
        marginRight: "10px",
    };

    return (
        <div className="flex flex-col p-8 flex-[0_0_16.1rem] h-[16.1rem] bg-white rounded-[16px]">
            <div className="flx flex-row">
                <FontAwesomeIcon
                    icon={faStar}
                    size="lg"
                    style={starIconStyle}
                />
                <FontAwesomeIcon
                    icon={faStar}
                    size="lg"
                    style={starIconStyle}
                />
                <FontAwesomeIcon
                    icon={faStar}
                    size="lg"
                    style={starIconStyle}
                />
                <FontAwesomeIcon
                    icon={faStar}
                    size="lg"
                    style={starIconStyle}
                />
                <FontAwesomeIcon
                    icon={faStar}
                    size="lg"
                    style={starIconStyle}
                />
            </div>
            <div className="mt-8 flex flex-row items-center">
                <img
                    src={require(`../assets/${profileImg}`)}
                    alt="profile"
                    className="w-12 h-12 object-cover rounded-full"
                    loading="lazy"
                />
                <span className="ml-3 font-Karla font-bold text-[1.125rem]">
                    {name}
                </span>
            </div>
            <div className="mt-8 font-Karla font-normal text-[1rem] leading-[1.2rem] text-little-lemon-green">
                {review}
            </div>
        </div>
    );
}

export default Review;
