import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos, deleteTodo, getOneTodo, gettodoTodos, getdoingTodos, getdoneTodos, updateTodo, getdateTodos } from '../../actions/todos';


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
		getdateTodos: PropTypes.func.isRequired,
	};

	display_detail = false;
	
	componentDidMount() {
		this.props.getTodos();
	}

	ChangeColor = todo => {
		let nowTime = new Date();
		let dueTime = new Date(todo.due);
		if(todo.status === "done") {
			return "green";
		}else if(nowTime > dueTime) {
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
		// console.log(id)
		// console.log(new_todo)
	}

	getDate = (datetime) => {
		this.display_detail = false;
		let dateHolder = datetime.substr(0, 10);
		let date = dateHolder[8] + dateHolder[9] + dateHolder[5] + dateHolder[6] + dateHolder[0] + dateHolder[1] + dateHolder[2] + dateHolder[3];
		// console.log(date);
		this.props.getdateTodos(date);
	}
	
	render() {
		return(	
			<div>
				<div className = "row">
					<div className = "col"><a href = "#" onClick = {() => {this.display_detail = false; this.props.getTodos()}}>all</a></div>
					<div className = "col"><a href = "#" onClick = {() => {this.display_detail = false; this.props.gettodoTodos()}}>todo</a></div>
					<div className = "col"><a href = "#" onClick = {() => {this.display_detail = false; this.props.getdoingTodos()}}>in-progress</a></div>
					<div className = "col"><a href = "#" onClick = {() => {this.display_detail = false; this.props.getdoneTodos()}}>done</a></div>
				</div>
				<h1>Todo</h1>
				<table className = "table table-striped">
					<thead>
						<tr>
							<th>{ this.display_detail ? null : "Task"}</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.props.todos.map(todo => {
							if(this.display_detail === false)
								return(
									<tr key = {todo.id}>
										<td className = "crop"><a href = "#" onClick = {() => {this.detail(todo.id)}}  style = {{color: this.ChangeColor(todo)}}>{todo.content}</a>
										</td>
										<td>
											<a href = "#"  onClick = {() => {this.complete(todo.id, todo)}}>&#10004;</a>
										</td>								
										<td>
											<a href = "#" onClick = {this.props.deleteTodo.bind(this, todo.id)}>&#x2718;</a>
										</td>							
									</tr>							
								)
							return(
								<Fragment key = {todo.id}>
									<tr>
										<td className = "crop"><a href = "#" onClick = {() => {this.detail(todo.id)}}  style = {{color: this.ChangeColor(todo)}}>{todo.content}</a>
										</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td className = "crop" >
											<a href = "#" onClick = {() => {this.getDate(todo.due)}}  style = {{color: this.ChangeColor(todo)}}>Due: {todo.due}</a>
										</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td  style = {{color: this.ChangeColor(todo)}}>Status: {todo.status}</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>
											<a href = "#"  onClick = {() => {this.complete(todo.id, todo)}}>&#10004;</a>
										</td>								
										<td>
											<a href = "#" onClick = {this.props.deleteTodo.bind(this, todo.id)}>&#x2718;</a>
										</td>
									</tr>
								</Fragment>
							)
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todos.todos
});

export default connect(mapStateToProps, { getTodos, deleteTodo, getOneTodo, gettodoTodos, getdoneTodos, getdoingTodos, updateTodo, getdateTodos })(Todos);