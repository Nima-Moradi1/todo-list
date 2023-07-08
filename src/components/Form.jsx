/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";

const Form = ({
    inputText,
    setInputText,
    todos,
    setTodos,
    setStatus,
}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText === "" || inputText === " ") {
            alert("!!!هنوز هیچی ننوشتی خب") ;
        }
        else {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: uuidv4() },
            ]);
            setInputText("");
        }

    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    
  

    return (
        <div className='flex items-center justify-center'>
            <form className='bg-white mt-24 rounded-lg p-1 flex border-black border-[4px]'>
                <button
                    onClick={submitTodoHandler}
                    className='bg-white text-black rounded-full text-4xl pb-2'>
                +</button>
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    className='text-sm py-2 px-4 border-0 text-black outline-none block w-full md:text-lg lg:w-[40vh]'
                    type='text'
                    required
                    placeholder='...کارهاتو بنویس'
                />
            </form>
            <select
                onChange={statusHandler}
                className='mt-24 text-base h-14 rounded-md mx-4 text-black w-14 md:w-32 md:pl-4'>
                <option value='All'>همه</option>
                <option value='completed'>انجام شده</option>
                <option value='uncompleted'>انجام نشده</option>
            </select>
        </div>
    );
};

export default Form;
