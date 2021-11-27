"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommentSchema = void 0;
var zod_1 = require("zod");
exports.createCommentSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        content: (0, zod_1.string)({ required_error: 'Email is required' }),
    }),
});
//# sourceMappingURL=comment.schema.js.map