import mongoose from 'mongoose';

const { MONGODB_URI = 'mongodb://127.0.0.1:27017/products' } = process.env;

main().catch((err) => console.error(err));

async function main() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('DB Connected');
  } catch (err) {
    console.error(err);
  }
}
