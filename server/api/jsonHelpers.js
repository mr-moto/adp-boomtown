import fetch from 'node-fetch';

const url = 'http://localhost:3001';

export async function getItems() {
     try {
        const response = await fetch(`${url}/items`)
        const items = await response.json()

        return items
    } catch(e) {
        console.log('error', e)
    }
};

export async function getItem(id) {
    try {
        const response = await fetch(`${url}/items/${id}`)
        const item = await response.json()

        return item
    } catch(e) {
        console.log('error', e)
    }
}

export async function getUsers() {
    try {
        const response = await fetch(`${url}/users`)
        const users = await response.json()

        return users
    } catch(e) {
        console.log('error', e)
    }
};
        
export async function getUser(id) {
    try {
        const response = await fetch(`${url}/users/${id}`)
        const user = await response.json()

        return user
    } catch(e) {
        console.log('error', e)
    }
}



export async function ownedItems(id='') {
    try {
        const response = await fetch(`${url}/items/?itemowner=${id}`)
        const owneditems = await response.json()

        return owneditems
    } catch(e) {
        console.log('error', e)
    }
}

export async function borrowedItems(id) {
    try {
        const response = await fetch(`${url}/items/?borrower=${id}`)
        const borroweditems = await response.json()

        return borroweditems
    } catch(e) {
        console.log('error', e)
    }
}

export async function createItem(title, imageurl, itemowner, description, tags) {
    const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
    const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`;

    const newItem = {
        title,
        imageurl,
        itemowner,
        description,
        tags,
        created: localTime,
        available: true,
        borrower: null
    }
    try {
        const res = await fetch(`${url}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
        
        const item = await res.json()
        console.log(item)

        return item
    
    } catch(e) {
        console.log('error', e)
    }
}