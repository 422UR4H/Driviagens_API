import httpStatus from "http-status";
import { flightService } from "../services/flight.services.js";

async function create(req, res) {
    const { origin, destination, date } = req.body;
    try {
        await flightService.create(origin, destination, date);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
}

export const flightController = {
    create
}