import {TodoState, TodoActionTypes, TodoAction} from "../../types/todo"

const initialState: TodoState = {
    todo: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}
export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state,todo: action.payload, loading: false}
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}
