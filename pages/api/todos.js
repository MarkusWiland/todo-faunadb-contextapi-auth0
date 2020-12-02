import { getTodos } from '../../utils/fauna';
export default async function handler(req, res) {
  try {
    const todos = await getTodos();
    return res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
}
