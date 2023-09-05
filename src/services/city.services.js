import { cityRepository } from "../repositories/city.repository.js";

function create(name) {
    return cityRepository.create(name);
}

export const cityService = {
    create
};