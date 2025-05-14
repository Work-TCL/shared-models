import mongoose from "mongoose";
const { Schema } = mongoose;

const VendorSchema = new Schema(
  {
    accountId: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
      unique: true,
    },
    // Step 1: Basic Business Info
    business_name: { type: String, required: true },
    type_of_business: { type: String, required: true },
    company_email: { type: String, required: true, lowercase: true, unique: true },
    profile_image: { type: String },
    banner_image: { type: String },
    address: { type: String },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pin_code: { type: String, required: true },
    category: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
    sub_category: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
    website: { type: String },

    contacts: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true, lowercase: true },
        phone: { type: String, required: true },
      },
    ],

    // Step 2: Tax Info
    gst_number: { type: String },
    gst_certificate: { type: String },
    pan_number: { type: String },

    // Step Tracking
    completed_step: { type: Number, default: 0 },
    // isApproved: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

VendorSchema.index({ company_email: 1 }, { unique: true });
export default VendorSchema;
