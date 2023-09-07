import { clientDB } from "../database/db.connection.js";

function create(passengerId, flightId) {
    return clientDB.query(`
        INSERT INTO travels ("passengerId", "flightId")
        VALUES ($1, $2);`,
        [passengerId, flightId]
    );
}

function readById(id) {
    return clientDB.query(`
        SELECT * FROM travels
        WHERE id = $1;`,
        [id]
    );
}

export const travelRepository = {
    create, readById
};