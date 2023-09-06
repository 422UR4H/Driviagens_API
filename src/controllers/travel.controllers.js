import httpStatus from "http-status";
import { travelService } from "../services/travel.services.js";

async function create(req, res) {
    const { firstName, lastName } = req.body;
    await travelService.create(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);
}

export const travelController = {
    create
}