import AddTodo from "./components/AddTodo";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { ToDoItemsContext } from "./store/todo-items-store";
import TodoItems from "./components/TodoItems";
function App() {
    const [toDoItems, setToDoItems] = useState([]);

    const handleNewItem = (itemName, itemDueDate) => {
        const newToDoItems = [
            ...toDoItems,
            { name: itemName, due_date: itemDueDate },
        ];
        setToDoItems(newToDoItems);
    };

    const handleDeleteItem = (toDoItemName) => {
        const newToDoItems = toDoItems.filter(
            (item) => item.name !== toDoItemName
        );
        setToDoItems(newToDoItems);
    };

    return (
        <>
            <ToDoItemsContext.Provider
                value={{
                    todoItems: toDoItems,
                    addNewItem: handleNewItem,
                    deleteItem: handleDeleteItem,
                }}
            >
                <div className="container">
                    <h1> The Todo App </h1>
                    <AddTodo></AddTodo>
                    <WelcomeMessage></WelcomeMessage>
                    <TodoItems></TodoItems>
                </div>
            </ToDoItemsContext.Provider>
        </>
    );
}

export default App;
