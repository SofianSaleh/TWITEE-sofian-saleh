"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validateResource_1 = __importDefault(require("../middleware/validateResource"));
var requireUser_1 = __importDefault(require("../middleware/requireUser"));
var tweet_schema_1 = require("../schema/tweet.schema");
var tweets_controller_1 = require("../controller/tweets.controller");
var router = express_1.default.Router();
router.post('/create', requireUser_1.default, (0, validateResource_1.default)(tweet_schema_1.createTweetSchema), tweets_controller_1.createTweetHandler);
router.get('/', requireUser_1.default, tweets_controller_1.getTweetsHandler);
router.get('/mytweets', requireUser_1.default, tweets_controller_1.getYourTweetsHandler);
router.get('/:id', requireUser_1.default, tweets_controller_1.getTweetHandler);
router.put('/update/:id', requireUser_1.default, (0, validateResource_1.default)(tweet_schema_1.createTweetSchema), tweets_controller_1.updateTweetHandler);
router.delete('/:id', requireUser_1.default, tweets_controller_1.deleteTweetHandler);
exports.default = router;
//# sourceMappingURL=tweet.routes.js.map