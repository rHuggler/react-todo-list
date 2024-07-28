import { Trash } from "@phosphor-icons/react";
import type React from "react";
import { useState } from "react";
import styles from "./Task.module.css";

export interface TaskProps {
	id: number;
	done: boolean;
	description: string;
	onDeleteTask: (id: number) => void;
}

export interface TaskType {
	id: number;
	done: boolean;
	description: string;
}

export function Task({ id, done, description, onDeleteTask }: TaskProps) {
	const [taskStatus, setTaskStatus] = useState(done);

	function handleTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
		setTaskStatus(e.target.checked);
	}

	function handleDeleteTask() {
		onDeleteTask(id);
	}

	return (
		<div className={styles.task}>
			<div className={styles.checkboxContainer}>
				<input
					type="checkbox"
					name="status"
					id="taskId"
					onChange={handleTaskStatus}
					checked={taskStatus}
				/>
			</div>
			<p className={taskStatus ? styles.doneItem : ""}>{description}</p>
			{/* biome-ignore lint/a11y/noNoninteractiveTabindex: <Container for an icon> */}
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div className={styles.trashIcon} tabIndex={0} onClick={handleDeleteTask}>
				<Trash size={16} weight="bold" />
			</div>
		</div>
	);
}
