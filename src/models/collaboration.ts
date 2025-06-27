import mongoose from "mongoose";

const { Schema } = mongoose;

const CollaborationSchema = new Schema(
  {
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "Creator",
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    // requestId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Request",
    //   required: true,
    // },
    requestedBy: {
      type: String,
      enum: ["vendor", "creator"],
      required: true,
    },
    collaborationStatus: {
      type: String,
      enum: ["REQUESTED", "PENDING", "ACTIVE", "REJECTED", "EXPIRED", "PAUSED"],
      default: "REQUESTED",
    },
    utmLink: {
      type: String,
      default: null, // Will be set after UTM generation
    },
    utmLinkIdentifier: {
      type: String,
      default: null,
    },
    crmLink: {
      type: String,
      default: null,
    },
    discountType: {
      type: String,
      enum: ["PERCENTAGE", "FIXED_AMOUNT"],
    },
    discountValue: {
      type: Number,
    },
    couponCode: {
      type: String,
    },
    commissionValue: {
      type: Number,
      required: true,
      default: 0,
    },
    commissionType: {
      type: String,
      enum: ["PERCENTAGE", "FIXED_AMOUNT"],
      required: true,
    },
    startAt: {
      type: Date,
      default: null,
    },
    expiresAt: {
      type: Date,
      default: null,
    },
    bids: {
      type: [Schema.Types.ObjectId],
      ref: "Bidding",
      default: [],
    },
    negotiation: {
      // creatorProposal: { type: Number, default: null },
      // vendorProposal: { type: Number, default: null },
      agreedByCreator: { type: Boolean, default: false },
      agreedByVendor: { type: Boolean, default: false },
    },
    // shop: {
    //   type: String,
    //   required: true,
    // }
  },
  { versionKey: false, timestamps: true }
);

// export const CollaborationModel = mongoose.model("Collaboration", CollaborationSchema);
export default CollaborationSchema;

const biddingSchema = new Schema(
  {
    proposal: { type: Number, default: null },
    type: {
      type: String,
      enum: ["PERCENTAGE", "FIXED_AMOUNT"],
      required: true,
    },
    sender: { type: String, enum: ["vendor", "creator"], required: true },
    isSeen: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

export { biddingSchema };
