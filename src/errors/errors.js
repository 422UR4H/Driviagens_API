import httpStatus from "http-status";

function badRequest(entity) {
    const type = "badRequest";
    if (!entity) return { type, status: httpStatus.BAD_REQUEST };
    return { type, message: `${entity} is not valid` }
}
function notFound(entity) {
    const type = "notFound";
    if (!entity) return { type, status: httpStatus.NOT_FOUND };
    return { type, message: `${entity} does not exist` };
}
function conflict(entity) {
    const type = "conflict";
    if (!entity) return { type, status: httpStatus.CONFLICT };
    return { type, message: `${entity} already exists` };
}
function unprocessableEntity(entity) {
    const type = "unprocessableEntity";
    if (!entity) return { type, status: httpStatus.UNPROCESSABLE_ENTITY };
    return { type, message: `${entity} is not valid` };
}
function internalServerError(message) {
    const type = "internalServerError";
    if (message) return { type, message, status: httpStatus.INTERNAL_SERVER_ERROR };
    return { type, status: httpStatus.INTERNAL_SERVER_ERROR };
}
export const errors = {
    badRequest,
    notFound,
    conflict,
    unprocessableEntity,
    internalServerError
};