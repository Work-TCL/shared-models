import Mongoose from "mongoose";

const { Schema } = Mongoose;

const WishListSchema = new Schema(
    {
        collaborationId:{
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Collaboration",
        },
        accountId:{
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Account",
        },
    },
    { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

export default WishListSchema;
