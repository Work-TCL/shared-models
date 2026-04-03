import mongoose from "mongoose";
const { Schema } = mongoose;

const TokenSchema = new Schema(
  {
    accountId: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    platform: {
      type: String,
      enum: ["web", "ios", "android"],
    },
    token: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "7d",
    },
  },
  { versionKey: false },
);

TokenSchema.index({ accountId: 1 });
export default TokenSchema;
