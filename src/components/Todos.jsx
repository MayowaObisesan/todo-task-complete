import TodoItem from './Todo';
import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const Todos = () => {
    const { todos } = useContext(TodoContext);
    return (
        <ul>
            {!!todos.length && todos.map(
                todo => <TodoItem todo={todo} key={todo.id} />
            )}
        </ul>
    );
}

export const CompletedTodos = () => {
    const { todos } = useContext(TodoContext);
    return (
        <ul>
            {!!todos.length && todos.filter(todo => todo.completed).map(
                todo => <TodoItem todo={todo} key={todo.id} />
            )}
        </ul>
    );
}

export const UncompletedTodos = () => {
    const { todos } = useContext(TodoContext);
    return (
        <ul>
            {!!todos.length ? todos.filter(todo => !todo.completed).map(
                todo => <TodoItem todo={todo} key={todo.id} />
            ) : <div className={"w-full h-60 text-3xl py-64 px-8 text-gray-400"}>No Todo Found</div>}
        </ul>
    );
}
