const initialState = {
	todos: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case "GET_TODOS":
			return {
				...state,
				todos: action.payload
			};

		case "GET_ONE_TODO":
			return {
				...state,
				todos: [action.payload]
			};
		
		case "DELETE_TODO":
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload
				)
			};

		case "ADD_TODO":
			return {
				...state,
				todos: [action.payload]
			};

		case "GET_TODO_TODOS":
			return {
				...state,
				todos: action.payload
			};

		case "GET_DOING_TODOS":
			return {
				...state,
				todos: action.payload
			};

		case "GET_DONE_TODOS":
			return {
				...state,
				todos: action.payload
			};

		case "UPDATE_TODO":
			return {
				...state,
				todos: [action.payload]
			};

		case "GET_DATE_TODOS":
			return {
				...state,
				todos: action.payload
			};
		
		default:
			return state;
	}
}