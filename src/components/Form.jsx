import React from 'react'
import { useState } from 'react';
import styles from './form.module.css';

function Form({ todo,setTodo,todos,setTodos}) {
    function handler(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }
  return (
    <div> <form className={styles.stodo} onSubmit={handler}>
    <input className={styles.finput} type="text" value={todo} placeholder='Enter'  onChange={(e) => {setTodo(e.target.value)}}/>
    <button className={styles.mbutton} type='submit'>Add</button>
</form></div>
  )
}

export default Form