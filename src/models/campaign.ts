import Mongoose from "mongoose";

const { Schema } = Mongoose;

// Campaign Schema
const CampaignSchema = new Schema(
  {
   name:{
    type: String,
    required: true,
    unique: true,
   },
   description:{
    type: String,
    required: true,
   },
   startDate:{
    type: Date,
    required: true,
   },
   endDate:{
    type: Date,
    required: true,
   },
   status:{
    type: String,
    enum: ["ACTIVE", "PENDING", "EXPIRED"],
    default: "PENDING",
   },
   productId:{
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
   },
   channels:{
    type: [String],
    enum: ["youtube", "instagram"],
    required: true,
   },
   discount_type:{
    type: String,
    enum: ["PERCENTAGE", "FIXED_AMOUNT"],
    required: true,
   },
   discount_value:{
    type: Number,
    required: true,
   },
   vendorId:{
    type: Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
   },
   videoUrl:{
    type: String,
    required: false,
   },
   imageUrls:{
    type: [String],
    required: false,
   }
  },
  { versionKey: false, timestamps: true }
);

// export const CategoryModel = Mongoose.model("Category", CategorySchema);
export default CampaignSchema;
