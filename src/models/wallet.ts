import Mongoose from "mongoose";

const { Schema } = Mongoose;

const WalletSchema = new Schema(
    {
        accountId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
        blockedBalance: { type: Number, default: 0 },
        balance: { type: Number, default: 0 }
    },
    { timestamps: true, versionKey: false } // Automatically adds createdAt & updatedAt
);

export default WalletSchema;
