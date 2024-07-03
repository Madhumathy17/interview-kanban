import {Contact} from "./store";

const localStoreContactsKey : string = "contacts";

export function loadState() {
    try {
        const serializedState = localStorage.getItem(localStoreContactsKey);
        if (!serializedState) return [];
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

export async function saveState(contacts: Contact[]) {
    try {
        const serializedState = JSON.stringify(contacts);
        localStorage.setItem(localStoreContactsKey, serializedState);
    } catch (e) {
        // Ignore
    }
}
