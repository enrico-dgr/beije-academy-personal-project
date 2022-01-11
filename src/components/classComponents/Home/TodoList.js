import React, { Component } from "react";

import Button from "../../funcComponents/Button/Button";
import Checkbox from "../../funcComponents/Checkbox/Checkbox";
import Input from "../../funcComponents/Input/Input";
import Select from "../../funcComponents/Select/Select";
import Textarea from "../../funcComponents/Textarea/Textarea";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addToTheEnd: false,
      // needed if editing some existing 'todo'. Default to `-1`
      editingIndex: -1,
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
    this.setState({ text: e.target.value });
  };

  addTodo = () => {
    let newState = {
      addToTheEnd: false,
      editingIndex: -1,
      text: "",
    };

    if (this.state.text === "") {
      return;
    }

    if (this.state.editingIndex > -1) {
      newState.list = [
        ...this.state.list.slice(0, this.state.editingIndex),
        {
          ...this.state.list[this.state.editingIndex],
          text: this.state.text,
        },
        ...this.state.list.slice(this.state.editingIndex + 1),
      ];
    } else if (this.state.addToTheEnd) {
      newState.list = [
        {
          done: false,
          text: this.state.text,
        },
        ...this.state.list,
      ];
    } else {
      newState.list = [
        ...this.state.list,
        {
          done: false,
          text: this.state.text,
        },
      ];
    }

    this.setState(newState);
  };

  onClickAddToEnd = () => {
    this.setState({ addToTheEnd: !this.state.addToTheEnd });
  };

  onClickAdd = () => {
    this.addTodo();
  };

  filter = (todo) => {
    let stringMatch = false;
    let doneMatch = false;

    if (this.state.queryDone === "any") {
      doneMatch = true;
    } else {
      if (this.state.queryDone === "done" && todo.done) {
        doneMatch = true;
      } else if (this.state.queryDone === "todo" && !todo.done) {
        doneMatch = true;
      }
    }

    if (this.state.queryText === "") {
      stringMatch = true;
    } else {
      const res = todo.text.match(new RegExp(this.state.queryText, "i"));

      if (res !== null && res.length > 0) {
        stringMatch = true;
      }
    }

    return doneMatch && stringMatch;
  };

  onChangeQueryText = (e) => {
    this.setState({ queryText: e.target.value });
  };

  onChangeQueryDone = (e) => {
    this.setState({ queryDone: e.target.value });
  };

  onClickDone = (index, done) => () => {
    this.setState({
      list: [
        ...this.state.list.slice(0, index),
        {
          ...this.state.list[index],
          done: !done,
        },
        ...this.state.list.slice(index + 1),
      ],
    });
  };

  onClickEdit = (index) => () => {
    this.setState({
      text: this.state.list[index].text,
      editingIndex: index,
    });
  };

  onClickRemove = (index) => () => {
    this.setState({
      list: [
        ...this.state.list.slice(0, index),
        ...this.state.list.slice(index + 1),
      ],
    });
  };

  onClickMoveUp = (index) => () => {
    if (index < 1) {
      return;
    }

    this.setState({
      list: [
        ...this.state.list.slice(0, index - 1),
        this.state.list[index],
        this.state.list[index - 1],
        ...this.state.list.slice(index + 1),
      ],
    });
  };

  onClickMoveDown = (index) => () => {
    if (index + 1 === this.state.list.length) {
      return;
    }

    this.setState({
      list: [
        ...this.state.list.slice(0, index),
        this.state.list[index + 1],
        this.state.list[index],
        ...this.state.list.slice(index + 2),
      ],
    });
  };

  render() {
    return (
      <div style={{ minWidth: 200 }}>
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
          <Textarea
            text={this.state.text}
            style={{
              width: 240,
              height: 150,
              fontSize: 15,
              overflowY: "auto",
            }}
            onChange={this.onChangeText}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ marginRight: 4 }}>Add to the start</p>
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
            onClick={this.onClickAdd}
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Input
              placeholder={"search"}
              value={this.state.queryText}
              onChange={this.onChangeQueryText}
            />
            <Select
              name={"done"}
              style={{
                width: 55,
              }}
              options={[
                { value: "any", text: "Any" },
                { value: "done", text: "Done" },
                { value: "todo", text: "Todo" },
              ]}
              value={this.state.queryDone}
              onChange={this.onChangeQueryDone}
            />
          </div>
          <div>{this.state.list.filter(this.filter).map(this.ToDo)}</div>
        </div>
      </div>
    );
  }

  ToDo = (todo, i) => {
    return (
      <div
        key={i + "_todo-list"}
        style={{
          border: "1px solid black",
          width: "100%",
          height: "max-content",
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
          <p>{todo.text}</p>
          <Button
            style={{
              fontSize: 15,
              backgroundColor: todo.done ? "green" : "red",
            }}
            text={todo.done ? "Done" : "To do"}
            onClick={this.onClickDone(i, todo.done)}
          />
        </div>
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
            onClick={this.onClickEdit(i)}
          />
          <Button
            style={{
              fontSize: 15,
            }}
            text={"X"}
            onClick={this.onClickRemove(i)}
          />
          {this.state.queryText === "" && (
            <>
              <Button
                style={{
                  fontSize: 15,
                }}
                text={String.fromCharCode(8593)}
                onClick={this.onClickMoveUp(i)}
              />
              <Button
                style={{
                  fontSize: 15,
                }}
                text={String.fromCharCode(8595)}
                onClick={this.onClickMoveDown(i)}
              />
            </>
          )}
        </div>
      </div>
    );
  };
}

export default TodoList;
