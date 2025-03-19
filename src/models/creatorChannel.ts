import { Schema } from "mongoose";

const CreatorChannelSchema = new Schema({
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "Creator",
        required: true,
    },
    channelId: {
        type: String,
        required: true,
    },
    channelName: {
        type: String,
        required: true,
    },
    handleName: {
        type: String,
    },
    channelType: {
        type: String,
        enum: ["youtube", "instagram"],
        required: true,
    },
},{
    versionKey: false,
    timestamps: true,
}); 

export default CreatorChannelSchema;
