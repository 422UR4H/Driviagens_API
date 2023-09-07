import { flightService } from "../services/flight.services.js";
import httpStatus from "http-status";
import dayjs from "dayjs";

async function create(req, res) {
    const { origin, destination, date } = req.body;
    await flightService.create(origin, destination, date);
    res.sendStatus(httpStatus.CREATED);
}

async function readAll(req, res) {
    const { origin, destination, smallerDate, biggerDate } = req.query;
    const result = await flightService.readAll(origin, destination, smallerDate, biggerDate);

    result.rows.map(flight => flight.date = dayjs(flight.date).format("DD-MM-YYYY"));
    res.send(result.rows);
}

export const flightController = {
    create, readAll
}