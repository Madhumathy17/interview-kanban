import {combineReducers} from "redux";
import ContactsReducer from "./reducer"
import {configureStore} from "@reduxjs/toolkit";
import {loadState, saveState} from "./localStorage";
import debounce from "lodash.debounce";

export enum ContactStatus {
    Unclaimed,
    FirstContact,
    PreparingWorkOffer,
    SentToTherapists
}

export interface Contact {
    id: number,
    title: string;
    name: string;
    age: number;
    email: string;
    phone: string;
    status: string
}

const reducers = combineReducers({
    contactsReducer: ContactsReducer,
});

export const store = configureStore({
    devTools: true,
    reducer: reducers,
    // here we restore the previously persisted state
    preloadedState: {
        contactsReducer: {
            contactList: loadState()
        }
    },
});

// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll debounce this to prevent excessive work.
store.subscribe(
    debounce( () => saveState(store.getState().contactsReducer.contactList), 500)
);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
