import React, { useState } from 'react';

type Props = {
    updateTodos: (inputNewTodo: string) => void;
}

function AddTodoForm({ updateTodos }: Props) {

    const [inputNewTodo, setInputNewTodo] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateTodos(inputNewTodo);
        setInputNewTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Vad ska du göra?</h2>
                <input type="text" value={inputNewTodo} onChange={(e) => setInputNewTodo(e.target.value)} />
                <button type="submit">Spara</button>
            </form>
        </div>
    );
}

export default AddTodoForm;