const Task = ({ task, allTasks, setAllTasks }) => {
	return (
		<div>
			<input
				id={task.id}
				type='checkbox'
				checked={task.checked}
				onChange={() => checkTask(task.id, allTasks, setAllTasks)}
			/>
			<label htmlFor={task.id}>{task.task}</label>
			<span>X</span>
		</div>
	);
};

const checkTask = (id, allTasks, setAllTasks) => {
	const updatedTasks = allTasks.map(task => {
		if (task.id === id) {
			task.checked = !task.checked;
		}

		return task;
	});
	setAllTasks(updatedTasks);
};

export default Task;
