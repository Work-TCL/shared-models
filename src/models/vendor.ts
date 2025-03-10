import Mongoose from "mongoose";

export const SCHEMA = {
  ACCOUNT: "Account",
  OTP: "OTP",
  BILLING_SCHEMA: "Billing",
  VENDOR: "Vendor",
  CREATOR: 'Creator'
};

const { Schema } = Mongoose;

const VendorSchema = new Schema(
  {
    business_name: {
      type: String,
      required: true,
      trim: true,
    },
    company_email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    company_phone: {
      type: String,
      required: true,
    },
    gst_number: {
      type: String,
      required: true,
      unique: true,
    },
    website: {
      type: String,
      trim: true,
    },
    type_of_business: {
      type: String,
      required: true,
    },
    brand_documents: [
      {
        document_type: {
          type: String,
          required: true,
        },
        file_url: {
          type: String,
          required: true,
        },
      },
    ],
    contacts: [
      {
        name: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          lowercase: true,
        },
        isDefault: {
          type: Boolean,
          required: false,
        },
      },
    ],
    addresses: [
      {
        _id: false,
        name: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        zip_code: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        house_no: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
          lowercase: true,
        },
        isDefault: {
          type: Boolean,
          required: false,
        },
      },
    ],
    omni_channels: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

// Creating indexes for optimization
VendorSchema.index({ company_email: 1 }, { unique: true });

export const VendorModel = Mongoose.model(SCHEMA.VENDOR, VendorSchema);
