import Mongoose from "mongoose";

const { Schema } = Mongoose;

// Tags Schema
const TagsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    usages: {
      type: Number,
      default: 1,
    }
  },
  { versionKey: false, timestamps: true }
);

// Indexes
TagsSchema.index({ name: 1, count: -1 });  // compound index
TagsSchema.index({ name: "text" });        // optional full-text

// export const TagsModel = Mongoose.model("Tags", TagsSchema);
export default TagsSchema;
