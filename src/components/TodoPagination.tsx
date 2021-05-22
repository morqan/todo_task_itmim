import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";

const TodoPagination: React.FC = (props) => {
    const { page } = useTypedSelector( state => state.todo)
    const {setTodoPage} = useActions()
    const pages = [1,2,3,4,5]
    return (
        <div style={{display: "flex"}} >
            {pages.map(pag =>
                <div onClick={() => setTodoPage(pag)}
                     style={{border: pag === page ? '2px solid red': '2px solid gray', padding: 12, cursor: "pointer"  }}>{pag}</div>
            )}
        </div>
    );
};

export default TodoPagination;
