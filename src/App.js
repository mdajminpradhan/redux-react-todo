import { useState } from 'react';
import './App.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './action/action';

const App = ({ todos, createNewTodo, deleteTodo }) => {
	const [ todo, setTodo ] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (todo === '') {
			alert('Hey add something please');
		} else {
			createNewTodo(todo);
			setTodo('');
		}
	};

	const deleteMyTodo = (todo) => {
		deleteTodo(todo);
	};

	return (
		<div className="todo">
			<div className="container">
				<div className="todo__input">
					<form>
						<h3>Create your checklist for the day</h3>
						<input
							type="text"
							placeholder="Learn python..."
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
							required
						/>
						<button onClick={handleSubmit}>Add Item</button>
					</form>
				</div>
				<div className="todo__todos">
					<ul>
						{todos.length >= 1 ? (
							todos.map((todo, index) => (
								<li key={(todo, index)}>
									<span>{todo}</span>
									<AiOutlineDelete onClick={() => deleteMyTodo(todo)} />
								</li>
							))
						) : (
							<li>
								<span>No todo found</span>
								<span />
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	todos: state
});

const mapDispatchToProps = (dispatch) => ({
	createNewTodo: (todo) => {
		dispatch(addTodo(todo));
	},

	deleteTodo: (todo) => {
		dispatch(removeTodo(todo));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
