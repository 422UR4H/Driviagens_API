import httpStatus from "http-status";
import { cityService } from "../services/city.services.js";
import { errors } from "../errors/errors.js";

async function create(req, res) {
    const { name } = req.body;
    if (!name) throw errors.unprocessableEntity("empty name for city");
    await cityService.create(name);
    res.sendStatus(httpStatus.CREATED);
}

export const cityController = {
    create
}