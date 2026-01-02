import React, { useState, useRef, useEffect } from "react";
import Edit from "./Edit";


const TodoList = ({ todos, onDelete, onEdit }) => {
    const [editTodoId, setEditTodoId] = useState(null);
    const [editText, setEditText] = useState("");
    const [checkedTodos, setCheckedTodos] = useState([]);
    const listEndRef = useRef(null);

    // Auto-scroll to bottom when todos change
    useEffect(() => {
        if (listEndRef.current) {
            listEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [todos]);

    const handleEditClick = (todo) => {
        setEditTodoId(todo.id);
        setEditText(todo.text);
    };

    const handleEditSubmit = (e, id) => {
        e.preventDefault();
        onEdit(id, editText);
        setEditTodoId(null);
    };

    const handleCheckClick = (id) => {
        setCheckedTodos(prev => 
            prev.includes(id) 
                ? prev.filter(todoId => todoId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="grid md:grid-cols-1 gap-4 p-4">
            {todos.map((todo) => (
               <>
                <Edit 
                    key={todo.id}
                    todo={todo}
                    editTodoId={editTodoId}
                    editText={editText}
                    setEditText={setEditText}
                    setEditTodoId={setEditTodoId}
                    handleEditSubmit={handleEditSubmit}
                    handleEditClick={handleEditClick}
                    onDelete={onDelete}
                    handleCheckClick={handleCheckClick}
                    checkedTodos={checkedTodos}
                 />
               </>
            ))}
            {/* Invisible div at the end for scrolling */}
            <div ref={listEndRef} />
        </div>
    );
};

export default TodoList;