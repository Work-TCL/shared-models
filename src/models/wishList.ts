import Mongoose from "mongoose";

const { Schema } = Mongoose;

const WishListSchema = new Schema(
    {
        productId:{
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        accountId:{
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Account",
        },
    },
    { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

export default WishListSchema;
