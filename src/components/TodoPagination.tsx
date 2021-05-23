import React from 'react';
import {useActions} from "../hooks/useAction";
interface TodoPaginationProps {
    page: number
}
const TodoPagination: React.FC<TodoPaginationProps> = ({page}) => {
    const {setTodoPage} = useActions()
    const pages = [1,2,3,4,5]
    return (
        <div style={{display: "flex"}} >
            {pages.map(pag =>
                <div key={pag} onClick={() => setTodoPage(pag)}
                     style={{border: pag === page ? '2px solid red': '2px solid gray', padding: 12, cursor: "pointer"  }}>{pag}</div>
            )}
        </div>
    );
};

export default TodoPagination;
