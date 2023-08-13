import { useEffect, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from "../data/API";

export const initializeTimes = () => {
    return {
        loading: true,
        timeSlots: [],
        date: new Date(),
        error: "",
    };
};

export const updateTimes = (state, action) => {
    if (action.type === "fetch") {
        return {
            ...state,
            loading: true,
            date: action.date,
        };
    } else if (action.type === "success") {
        return {
            ...state,
            loading: false,
            timeSlots: action.timeSlots,
        };
    } else {
        return state;
    }
};

function Reservation() {
    const [availableTime, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );

    useEffect(() => {
        const fetchData = async () => {
            dispatch({
                type: "success",
                timeSlots: fetchAPI(availableTime.date),
            });
        };

        fetchData();
    }, [availableTime.date]);

    return (
        <section className="flex flex-col items-center pt-5 pb-8">
            <span className="w-fit font-Markazi-Text font-medium text-[4rem] leading-[4rem] text-little-lemon-yellow">
                Reservation
            </span>
            <BookingForm
                availableTime={availableTime}
                dispatchUpdateTimes={dispatch}
            />
        </section>
    );
}

export default Reservation;
