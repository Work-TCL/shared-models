import Mongoose from "mongoose";

const OTP_PURPOSE = {
  LOGIN_OTP: "login",
  REGISTER_OTP: "register",
  RESET_PASSWORD_OTP: "reset_password",
};

const SCHEMA = {
  ACCOUNT: "Account",
  OTP: "OTP",
  BILLING_SCHEMA: "Billing",
  VENDOR: "Vendor",
  CREATOR: 'Creator'
};

const OTP_EXPIRED_DEFAULT = "5m";

const { Schema } = Mongoose;

// Define the OTP Schema
const OTPSchema = new Schema(
  {
    otpCode: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA.ACCOUNT, // Reference to the Account model
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: OTP_EXPIRED_DEFAULT, // Automatically delete the document after 5 minutes
    },
    purpose: {
      type: String,
      enum: Object.values(OTP_PURPOSE), // Example purposes
      required: true,
    },
  },
  { versionKey: false }
);

// Create an index on the expiration field
OTPSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const OTPModel = Mongoose.model(SCHEMA.OTP, OTPSchema);
