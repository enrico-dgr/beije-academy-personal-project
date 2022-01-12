import "./RemoveButton.css";

import React, { Component } from "react";

import Button from "../../funcComponents/Button/Button";
import Modal from "../../funcComponents/Modal/Modal";
import PropTypes from "prop-types";

class RemoveButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  onClickShowModal = () => {
    this.setState({
      showModal: true,
    });
  };

  onClickHideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  onClickRemove = () => {
    this.onClickHideModal();
    this.props.onClickRemove();
  };

  render() {
    return (
      <>
        <Button
          style={{
            fontSize: 15,
          }}
          text={"X"}
          onClick={this.onClickShowModal}
        />
        {this.state.showModal && (
          <Modal
            style={{
              backgroundColor: "cadetblue",
              borderColor: "black",
            }}
          >
            <p className={"todo-list__remove-button__modal__text"}>
              Confirm do you want to remove todo from list?
            </p>
            <div className={"todo-list__remove-button__modal__buttons"}>
              <Button
                style={{
                  fontSize: 15,
                }}
                text={"Yes"}
                onClick={this.onClickRemove}
              />
              <Button
                style={{
                  fontSize: 15,
                }}
                text={"No"}
                onClick={this.onClickHideModal}
              />
            </div>
          </Modal>
        )}
      </>
    );
  }
}

RemoveButton.propTypes = {
  onClickRemove: PropTypes.func.isRequired,
};

export default RemoveButton;
