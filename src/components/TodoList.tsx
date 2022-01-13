import React from "react";
import { ListGroup } from "react-bootstrap";
import { Todos } from "../shared/types";

interface Props {
  todos: Todos;
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ListGroup role="list">
      {todos.map((todo) => {
        const statusClass = todo.completed ? "completed" : "not-complited";
        return (
          <ListGroup.Item
            action
            className={`${statusClass} f-flex jusstify-content-between align-items-center`}
            key={todo.id}
            role="listitem"
          >
            <span>{todo.title}</span>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default TodoList;
