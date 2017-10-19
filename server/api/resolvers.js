import fetch from 'node-fetch';

const url = 'http://localhost:3001'

const resolveFunctions = {
    Query: {
       async items() {
            try {
                const response = await fetch(`${url}/items`)
                const items = await response.json()

                return items
            } catch(e) {
                console.log('error', e)
            }
        },
        async item(root, { id }) {
            try {
                const response = await fetch(`${url}/items/${id}`)
                const item = await response.json()

                return item
            } catch(e) {
                console.log('error', e)
            }
        },
        async users() {
            try {
                const response = await fetch(`${url}/users`)
                const users = await response.json()

                return users
            } catch(e) {
                console.log('error', e)
            }
        },
        async user(root, { id }) {
            try {
                const response = await fetch(`${url}/users/${id}`)
                const user = await response.json()

                return user
            } catch(e) {
                console.log('error', e)
            }
        }
    },
    Item: {
        async itemowner(item) {
            try {
                const response = await fetch(`${url}/users/${item.itemowner}`)
                const itemowner = await response.json()

                return itemowner
            } catch(e) {
                console.log('error', e)
            }
        },
        async borrower(item) {
            if( !item.borrower ) return null
            try {
                const response = await fetch(`${url}/users/${item.borrower}`)
                const borrower = await response.json()

                return borrower
            } catch(e) {
                console.log('error', e)
            }
        }
    },
    User: {
        async owneditems(user) {
            try {
                const response = await fetch(`${url}/items/?itemowner=${user.id}`)
                const owneditems = await response.json()

                return owneditems
            } catch(e) {
                console.log('error', e)
            }
        },
        async borroweditems(user) {
            try {
                const response = await fetch(`${url}/items/?borrower=${user.id}`)
                const borroweditems = await response.json()

                return borroweditems
            } catch(e) {
                console.log('error', e)
            }
        }
    }
}


export default resolveFunctions;