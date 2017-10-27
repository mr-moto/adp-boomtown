import { Pool } from "pg";

export default function(app) {
    const pool = new Pool({
        host: app.get("PG_HOST"),
        user: app.get("PG_USER"),
        password: app.get("PG_PASSWORD"),
        database: app.get("PG_DATABASE"),
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
    }); //get database stuff with the info from configs

    return {
        getItems() {
            return pool.query("SELECT * FROM items").then(res => res.rows); //helper to query items from above pool || get the rows from the response
        },
        getTags() {
            return pool.query("SELECT * FROM tags").then(res => res.rows); //do same as get items but with tags instead
        },
        getTag(itemId) {
            return pool
                .query(
                    `SELECT tags.tagid, tags.title FROM tags JOIN itemtags on tags.tagid = itemtags.tagid WHERE itemtags.itemid = ${itemId}` //get tags associated with the itemid and joins
                )
                .then(res => res.rows);
        }
    };
}
