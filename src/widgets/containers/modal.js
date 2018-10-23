import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
  render() {
    /* Portals provide a first-class way to render children into a DOM node that
       exists outside the DOM hierarchy of the parent component */
    return createPortal(
      this.props.children, // Rendered data
      document.getElementById('modal-container') // Place where to render it
    )
  }
}

export default ModalContainer
