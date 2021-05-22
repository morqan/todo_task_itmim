import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";

const TodoItem:React.FC = () => {
    const {todo, page, limit, error, loading} = useTypedSelector( state => state.todo)
    const {fetchTodo} = useActions()
    useEffect( () => {fetchTodo(page, limit)},[page])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    return (
        <ul>

            {
                todo.map(todo => <li key={todo.id}>{todo.id} - {todo.title}</li>)
            }
        </ul>
    );
};

export default TodoItem;
