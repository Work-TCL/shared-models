import { Schema } from "mongoose";

const ContactUsSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["creator", "vendor"],
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// export const ContactUsModel = model("ContactUs", ContactUsSchema);
export default ContactUsSchema;
