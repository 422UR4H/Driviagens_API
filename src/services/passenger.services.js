import { errors } from "../errors/errors.js";
import { passengerRepository } from "../repositories/passenger.repository.js";

function create(firstName, lastName) {
    return passengerRepository.create(firstName, lastName);
}

async function readAll(name) {
    const result = await passengerRepository.readAll(name);
    if (result.rowCount > 10) throw errors.internalServerError("Too many results");
    return result;
}

export const passengerService = {
    create, readAll
};