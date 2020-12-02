const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

export const getTodos = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('todos'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const todos = data.map((todo) => {
    todo.id = todo.ref.id;
    delete todo.ref;
    return todo;
  });

  return todos;
};

export const createTodo = async (todo, completed = false) => {
  return await faunaClient.query(
    q.Create(q.Collection('todos'), {
      data: { todo, completed },
    })
  );
};

export const deleteTodo = async (id) => {
  return await faunaClient.query(q.Delete(q.Ref(q.Collection('todo'), id)));
};
