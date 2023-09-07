import { errors } from "../errors/errors.js";
import { flightRepository } from "../repositories/flight.repository.js";
import { travelRepository } from "../repositories/travel.repository.js";
import { passengerRepository } from "../repositories/passenger.repository.js";

async function create(passengerId, flightId) {
    if ((await passengerRepository.readById(passengerId)).rowCount <= 0) {
        throw errors.notFound("passenger");
    }
    if ((await flightRepository.readById(flightId)).rowCount <= 0) {
        throw errors.notFound("flight");
    }
    return travelRepository.create(passengerId, flightId);
}

export const travelService = {
    create
};