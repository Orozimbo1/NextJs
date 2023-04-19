import Link from "next/link"

// Aula 11
// import { useRouter } from "next/router"

export async function  getStaticProps(context) {

  const { params } = context

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)

  const todo = await data.json()

  return {
    props: { todo },
  }
}

export async function getStaticPaths() {

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)

  const data = await response.json()

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    }
  })

  return { paths, fallback: false }
}

const Todo = ({ todo }) => {
  // Aula 11
  // const router = useRouter()

  // const todoId = router.query.todoId

  return (
    <>
      <Link href='/todos'>Voltar</Link> 
      <h1>Exibindo o todo: {todo.id}</h1>
      <h3>Texto: {todo.title}</h3>
      <p>
        Comentario: ola ola ola
        <Link href={`/todos/${todo.id}/comments/1`}>
          Detalhes
        </Link>
      </p>
      <p>
        Comentario: ole ole ole
        <Link href={`/todos/${todo.id}/comments/2`}>
          Detalhes
        </Link>
      </p>
      <p>
        Comentario: aoba aoba aoba
        <Link href={`/todos/${todo.id}/comments/3`}>
          Detalhes
        </Link>
      </p>
    </>
  )
}

export default Todo