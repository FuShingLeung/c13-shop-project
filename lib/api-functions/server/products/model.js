/*
  {
    image: url,
    title: string,
    description?: string,
    price: number,
    quantity: number
  }
*/

import mongoose from 'mongoose';
import db from '@/lib/api-functions/server/db';
const { Schema } = mongoose;

export const designSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  favourites: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: 'https://static.thenounproject.com/png/449586-200.png',
  },
});

const Design = mongoose.models.Design || mongoose.model('Design', designSchema);
export default Design;
