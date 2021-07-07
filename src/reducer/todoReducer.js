import { ADD_TODO, REMOVE_TODO } from '../action/action-types';

const initialState = [];

if (localStorage.getItem('aptodos')) {
	const todos = JSON.parse(localStorage.getItem('aptodos'));

	todos.map((todo) => initialState.push(todo));
} else {
	localStorage.setItem('aptodos', JSON.stringify(initialState));
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			const localTodos = JSON.parse(localStorage.getItem('aptodos'));

			localTodos.push(action.payload);

			localStorage.setItem('aptodos', JSON.stringify(localTodos));

			return [ ...state, action.payload ];

		case REMOVE_TODO:
			const todoState = state.filter((todo) => todo !== action.payload);
			console.log(todoState);

			localStorage.setItem('aptodos', JSON.stringify(todoState));

			return todoState;

		default:
			return state;
	}
};

export default todoReducer;
