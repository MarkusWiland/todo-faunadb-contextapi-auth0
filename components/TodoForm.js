import React, { useState, useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export default function TodoForm() {
  const [todo, setTodo] = useState('');
  const { createTodo, getTodos } = useContext(TodosContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo('');
  };
  return (
    <form className="form my-6 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col text-sm mb-2 ">
        <label htmlFor="todo" className="font-bold mb-2 text-gray-800 ">
          Todo
        </label>
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Skriv din todo..."
          className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg  "
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className=" w-full rounded bg-gray-500 hover:bg-gray-600 text-white py-2 px-4"
      >
        Lägg till din todo
      </button>
    </form>
  );
}
