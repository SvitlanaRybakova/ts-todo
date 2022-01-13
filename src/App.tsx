import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TodoList from "./components/TodoList";
import { Todos } from "./shared/types";
import { Todo } from "./shared/interfaces";

const initialTodos: Todos = [
  { id: "123", title: "Learn JS", completed: false },
  { id: "345", title: "Learn React", completed: false },
  { id: "567", title: "Learn TypeScript", completed: false },
];

function App() {
  // ***init array of numbers
  // const higscores:number[]=[]
  // ***init array without types
  // const anyArr: any[]=[]
  // anyArr[0] = 12
  // anyArr[1]="12"

  const [todos, setTodos] = useState(initialTodos);

  const onToggleTodo =(todo: Todo):void => {
  todo.completed = !todo.completed
  setTodos([...todos]) 
  }

  return (
    <Container id="App" className="my-3">
      <h1>Todos</h1>
      <TodoList todos={todos} onToggleTodo={onToggleTodo}>
        Some children content
      </TodoList>
    </Container>
  );
}

export default App;
