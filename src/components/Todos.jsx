import TodoItem from './Todo';
import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Todos = () => {
    const { todos } = useContext(TodoContext);
    return (
        <ul>
            {!!todos.length && todos.map(
                todo => <TodoItem todo={todo} key={todo.id} />
            )}
        </ul>
    );
}

export default Todos;