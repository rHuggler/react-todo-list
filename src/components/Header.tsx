import todoLogo from "../assets/todo_logo.svg";

import styles from "./Header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<img
				src={todoLogo}
				alt="A logo consisting of a rocket and the word todo"
			/>
		</header>
	);
}
