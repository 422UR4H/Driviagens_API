import { errors } from "../errors/errors.js";
import { passengerRepository } from "../repositories/passenger.repository.js";

function create(firstName, lastName) {
    return passengerRepository.create(firstName, lastName);
}

async function readAll(name, page = 1) {
    if (isNaN(page) || parseInt(page) <= 0) {
        throw errors.badRequest("Invalid page value");
    }
    const result = await passengerRepository.readAll(name, parseInt(page));
    if (result.rowCount > 10) throw errors.internalServerError("Too many results");
    return result;
}

export const passengerService = {
    create, readAll
};