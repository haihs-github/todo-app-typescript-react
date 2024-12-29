import { Button, TextField } from "@mui/material"
import { ChangeEvent } from "react"

type Props = {
	newTodoStirng: string;
	onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onAddingBtnClick: () => void;
}

export const CreateNewTodo = ({
	newTodoStirng,
	onNewTodoChange,
	onAddingBtnClick
}: Props) => {
	return (
		<div>
			<TextField size="small"
				value={newTodoStirng}
				onChange={onNewTodoChange} />
			<Button variant="contained"
				onClick={onAddingBtnClick}
			>Thêm</Button>
		</div>
	)
}

export default CreateNewTodo
