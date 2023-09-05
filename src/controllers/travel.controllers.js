import httpStatus from "http-status";
import { travelService } from "../services/travel.services.js";

async function create(req, res) {
    const { firstName, lastName } = req.body;
    try {
        await travelService.create(firstName, lastName);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
}

export const travelController = {
    create
}