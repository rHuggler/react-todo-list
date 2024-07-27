import { ClipboardText } from "@phosphor-icons/react";
import { Task } from "./Task";
import styles from "./TaskList.module.css";

const tasks: number[] = [];

export function TaskList() {
	function renderTasksOrEmpty() {
		if (tasks.length) {
			return tasks.map((t) => <Task key={t} />);
		}

		return (
			<div className={styles.emptyTaskList}>
				<ClipboardText size={56} weight="light" />
				<strong>You don't have any tasks</strong>
				<p>Create tasks and organize your to-dos</p>
			</div>
		);
	}

	return (
		<div className={styles.taskList}>
			<header>
				<div className={styles.totalTasksInfo}>
					<strong>Created tasks</strong>
					<span>5</span>
				</div>
				<div className={styles.doneTasksInfo}>
					<strong>Done</strong>
					<span>2 of 5</span>
				</div>
			</header>
			<div>
				{/* conditionally render tasks or empty list element */}
				{renderTasksOrEmpty()}
			</div>
		</div>
	);
}
