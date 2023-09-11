import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repository.js";
import { flightRepository } from "../repositories/flight.repository.js";

async function create(origin, destination, date) {
    if (origin == destination) {
        throw errors.conflict("origin and destination must be distinct even if these cities");
    }
    const result = await cityRepository.readOriginAndDestination(origin, destination);
    if (result.rowCount === 0) throw errors.notFound("origin and destination cities");
    if (!result.rows.find(row => row.id === origin)) throw errors.notFound("origin city");
    if (!result.rows.find(row => row.id === destination)) throw errors.notFound("destination city");

    return flightRepository.create(origin, destination, date);
}

function readAll(page = 1, origin, destination, smallerDate, biggerDate) {
    if (isNaN(page) || parseInt(page) <= 0) {
        throw errors.badRequest("Invalid page value");
    }
    if (smallerDate || biggerDate) {
        if (!smallerDate) {
            throw errors.unprocessableEntity("smaller-date");
        }
        if (!biggerDate) {
            throw errors.unprocessableEntity("bigger-date");
        }
        if (dayjs(biggerDate).isBefore(smallerDate)) {
            throw errors.badRequest("smaller-date must be lower than bigger-date");
        }
    }
    return flightRepository.readAll(parseInt(page), origin, destination, smallerDate, biggerDate);
}

export const flightService = {
    create, readAll
};