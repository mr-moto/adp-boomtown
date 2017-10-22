// import fetch from 'node-fetch';
import { 
    getItems, 
    getUsers, 
    getItem, 
    getUser, 
    ownedItems, 
    borrowedItems, 
    createItem
} from './jsonHelpers'


const resolveFunctions = {
    Query: {
       items() {
            return getItems();
        },
        item(root, { id }, context) {
            return context.loaders.getItem.load(id)
        },
        users() {
            return getUsers();
        },
        user(root, { id }, context) {
            return context.loaders.getUser.load(id)
        }
    },

    Item: {
        itemowner(item, args, context) {
            if( !item.itemowner ) return null
            // return getUser(item.itemowner);
            return context.loaders.getUser.load(item.itemowner)
        },

        borrower(item, args, context) {
            if( !item.borrower ) return null
            // return getUser(item.borrower);
            return context.loaders.getUser.load(item.borrower)
        }
    },

    User: {
        owneditems(user, args, context) {
            if( !user.id ) return null
            return context.loaders.ownedItems.load(user.id)
        },

        borroweditems(user, args, context) {
            if( !user.id ) return null
            return context.loaders.borrowedItems.load(user.id)
        }
    },

    Mutation: {
        addItem(root, {title, imageurl, itemowner, description, tags}) {
            return createItem(title, imageurl, itemowner, description, tags)
        }   
    }
}


export default resolveFunctions;