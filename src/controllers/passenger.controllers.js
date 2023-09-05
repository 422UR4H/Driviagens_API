import httpStatus from "http-status";
import { passengerService } from "../services/passenger.services.js";

export async function createPassenger(req, res) {
    const { firstName, lastName } = req.body;
    try {
        await passengerService.createPassenger(firstName, lastName);
        res.status(httpStatus.OK).send(req.body);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
}