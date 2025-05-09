import mongoose from "mongoose";
const { Schema } = mongoose;

const CreatorSchema = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
    
    // Step 1 fields
    full_name: { type: String, trim: true },
    user_name: { type: String, unique: true },
    email: { type: String },
    phone: { type: String },
    dob: { type: String },
    gender: { type: String },
    state: { type: String },
    city: { type: String },
    
    // Step 2 fields
    instagram_link: { type: String },
    youtube_link: { type: String },

    // Step 3 fields (store + visuals)
    store_name: { type: String },
    store_description: { type: String },
    profile_image: { type: String },
    banner_image: { type: String },
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    sub_category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    tags: [{ type: String }],

    // Others
    channels: [{ type: Schema.Types.ObjectId, ref: "CreatorChannel" }],

    // Registration progress tracking
    completed_step: { type: Number, default: 0 }, // 0 to 3
    status: {
      type: String,
      enum: ["IN_PROGRESS", "PENDING_APPROVAL", "APPROVED", "REJECTED"],
      default: "IN_PROGRESS",
    },
  },
  { timestamps: true, versionKey: false }
);

// export const CreatorModel = mongoose.model("Creator", CreatorSchema);
export default CreatorSchema;