import styles from '../../styles/Todos.module.css'

import Link from 'next/link'

export async function getStaticProps() {

  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  
  const todos = await data.json()

  // console.log(todos)
  return {
    props: { todos },
  }
}

const Todos = ({ todos }) => {
  return (
    <>
      <h1>Tarefas a fazer</h1>
      <ul className={styles.todo_list}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos