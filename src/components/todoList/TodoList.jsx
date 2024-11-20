import { useState } from 'react';
import Task from '../task/Task';

const TodoList = ({ allTasks, setAllTasks, filter }) => {
	let tasksToRender;
	if (filter === 0) {
		tasksToRender = allTasks.map(task => {
			return (
				<Task
					key={task.id}
					task={task}
					allTasks={allTasks}
					setAllTasks={setAllTasks}
				/>
			);
		});
	} else if (filter === 1) {
		tasksToRender = allTasks
			.filter(task => !task.checked)
			.map(task => {
				return (
					<Task
						key={task.id}
						task={task}
						allTasks={allTasks}
						setAllTasks={setAllTasks}
					/>
				);
			});
	} else if (filter === 2) {
		tasksToRender = allTasks
			.filter(task => task.checked)
			.map(task => {
				return (
					<Task
						key={task.id}
						task={task}
						allTasks={allTasks}
						setAllTasks={setAllTasks}
					/>
				);
			});
	}

	return tasksToRender;
};

export default TodoList;
