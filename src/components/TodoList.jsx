/* eslint-disable react/prop-types */

import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterTodos }) => {
    return (
        <div className='mt-24'>
            <ul>
                {filterTodos.map((todo) => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                        key={todo.id}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
