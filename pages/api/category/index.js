import db from '../../../utils/db';
import Category from '../../../models/Category';
db.connect();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const categories = await Category.find();
        res.status(200).json(categories);
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;

    default:
      break;
  }
};
