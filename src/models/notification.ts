import Mongoose from "mongoose";

const { Schema } = Mongoose;

const NotificationSchema = new Schema(
    {
       userId: {
        type: Mongoose.Types.ObjectId,
       },
       userType: { // New field to specify the type of user
        type: String,
        enum: ['creator', 'vendor'], // Restrict to specific values
        required: true // Ensure this field is always provided
       },
       message:{
        type: String,
        required: true
       },
       read: {
        type: Boolean,
        default: false
       },
       config: {
        type: Object,
        default: {}
       },
       notificationType: {
         type: String
       }
    },
    { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

// export const NotificationModel = Mongoose.model(SCHEMA.CREATOR, NotificationSchema);
export default NotificationSchema;