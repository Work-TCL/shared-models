import Mongoose from "mongoose";

const { Schema } = Mongoose;

// Category Schema
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    type: {
      type: String,
      enum: ["creator", "vendor"],
    },
  },
  { versionKey: false, timestamps: true }
);

// export const CategoryModel = Mongoose.model("Category", CategorySchema);
export default CategorySchema;
