import Mongoose from "mongoose";

const { Schema } = Mongoose;

// Category mapping Schema
const CategoryMappingSchema = new Schema(
  {
    creatorCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        default: null,
    },
    vendorCategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    }
  },
  { versionKey: false, timestamps: true }
);

export default CategoryMappingSchema;
