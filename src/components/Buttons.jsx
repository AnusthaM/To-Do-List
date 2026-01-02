import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
const Buttons = (props) =>{
    const {
        todo,
        handleCheckClick,
        handleEditClick,
        onDelete
    }=props;
    return(
        <>
        <div className="w-full flex justify-end mb-3">
            <button 
                className="border px-4 py-3 rounded bg-blue-500 text-white cursor-pointer mr-2"
                onClick={() => handleCheckClick(todo.id)}
            >
                <FaCheck />
            </button>
            <button 
                className="border px-4 py-3 rounded bg-yellow-300 text-white cursor-pointer mr-2"
                onClick={() => handleEditClick(todo)}
            >
                <FaEdit />
            </button>
            <button 
                className="border px-4 py-3 rounded bg-red-500 text-white cursor-pointer"
                onClick={() => onDelete(todo.id)}
            >
                <FaTrash />
            </button>
        </div>
        </>
    )
}
export default Buttons