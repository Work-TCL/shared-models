import Mongoose from 'mongoose';

const { Schema } = Mongoose;

// Admin Schema
const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, { versionKey: false, timestamps: true });

export default AdminSchema;
// export const AdminModel = Mongoose.model('Admin', AdminSchema);


