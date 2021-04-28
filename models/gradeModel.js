import mongoose from 'mongoose';

const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const gradeModel = mongoose.model('grades', gradeSchema, 'grades');

export { gradeModel };
