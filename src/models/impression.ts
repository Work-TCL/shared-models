import Mongoose from "mongoose";

const { Schema } = Mongoose;

const ImpressionSchema = new Schema(
  {
    collaborationId: {
      type: Schema.Types.ObjectId,
      ref: "Collaboration",
      required: true,
    },
    impression: {
      type: String,
      enum: ["VISIT", "CLICK", "ADD_TO_CART", "PURCHASE"],
      required: true,
    },
    channel: {
      type: String,
      enum: ["SHOPIFY", "AMAZON", "ECOM"],
    },
  },
  { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

export default ImpressionSchema;
