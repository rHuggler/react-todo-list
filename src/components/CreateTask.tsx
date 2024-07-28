import styles from "./CreateTask.module.css";

import { PlusCircle } from "@phosphor-icons/react";
import type React from "react";
import { useState } from "react";
import type { TaskType } from "./Task";

export interface CreateTaskProps {
	tasks: TaskType[];
	setTaskList: React.Dispatch<React.SetStateAction<Required<TaskType>[]>>;
}

export function CreateTask({ tasks: taskList, setTaskList }: CreateTaskProps) {
	const [newTaskDescription, setNewTaskDescription] = useState("");

	function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const newTask: TaskType = {
			id: taskList.length,
			done: false,
			description: newTaskDescription,
		};
		setTaskList([...taskList, newTask]);
		setNewTaskDescription("");
	}

	function handleNewTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
		setNewTaskDescription(e.target.value);
	}

	return (
		<form className={styles.createTaskForm} onSubmit={handleCreateNewTask}>
			<input
				type="text"
				name="task"
				placeholder="Create a new task"
				value={newTaskDescription}
				onChange={handleNewTaskChange}
				required
			/>
			<button type="submit">
				<span>Create</span>
				<PlusCircle size={16} />
			</button>
		</form>
	);
}
