import mongoose from "mongoose";

const { Schema } = mongoose;

const RequestSchema = new Schema(
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
            enum: ["REQUESTED", "ACCEPTED", "REJECTED", "EXPIRED"],
            default: "REQUESTED",
        },
        requestFrom: {
            type: String,
            enum: ["CREATOR", "VENDOR"],
            required: true,
            default: "CREATOR"
        },
        // shop: {
        //   type: String,
        //   required: true,
        // }
    },
    { versionKey: false, timestamps: true }
);


// export const RequestModel = mongoose.model("Request", RequestSchema);
export default RequestSchema;
