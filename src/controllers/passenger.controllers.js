import httpStatus from "http-status";
import { passengerService } from "../services/passenger.services.js";

async function create(req, res) {
    const { firstName, lastName } = req.body;
    try {
        await passengerService.create(firstName, lastName);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
}

export const passengerController = {
    create
}