import { TodoType } from '../App'
import Todo from './Todo'
export const TodoList = ({ todoList, updateIsCompleted }
	: {
		todoList: TodoType[],
		updateIsCompleted: (todoId: String) => void;
	}) => {
	return (
		<div>
			{todoList.map((todo) => {
				return (<Todo
					key={todo.id}
					todoId={todo.id}
					name={todo.name}
					isCompleted={todo.isCompleted}
					updateIsCompleted={updateIsCompleted} />);
			})}
		</div>
	)
}

export default TodoList
