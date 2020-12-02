import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export default function Todo({ todos }) {
  const { deleteTodo } = useContext(TodosContext);
  return (
    <div>
      <ul className="flex flex-col">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-2 flex justify-between bg-gray-100 my-2 items-center"
          >
            {todo.data.todo}
            <span>
              <button className="mr-4 p-2 bg-yellow-300">ändra</button>
              <button
                className="p-2 bg-red-300"
                onClick={() => deleteTodo(todo.id)}
              >
                ta bort
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
