import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      continueShowModal: true,
    };
    this.handleContinueShowModal = this.handleContinueShowModal.bind(this);
  }

  handleContinueShowModal({ target }) {
    if (target.checked) this.setState({ continueShowModal: false });
  }

  handleClick(event, continueShowModal, handleCheck, closeModal) {
    if (!continueShowModal) {
      handleCheck(event);
    }
    closeModal();
  }

  render() {
    const { showModal, closeModal, handleCheck } = this.props;
    const { continueShowModal } = this.state;

    if (showModal) {
      return (
        <div className="Modal">
          <button
            type="button"
            className="close-btn"
            onClick={ (event) => this.handleClick(event,
              continueShowModal, handleCheck, closeModal) }
          >
            close
          </button>
          <h3 className="modal-title">Title</h3>
          <div className="modal-product-description">
            <p>O item foi adicionado ao carrinho</p>

          </div>

          <div className="modal-options">
            <label htmlFor="permaClose">Não mostrar isso novamente</label>
            <input
              onChange={ this.handleContinueShowModal }
              type="checkbox"
              name="permaClose"
            />
            <button
              onClick={ !continueShowModal && handleCheck }
              type="button"
              className="keep-buy"
            >
              Continuar comprando
            </button>
            <button
              onClick={ !continueShowModal && handleCheck }
              type="button"
              className="forward"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      );
    }
  }
}
