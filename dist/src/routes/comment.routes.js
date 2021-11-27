"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validateResource_1 = __importDefault(require("../middleware/validateResource"));
var requireUser_1 = __importDefault(require("../middleware/requireUser"));
var comment_schema_1 = require("../schema/comment.schema");
var comment_controller_1 = require("../controller/comment.controller");
var router = express_1.default.Router();
router.post('/create/:id', requireUser_1.default, (0, validateResource_1.default)(comment_schema_1.createCommentSchema), comment_controller_1.createCommentHandler);
router.get("/:id", requireUser_1.default, comment_controller_1.getCommentHandler);
router.get("/all/:id", requireUser_1.default, comment_controller_1.getAllCommentsOnTweetHandler);
router.put('/update/:id', requireUser_1.default, (0, validateResource_1.default)(comment_schema_1.createCommentSchema), comment_controller_1.updateCommentHandler);
router.delete("/:id", requireUser_1.default, comment_controller_1.deleteCommentHandler);
exports.default = router;
//# sourceMappingURL=comment.routes.js.map