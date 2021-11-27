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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.getAllCommentsOnTweet = exports.getComment = exports.createComment = void 0;
var comment_model_1 = __importDefault(require("../models/comment.model"));
var tweet_service_1 = require("./tweet.service");
var createComment = function (comment, tweetId, user) { return __awaiter(void 0, void 0, void 0, function () {
    var tweet, newComment, e_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                comment.owner = user;
                return [4, (0, tweet_service_1.getTweet)(tweetId)];
            case 1:
                tweet = _b.sent();
                if (!tweet)
                    return [2, { success: false, tweet: null, msg: "Couldn't find tweet" }];
                return [4, comment_model_1.default.create(comment)];
            case 2:
                newComment = _b.sent();
                (_a = tweet === null || tweet === void 0 ? void 0 : tweet.comments) === null || _a === void 0 ? void 0 : _a.push(newComment);
                return [4, tweet.save()];
            case 3:
                _b.sent();
                return [4, newComment.populate('owner', 'name email')];
            case 4:
                newComment = _b.sent();
                return [2, {
                        success: true,
                        tweet: tweet,
                        commentOwner: newComment.owner,
                        msg: "Comment creaeted Successfully",
                    }];
            case 5:
                e_1 = _b.sent();
                throw e_1;
            case 6: return [2];
        }
    });
}); };
exports.createComment = createComment;
var getComment = function (commentId) { return __awaiter(void 0, void 0, void 0, function () {
    var comment, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, comment_model_1.default.findOne({ _id: commentId }).populate('owner', 'name email')];
            case 1:
                comment = _a.sent();
                if (!comment)
                    return [2, { success: false, msg: "Couldn't find comment", data: null }];
                return [2, { success: true, msg: "Found comment", data: comment }];
            case 2:
                e_2 = _a.sent();
                throw e_2;
            case 3: return [2];
        }
    });
}); };
exports.getComment = getComment;
var getAllCommentsOnTweet = function (tweetId) { return __awaiter(void 0, void 0, void 0, function () {
    var tweet, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, (0, tweet_service_1.getTweet)(tweetId)];
            case 1:
                tweet = _a.sent();
                if (!tweet)
                    return [2, { success: false, msg: "Couldn't find tweet", tweet: null }];
                return [4, (tweet === null || tweet === void 0 ? void 0 : tweet.populate('comments', 'content owner isEdited'))];
            case 2:
                tweet = _a.sent();
                return [2, { success: true, tweet: tweet, msg: "Found all the comments" }];
            case 3:
                e_3 = _a.sent();
                throw e_3;
            case 4: return [2];
        }
    });
}); };
exports.getAllCommentsOnTweet = getAllCommentsOnTweet;
var updateComment = function (newContent, commentId, user) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, success, data, msg, e_4;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                return [4, (0, exports.getComment)(commentId)];
            case 1:
                _a = _c.sent(), success = _a.success, data = _a.data, msg = _a.msg;
                if (!success && !data)
                    return [2, { success: success, data: data, msg: msg }];
                if (!(data === null || data === void 0 ? void 0 : data.owner))
                    return [2, { success: false, msg: "User Doesn't exist", data: null }];
                if (user._id != ((_b = data === null || data === void 0 ? void 0 : data.owner) === null || _b === void 0 ? void 0 : _b._id))
                    return [2, { success: false, data: null, msg: "Forbidden" }];
                data.content = newContent.content;
                data.isEdited = true;
                return [4, (data === null || data === void 0 ? void 0 : data.save())];
            case 2:
                _c.sent();
                return [2, { success: true, data: data, msg: "Updated Successfully" }];
            case 3:
                e_4 = _c.sent();
                throw e_4;
            case 4: return [2];
        }
    });
}); };
exports.updateComment = updateComment;
var deleteComment = function (commentId, user) { return __awaiter(void 0, void 0, void 0, function () {
    var comment, e_5;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, (0, exports.getComment)(commentId)];
            case 1:
                comment = _b.sent();
                if (!comment.success && !comment.data)
                    return [2, comment];
                if (!((_a = comment === null || comment === void 0 ? void 0 : comment.data) === null || _a === void 0 ? void 0 : _a.owner))
                    return [2, { success: false, msg: "User Doesn't exist", data: null }];
                if (user._id != comment.data.owner._id)
                    return [2, { success: false, comment: null, msg: "Forbidden" }];
                return [4, comment.data.remove()];
            case 2:
                _b.sent();
                return [2, {
                        success: true,
                        data: null,
                        msg: "Deleted Successfully",
                    }];
            case 3:
                e_5 = _b.sent();
                throw e_5;
            case 4: return [2];
        }
    });
}); };
exports.deleteComment = deleteComment;
//# sourceMappingURL=comment.service.js.map