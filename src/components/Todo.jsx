import React, { useState } from 'react'
import Todoitems from './Todoitems';
import Form from './Form';
import List from './List';

function Todo() {

const [ todo, setTodo] = useState({name:"", done:false});  
const [ todos, setTodos] = useState([]);  


  return (
    <div>
       <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Todo