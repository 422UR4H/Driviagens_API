import httpStatus from "http-status";
import { flightService } from "../services/flight.services.js";

async function create(req, res) {
    const { origin, destination, date } = req.body;
    await flightService.create(origin, destination, date);
    res.sendStatus(httpStatus.CREATED);
}

async function readAll(req, res) {
    const { origin, destination, smallerDate, biggerDate } = req.query;
    const result = await flightService.readAll(origin, destination, smallerDate, biggerDate);
    res.send(result.rows);
}

export const flightController = {
    create, readAll
}