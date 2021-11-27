"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../controller/user.controller");
var validateResource_1 = __importDefault(require("../middleware/validateResource"));
var user_schema_1 = require("../schema/user.schema");
var session_schema_1 = require("../schema/session.schema");
var session_controller_1 = require("../controller/session.controller");
var requireUser_1 = __importDefault(require("../middleware/requireUser"));
var router = express_1.default.Router();
router.post("/signup", (0, validateResource_1.default)(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
router.post("/login", (0, validateResource_1.default)(session_schema_1.createSessionSchema), session_controller_1.createUserSessionHandler);
router.get("/sessions", requireUser_1.default, session_controller_1.getUserSessionsHandler);
router.delete("/logout", requireUser_1.default, session_controller_1.deleteSessionHandler);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map