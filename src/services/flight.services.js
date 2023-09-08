import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repository.js";
import { flightRepository } from "../repositories/flight.repository.js";

async function create(origin, destination, date) {
    const c = date?.match(/[^0-9]/)[0];
    if (c !== '-' || date.length !== 10) throw errors.unprocessableEntity("date");

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
        let c = smallerDate?.match(/[^0-9]/)[0];
        if (c !== '-' || smallerDate?.length !== 10) {
            throw errors.unprocessableEntity("smaller-date");
        }

        c = biggerDate?.match(/[^0-9]/)[0];
        if (c !== '-' || biggerDate?.length !== 10) {
            throw errors.unprocessableEntity("bigger-date");
        }

        if (!!smallerDate !== !!biggerDate) {
            throw errors.unprocessableEntity("only one date (bigger-date OR smaller-date)");
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