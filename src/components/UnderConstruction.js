import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

function UnderConstruction() {
    return (
        <section className="flex flex-col items-center pt-5 pb-8 justify-center h-[calc(100vh-6rem-22.5rem)]">
            <FontAwesomeIcon
                size="10x"
                icon={faPersonDigging}
                style={{ color: "#495E57" }}
            />
            <span className="text-little-lemon-green font-Karla font-medium text-center text-[4rem] leading-[4rem] mt-10 px-6">
                Under Construction
            </span>
        </section>
    );
}

export default UnderConstruction;
