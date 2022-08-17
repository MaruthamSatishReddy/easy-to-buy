import Product from '../../models/Product';
import User from '../../models/User';
import data from '../../utils/data';
import db from '../../utils/db';
import Category from '../../models/Category';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Category.deleteMany();
  await Category.insertMany(data.categories);
  //await db.disconnect();
  res.send({ message: 'Data Saved Successfully' });
};
export default handler;
