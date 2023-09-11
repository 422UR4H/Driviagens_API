import httpStatus from "http-status";
import { passengerService } from "../services/passenger.services.js";
import { errors } from "../errors/errors.js";

async function create(req, res) {
    const { firstName, lastName } = req.body;
    if (!firstName) throw errors.unprocessableEntity("first name empty");
    if (!lastName) throw errors.unprocessableEntity("last name empty");
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