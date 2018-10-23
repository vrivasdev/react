import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
  render() {
    return createPortal(
      this.props.children, // Rendered data
      document.getElementById('modal-container') // Place where to render it
    )
  }
}

export default ModalContainer
