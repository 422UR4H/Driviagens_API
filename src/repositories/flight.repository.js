import { clientDB } from "../database/db.connection.js";
import { PAGINATION_NUMBER } from "../utils/constants.js";

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

function readAll(page, origin, destination, smallerDate, biggerDate) {
    return clientDB.query(`
        SELECT f.id, f.date, o.name AS origin, d.name AS destination
        FROM flights AS f
        JOIN cities AS o ON f.origin = o.id
        JOIN cities AS d ON f.destination = d.id
        WHERE o.name = COALESCE($1, o.name)
            AND d.name = COALESCE($2, d.name)
            AND f.date >= COALESCE($3, f.date)
            AND f.date <= COALESCE($4, f.date)
        ORDER BY f.date
        LIMIT $6
        OFFSET $6 * COALESCE($5, 0);`,
        [origin, destination, smallerDate, biggerDate, page - 1, PAGINATION_NUMBER]
    );
}
export const flightRepository = {
    create, readById, readAll
};