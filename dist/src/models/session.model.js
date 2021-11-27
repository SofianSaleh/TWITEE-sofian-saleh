"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SessionSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
}, { timestamps: true });
var SessionModel = (0, mongoose_1.model)('Session', SessionSchema);
exports.default = SessionModel;
//# sourceMappingURL=session.model.js.map