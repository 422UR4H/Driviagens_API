import httpStatus from "http-status";

function notFound(entity) {
    const type = "notFound";
    if (!entity) return {
        type,
        status: httpStatus.NOT_FOUND
    };
    return {
        type,
        message: `${entity} does not exist`
    };
}
function conflict(entity) {
    const type = "conflict";
    if (!entity) return {
        type,
        status: httpStatus.CONFLICT
    };
    return {
        type,
        message: `${entity} already exists`
    };
}
function unprocessableEntity(entity) {
    const type = "unprocessableEntity";
    if (!entity) return {
        type,
        status: httpStatus.UNPROCESSABLE_ENTITY
    };
    return {
        type,
        message: `${entity} is not valid`
    };
}
function internalServerError() {
    return {
        type: "internalServerError",
        status: httpStatus.INTERNAL_SERVER_ERROR
    };
}
export const errors = {
    notFound,
    conflict,
    unprocessableEntity,
    internalServerError
};