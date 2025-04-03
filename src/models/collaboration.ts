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
    collaborationStatus: {
      type: String,
      enum: ["REQUESTED","PENDING", "ACTIVE", "REJECTED", "EXPIRED"],
      default: "REQUESTED",
    },
    utmLink: {
      type: String,
      default: null, // Will be set after UTM generation
    },
    discountType: {
      type: String,
      enum: ["PERCENTAGE", "FIXED_AMOUNT"],
      required: true,
    },
    discountValue: {
      type: Number,
      required: true,
    },
    couponCode: {
      type: String,
      required: true,
    },
    commissionPercentage: {
      type: Number,
      required: true,
      default: 0,
    },
    expiresAt: {
      type: Date,
      required: true,
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
