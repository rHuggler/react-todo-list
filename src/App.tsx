import { useState } from "react";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import type { TaskType } from "./components/Task";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";
import "./global.css";

const defaultTaskList: Required<TaskType>[] = [
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

export function App() {
	const [taskList, setTaskList] =
		useState<Required<TaskType>[]>(defaultTaskList);

	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<CreateTask />
				<TaskList tasks={taskList} setTaskList={setTaskList} />
			</div>
		</>
	);
}
