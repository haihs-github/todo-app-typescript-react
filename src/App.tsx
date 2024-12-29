import { ChangeEvent, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import CreateNewTodo from "./components/CreateNewTodo"
import TodoList from "./components/TodoList"

export type TodoType = { id: string, name: string, isCompleted: boolean }

function App() {

  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
    if (savedTodoList?.length) {
      return savedTodoList;
    }
  });
  const [newTodoStirng, setNewTodoString] = useState<string>('');

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value)
  }

  const onAddingBtnClick = () => {
    const newTodo: TodoType = {
      id: uuidv4(),
      name: newTodoStirng,
      isCompleted: false,
    }

    setTodoList([newTodo, ...todoList])
    setNewTodoString('')
  }

  const updateIsCompleted = (todoId: String) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo
      })
    })
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList]);

  return (
    <>
      <p>this is todo app</p>
      <CreateNewTodo
        newTodoStirng={newTodoStirng}
        // onNewTodoChange={onNewTodoChange}
        onAddingBtnClick={onAddingBtnClick}
        onNewTodoChange={onNewTodoChange}
      />
      <TodoList
        todoList={todoList}
        updateIsCompleted={updateIsCompleted}
      />

    </>
  )
}

export default App
