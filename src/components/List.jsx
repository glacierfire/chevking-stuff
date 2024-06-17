import React from 'react'
import Todoitems from './Todoitems'
import styles from'./list.module.css';

function List({todos, setTodos}) {
  return (
    <div className={styles.mlist}>
        {todos.map(item => <Todoitems item={item} key={item} todos={todos} setTodos={setTodos}/>)}
    </div>
  )
}

export default List