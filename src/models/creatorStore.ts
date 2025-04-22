import Mongoose from "mongoose";

const { Schema } = Mongoose;

// creator Product Schema
const CreatorStoreSchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "Creator",
      required: true,
    },
    category: {
      type: [Schema.Types.ObjectId],
      ref: "Category",
      required: true,
    },  
    tags: {
        type: [String],
    },
    storeName: {
      type: String,
      required: true,
    },
    storeDescription: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
      required: true,
    },
    banner_image: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

// export const CreatorStoreModel = Mongoose.model("CreatorStore", CreatorStoreSchema);
export default CreatorStoreSchema;
