import React, { useState } from "react";
import { Container } from "react-bootstrap";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  image?: string | null | undefined;
}

const initialTodos: Todo[] = [
  { id: "123", title: "Learn JS", completed: true },
  { id: "345", title: "Learn React", completed: true },
  { id: "567", title: "Learn TypeScript", completed: false },
];

function App() {
  // ***init array of numbers
  // const higscores:number[]=[]
  // ***init array without types
  // const anyArr: any[]=[]
  // anyArr[0] = 12
  // anyArr[1]="12"

  const [count, setCount] = useState(initialTodos);

  return (
    <Container id="App" className="my-3">
     <h1>Todos</h1>
      {count.map((el) => (
        <ul key={el.id}>
          <li>{el.title}</li>
        </ul>
      ))}
    </Container>
  );
}

export default App;
