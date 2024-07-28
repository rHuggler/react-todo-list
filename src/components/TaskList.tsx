import { ClipboardText } from "@phosphor-icons/react";
import { Task, type TaskType } from "./Task";
import styles from "./TaskList.module.css";

export interface TaskListProps {
	tasks: TaskType[];
	setTaskList: React.Dispatch<React.SetStateAction<Required<TaskType>[]>>;
}

export function TaskList({ tasks: taskList, setTaskList }: TaskListProps) {
	const doneTasksCount = taskList.reduce(
		(acc, task) => (task.done ? acc + 1 : acc),
		0,
	); // TODO: this is not updating when task is done

	function handleDeleteTask(id: number) {
		const taskListWithoutDeleted = taskList.filter((task) => task.id !== id);
		setTaskList(taskListWithoutDeleted);
	}

	function renderTasksOrEmpty() {
		if (taskList.length) {
			return taskList.map((t) => (
				<Task
					key={t.id}
					id={t.id}
					done={t.done}
					description={t.description}
					onDeleteTask={handleDeleteTask}
				/>
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
