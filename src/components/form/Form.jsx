const Form = ({ allTasks, setAllTasks }) => {
	return (
		<form onSubmit={e => handleSubmit(e, allTasks, setAllTasks)}>
			<input type='text' name='todo' />
		</form>
	);
};

const handleSubmit = (e, allTasks, setAllTasks) => {
	e.preventDefault();
	const newTask = {
		id: Date.now(),
		task: e.target.todo.value,
		checked: false
	};

	setAllTasks([...allTasks, newTask]);
	e.target.todo.value = '';
};

export default Form;
