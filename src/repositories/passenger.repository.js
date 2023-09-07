import { clientDB } from "../database/db.connection.js";

function create(firstName, lastName) {
    return clientDB.query(`
        INSERT INTO passengers ("firstName", "lastName")
        VALUES ($1, $2);`,
        [firstName, lastName]
    );
}

function readById(id) {
    return clientDB.query(`
        SELECT * FROM passengers
        WHERE id = $1;`,
        [id]
    );
}

export const passengerRepository = {
    create, readById
};