import mongoose from 'mongoose';
import { UserDocument } from './user.model';

export interface TweetDocument extends mongoose.Document {
  owner: [UserDocument['_id']];
  likedUser: [UserDocument['_id']];
  comments: [UserDocument['_id']];
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const TweetSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    likedUser: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const TweetModel = mongoose.model<TweetDocument>('(Tweet', TweetSchema);

export default TweetModel;
