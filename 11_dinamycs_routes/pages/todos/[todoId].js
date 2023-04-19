import Link from "next/link"
import { useRouter } from "next/router"

const Todo = () => {
  const router = useRouter()

  const todoId = router.query.todoId

  return (
    <>
      <Link href='/todos'>Voltar</Link> 
      <h1>Exibindo o todo: {todoId}</h1>
      <p>
        Comentario: ola ola ola
        <Link href={`/todos/${todoId}/comments/1`}>
          Detalhes
        </Link>
      </p>
      <p>
        Comentario: ole ole ole
        <Link href={`/todos/${todoId}/comments/2`}>
          Detalhes
        </Link>
      </p>
      <p>
        Comentario: aoba aoba aoba
        <Link href={`/todos/${todoId}/comments/3`}>
          Detalhes
        </Link>
      </p>
    </>
  )
}

export default Todo