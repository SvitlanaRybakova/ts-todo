import React from "react";
import { ListGroup } from "react-bootstrap";
import { Todos } from "../shared/types";
import { Todo } from "../shared/interfaces";

interface Props {
  todos: Todos;
  onToggleTodo: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggleTodo, children }) => {
  return (
    <>
      {children}
      <ListGroup role="list">
        {todos.map((todo) => {
          const statusClass = todo.completed ? "completed" : "not-complited";
          return (
            <ListGroup.Item
              action
              onClick={() => onToggleTodo(todo)}
              className={`${statusClass} f-flex jusstify-content-between align-items-center`}
              key={todo.id}
              role="listitem"
            >
              <span>{todo.title}</span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default TodoList;
