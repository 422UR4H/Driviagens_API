import { errors } from "../errors/errors.js";

export default function errorHandler(err, req, res, next) {
    switch (err.type) {
        case errors.notFound().type:
            res.status(errors.notFound().status).send(err.message);
            break;
        case errors.conflict().type:
            res.status(errors.conflict().status).send(err.message);
            break;
        case errors.unprocessableEntity().type:
            res.status(errors.unprocessableEntity().status).send(err.message);
            break;
        default:
            res.status(errors.internalServerError().status).send(err.message);
    }
}