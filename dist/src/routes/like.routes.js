"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var requireUser_1 = __importDefault(require("../middleware/requireUser"));
var like_controller_1 = require("../controller/like.controller");
var router = express_1.default.Router();
router.post('/:id', requireUser_1.default, like_controller_1.likeTweetHandler);
router.post('/unlike/:id', requireUser_1.default, like_controller_1.unlikeTweetHandler);
router.get('/:id', requireUser_1.default, like_controller_1.getAllLikesTweetHandler);
exports.default = router;
//# sourceMappingURL=like.routes.js.map