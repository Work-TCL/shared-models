import Mongoose from "mongoose";

const { Schema } = Mongoose;

const MessagesSchema = new Schema(
    {
        collaborationId: {
            type: Schema.Types.ObjectId,
            ref: "Collaboration",
            required: true,
        },
        creatorId: {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Creator",
        },
        vendorId:{
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Vendor",
        },
        messageJson:{
            type: Object,
        }
    },
    { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

// export const MessagesModel = Mongoose.model(SCHEMA.CREATOR, MessagesSchema);
export default MessagesSchema;
