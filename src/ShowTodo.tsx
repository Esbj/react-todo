type Props = {
    id: number
    todo: string,
    removeTodo: (id: number) => void
}
function ShowTodo({ id, removeTodo, todo }: Props) {

    return (
        <div onClick={() => removeTodo(id)}>
            {todo}
        </div>
    );
}

export default ShowTodo;