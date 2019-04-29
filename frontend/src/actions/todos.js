import axios from 'axios';


// GET TODOS
export const getTodos = () => dispatch => {
	axios.get("/api/task/").then(res => {
		dispatch({
			type: "GET_TODOS",
			payload: res.data
		});
	}).catch(err => console.log(err));
};


// GET SINGLE TODO
export const getOneTodo = (id) => dispatch => {
	axios.get(`/api/task/${id}/`).then(res => {
		dispatch({
			type: "GET_ONE_TODO",
			payload: res.data
		});
	}).catch(err => console.log(err));
};


// DELETE TODO
export const deleteTodo = (id) => dispatch => {
	axios.delete(`/api/task/${id}/`).then(res => {
		dispatch({
			type: "DELETE_TODO",
			payload: id
		});
	}).catch(err => console.log(err));
};


// ADD TODO
export const addTodo = (todo) => dispatch => {
	axios.post("/api/task/", todo).then(res => {
		dispatch({
			type: "ADD_TODO",
			payload: res.data
		});
	}).catch(err => console.log(err));
};


// UPDATE TODO
export const updateTodo = (id, todo) => dispatch => {
	axios.put(`/api/task/${id}/`, todo).then(res => {
		dispatch({
			type: "UPDATE_TODO",
			payload: res.data
		});
	}).catch(err => console.log(err));
};


// FILTER todo TODOS
export const gettodoTodos = () => dispatch => {
	axios.get("/api/todo_task/").then(res => {
		dispatch({
			type: "GET_TODO_TODOS",
			payload: res.data
		});
	}).catch(err => console.log(err));
};


// FILTER doing TODOS
export const getdoingTodos = () => dispatch => {
	axios.get("/api/doing_task/").then(res => {
		dispatch({
			type: "GET_DOING_TODOS",
			payload: res.data
		});
	}).catch(err => console.log(err));
};


// FILTER done TODOS
export const getdoneTodos = () => dispatch => {
	axios.get("/api/done_task/").then(res => {
		dispatch({
			type: "GET_DONE_TODOS",
			payload: res.data
		});
	}).catch(err => console.log(err));
};