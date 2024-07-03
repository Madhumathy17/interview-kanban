import React from "react";
import ContactCard from "./ContactCard";
import {Contact} from "../store/store";

interface IContactContainerProps {
    title: string;
    status: string;
    contacts: Contact[]
    setDraggedContactId: (id: number) => void;
    updateDraggedContactStatus: (newStatus: string) => void;
}

export default function ContactContainer({
                                             title,
                                             status,
                                             contacts,
                                             setDraggedContactId,
                                             updateDraggedContactStatus
                                         }: IContactContainerProps) {

    const isDarkThemedContainer = title !== "Unclaimed";

    const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    }

    const onDrop = () => {
        updateDraggedContactStatus(status)
    }

    return (
        <>
            <div
                className={`contacts-container ${isDarkThemedContainer ? "dark-themed" : ""}`}
                id={"contacts-container-title"}
                onDrop={onDrop}
                onDragOver={onDragOver}
            >
                <div className={"contacts-container-header"}>
                    <div className={"title"}>{title}</div>
                    <div className={"contact-count"}>{contacts ? contacts.length : 0}</div>
                </div>
                <div className={"contacts-container-body"}>
                    {contacts && contacts.map((contact, idx) => (
                        <ContactCard
                            key={idx}
                            contact={contact}
                            setDraggedContactId={setDraggedContactId}
                        />
                    ))}
                </div>
            </div>
            {!isDarkThemedContainer && <div className={"v-line"}></div>}
        </>
    )
}