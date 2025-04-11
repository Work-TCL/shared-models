import Mongoose from "mongoose";

const { Schema } = Mongoose;

// Product Schema
const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    channelProductId: {
      type: String,
      required: true
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    media: {
      type: [String],
      default: [],
    },
    channelName: {
      type: String,
      enum: ['shopify', 'woocommerce', 'magento', 'bigcommerce', 'wix'],
      required: true,
    },
    category: {
      type: [Schema.Types.ObjectId],
      ref: "Category",
    },
    tags: {
      type: [String],
      default: [],
    }
  },
  { versionKey: false, timestamps: true }
);

// export const ProductModel = Mongoose.model("Product", ProductSchema);
export default ProductSchema;
