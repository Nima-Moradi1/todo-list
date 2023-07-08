/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const initialState =
        JSON.parse(localStorage.getItem("todos")) || [];
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [status, setStatus] = useState("all");
    const [filterTodos, setFilterTodos] = useState([]);

    //useEffect for local storage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    //function for filtering the todos
    const filterHandler = () => {
        switch (status) {
            case "uncompleted":
                setFilterTodos(
                    todos.filter(
                        (todo) => todo.completed === false
                    )
                );
                break;
            case "completed":
                setFilterTodos(
                    todos.filter(
                        (todo) => todo.completed === true
                    )
                );
                break;
            default:
                setFilterTodos(todos);
                break;
        }
    };
    //useEffect for running the filter function and adding local todos
    useEffect(() => {
        filterHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, todos]);

    // here i want to set a message for the user in header

    const numberComplete = todos.filter(
        (t) => t.completed
    ).length;
    const numberTotal = todos.length;

    function getMessage() {
        const percentage = (numberComplete / numberTotal) * 100;
        if (numberTotal > 3 && percentage === 0) {
            return "!حداقل یکیشو انجام بده گشاد";
        }
        if (percentage === 100) {
            return "!!ژووون کل تسک هارو که انجام دادی..";
        }
        if (percentage === 30) {
            return "یک سوم تسک هاتو انجام دادی ایولللل..";
        }
        if (percentage === 40) {
            return "!ایول،تقریبا نصف راهو رفتیا...";
        }
        if (percentage === 50) {
            return "بی نظیری! کمتر از نصف تسک ها مونده";
        }
        if (percentage === 70) {
            return "!هفتاد درصد تسک هات انجام شده";
        }
        if (percentage === 75) {
            return "!هفتاد و پنج درصد تسک هاانجام شده";
        }
        if (percentage === 80) {
            return "!با برنامه کی بودی تو! دیگه آخراشه";
        }
        if (percentage === 90) {
            return "!کمتر از ده درصد تسک هات مونده";
        }
        if (percentage > 65) {
            return "!... برچلا که عنقد پر طلاشی";
        }
        if (percentage > 50) {
            return "خداوکیلی صد تومن میدم همینجوری برو جلو...";
        }
        if (percentage > 40) {
            return "داری به نیمه دوم تسک ها نزدیک میشی جیگر...";
        }
        if (percentage > 30) {
            return "میبینیم که یک سوم از تسک ها انجام شده";
        }
        if (percentage > 20) {
            return "ژیگول بالای بیست درصد تسک هارو رفتی جلو..";
        }
        if (percentage > 10) {
            return "بیش از ده درصد تسک ها انجام شد...";
        }
        if (percentage > 5) {
            return "!بابا بنازم...ادامه بده تو میتونی.";
        }
        return "";
        
    }

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center text-xl text-white'>
                <h1 className='text-base font-bold mb-6 md:text-lg lg:text-3xl'>
                    چه تسک هایی رو باید امروز انجام بدی؟
                </h1>
                <h2 className='text-yellow-400 mb-6 md:text-base lg:text-2xl'>
                    {getMessage()}
                </h2>
                <h3>
                    انجام شده : {numberTotal} / {numberComplete}{" "}
                </h3>
                <Form
                    todos={todos}
                    setTodos={setTodos}
                    inputText={inputText}
                    setInputText={setInputText}
                    setStatus={setStatus}
                />
                <TodoList
                    filterTodos={filterTodos}
                    setInputText={setInputText}
                    setTodos={setTodos}
                    todos={todos}
                />
            </div>
        </>
    );
}

export default App;
