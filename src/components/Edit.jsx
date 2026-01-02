
import Check from "./Check";
import Buttons from "./Buttons";

const Edit = (props) => {
    const { 
        todo, 
        editTodoId, 
        editText, 
        setEditText, 
        handleEditSubmit, 
        handleEditClick, 
        handleCheckClick, 
        onDelete,
        checkedTodos 
    } = props;
    
    return(
        <div key={todo.id} className="card m-4 p-2 rounded overflow-hidden shadow-lg h-fit">
            {/* Edit Form (only visible when editing this todo) */}
            {editTodoId === todo.id ? (
                <form onSubmit={(e) => handleEditSubmit(e, todo.id)} className="p-4">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border px-4 py-2 w-full rounded mb-3"
                        autoFocus
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="border px-4 py-2 rounded bg-green-500 text-white mr-2"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => props.setEditTodoId(null)}
                            className="border px-4 py-2 rounded bg-gray-300"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    {/* Todo Content */}
                  <Check 
                    key={todo.id}
                    todo={todo}                  
                    handleCheckClick={handleCheckClick}
                    checkedTodos={checkedTodos}/>

                    <Buttons 
                    key={todo.id}
                    todo={todo}
                    handleEditClick={handleEditClick}
                    handleCheckClick={handleCheckClick}
                    onDelete={onDelete}
                    />
                </>

            )}
        </div>
    );
};

export default Edit;