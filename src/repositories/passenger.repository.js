import { clientDB } from "../database/db.connection.js";

function create(firstName, lastName) {
    return clientDB.query(`
        INSERT INTO passengers ("firstName", "lastName")
        VALUES ($1, $2);`,
        [firstName, lastName]
    );
}

export const passengerRepository = {
    create
};