import React from "react";
import {Contact} from "../store/store";

interface IContactCardProps {
    contact: Contact;
    setDraggedContactId: (id: number) => void;
}

export default function ContactCard({contact, setDraggedContactId}: IContactCardProps) {

    function onDrag(ev: React.DragEvent) {
        setDraggedContactId(contact.id);
        ev.stopPropagation();
        ev.preventDefault();
    }

    return (
        <div
            className={"contact-card"}
            draggable
            onDrag={onDrag}
            id={"contact-card-id-" + contact.id}
        >
            <div className={"title"}>
                <div className={"name"}>
                    <span>{`${contact.title}. ${contact.name}`}</span>
                </div>
                <div className={"age"}>
                    <span>{`${contact.age} yo`}</span>
                </div>
            </div>
            <div className={"email"}>
                <span>{contact.email}</span>
            </div>
            <div className={"phone"}>
                <span>{contact.phone}</span>
            </div>
        </div>
    );
}