"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_2 = require("@clerk/express");
var Order_1 = __importDefault(require("../insfrastructure/db/entities/Order"));
var validation_error_1 = require("../domain/errors/validation-error");
var router = express_1.default.Router();
function isUserAuth(auth) {
    return auth && typeof auth.userId === "string";
}
router.post("/", (0, express_2.requireAuth)(), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var auth, userId, _a, items, paymentMethod, paymentDetails, subtotal, discountAmount, deliveryFee, total, _b, status, _i, items_1, item, orderData, order, savedOrder, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                auth = req.auth;
                if (!isUserAuth(auth)) {
                    throw new validation_error_1.ValidationError("User is not authenticated");
                }
                userId = auth.userId;
                _a = req.body, items = _a.items, paymentMethod = _a.paymentMethod, paymentDetails = _a.paymentDetails, subtotal = _a.subtotal, discountAmount = _a.discountAmount, deliveryFee = _a.deliveryFee, total = _a.total, _b = _a.status, status = _b === void 0 ? "pending" : _b;
                if (!Array.isArray(items) || items.length === 0) {
                    throw new validation_error_1.ValidationError("Order must contain at least one item");
                }
                if (!paymentMethod) {
                    throw new validation_error_1.ValidationError("Payment method is required");
                }
                if (typeof subtotal !== "number" || subtotal < 0) {
                    throw new validation_error_1.ValidationError("Valid subtotal is required");
                }
                if (typeof total !== "number" || total < 0) {
                    throw new validation_error_1.ValidationError("Valid total is required");
                }
                for (_i = 0, items_1 = items; _i < items_1.length; _i++) {
                    item = items_1[_i];
                    if (!item.productId || !item.quantity || !item.price) {
                        throw new validation_error_1.ValidationError("Each item must have productId, quantity, and price");
                    }
                    if (typeof item.quantity !== "number" || item.quantity < 1) {
                        throw new validation_error_1.ValidationError("Item quantity must be a positive number");
                    }
                    if (typeof item.price !== "number" || item.price < 0) {
                        throw new validation_error_1.ValidationError("Item price must be a valid number");
                    }
                }
                orderData = {
                    userId: userId,
                    items: items,
                    subtotal: subtotal,
                    discountAmount: discountAmount || 0,
                    deliveryFee: deliveryFee || 0,
                    total: total,
                    status: status,
                    paymentMethod: paymentMethod,
                    paymentDetails: paymentDetails || null,
                    createdAt: new Date()
                };
                order = new Order_1.default(orderData);
                return [4 /*yield*/, order.save()];
            case 1:
                savedOrder = _c.sent();
                res.status(201).json({
                    success: true,
                    message: "Order created successfully",
                    order: savedOrder
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _c.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//# sourceMappingURL=order.js.map