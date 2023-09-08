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

function readAll(name = "") {
    return clientDB.query(`
        SELECT p."firstName", p."lastName", COUNT(t.id) AS travels
        FROM passengers AS p
        JOIN travels AS t ON p.id = t."passengerId"
        WHERE p."firstName" ILIKE $1 OR p."lastName" ILIKE $1
        GROUP BY p.id
        ORDER BY travels DESC;`,
        [`%${name}%`]
    );
}

export const passengerRepository = {
    create, readById, readAll
};