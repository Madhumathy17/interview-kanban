import {useState} from "react";
import ContactForm from "../components/ContactForm";
import ContactContainer from "../components/ContactContainer";
import {Contact, ContactStatus} from "../store/store";
import {allContacts, updateContactStatus} from "../store/reducer";
import {useAppSelector,useAppDispatch} from "../store/hooks";

interface StatusGroupedContacts {
    status: string
    Contacts: Contact[]
}

export const KanbanBoardPage = () => {

    const contacts = useAppSelector(allContacts);
    const dispatch = useAppDispatch();
    const [draggedContactId, setDraggedContactId] = useState<number | undefined>(undefined);

    function getKanbanGroupsWithContacts() {
        const groupedContacts = contacts ? contacts.reduce(function (r, a) {
            const st = a.status;
            r[st] = r[st] || [];
            r[st].push(a);
            return r;
        }, Object.create(null)) : [];

        const k: StatusGroupedContacts[] = []
        for (let key in ContactStatus) {
            if (!isNaN(Number(key))) {
                continue;
            }
            let contacts: Contact[] = []
            for (let g in groupedContacts) {
                if (g === key) {
                    contacts = groupedContacts[g].sort((a: Contact, b: Contact) => b.id - a.id);
                }
            }
            k.push({
                status: key,
                Contacts: contacts
            })
        }
        return k
    }

    const getDisplayNameForContactStatus = (key: string): string => {
        switch (ContactStatus[key as keyof typeof ContactStatus]) {
            case ContactStatus.Unclaimed:
                return "Unclaimed";
            case ContactStatus.PreparingWorkOffer:
                return "Preparing Work Offer";
            case ContactStatus.SentToTherapists:
                return "Sent to Therapists";
            case ContactStatus.FirstContact:
                return "First Contact";
            default:
                return key;
        }
    }

    function updateDraggedContactStatus(newStatus: string) {
        if(draggedContactId && newStatus){
            dispatch(
                updateContactStatus({
                  status: newStatus,
                  id: draggedContactId
                })
            )
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <b>Kanban Board</b>
            </header>

            <div className="App-content">
                <div
                    className={"contacts-form"}
                >
                    <ContactForm/>
                </div>

                <div
                    className={"contacts-board"}
                >
                    <div
                        className={"contacts-board-content"}
                    >
                        {
                            contacts && getKanbanGroupsWithContacts()
                                .map((obj, idx) => (
                                        <ContactContainer
                                            key={idx}
                                            title={getDisplayNameForContactStatus(obj.status)}
                                            status={obj.status}
                                            contacts={obj.Contacts}
                                            setDraggedContactId={setDraggedContactId}
                                            updateDraggedContactStatus={updateDraggedContactStatus}
                                        />
                                    )
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}