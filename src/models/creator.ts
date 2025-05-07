import Mongoose from "mongoose";

const { Schema } = Mongoose;

const CreatorSchema = new Schema(
  {
    accountId: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    full_name: {
      type: String,
      trim: true,
    },
    user_name: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    long_description: {
      type: String,
    },
    short_description: {
      type: String,
    },
    tags: {
      type: [String],
    },
    category: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Category",
          required: true,
        },
      ],
    },
    sub_category: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Category",
          required: true,
        },
      ],
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    profile_image: {
      type: String,
    },
    banner_image: {
      type: String,
    },
    channels: [{ // Add this field to reference CreatorChannel
      type: Schema.Types.ObjectId,
      ref: "CreatorChannel",
    }],
    completed:{
      type: Number,
      default: 0
    },
  },
  { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

// export const CreatorModel = Mongoose.model(SCHEMA.CREATOR, CreatorSchema);
export default CreatorSchema;
