/* 
### Q13.

## ex10: todo/strikethrough

- Write a TODO app
- Add TODOs from input
- Clicking on a TODO should complete it using strikethrough
- Clicking again should remove the strikethrough.
*/

import { useState } from "react";

export default function TodoApp() {
  const [todosArr, setTodosArr] = useState([]);
  const [todo, setTodo] = useState();

  const addTodo = () => {
    setTodosArr([...todosArr, { title: todo, completed: false }]);
  };

  const todoCompleted = (todo) => {
    let selectedTodo = todosArr.find((i) => i.title === todo.title);
    selectedTodo.completed = selectedTodo.completed === false ? true : false;
    console.log(todosArr);
    setTodosArr([...todosArr]);
  };

  return (
    <div>
      <div className="flex flex-col w-72">
        <div className="input-container m-5">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className="input-outlined input-outlined-red"
            placeholder="add a todo"
          />
          <label style={{ backgroundColor: "white" }} className="input-label ">
            Add a Todo
          </label>
        </div>
        <button
          className="btn shadow-md btn-outline-fuchsia m-5"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      <div>
        <ul className="flex flex-col justify-start w-72">
          {todosArr.map((todo, i) => (
            <li
              onClick={() => todoCompleted(todo)}
              key={i}
              className={`text-lg p-4 m-1 ${
                todo.completed === true ? "line-through" : ""
              }`}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
