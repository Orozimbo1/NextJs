import styles from '../styles/Todos.module.css'

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
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos