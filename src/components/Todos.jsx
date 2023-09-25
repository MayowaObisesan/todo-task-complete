import TodoItem from './Todo';
import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const Todos = () => {
    const { todos } = useContext(TodoContext);
    return (
        <ul>
            {!!todos.length ? todos.map(
                todo => <TodoItem todo={todo} key={todo.id} />
            ) : <div className={"w-full h-20 text-3xl py-24 px-8 text-gray-400"}>No Todo Found</div>}
        </ul>
    );
}

export const CompletedTodos = () => {
    const { todos } = useContext(TodoContext);
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <ul>
            {!!todos.length ? completedTodos.map(
                todo => <TodoItem todo={todo} key={todo.id} />
            ) : <div className={"w-full h-20 text-3xl py-24 text-center px-8 text-gray-400"}>No Completed Todo Found</div>}
        </ul>
    );
}

export const UncompletedTodos = () => {
    const { todos } = useContext(TodoContext);
    const uncompletedTodos = todos.filter(todo => !todo.completed);

    return (
        <ul>
            {!!uncompletedTodos.length ? todos.filter(todo => !todo.completed).map(
                todo => <TodoItem todo={todo} key={todo.id} />
            ) : <div className={"w-full h-20 text-3xl py-24 px-8 text-gray-400"}>No Uncompleted Todo Found</div>}
        </ul>
    );
}
