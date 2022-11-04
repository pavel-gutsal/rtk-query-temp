import classNames from 'classnames';
import { ITodo } from '../types/ITodo';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../servicies/apiSlice';

type Props = {
  todo: ITodo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {

  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  return (
    <div className="TodoItem">
      <h1 className={classNames('TodoItem__text', {completed: todo.completed})}>
        {todo.title}
      </h1>
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
      >
        delete
      </button>
      <button
        type="button"
        onClick={() => updateTodo({...todo, completed: !todo.completed})}
      >
        Complete
      </button>
    </div>
  )
}
