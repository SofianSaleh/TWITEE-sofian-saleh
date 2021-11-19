import { model, Schema, Document } from 'mongoose';
import { UserDocument } from './user.model';

export interface SessionDocument extends Document {
  user: UserDocument['_id'];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const SessionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // Change to user name
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  { timestamps: true }
);

const SessionModel = model<SessionDocument>('Session', SessionSchema);

export default SessionModel;
