import { ToDoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
const WelcomeMessage = () => {
    const contextObj = useContext(ToDoItemsContext);
    const todoItems = contextObj.todoItems;
    return todoItems.length === 0 && <p> Enjoy Your Day </p>;
};

export default WelcomeMessage;
