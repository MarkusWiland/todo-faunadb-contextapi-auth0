import { deleteTodo } from '../../utils/fauna';
export default async function handler(req, res) {
  const { id } = req.body;
  try {
    const deleted = await deleteTodo(id);
    return res.status(200).json(deleted);
  } catch (err) {
    console.error(err);
  }
}
