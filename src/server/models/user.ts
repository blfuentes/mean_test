import { Document, Schema, Model, model } from "mongoose";
import { IUser } from "./IUser";

export interface IUserModel extends IUser, Document {
    toString(): string;
}

export var UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

UserSchema.methods.toString = function(): string {
    return (this.name + " " + this.age);
};

export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);