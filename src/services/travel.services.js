import { travelRepository } from "../repositories/travel.repository.js";

function create(firstName, lastName) {
    return travelRepository.create(firstName, lastName);
}

export const travelService = {
    create
};