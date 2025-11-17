"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
var unauthorized_error_1 = require("../../domain/errors/unauthorized-error");
var isAuthenticated = function (req, res, next) {
    if (req === null || req === void 0 ? void 0 : req.auth) {
        throw new unauthorized_error_1.UnauthorizedError("Unauthorized");
    }
    console.log(req.auth);
    next();
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=authentication-middleware.js.map