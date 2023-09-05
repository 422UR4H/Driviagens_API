import { clientDB } from "../database/db.connection.js";

function create(origin, destination, date) {
    return clientDB.query(`
        INSERT INTO flights (origin, destination, date)
        VALUES ($1, $2, $3);`,
        [origin, destination, date]
    );
}

export const flightRepository = {
    create
};