/* import React, { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      setList(list.concat(todo));
    }
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Set a Task: <input type="text" value={todo} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
 */