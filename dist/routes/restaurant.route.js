"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = __importDefault(require("express"));
const RestroController = __importStar(require("../controllers/restaurant.controller"));
const validate_1 = require("../utils/validate");
const create_restaurant_validators_1 = require("../validators/create-restaurant-validators");
const authentication_1 = require("../middlewares/authentication");
const route = express_1.default.Router();
route.get('/', RestroController.getAll);
route.post('/', (0, validate_1.validate)(create_restaurant_validators_1.createRestro), authentication_1.authenticateToken, authentication_1.is_admin, RestroController.postRestro);
route.patch('/:id', (0, validate_1.validate)(create_restaurant_validators_1.updateRestroDto), authentication_1.authenticateToken, authentication_1.is_admin, RestroController.update);
route.delete('/:id', authentication_1.authenticateToken, authentication_1.is_admin, RestroController.remove);
route.get('/:id', authentication_1.authenticateToken, RestroController.Get);
exports.default = route;
//# sourceMappingURL=restaurant.route.js.map