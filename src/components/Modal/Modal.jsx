import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styled.Overlay} onClick={this.props.onClose}>
        <div className={styled.Modal}>
          <img src={this.props.img} alt="Large" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
