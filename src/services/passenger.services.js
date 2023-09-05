import { passengerRepository } from "../repositories/passenger.repository.js";

function createPassenger(firstName, lastName) {
    return passengerRepository.createPassengerDB(firstName, lastName);
}

export const passengerService = {
    createPassenger
};