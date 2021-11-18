import { model, Schema, Document } from 'mongoose';
import { hashSync, compare, genSalt } from 'bcrypt';
import config from 'config';

export interface UserDocument extends Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
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

UserSchema.pre('save', async function (next) {
  let user = this as UserDocument;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await genSalt(config.get<number>('saltWorkFactor'));
  const hash = await hashSync(user.password, salt);
  user.password = hash;
  return next();
});

UserSchema.methods.comparePassword = function (
  candidatePassword: string
): Promise<boolean> {
  let user = this as UserDocument;

  return compare(candidatePassword, user.password).catch((e) => false);
};

const UserModel = model<UserDocument>('User', UserSchema);

export default UserModel;
