import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";
import TodoPagination from "./TodoPagination";
import TodoItem from "./TodoItem";

const TodoList: React.FC  = () => {
    const {todo, page, limit, error, loading} = useTypedSelector( state => state.todo)
    // const {fetchTodo, setTodoPage} = useActions()
    // console.log(todo, 'todo')
    // useEffect( () => {fetchTodo(page, limit)},[page])
    // if (loading) return <h1>Loading...</h1>
    // if (error) return <h1>{error}</h1>
    return (
        <div className={'todoBox'}>
            <TodoItem/>
            <TodoPagination/>
        </div>
    );
};

export default TodoList;
