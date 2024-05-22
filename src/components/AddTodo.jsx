import { useContext, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { ToDoItemsContext } from "../store/todo-items-store";
/* eslint-disable react/prop-types */
const AddTodo = () => {
    const contextObj = useContext(ToDoItemsContext);
    const addNewItem = contextObj.addNewItem;
    const todoNameElement = useRef();
    const dueDateElement = useRef();
    // const handleNameChange = (event) => {
    //     setToDoName(event.target.value);
    // };

    // const handleDateChange = (event) => {
    //     setDueDate(event.target.value);
    // };

    const handleAddButtonClicked = () => {
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        addNewItem(todoName, dueDate);
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
    };
    return (
        <>
            <div className="container">
                <div className="row kg-row">
                    <div className="col-6">
                        <input
                            type="text"
                            ref={todoNameElement}
                            placeholder="Enter your todo"
                        ></input>
                    </div>
                    <div className="col-4">
                        <input
                            type="date"
                            ref={dueDateElement}
                            placeholder="dd/mm/yy"
                        ></input>
                    </div>
                    <div className="col-2">
                        <button
                            type="button"
                            className="btn btn-success kg-button"
                            onClick={handleAddButtonClicked}
                        >
                            <IoIosAddCircle />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddTodo;
