import httpStatus from "http-status";
import { passengerService } from "../services/passenger.services.js";

async function create(req, res) {
    const { firstName, lastName } = req.body;
    await passengerService.create(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}

async function readAll(req, res) {
    const { name, page } = req.query;
    const result = await passengerService.readAll(name, page);
    res.send(result.rows);
}

export const passengerController = {
    create, readAll
}