const Check = (props) => {
    const {
        todo,
        checkedTodos 
    }=props;
    return(
        <>
        <div className="mb-2">
            <p 
                className={`w-full text-left py-4 px-3 font-bold text-2xl ${
                    checkedTodos.includes(todo.id) ? 'line-through text-gray-400' : ''
                }`}
            >
                {todo.text}
            </p>
        </div>
        </>
    )
}

export default Check