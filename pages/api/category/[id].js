import db from '../../../utils/db';
import Category from '../../../models/Category';
db.connect();
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case 'GET':
      try {
        const category = await Category.findById(id);
        if (!category) {
          res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, category: category });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;

    default:
      break;
  }
};
