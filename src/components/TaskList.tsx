import { ClipboardText } from "@phosphor-icons/react";
import { useState } from "react";
import { Task, type TaskProps } from "./Task";
import styles from "./TaskList.module.css";

const defaultTaskList: Required<TaskProps>[] = [
	{
		id: 0,
		done: false,
		description:
			"Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
	},
	{
		id: 1,
		done: true,
		description:
			"Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
	},
];

export function TaskList() {
	const [taskList, setTaskList] = useState(defaultTaskList);

	const doneTasksCount = taskList.reduce(
		(acc, task) => (task.done ? acc + 1 : acc),
		0,
	);

	function renderTasksOrEmpty() {
		if (taskList.length) {
			return taskList.map((t) => (
				<Task key={t.id} done={t.done} description={t.description} />
			));
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
					<span>{taskList.length}</span>
				</div>
				<div className={styles.doneTasksInfo}>
					<strong>Done</strong>
					<span>
						{doneTasksCount} of {taskList.length}
					</span>
				</div>
			</header>
			<div>
				{/* conditionally render tasks or empty list element */}
				{renderTasksOrEmpty()}
			</div>
		</div>
	);
}
