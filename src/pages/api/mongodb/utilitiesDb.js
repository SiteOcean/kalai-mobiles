import connectToDatabase from '../mongodb/connectToDb';
import Products from '../mongodb/productsSchema';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { username, city } = req.body;

    try {
      const newUser = new Products({ username, city });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error saving user to MongoDB:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
