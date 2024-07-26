import { Task } from "./Task";
import styles from "./TaskList.module.css";

export function TaskList() {
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
			<Task />
			<Task />
			<Task />
		</div>
	);
}
