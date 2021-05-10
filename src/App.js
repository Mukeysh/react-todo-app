import { useState, useEffect } from "react";
import AddToDo from "./components/AddToDo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { data } from "../src/data";
import ActiveToDo from "./components/ActiveToDo";
import { CompletedToDo } from "./components/CompletedToDo";

function App() {
  const [todo, setTodo] = useState(data);
  const [activeTodo, setActiveToDo] = useState(0);
  const addToDoHandler = (todoItem) => {
    setTodo([
      ...todo,
      { id: new Date().getTime().toString(), completed: false, todo: todoItem },
    ]);
  };
  const completedTasks = (index) => {
    const newTasks = [...todo];
    newTasks[index].completed = !newTasks[index].completed;
    setTodo(newTasks);
  };
  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("react-todo-app-data"));
    if (newData) {
      setTodo(newData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-todo-app-data", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className="app">
      <div className="task-container">
        <Header />
        <ul className="tabs">
          <li>
            <button
              onClick={() => setActiveToDo(0)}
              className={activeTodo === 0 ? "active" : ""}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveToDo(1)}
              className={activeTodo === 1 ? "active" : ""}
            >
              Active
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveToDo(2)}
              className={activeTodo === 2 ? "active" : ""}
            >
              Completed
            </button>
          </li>
        </ul>
        {(activeTodo === 0 || activeTodo === 1) && (
          <AddToDo additem={addToDoHandler} />
        )}

        {activeTodo === 0 && (
          <ToDoList data={todo} completed={completedTasks} />
        )}
        {activeTodo === 1 && <ActiveToDo data={todo} />}
        {activeTodo === 2 && <CompletedToDo data={todo} />}
      </div>
      <Footer username="Mukeysh" link="https://github.com/Mukeysh" />
    </div>
  );
}

export default App;
