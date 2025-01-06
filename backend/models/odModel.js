const mongoose = require('mongoose');

const odSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  name: { type: String, required: true },
  department: { type: String, required: true },
  reason: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  inChargeComment: { type: String },
  hodComment: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('OD', odSchema);
