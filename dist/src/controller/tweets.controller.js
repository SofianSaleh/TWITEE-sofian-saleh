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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTweetHandler = exports.updateTweetHandler = exports.getTweetHandler = exports.getYourTweetsHandler = exports.getTweetsHandler = exports.createTweetHandler = void 0;
var tweet_service_1 = require("../service/tweet.service");
var createTweetHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, newTweet, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = res.locals.user;
                return [4, (0, tweet_service_1.createNewTweet)(req.body, user)];
            case 1:
                newTweet = _a.sent();
                res.status(200).send(newTweet);
                return [3, 3];
            case 2:
                e_1 = _a.sent();
                res.status(400).send(e_1.message);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.createTweetHandler = createTweetHandler;
var getTweetsHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var yourTweets, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, (0, tweet_service_1.getTweets)()];
            case 1:
                yourTweets = _a.sent();
                res.status(200).send({ count: yourTweets.length, tweets: yourTweets });
                return [3, 3];
            case 2:
                e_2 = _a.sent();
                res.status(400).send(e_2.message);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getTweetsHandler = getTweetsHandler;
var getYourTweetsHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, yourTweets, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = res.locals.user;
                return [4, (0, tweet_service_1.getYourTweets)(user._id)];
            case 1:
                yourTweets = _a.sent();
                res.status(200).send({ count: yourTweets.length, tweets: yourTweets });
                return [3, 3];
            case 2:
                e_3 = _a.sent();
                res.status(400).send(e_3.message);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getYourTweetsHandler = getYourTweetsHandler;
var getTweetHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, tweet, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4, (0, tweet_service_1.getTweet)(id)];
            case 1:
                tweet = _a.sent();
                res.status(200).send({ count: 1, tweet: tweet });
                return [3, 3];
            case 2:
                e_4 = _a.sent();
                res.status(400).send(e_4.message);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getTweetHandler = getTweetHandler;
var updateTweetHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, tweet, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                user = res.locals.user;
                return [4, (0, tweet_service_1.updateTweet)(id, req.body, user)];
            case 1:
                tweet = _a.sent();
                res.status(200).send(tweet);
                return [3, 3];
            case 2:
                e_5 = _a.sent();
                res.status(400).send(e_5.message);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.updateTweetHandler = updateTweetHandler;
var deleteTweetHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, tweet, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                user = res.locals.user;
                return [4, (0, tweet_service_1.deleteTweet)(id, user._id)];
            case 1:
                tweet = _a.sent();
                res
                    .status(200)
                    .send({ count: tweet ? 1 : 0, tweet: tweet, success: tweet ? true : false });
                return [3, 3];
            case 2:
                e_6 = _a.sent();
                res.status(400).send(e_6.message);
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.deleteTweetHandler = deleteTweetHandler;
//# sourceMappingURL=tweets.controller.js.map