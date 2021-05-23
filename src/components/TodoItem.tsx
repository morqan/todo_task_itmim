import React, {useEffect, useState} from 'react';
import './TodoItem.css'
interface TodoItemProps {
    todo: any[]
}
const TodoItem:React.FC<TodoItemProps> = ({todo}) => {
    const [todoTitle, setTodoTitle] = useState(todo);
    const [query, setQuery] = useState<string>('')
    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    useEffect(() => {
        const results = todoTitle.filter(todo =>{
               return  todo.title.toLowerCase().includes(query)
        });
       query ? setTodoTitle(results) : setTodoTitle(todo)
    }, [query]);
    return (
        <div className={'todoItem'}>
            <input className={'todoItemSearch'} type="text" name="name" value={query} onChange={search}/>
            <ul className={'todoItemList'}>
                {
                    todoTitle.map((todoItem, index) =>
                        <li key={todoItem.id}>
                        <span className={todoItem.completed ? 'todoItemTitle' : ''}>
                            {todoItem.id} - {todoItem.title}
                        </span>
                            <input type="checkbox" checked={todoItem.completed} onChange={e => {
                                const newCheckboxes = [...todoTitle];
                                newCheckboxes[index].completed = e.target.checked;
                                setTodoTitle(newCheckboxes)}} />
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default TodoItem;
