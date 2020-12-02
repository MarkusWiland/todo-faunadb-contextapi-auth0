import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import TodoForm from '../components/TodoForm';
import { TodosContext } from '../context/TodosContext';
import Todo from '../components/Todo';
export default function Home() {
  const { todos, setTodos } = useContext(TodosContext);
  console.log(todos);
  async function getData() {
    const res = await fetch('/api/todos');
    const allTodos = await res.json();
    setTodos(allTodos);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>Todo app Fauna DB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto max-w-screen-sm py-10">
          <header className="flex justify-between mb-5 bg-blue-400 p-4">
            <h1>Todo faunadb</h1>
            <div>
              <button className="px-4">Logga in</button>
              <button>Logga ut</button>
            </div>
          </header>
          <div className="mb-10 flex">
            <TodoForm />
          </div>
          <main>
            <Todo todos={todos} />
          </main>
        </div>
      </main>
    </div>
  );
}
