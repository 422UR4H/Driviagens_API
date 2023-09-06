import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repository.js";

async function create(name) {
    if ((await cityRepository.create(name)).rowCount <= 0) {
        throw errors.conflict("name");
    }
}

export const cityService = {
    create
};