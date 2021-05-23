import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import TodoPagination from "./TodoPagination";
import TodoItem from "./TodoItem";
import {useActions} from "../hooks/useAction";
import './TodoList.css'

const TodoList: React.FC  = () => {
    const {page, todo, limit, error, loading} = useTypedSelector( state => state.todo)
    const {fetchTodo} = useActions()
    useEffect( () => {
        fetchTodo(page, limit)
    },[page, limit])
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    return (
        <div className={'todoBox'}>
            <TodoItem todo={todo}/>
            <TodoPagination page={page}/>
        </div>
    );
};

export default TodoList;
