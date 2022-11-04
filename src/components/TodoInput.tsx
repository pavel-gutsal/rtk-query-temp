import { usePostTodosMutation } from '../servicies/apiSlice';
import { useState } from 'react';

export const TodoInput = () => {
  const [title, setTitle] = useState<string>('');
  const [postTodos] = usePostTodosMutation();

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const object = {
      title,
      userId: 2,
      id: Math.ceil(Math.random() * 10**6) + 10**6,
      completed: false,
    }

    postTodos(object);
  }

  return (
    <form
      className="TodoInput"
      onSubmit={submitHandle}
    >
      <input
        type="text"
        value={title}
        onChange={inputHandle}
      />
      <button
        type="submit"
      >Submit</button>
    </form>
  )
}