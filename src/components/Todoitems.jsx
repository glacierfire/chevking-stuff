import React from 'react'
import styles from './todoitems.module.css'

function Todoitems({item, todos, setTodos}) {

  function handleDelete(item){
    console.log("deletebutton clicked ", item);
    setTodos( todos.filter((todo) => todo !== item))

  }

  return (
    <div className={styles.oitem}>
    <div className={styles.mitem}>{item}
    <span>
      <button onClick={() => handleDelete(item)} className={styles.deletebutton}>X</button>
    </span>
    </div>
    <hr className={styles.line} />
    </div>
  )
}

export default Todoitems