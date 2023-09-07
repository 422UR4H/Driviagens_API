import { clientDB } from "../database/db.connection.js";

function create(origin, destination, date) {
    return clientDB.query(`
        INSERT INTO flights (origin, destination, date)
        VALUES ($1, $2, $3);`,
        [origin, destination, date]
    );
}

function readById(id) {
    return clientDB.query(`
        SELECT * FROM flights
        WHERE id = $1;`,
        [id]
    );
}

export const flightRepository = {
    create, readById
};