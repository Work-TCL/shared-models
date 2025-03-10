import Mongoose from "mongoose";

const SCHEMA = {
  ACCOUNT: "Account",
  OTP: "OTP",
  BILLING_SCHEMA: "Billing",
  VENDOR: "Vendor",
  CREATOR: 'Creator'
};

const { Schema } = Mongoose;

const BillingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA.ACCOUNT, // Reference to the Account model
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    GST: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// Create an index on the expiration field
// BillingSchema.index({ userId: 1 });

export const BillingModel = Mongoose.model(
  SCHEMA.BILLING_SCHEMA,
  BillingSchema
);
