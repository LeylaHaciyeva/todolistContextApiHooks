import React, { useState } from "react";

export default function ListItem({ todo, id, checkComplete, handleEditTodos }) {
  const [onEdit, setonEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
  const handleonEdit = () => {
    setonEdit(true);
  };
  const handleSave = (id) => {
    setonEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };
  if (onEdit) {
    return (
      <div>
        <li>
          <input
            type="text"
            id="editValue"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value.toLowerCase())}
            name="editValue"
          />
          <button className="save-btn" onClick={() => handleSave(id)}>
            Save
          </button>
        </li>
      </div>
    );
  } else {
    return (
      <div>
        <li>
          <label htmlFor={id} className={todo.complete ? "active" : ""}>
            <input
              type="checkbox"
              id={id}
              checked={todo.complete}
              onChange={() => checkComplete(id)}
            />
            {todo.name}
          </label>
          <button
            className="edit-btn"
            disabled={todo.complete}
            onClick={handleonEdit}
          >
            Edit
          </button>
        </li>
      </div>
    );
  }
}
