import httpStatus from "http-status";
import { cityService } from "../services/city.services.js";

async function create(req, res) {
    const { name } = req.body;
    try {
        await cityService.create(name);
        res.sendStatus(httpStatus.CREATED);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
}

export const cityController = {
    create
}