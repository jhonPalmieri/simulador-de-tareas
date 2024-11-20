const Filter = ({ setFilter }) => {
	return (
		<div>
			<button onClick={() => setFilter(0)}>All</button>
			<button onClick={() => setFilter(1)}>Active</button>
			<button onClick={() => setFilter(2)}>Completed</button>
		</div>
	);
};

export default Filter;
