import { Schema } from "mongoose";

const ChannelSchema = new Schema({
    vendorId: {
        type: Schema.Types.ObjectId,
        ref: "Vendor",
        required: true,
    },
    channelId: {
        type: String,
        required: true,
    },
    channelType: {
        type: String,
        enum: ["shopify"],
        required: true,
    },
    channelStatus: {
        type: String,
        enum: ["active", "inactive"],
        required: true,
    },
    channelConfig: {
        type: Object,
    }
},{
    timestamps: true,
    versionKey: false,
});

// export const VendorChannelModel = model("VendorChannel", ChannelSchema);
export default ChannelSchema;