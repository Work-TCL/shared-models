import { Schema } from "mongoose";

const orderSchema = new Schema({
  orderId: {
    type: String,
  },
  orderAmount:{
    type: Number,
  },
  productId:{
    type: Schema.ObjectId,
    ref: "Product",
  },
  channelProductId:{
    type: String,
  },
  collaborationId:{
    type: Schema.ObjectId,
    ref: "Collaboration",
  },
  channel: {
    type: String,
    enum: ["shopify","wordpress", "amazon", "walmart", "ebay", "etsy", "other"],
  },
  orderDate:{
    type: Date,
  },
  orderStatus:{
    type: String,
    enum: ["PENDING", "DELIVERED", "CANCELLED", "RETURNED"],
    default: "PENDING",
  },
  commission:{
    type: Number,
  },
  blockedUntil: {
    type: Date
  },
  quantity: {
    type: Number,
    default: 1
  }
}, { timestamps: true , versionKey: false});

export default orderSchema;