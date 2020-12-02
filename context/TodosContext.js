import { createContext, useState } from 'react';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await fetch('/api/todos');
      const latestTodos = await res.json();
      setTodos(latestTodos);
    } catch (err) {
      console.error(err);
    }
  };

  const createTodo = async (todo) => {
    try {
      await fetch('/api/createTodo', {
        method: 'POST',
        body: JSON.stringify({ todo: todo }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  const deleteTodo = async (id) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      console.log(todo);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        getTodos,
        createTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosProvider, TodosContext };
