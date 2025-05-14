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
    price:{
      type: Number,
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
    subCategory: {
      type: [Schema.Types.ObjectId],
      ref: "Category",
    },
    tags: {
      type: [String],
      default: [],
    },
    lifeTime: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "PENDING", "EXPIRED"],
      default: "PENDING",
    },
    commission: {
      type: Number,
      required: true,
    },
    commission_type: {
      type: String,
      enum: ["PERCENTAGE", "FIXED_AMOUNT"],
      required: true,
    },  
    referenceLinks: {
      type: [String],
      default: [],
    },  
    creatorMaterial: {
      type: [String],
      required: false,
    },
    videoType: {
      type: String,
      required: true,
    },
    channels:{
      type: [String],
      enum: ["youtube", "instagram"],
      required: true,
     },
     notes: {
      type: String,
     },
     discount: {
      type: Number,
      required: false,
     }, 
     discountType: {
      type: String,
      enum: ["PERCENTAGE", "FIXED_AMOUNT"],
      required: false,
     },
     couponCode: {
      type: String,
      required: false,
     },
  },
  { versionKey: false, timestamps: true }
);

// export const ProductModel = Mongoose.model("Product", ProductSchema);
export default ProductSchema;
