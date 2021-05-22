import React, {useEffect, useState} from 'react';
// import {useTypedSelector} from "../hooks/useTypedSelector";
// import {useActions} from "../hooks/useAction";
interface TodoItemProps {
    todo: any[]
}
const TodoItem:React.FC<TodoItemProps> = ({todo}) => {
    const [todoTitle, setTodoTitle] = useState(todo);
    const [query, setQuery] = useState<string>('')
    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    useEffect(() => {
        const results = todoTitle.filter(todo =>{
                // if (person.completed) {
                //     return true
                // }
               return  todo.title.toLowerCase().includes(query)
        }
        );
        setTodoTitle(results);
        console.log(results)
        console.log(query)
    }, [query]);
    console.log(todoTitle)
    return (
        <div>
            <input type="text" name="name" value={query} onChange={search}/>
            <ul>

                {
                    todoTitle.map((todoItem, index) =>
                        <li key={todoItem.id}>{todoItem.id} - {todoItem.title}
                            <input type="checkbox" checked={todoItem.completed} onChange={e => {
                                const newCheckboxes = [...todoTitle];
                                console.log(e.target.checked)
                                console.log(newCheckboxes[index].completed)
                                newCheckboxes[index].completed = e.target.checked;
                                setTodoTitle(newCheckboxes);
                            }} />
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default TodoItem;
