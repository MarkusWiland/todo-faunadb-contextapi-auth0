import { createTodo } from '../../utils/Fauna';
export default async function handler(req, res) {
  console.log(req.body);
  const { todo, completed } = req.body;
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  try {
    const createdTodo = await createTodo(todo, completed);
    return res.status(200).json(createdTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Something went wrong.' });
  }
}
