import mongoose from 'mongoose';

const connectionString = 'mongodb://127.0.0.1:27017/kalaimobiles'; // Replace with your MongoDB connection string

async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default connectToDatabase;
