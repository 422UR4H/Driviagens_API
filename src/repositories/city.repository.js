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

export const cityRepository = {
    create
};