import DataLoader from "dataloader";
import {
    // ownedItems,
    // borrowedItems,
    getItem,
    // getUser
} from "./resources/jsonHelpers";
import { getUser } from "./resources/firebaseHelpers"
import { ownedItems, borrowedItems } from "./resources/pg-resources"
import { database } from '../index'

export default function() {
    return {
        ownedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => database.ownedItems(id)))
        ),
        borrowedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => database.borrowedItems(id)))
        ),
        getItem: new DataLoader(ids => Promise.all(ids.map(id => database.getItem(id)))),
        getUser: new DataLoader(ids => Promise.all(ids.map(id => getUser(id))))
    };
}
