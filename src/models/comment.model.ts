import mongoose from 'mongoose';
import TweetModel, { TweetDocument } from './tweet.model';
import { UserDocument } from './user.model';

export interface CommentDocument extends mongoose.Document {
  owner: [UserDocument['_id']];
  isEdited: boolean;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isEdited: { type: Boolean, default: false },
  },
  { timestamps: true }
);

CommentSchema.pre('remove', async function (next) {
  const tweet = await TweetModel.update(
    { comments: this._id },
    { $pull: { comments: this._id } }
  );

  next();
});

const CommentModel = mongoose.model<CommentDocument>('Comment', CommentSchema);

export default CommentModel;
