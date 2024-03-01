import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  city: { type: String, required: true },
});

const Products = mongoose.model('product', productsSchema);

export default Products;
