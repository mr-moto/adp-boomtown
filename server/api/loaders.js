import DataLoader from 'dataloader';
import { ownedItems, borrowedItems, getItem, getUser } from './jsonHelpers';


export default function() {
  return {
    ownedItems: new DataLoader(ids => (
        Promise.all(ids.map(id => 
            ownedItems(id)
        ))
    )),
    borrowedItems: new DataLoader(ids => (
        Promise.all(ids.map(id => 
            borrowedItems(id)
        ))
    )),
    getItem: new DataLoader(ids => (
        Promise.all(ids.map(id => 
            getItem(id)
        ))
    )),
    getUser: new DataLoader(ids => (
        Promise.all(ids.map(id => 
            getUser(id)
        ))
    ))
  }
};