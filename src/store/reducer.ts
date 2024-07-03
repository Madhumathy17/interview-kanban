import {Contact, RootState} from "./store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ContactsList {
    contactList: Contact[];
}

export interface ContactStatusUpdate {
    id: number,
    status: string;
}

// Define the initial state using that type
const initialState: ContactsList = {
    contactList: [],
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action : PayloadAction<Contact>) => {
            state.contactList.push(action.payload);
        },
        updateContactStatus: (state, action: PayloadAction<ContactStatusUpdate>) => {
            state.contactList.forEach( (c,idx) => {
                if(c.id === action.payload.id) {
                    state.contactList[idx].status = action.payload.status;
                }
            })
        }
    }
})

export const {addContact, updateContactStatus} = contactsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const allContacts = (state: RootState) => state.contactsReducer.contactList;

export default contactsSlice.reducer;