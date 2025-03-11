import Mongoose from 'mongoose';

const { Schema } = Mongoose;

// Coupon Schema
const CouponSchema = new Schema({
    couponCode: {
        type: String,
        required: true,
        unique: true
    },
    discount: {
        type: Number,
        required: true
    },
    discountType: {
        type: String,
        enum: ['Amount', 'Percentage'], // Assuming two types of discount
        required: true
    },
    minimumOrderAmount: {
        type: Number,
        required: true
    },
    maximumDiscountAmount: {
        type: Number,
        required: true
    },
    limitForSingleUser: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    expiredDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { versionKey: false, timestamps: true });

// export const CouponModel = Mongoose.model('Coupon', CouponSchema);
export default CouponSchema;