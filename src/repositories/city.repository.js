import { clientDB } from "../database/db.connection.js";

function create(name) {
    return clientDB.query(`
        INSERT INTO cities (name)
        VALUES ($1)
        ON CONFLICT DO NOTHING
        RETURNING id;`,
        [name]
    );
}

function readOriginAndDestination(origin, destination) {
    return clientDB.query(`
        SELECT * FROM cities
        WHERE (id = $1 OR id = $2);`,
        [origin, destination]
    );
}

function readById(id) {
    return clientDB.query(`
        SELECT * FROM cities
        WHERE id = $1;`,
        [id]
    );
}

export const cityRepository = {
    create, readOriginAndDestination, readById
};