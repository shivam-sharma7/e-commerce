import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected with MongoDB: ${con.connection.host}`);
  } catch (error) {
    console.log('Database not connected', error.message);
    process.exit(1);
  }
};
