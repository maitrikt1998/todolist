import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';


function App(){
    const [listTodo, setListTodo] = useState([]);
    let AddList = (inputText) =>{
        setListTodo([...listTodo,inputText]);
    }
    return(
        <div className='main-container'>
            <div className='center-container'>
                <TodoInput />
            </div>
        </div>
    )
}

export default App;