import { render, screen, fireEvent } from "@testing-library/react";
import Reservation, {
    initializeTimes,
    updateTimes,
} from "../pages/reservation";
import { BrowserRouter } from "react-router-dom";
import userEvent from "../../node_modules/@testing-library/user-event/dist/index";

test("Renders the Reservation page heading", () => {
    render(
        <BrowserRouter>
            <Reservation />
        </BrowserRouter>
    );
    const heading = screen.getByText("Reservation");
    const firstname = screen.getByText("First name");
    const lastname = screen.getByText("Last name");
    const phone = screen.getByText("Phone");
    const email = screen.getByText("Email");
    const date = screen.getByText("Date");
    const availableTime = screen.getByText("Available Time");
    const event = screen.getByText("Type of Event");
    const guests = screen.getByText("Expected Number of Guests");
    const addReq = screen.getByText("Additional Requests");
    const btn = screen.getByText("Reserve");

    expect(heading).toBeInTheDocument();
    expect(firstname).toBeInTheDocument();
    expect(lastname).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(availableTime).toBeInTheDocument();
    expect(guests).toBeInTheDocument();
    expect(event).toBeInTheDocument();
    expect(addReq).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
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

test("should required field must be valid and successfully submit form with default values", () => {
    render(
        <BrowserRouter>
            <Reservation />
        </BrowserRouter>
    );

    const firstName = screen.getByLabelText("First name*");
    const lastName = screen.getByLabelText("Last name*");
    const email = screen.getByLabelText("Email*");
    const submit = screen.getByRole("button");

    userEvent.type(firstName, "test");
    userEvent.type(lastName, "test");
    userEvent.type(email, "test@test.com");

    expect(firstName).toHaveValue("test");
    expect(lastName).toHaveValue("test");
    expect(email).toHaveValue("test@test.com");

    fireEvent.blur(firstName);
    fireEvent.blur(lastName);
    fireEvent.blur(email);

    fireEvent.click(submit);

    expect(
        screen
            .getByTestId("firstName-error-msg")
            .classList.contains("invisible")
    ).toBe(true);

    expect(
        screen.getByTestId("lastName-error-msg").classList.contains("invisible")
    ).toBe(true);

    expect(
        screen.getByTestId("email-error-msg").classList.contains("invisible")
    ).toBe(true);
});

test(`should display an error message and when required field is empty`, () => {
    render(
        <BrowserRouter>
            <Reservation />
        </BrowserRouter>
    );

    const firstName = screen.getByLabelText("First name*");
    const lastName = screen.getByLabelText("Last name*");
    const email = screen.getByLabelText("Email*");

    fireEvent.blur(firstName);
    fireEvent.blur(lastName);
    fireEvent.blur(email);

    expect(
        screen
            .getByTestId("firstName-error-msg")
            .classList.contains("invisible")
    ).toBe(false);

    expect(
        screen.getByTestId("lastName-error-msg").classList.contains("invisible")
    ).toBe(false);

    expect(
        screen.getByTestId("email-error-msg").classList.contains("invisible")
    ).toBe(false);

    userEvent.type(email, "test@test");
    expect(
        screen.getByTestId("email-error-msg").classList.contains("invisible")
    ).toBe(false);
});
