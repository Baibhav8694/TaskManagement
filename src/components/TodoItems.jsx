/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import { ToDoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const TodoItems = () => {
    const { todoItems, deleteItem } = useContext(ToDoItemsContext);
    // const todoItems = contextObj.todoItems;
    return (
        <>
            <ul className="list-group">
                {todoItems.map((item) => (
                    <li key={item} className="list-group-item">
                        <TodoItem
                            todoName={item.name}
                            todoDate={item.due_date}
                            onDeleteClick={deleteItem}
                        ></TodoItem>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoItems;
