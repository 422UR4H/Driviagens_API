import { clientDB } from "../database/db.connection.js";

function create(passengerId, flightId) {
    return clientDB.query(`
        INSERT INTO travels (passengerId, flightId)
        VALUES ($1, $2);`,
        [passengerId, flightId]
    );
}

export const travelRepository = {
    create
};