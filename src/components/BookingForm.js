import { useState } from "react";
import Button from "./Button";
import { submitAPI } from "../data/API";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTime, dispatchUpdateTimes }) {
    const inputBoxStyle =
        "outline outline-1 outline-little-lemon-green rounded-lg text-little-lemon-green p-2";

    const errorTextStyle = "text-base text-red-600";

    const date = new Date();
    date.setDate(date.getDate() + 1);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        date: date.toLocaleDateString("en-CA"),
        time: "",
        event: "",
        guests: 1,
        addReq: "",
    });

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [guestsError, setGuestsError] = useState(false);

    const errorMessages = {
        firstName: "Please enter your first name",
        lastName: "Please enter your last name",
        phone: "Please enter a valid phone number",
        email: "Please enter a valid email",
        guests: "Please enter a number between 1 - 12",
    };

    const validatePhoneNumber = (phone) => {
        const regex = /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;

        return phone.length === 0 || regex.test(phone);
    };

    const validateEmail = (email) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        return regex.test(email);
    };

    const changeDateHandler = (e) => {
        setData({
            ...data,
            date: e.target.value,
        });

        dispatchUpdateTimes({
            type: "fetch",
            date: new Date(e.target.value),
        });
    };

    const changePhoneNumberHandler = (e) => {
        const regex = /[^0-9()-\s]/;
        const phoneNum = e.target.value.trim();

        if (phoneNum.length === 0 || !regex.test(phoneNum)) {
            const tempData = { ...data };
            tempData.phone = e.target.value.trim();
            setData(tempData);

            if (!phoneError) {
                setPhoneError(false);
            }
        } else {
            if (data.phone.length !== 0) {
                setPhoneError(true);
            }
        }
    };

    const focusChangeHandler = (e) => {
        let tempData = null;

        if (e.target.id === "firstName") {
            if (e.target.value.trim().length !== 0) {
                tempData = { ...data };
                tempData.firstName = e.target.value.trim();

                if (firstNameError) {
                    setFirstNameError(false);
                }
            } else {
                setFirstNameError(true);
            }
        } else if (e.target.id === "lastName") {
            if (e.target.value.trim().length !== 0) {
                tempData = { ...data };
                tempData.lastName = e.target.value.trim();

                if (lastNameError) {
                    setLastNameError(false);
                }
            } else {
                setLastNameError(true);
            }
        } else if (e.target.id === "phone") {
            if (validatePhoneNumber(e.target.value.trim())) {
                tempData = { ...data };
                tempData.phone = e.target.value.trim();

                if (phoneError) {
                    setPhoneError(false);
                }
            } else {
                setPhoneError(true);
            }
        } else if (e.target.id === "email") {
            if (validateEmail(e.target.value.trim())) {
                tempData = { ...data };
                tempData.email = e.target.value.trim();

                if (emailError) {
                    setEmailError(false);
                }
            } else {
                setEmailError(true);
            }
        } else if (e.target.id === "guests") {
            const guests = Number(e.target.value);
            if (guests >= 1 && guests <= 12) {
                tempData = { ...data };
                tempData.guests = guests;

                if (guestsError) {
                    setGuestsError(false);
                }
            } else {
                setGuestsError(true);
            }
        }

        if (tempData !== null) {
            setData(tempData);
        }
    };

    const buttonClickHandler = (e) => {
        if (data.firstName === "") {
            setFirstNameError(true);
        }

        if (data.lastName === "") {
            setLastNameError(true);
        }

        if (data.email === "" || !validateEmail(data.email)) {
            setEmailError(true);
            e.preventDefault();
        }
    };

    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();

        if (submitAPI(data)) {
            navigate("/confirm");
        } else {
            alert("Unable to book this time. Please try again.");
        }
    };

    return (
        <form
            className="w-full mobile:max-w-[55rem] flex flex-col gap-10 grow justify-center p-10 text-little-lemon-green font-Karla font-medium text-[1.25rem] leading-[1.25rem]"
            onSubmit={submitHandler}
        >
            <div className="flex flex-col mobile:flex-row gap-2">
                <div className="flex flex-col gap-2 basis-2/4 grow">
                    <label htmlFor="firstName">
                        First name<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        className={inputBoxStyle}
                        onBlur={focusChangeHandler}
                        required
                    />
                    <span
                        className={`${errorTextStyle} ${
                            firstNameError ? "visible" : "invisible"
                        }`}
                    >
                        {errorMessages.firstName}
                    </span>
                </div>
                <div className="flex flex-col gap-2 basis-2/4 grow">
                    <label htmlFor="lastName">
                        Last name<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        className={inputBoxStyle}
                        onBlur={focusChangeHandler}
                        required
                    />
                    <span
                        className={`${errorTextStyle} ${
                            lastNameError ? "visible" : "invisible"
                        }`}
                    >
                        {errorMessages.lastName}
                    </span>
                </div>
            </div>
            <div className="flex flex-col mobile:flex-row gap-2">
                <div className="flex flex-col gap-2 basis-2/4 grow">
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        type="tel"
                        className={inputBoxStyle}
                        value={data.phone}
                        onBlur={focusChangeHandler}
                        onChange={changePhoneNumberHandler}
                    />
                    <span
                        className={`${errorTextStyle} ${
                            phoneError ? "visible" : "invisible"
                        }`}
                    >
                        {errorMessages.phone}
                    </span>
                </div>
                <div className="flex flex-col gap-2 basis-2/4 grow">
                    <label htmlFor="email">
                        Email<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={inputBoxStyle}
                        onBlur={focusChangeHandler}
                        required
                    />
                    <span
                        className={`${errorTextStyle} ${
                            emailError ? "visible" : "invisible"
                        }`}
                    >
                        {errorMessages.email}
                    </span>
                </div>
            </div>
            <div className="flex flex-col mobile:flex-row gap-2">
                <div className="flex flex-col gap-2 basis-2/4 grow">
                    <label htmlFor="date">
                        Date<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="date"
                        type="date"
                        className={inputBoxStyle}
                        value={data.date}
                        onChange={changeDateHandler}
                        onBlur={focusChangeHandler}
                    />
                    <span className={`${errorTextStyle} invisible`}>error</span>
                </div>
                <div className="flex flex-col gap-2 basis-2/4 grow">
                    <label htmlFor="availableTime">
                        Available Time<span className="text-red-600">*</span>
                    </label>
                    <select
                        id="availableTime"
                        className={inputBoxStyle}
                        onBlur={focusChangeHandler}
                    >
                        {availableTime.loading ? (
                            <option>Loading...</option>
                        ) : (
                            availableTime.timeSlots.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))
                        )}
                    </select>
                    <span className={`${errorTextStyle} invisible`}>error</span>
                </div>
            </div>
            <div className="flex flex-col mobile:flex-row gap-2">
                <div className="flex flex-col gap-2 basis-2/4 grow">
                    <label htmlFor="event">Type of Event</label>
                    <input
                        id="event"
                        type="text"
                        className={inputBoxStyle}
                        onBlur={focusChangeHandler}
                    />
                    <span className={`${errorTextStyle} invisible`}>error</span>
                </div>
                <div className="flex flex-col gap-2 basis-2/4 grow">
                    <label htmlFor="guests">
                        Expected Number of Guests
                        <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="guests"
                        type="number"
                        value={data.guests}
                        className={inputBoxStyle}
                        onChange={(e) => {
                            setData({
                                ...data,
                                guests: Number(e.target.value),
                            });
                        }}
                        onBlur={focusChangeHandler}
                        required
                    />
                    <span
                        className={`${errorTextStyle} ${
                            guestsError ? "visible" : "invisible"
                        }`}
                    >
                        {errorMessages.guests}
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="addReq">Additional Requests</label>
                <textarea
                    id="addReq"
                    className={`${inputBoxStyle} min-h-[8.5rem]`}
                    onBlur={focusChangeHandler}
                />
            </div>
            <Button text="Reserve" onClick={buttonClickHandler} />
        </form>
    );
}

export default BookingForm;
