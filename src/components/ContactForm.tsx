import React, {useState} from "react";
import Input from "./Input";
import {ContactStatus} from "../store/store";
import {useAppSelector,useAppDispatch} from "../store/hooks";
import {addContact, allContacts} from "../store/reducer";

const minAge = 0;
const maxAge = 200;

const ContactForm = () => {

    const [title, setTitle] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const dispatch = useAppDispatch();
    const contacts = useAppSelector(allContacts);

    const [validateNeeded, setValidateNeeded] = useState<boolean>(false);

    const getNextIdForContact = () => {
        if (contacts.length < 1) {
            return 1;
        }
        const ids = contacts.map(c => c.id);
        return Math.max(...ids) + 1;
    }


    const isValidString = (value: string): boolean => {
        if (!value) {
            return false;
        }
        return value.trim().length >= 1;
    }

    const isValidNumber = (value: string): boolean => {
        if (!isValidString(value)) {
            return false;
        }
        return !Number.isNaN(Number.parseInt(value.trim()));
    }

    const isValidAge = (value: string): boolean => {
        if (!isValidNumber(value)) {
            return false;
        }
        const age =  Number.parseInt(value.trim());
        return age >= minAge && age <= maxAge;
    }


    const isValidEmail = (value: string): boolean => {
        if (!isValidString(value)) {
            return false;
        }
        return value.trim().indexOf("@") > 0;
    }

    const isValidPhone = (value: string): boolean => {
        if (!isValidString(value)) {
            return false;
        }
        const phoneRegEx = /^\+?\d*$/
        return phoneRegEx.test(value.trim())
    }

    function clear() {
        setTitle("")
        setName("")
        setAge("")
        setEmail("")
        setPhone("")
    }

    function onSubmitClick(e: React.MouseEvent<HTMLElement>) {
        setValidateNeeded(true)
        const hasValidDetails = isValidString(title) && isValidString(name) && isValidNumber(age) && isValidEmail(email) && isValidPhone(phone);
        if (hasValidDetails) {
            setValidateNeeded(false)
            dispatch(
                addContact({
                    id: getNextIdForContact(),
                    title: title,
                    name: name,
                    age: Number.parseInt(age),
                    phone: phone,
                    email: email,
                    status: ContactStatus[ContactStatus.Unclaimed]
                })
            )
            clear()
        }
        e.preventDefault();
    }

    return (
    <>
        <div id={"form-title"}>Form</div>
        <form id={"addContact"} name={"contactForm"} action={"#"}>
                <Input
                    name={"Title"}
                    setValue={setTitle}
                    error={validateNeeded && !isValidString(title) ? "Please enter valid title" : ""}
                    value={title}
                    mandatory
                    helpText={"Title of the person"}
                    placeholder={"Title"}
                />
                <Input
                    name={"Name"}
                    setValue={setName}
                    error={validateNeeded && !isValidString(name) ? "Please enter valid name" : ""}
                    value={name}
                    mandatory
                    helpText={"Name of the person"}
                    placeholder={"Full name"}
                />
                <Input
                    name={"Age"}
                    setValue={setAge}
                    error={validateNeeded && !isValidAge(age) ? `Please enter valid age between ${minAge} and ${maxAge}` : ""}
                    value={age}
                    mandatory
                    helpText={`Age of the person (${minAge}-${maxAge})`}
                    placeholder={"Age"}
                />
                <Input
                    name={"Email"}
                    setValue={setEmail}
                    error={validateNeeded && !isValidEmail(email) ? "Please enter valid email" : ""}
                    value={email}
                    mandatory
                    helpText={"Email of the person - should have @ symbol"}
                    placeholder={"Email id"}
                />
                <Input
                    name={"Phone"}
                    setValue={setPhone}
                    error={validateNeeded && !isValidPhone(phone) ? "Please enter valid phone" : ""}
                    value={phone}
                    mandatory
                    helpText={"Phone number of the person - should have at least one number with optional +"}
                    placeholder={"Phone number"}
                />
                <button
                    type="submit"
                    onClick={(e) => onSubmitClick(e)}
                >
                    Submit
                </button>
        </form>
    </>)
}

export default ContactForm;