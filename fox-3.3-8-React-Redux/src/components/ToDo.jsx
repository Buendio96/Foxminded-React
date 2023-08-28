import {
	Title,
	Item,
	ItemTitle,
	TaskCompleted,
	TaskUnCompleted,
	Button
} from '../styles/ToDoStyle';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, toggleTodo } from '../store/slices/todoSlice';
import Loader from "./Loading";

const ToDo = () => {
	const disp = useDispatch();
	const list = useSelector((state) => state.todo.toDo);
	const loading = useSelector((state) => state.todo.loader)
	const isDataLoaded = list.length > 0;

	useEffect(() => {
		if (!isDataLoaded) {
			disp(fetchTodo());
		}
	}, [disp, isDataLoaded]);

	const handleTodoState = (todoId) => {
		disp(toggleTodo(todoId))
	}
	return (
		loading ? <Loader /> :
			<div>
				<Title>This is a ToDo List</Title>
				{list.map((todo) => (
					<Item key={todo.id}>
						<ItemTitle>Task #{todo.id}</ItemTitle>
						{todo.completed ?
							<TaskCompleted>{todo.title}</TaskCompleted> :
							<TaskUnCompleted>{todo.title}</TaskUnCompleted>}
						<Button onClick={() => handleTodoState(todo.id)}>
							{todo.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
						</Button>
					</Item>
				))}
			</div>
	);

};

export default ToDo;