import "./TodoList.css";

import * as stateController from "./stateController";
import * as utils from "./utils";

import React, { Component } from "react";

import Button from "../../../components/funcComponents/Button/Button";
import Checkbox from "../../../components/funcComponents/Checkbox/Checkbox";
import Query from "../../../components/funcComponents/TodoList/Query";
import RemoveButton from "../../../components/classComponents/TodoList/RemoveButton";
import Textarea from "../../../components/funcComponents/Textarea/Textarea";

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			addToTheEnd: false,
			// needed if editing some existing 'todo'. Default to `-1`
			editingIndex: -1,
			error: "",
			list: [],
			queryText: "",
			queryDone: "any",
			text: "",
		};
	}

	onClickCancelEdit = () => {
		this.setState({ editingIndex: -1, text: "" });
	};

	onChangeText = (e) => {
		this.setState(stateController.changeText(e.target.value));
	};

	addTodo = () => {
		this.setState(stateController.addTodo(this.state));
	};

	onKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			this.addTodo();
		}
	};

	onClickAddToEnd = () => {
		this.setState({ addToTheEnd: !this.state.addToTheEnd });
	};

	filter = (todo) => utils.filter(this.state)(todo);

	onChangeQueryText = (e) => {
		this.setState({ queryText: e.target.value });
	};

	onChangeQueryDone = (e) => {
		this.setState({ queryDone: e.target.value });
	};

	onClickChangeDone = (id) => () => {
		this.setState(stateController.changeDone(id, this.state));
	};

	onClickEditTodo = (id) => () => {
		this.setState(stateController.editTodo(id, this.state));
	};

	onClickRemoveTodo = (id) => () => {
		this.setState(stateController.removeTodo(id, this.state));
	};

	onClickMoveUp = (id) => () => {
		const index = this.state.list.findIndex((todo) => todo.id === id);

		let newState = {};

		if (index > 0) {
			newState.list = [
				...this.state.list.slice(0, index - 1),
				{ ...this.state.list[index], id: id - 1 },
				{ ...this.state.list[index - 1], id: id },
				...this.state.list.slice(index + 1),
			];
		}

		this.setState(newState);
	};

	onClickMoveDown = (id) => () => {
		const index = this.state.list.findIndex((todo) => todo.id === id);

		let newState = {};

		if (index < this.state.list.length) {
			newState.list = [
				...this.state.list.slice(0, index),
				{ ...this.state.list[index + 1], id },
				{ ...this.state.list[index], id: id + 1 },
				...this.state.list.slice(index + 2),
			];
		}

		this.setState(newState);
	};

	render() {
		return (
			<section
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1
					style={{
						fontSize: 50,
					}}
				>
					T0D0{" "}
					<p style={{ display: "inline", color: "purple" }}>
						LIST
					</p>
				</h1>

				<div
					className={"todo-list"}
					style={{
						minWidth: 200,
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							margin: 8,
						}}
					>
						{this.state.editingIndex > -1 && (
							<Button
								style={{
									fontSize: 15,
								}}
								text={"Cancel editing"}
								onClick={this.onClickCancelEdit}
							/>
						)}
						{this.state.error !== "" && (
							<p
								style={{
									backgroundColor:
										"#B44028",
									padding: 2,
									textAlign: "center",
									maxWidth: "100%",
								}}
							>
								Error: {this.state.error}
							</p>
						)}
						<Textarea
							text={this.state.text}
							style={{
								width: 240,
								height: 150,
								fontSize: 15,
								overflowY: "auto",
							}}
							onChange={this.onChangeText}
							onKeyDown={this.onKeyDown}
						/>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<p style={{ marginRight: 4 }}>
								Add to the start
							</p>
							<Checkbox
								checked={this.state.addToTheEnd}
								onClick={this.onClickAddToEnd}
							/>
						</div>
						<Button
							style={{
								fontSize: 15,
							}}
							text={"Add"}
							onClick={this.addTodo}
						/>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							margin: 8,
						}}
					>
						<Query
							queryText={this.state.queryText}
							queryDone={this.state.queryDone}
							onChangeQueryText={
								this.onChangeQueryText
							}
							onChangeQueryDone={
								this.onChangeQueryDone
							}
						/>
						<div
							style={{
								marginTop: 3,
								width: 260,
								height: 350,
								overflowY: "scroll",
							}}
						>
							{this.state.list
								.filter(this.filter)
								.map(this.ToDo)}
						</div>
					</div>
				</div>
			</section>
		);
	}

	ToDo = (todo, i) => {
		return (
			<div
				key={i + "_todo-list"}
				style={{
					backgroundColor: "#323742",
					border: "1px solid black",
					width: 240,
					height: "max-content",
					margin: "4px 0",
					padding: 3,
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "flex-start",
				}}
			>
				<div
					style={{
						width: "100%",

						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<p
						style={{
							width: "100%",
							maxWidth: "100%",
							wordBreak: "break-all",
							whiteSpace: "normal",
							wordWrap: "break-word",
							overflowWrap: "break-word",
						}}
					>
						{todo.text}
					</p>
				</div>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
					}}
				>
					<div
						style={{
							display: "flex",
						}}
					>
						<Button
							style={{
								fontSize: 15,
							}}
							text={"Edit"}
							onClick={this.onClickEditTodo(
								todo.id
							)}
						/>
						<RemoveButton
							onClickRemove={this.onClickRemoveTodo(
								todo.id
							)}
						/>
						<Button
							style={{
								fontSize: 15,
							}}
							text={String.fromCharCode(8593)}
							onClick={this.onClickMoveUp(todo.id)}
						/>
						<Button
							style={{
								fontSize: 15,
							}}
							text={String.fromCharCode(8595)}
							onClick={this.onClickMoveDown(
								todo.id
							)}
						/>
					</div>
					<Button
						style={{
							fontSize: 15,
							backgroundColor: todo.done
								? "green"
								: "red",
						}}
						text={todo.done ? "Done" : "To do"}
						onClick={this.onClickChangeDone(todo.id)}
					/>
				</div>
			</div>
		);
	};
}

export default TodoList;
