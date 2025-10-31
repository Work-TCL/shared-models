import { Schema } from "mongoose";

const salesSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
    vendorId: {
        type: Schema.Types.ObjectId,
        ref: "Vendor",
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "Creator",
    },
    salesAmount: {
        type: Number,
        default: 0,
    },
}, { timestamps: true , versionKey: false});

export default salesSchema;

