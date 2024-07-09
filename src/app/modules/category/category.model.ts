import mongoose from 'mongoose';

// Define the schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

// Create the model
export const Category = mongoose.model('Category', categorySchema);
