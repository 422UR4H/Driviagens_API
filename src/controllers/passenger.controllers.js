import httpStatus from "http-status";
import { passengerService } from "../services/passenger.services.js";

async function create(req, res) {
    const { firstName, lastName } = req.body;
    await passengerService.create(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}

async function readAll(req, res) {
    const { name } = req.query;
    const result = await passengerService.readAll(name);

    result.rows.map(r => {
        r.passenger = r.firstName + " " + r.lastName;
        delete r.firstName
        delete r.lastName
    });
    res.send(result.rows);
}

export const passengerController = {
    create, readAll
}