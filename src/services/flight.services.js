import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repository.js";
import { flightRepository } from "../repositories/flight.repository.js";

async function create(origin, destination, date) {
    const c = date?.match(/[^0-9]/)[0];
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

function readAll(origin, destination, smallerDate, biggerDate) {
    if (smallerDate || biggerDate) {
        let c = smallerDate?.match(/[^0-9]/)[0];
        // console.log(smallerDate)
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
        if (dayjs(biggerDate).isBefore(smallerDate)) throw errors.badRequest("order of dates");
    }
    return flightRepository.readAll(origin, destination, dayjs(smallerDate).valueOf(), dayjs(biggerDate).valueOf());
}

export const flightService = {
    create, readAll
};