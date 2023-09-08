import { errors } from "../errors/errors.js";

export default function errorHandler(err, req, res, next) {
    switch (err.type) {
        case errors.badRequest().type:
            res.status(errors.badRequest().status);
            break;
        case errors.notFound().type:
            res.status(errors.notFound().status);
            break;
        case errors.conflict().type:
            res.status(errors.conflict().status);
            break;
        case errors.unprocessableEntity().type:
            res.status(errors.unprocessableEntity().status);
            break;
        default:
            res.status(errors.internalServerError().status);
    }
    res.send(err.message);
}