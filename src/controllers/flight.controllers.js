import httpStatus from "http-status";
import { flightService } from "../services/flight.services.js";

async function create(req, res) {
    const { origin, destination, date } = req.body;
    await flightService.create(origin, destination, date);
    res.sendStatus(httpStatus.CREATED);
}

export const flightController = {
    create
}