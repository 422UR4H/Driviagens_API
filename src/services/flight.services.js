import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repository.js";
import { flightRepository } from "../repositories/flight.repository.js";

async function create(origin, destination, date) {
    const c = date.match(/[^0-9]/)[0];
    if (c !== '-') throw errors.unprocessableEntity("date");
    if (date.length !== 10) throw errors.unprocessableEntity("date");
    
    if (origin == destination) {
        throw errors.conflict("origin and destination must be distinct even if these cities");
    }
    if ((await cityRepository.readById(origin)).rowCount <= 0) {
        throw errors.notFound("origin ciy");
    }
    if ((await cityRepository.readById(destination)).rowCount <= 0) {
        throw errors.notFound("destination ciy");
    }
    return flightRepository.create(origin, destination, date);
}

async function readAll(origin, destination, biggerDate, smallerDate) {
    
}

export const flightService = {
    create, readAll
};