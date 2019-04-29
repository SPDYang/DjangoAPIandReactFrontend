import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos, deleteTodo, getOneTodo, gettodoTodos, getdoingTodos, getdoneTodos, updateTodo } from '../../actions/todos';


export class Todos extends Component {
	static propTyeps = {
		todos: PropTypes.array.isRequired,
		getTodos: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
		getOneTodo: PropTypes.func.isRequired,
		gettodoTodos: PropTypes.func.isRequired,
		getdoingTodos: PropTypes.func.isRequired,
		getdoneTodos: PropTypes.func.isRequired,
		updateTodo: PropTypes.func.isRequired,
	};

	display_detail = false;
	
	componentDidMount() {
		this.props.getTodos();
	}

	ChangeColor = status => {
		if(status === "done") {
			return "green";
		}else if(status === "todo") {
			return "red";
		}else {
			return "";
		}
	};

	detail = id => {
		this.props.getOneTodo(id);
		this.display_detail = true;
	}

	complete = (id, todo) => {
		todo.status = "done"
		const { content, due, status } = todo;
		const new_todo = { content, due, status }
		this.props.updateTodo(id, new_todo);
		console.log(id)
		console.log(new_todo)
	}
	
	render() {
		return(	
			<div>
				<div className = "row">
					<div className = "col"><button onClick = {() => {this.display_detail = false;this.props.getTodos()}}>all</button></div>
					<div className = "col"><button onClick = {() => {this.display_detail = false;this.props.gettodoTodos()}}>todo</button></div>
					<div className = "col"><button onClick = {() => {this.display_detail = false;this.props.getdoingTodos()}}>doing</button></div>
					<div className = "col"><button onClick = {() => {this.display_detail = false;this.props.getdoneTodos()}}>done</button></div>
				</div>
				<h1>Todo</h1>
				<table className = "table table-striped">
					<thead>
						<tr>
							<th></th>
							<th>Task</th>
							{ this.display_detail ? <th>Due</th>: null}
							{ this.display_detail ? <th>Status</th>: null}
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.props.todos.map(todo => (
							<tr key = {todo.id} style = {{
									color: this.ChangeColor(todo.status)
								}}>
								<td>
									<button className = "btn btn-dark btn-sm" onClick = {() => {this.complete(todo.id, todo)}}>complete</button>
								</td>
								<td onClick = {() => {this.detail(todo.id)}}>{todo.content}</td>
								{ this.display_detail ? <td>{todo.due}</td>: null}
								{ this.display_detail ? <td>{todo.status}</td>: null}
								<td>
									<button className = "btn btn-danger btn-sm" onClick = {this.props.deleteTodo.bind(this, todo.id)}>Delete</button>
								</td>							
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todos.todos
});

export default connect(mapStateToProps, { getTodos, deleteTodo, getOneTodo, gettodoTodos, getdoneTodos, getdoingTodos, updateTodo })(Todos);