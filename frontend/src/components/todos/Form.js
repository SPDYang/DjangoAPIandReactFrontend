import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos, addTodo } from '../../actions/todos';

export class Form extends Component {
	state = {
		content: '',
		due: '',
		status: '',
	};

	static propTypes = {
		addTodo: PropTypes.func.isRequired,
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = e => {
		e.preventDefault();
		const { content, due, status } = this.state;
		const todo = { content, due,  status};
		this.props.addTodo(todo);
		this.setState({
			content: "",
			due: "",
			status: todo.status
		});
	};

	render() {
		const { content, due, status } = this.state;
		return (
			<div className="card card-body mt-4 mb-4">
				<h2>Add Todo</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Content</label>
						<input
						className = "form-control"
						type = "text"
						name = "content"
						onChange = {this.onChange}
						value = {content}
						/>
					</div>
					<div className = "form-group">
						<label>Due</label>
						<input className = "form-control" type = "datetime-local" name = "due" onChange = {this.onChange} value = {due}
						/>
					</div>
					<div className = "form-group">
						<label>Status</label>
						<select id = "select_status" name = "status" onChange={this.onChange} className = "browser-default custom-select">
				            <option value = ""> -- select an option -- </option>
				            <option value = "todo">todo</option>
				            <option value = "in-progress">in-progress</option>
				            <option value = "done">done</option>
				        </select>
					</div>
					<div className = "form-group">
						<button type = "submit" className = "btn btn-primary">
						Submit
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(null, { addTodo })(Form);