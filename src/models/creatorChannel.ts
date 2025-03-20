import { Schema } from "mongoose";

const CreatorChannelSchema = new Schema({
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
    lastFiveVideoViews: {
        type: Number
    },
    lastMonthViews: {
        type: Number
    }
},{
    versionKey: false,
    timestamps: true,
}); 

export default CreatorChannelSchema;
