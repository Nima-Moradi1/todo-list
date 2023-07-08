/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

// for deleting a todo
const Todo = ({ text, todo, todos, setTodos }) => {
    const deteleHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    // for completed button
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className='flex items-center justify-center bg-inherit rounded-lg'>
            <li
                required
                className={`text-sm py-2 px-4 my-2 bg-inherit border-[1px] text-white rounded-lg outline-none w-[150px] min-h-10 md:text-base lg:text-lg ${
                    todo.completed
                        ? "line-through opacity-50 bg-gray-500 bg-opacity-40"
                        : ""
                }`}>
                {text}
            </li>
            <div className='mx-2'>
                <button>
                    <FontAwesomeIcon
                        className='text-green-500  w-[25px] h-10 ml-4 '
                        icon={faCheck}
                        onClick={completeHandler}
                    />
                </button>
                <button onClick={deteleHandler}>
                    <FontAwesomeIcon
                        className='text-red-500 w-[20px] h-10 ml-6 '
                        icon={faTrash}
                    />
                </button>
            </div>
        </div>
    );
};

export default Todo;
