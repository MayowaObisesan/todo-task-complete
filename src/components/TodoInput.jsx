import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoInput = () => {
    const { inputValue, setInputValue, handleAddTodo } = useContext(TodoContext);

    return (
        <div className="todo-input">
            {/* <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter todo Text" /> */}
            <textarea value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter todo text"></textarea>
            <button className="input-submit bg-blue-700" onClick={handleAddTodo} disabled={inputValue.length < 3} >
                Add to Todo
            </button>
        </div>
    );
}

export default TodoInput;