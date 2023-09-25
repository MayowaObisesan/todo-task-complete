import React, { useContext, useRef, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
    const { handleEdit, handleCheck, editId, setEditId, handleDelete } = useContext(TodoContext);
    const { id, title, completed } = todo;
    const inputCheckBox = useRef(null);
    const inputText = useRef(null);
    const [todoText, setTodoText] = useState('');

    const handleTriggerEdit = (id) => {
        setEditId(id);
        // set the state of the current Text
        setTodoText(inputText.current?.value || inputText.current.textContent);
    }
    const handleSaveEdit = (evt, id) => {
        setEditId(null);
        // Only set a Todo as uncompleted if the text changes.
        if (inputText.current.value.trim().length < 1) {
            return;
        }
        if (todoText !== inputText.current.value && inputText.current.value.trim().length > 0) {
            handleEdit(evt);
            handleCheck(id);
        }
    }
    return (
        <li className="todo">
            <input type="checkbox" checked={completed} disabled={editId === id} onChange={() => handleCheck(id)} ref={inputCheckBox} />
            {
                editId === id
                    ? <input type="text" defaultValue={title} ref={inputText} />
                    : <span className={`todo-title ${completed && "checked"}`} ref={inputText}>
                        {title}
                    </span>
            }
            {
                editId === id
                    ? <button onClick={(e) => { handleSaveEdit(e, id) }}>
                        ✅
                    </button>
                    : <button className="edit-button" onClick={() => handleTriggerEdit(id)}>
                        ✏️
                    </button>
            }
            <button className="del-button" onClick={() => handleDelete(id)}>
                🗑️
            </button>
        </li>
    );
}

export default TodoItem;