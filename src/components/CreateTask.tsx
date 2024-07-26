import styles from "./CreateTask.module.css";

import { PlusCircle } from "@phosphor-icons/react";

export function CreateTask() {
	return (
		<form className={styles.createTaskForm}>
			<input type="text" name="task" placeholder="Create a new task" required />
			<button type="button">
				<span>Create</span>
				<PlusCircle size={16} />
			</button>
		</form>
	);
}
