import { model, Schema, Document, HookNextFunction } from 'mongoose';
import { hash, compare } from 'bcrypt';
import config from 'config';

export interface UserDocument extends Document {
  email: string;
  name: string;
  password: string;
  createdAt: date;
  updatedAt: date;
}

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    // Change to user name
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.pre('save', async (next: HookNextFunction) => {
    if(this.isModified)
});

const UserModel = model<UserDocument>('User', UserSchema);

export default UserModel;
