import { passengerRepository } from "../repositories/passenger.repository.js";

function create(firstName, lastName) {
    return passengerRepository.create(firstName, lastName);
}

function readAll(name) {
    return passengerRepository.readAll(name);
}

export const passengerService = {
    create, readAll
};