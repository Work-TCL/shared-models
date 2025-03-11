import Mongoose from "mongoose";

const USER_TYPE = {
  USER: "user",
  Vendor: "vendor",
  Creator: "creator",
};

const SCHEMA = {
  ACCOUNT: "Account",
  OTP: "OTP",
  BILLING_SCHEMA: "Billing",
  VENDOR: "Vendor",
  CREATOR: 'Creator'
};

const { Schema } = Mongoose;

// Account Schema
const AccountSchema = new Schema(
  {
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA.VENDOR,
      required: false,
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA.CREATOR,
      required: false,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
    },
    type: {
      type: String,
      required: true,
      enum: Object.values(USER_TYPE),
      default: USER_TYPE.USER,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    billingDetails: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA.BILLING_SCHEMA,
      required: false,
    },
  },
  { versionKey: false, timestamps: true }
);

// const AccountModel = Mongoose.model(SCHEMA.ACCOUNT, AccountSchema);
export default AccountSchema;
