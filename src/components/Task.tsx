import { Trash } from "@phosphor-icons/react";
import type React from "react";
import { useState } from "react";
import styles from "./Task.module.css";

export function Task() {
	const [taskStatus, setTaskStatus] = useState(false);

	function handleTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
		setTaskStatus(e.target.checked);
	}

	return (
		<div className={styles.task}>
			<div className={styles.checkboxContainer}>
				<input
					type="checkbox"
					name="status"
					id="taskId"
					onChange={handleTaskStatus}
				/>
			</div>
			<p className={taskStatus ? styles.doneItem : ""}>
				Integer urna interdum massa libero auctor neque turpis turpis semper.
				Duis vel sed fames integer.
			</p>
			{/* biome-ignore lint/a11y/noNoninteractiveTabindex: <Container for an icon> */}
			<div className={styles.trashIcon} tabIndex={0}>
				<Trash size={16} weight="bold" />
			</div>
		</div>
	);
}
