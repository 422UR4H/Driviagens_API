import toggleFirstThirdPositions from "../utils/toggleFirstThirdPositions.js";

export default function formatDate(req, res, next) {
    const { date } = req.body;
    req.body.date = toggleFirstThirdPositions(date);
    next();
}