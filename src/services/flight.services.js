import { flightRepository } from "../repositories/flight.repository.js";

function create(origin, destination, date) {
    return flightRepository.create(origin, destination, date);
}

export const flightService = {
    create
};