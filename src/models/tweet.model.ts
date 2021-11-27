import mongoose from 'mongoose';
import CommentModel, { CommentDocument } from './comment.model';
import { UserDocument } from './user.model';

export interface TweetDocument extends mongoose.Document {
  owner: [UserDocument['_id']];
  likedUser?: [UserDocument['_id']];
  comments?: [CommentDocument['_id']];
  isEdited: boolean;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const TweetSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    likedUser: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isEdited: { type: Boolean, default: false },
  },
  { timestamps: true }
);

TweetSchema.pre('remove', async function (next) {
  console.log(this);
  await CommentModel.deleteMany({
    _id: {
      $in: this.comments,
    },
  });
  next();
});

const TweetModel = mongoose.model<TweetDocument>('Tweet', TweetSchema);

export default TweetModel;
