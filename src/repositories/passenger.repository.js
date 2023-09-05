import { clientDB } from "../database/db.connection.js";

function createPassengerDB(firstName, lastName) {
    return clientDB.query(`
        INSERT INTO passengers ("firstName", "lastName")
        VALUES ($1, $2);`,
        [firstName, lastName]
    );
}

export const passengerRepository = {
    createPassengerDB
};