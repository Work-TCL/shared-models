import Mongoose from "mongoose";

const { Schema } = Mongoose;

const CreatorSchema = new Schema(
  {
    full_name: {
      type: String,
      trim: true,
    },
    user_name: {
      type: String,
      unique: true,
    },
    phone:{
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
      type: [String],
    },
    sub_category: {
      type: [String],
    },
    profile_image: {
      type: String,
    },
    banner_image: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

// export const CreatorModel = Mongoose.model(SCHEMA.CREATOR, CreatorSchema);
export default CreatorSchema;
