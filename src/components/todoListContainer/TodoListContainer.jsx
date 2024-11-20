import { useState } from 'react';
import Filter from '../filter/Filter';
import Form from '../form/Form';
import TodoList from '../todoList/TodoList';

const TodoListContainer = () => {
	const [allTasks, setAllTasks] = useState([]);
	const [filter, setFilter] = useState(0);

	return (
		<>
			<Form allTasks={allTasks} setAllTasks={setAllTasks} />
			<TodoList
				allTasks={allTasks}
				setAllTasks={setAllTasks}
				filter={filter}
				setFilter={setFilter}
			/>
			<Filter filter={filter} setFilter={setFilter} />
		</>
	);
};

export default TodoListContainer;
