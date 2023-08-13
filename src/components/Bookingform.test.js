import { render, screen } from "@testing-library/react";
import Reservation, {
    initializeTimes,
    updateTimes,
} from "../pages/reservation";
import { BrowserRouter } from "react-router-dom";

test("Renders the Reservation page heading", () => {
    render(
        <BrowserRouter>
            <Reservation />
        </BrowserRouter>
    );
    const headingElement = screen.getByText("Reservation");
    expect(headingElement).toBeInTheDocument();
});

test("Check initializeTimes function to validate that it returns the correct expected value", () => {
    const expected = {
        loading: true,
        timeSlots: [],
        date: new Date(),
        error: "",
    };

    const init = initializeTimes();
    expect(init).toEqual(expected);
});

test("Check updateTimes function to validate that it returns the correct expected value", () => {
    const init = initializeTimes();

    const expectedFetch = {
        loading: true,
        timeSlots: [],
        date: init.date,
        error: "",
    };

    const expectedSuccess = {
        loading: false,
        timeSlots: ["10:00", "13:00", "15:00"],
        date: init.date,
        error: "",
    };

    expect(updateTimes(init, { type: "fetch", date: init.date })).toEqual(
        expectedFetch
    );
    expect(
        updateTimes(init, {
            type: "success",
            timeSlots: ["10:00", "13:00", "15:00"],
        })
    ).toEqual(expectedSuccess);
});
