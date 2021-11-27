"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTweetSchema = void 0;
var zod_1 = require("zod");
exports.createTweetSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        content: (0, zod_1.string)({ required_error: 'Email is required' }),
    }),
});
//# sourceMappingURL=tweet.schema.js.map