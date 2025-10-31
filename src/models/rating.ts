import { Schema } from "mongoose";

const ratingSchema = new Schema({
    vendorId: {
        type: Schema.Types.ObjectId,
        ref: "Vendor",
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "Creator",
    },
    from:{
        type: String,
        enum: ["vendor", "creator"],
    },
    rating: {
        type: Number,
        default: 0,
    },
}, { timestamps: true , versionKey: false});

export default ratingSchema;

