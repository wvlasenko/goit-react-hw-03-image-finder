import { Component } from 'react';
import PropTypes from 'prop-types';
import ModalStl from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressEscBtn);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressEscBtn);
    this.props.onCloseModal();
  }

  pressEscBtn = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { onCloseModal, children } = this.props;

    return (
      <div className={ModalStl.overlay} onClick={onCloseModal}>
        <div className={ModalStl.modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
