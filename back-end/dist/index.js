"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var product_1 = __importDefault(require("./api/product"));
var category_1 = __importDefault(require("./api/category"));
var review_1 = __importDefault(require("./api/review"));
var order_1 = __importDefault(require("./api/order"));
var db_1 = require("./insfrastructure/db");
var global_error_handling_middleware_1 = __importDefault(require("./api/middleware/global-error.handling-middleware"));
var cors_1 = __importDefault(require("cors"));
var express_2 = require("@clerk/express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, express_2.clerkMiddleware)());
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use("/api/products", product_1.default);
app.use("/api/categories", category_1.default);
app.use("/api/reviews", review_1.default);
app.use("/api/orders", order_1.default);
app.use(global_error_handling_middleware_1.default);
(0, db_1.connectDB)();
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
//# sourceMappingURL=index.js.map