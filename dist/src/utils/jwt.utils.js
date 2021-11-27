"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
function signJwt(object, secret, options) {
    return jsonwebtoken_1.default.sign(object, secret, __assign({}, (options && options)));
}
exports.signJwt = signJwt;
function verifyJwt(token, secret) {
    try {
        var decoded = jsonwebtoken_1.default.verify(token, secret);
        return {
            valid: true,
            expired: false,
            decoded: decoded,
        };
    }
    catch (e) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null,
        };
    }
}
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=jwt.utils.js.map