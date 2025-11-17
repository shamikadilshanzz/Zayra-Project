"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validation_error_1 = require("../../domain/errors/validation-error");
var not_found_error_1 = require("../../domain/errors/not-found-error");
var unauthorized_error_1 = require("../../domain/errors/unauthorized-error");
var globalErrorHandlingMiddleware = function (err, req, res, next) {
    if (err instanceof validation_error_1.ValidationError) {
        res.status(400).json({ message: err.message });
    }
    else if (err instanceof not_found_error_1.NotFoundError) {
        res.status(404).json({ message: err.message });
    }
    else if (err instanceof unauthorized_error_1.UnauthorizedError) {
        res.status(401).json({ message: err.message });
    }
    else {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.default = globalErrorHandlingMiddleware;
//# sourceMappingURL=global-error.handling-middleware.js.map