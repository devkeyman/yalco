import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [todos, setTodos] = useState(["Learn React", "Build a project"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // -----------
  const [count, setCount] = useState(0); //디스트럭쳐링
  const [isPinned, setPinned] = useState(false); //디스트럭쳐링

  const togglePinned = () => {
    setPinned((p) => !p);
  };

  function handleClick() {
    console.log("Event 1");
  }

  return (
    <>
      {/*  */}
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <p>Typing: {newTodo}</p>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={() => addTodo(newTodo)}>Add New Task</button>
      </div>
      {/*  */}
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <button onClick={togglePinned}>{isPinned && "📌"} Pinn This!</button>
      </div>
      {/*  */}
      <div>
        <Button name={"Home"} />
        <Button name={"Store"} />
        <Button name={"Contact"} />
      </div>
      <div>
        <button onClick={handleClick}>Button 1</button>
        <button
          onClick={() => {
            console.log("Event 2");
          }}
        >
          Button 2
        </button>
      </div>
      {/*  */}
    </>
  );
}

export default App;
