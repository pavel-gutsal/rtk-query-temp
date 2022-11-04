import { useGetTodosQuery } from '../servicies/apiSlice';
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery()

  console.log(todos, isLoading, isSuccess, isError, error);

  return (
    <section className="TodoList">
      { todos && todos.length > 0 && (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </section>
  )
}
