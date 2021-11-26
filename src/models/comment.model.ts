import mongoose from 'mongoose';
import { UserDocument } from './user.model';

export interface CommentDocument extends mongoose.Document {
  owner: [UserDocument['_id']];

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
  },
  { timestamps: true }
);

const CommentModel = mongoose.model<CommentDocument>('Comment', CommentSchema);

export default CommentModel;
