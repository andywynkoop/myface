import React, { Component } from 'react';
import {
  getYPositionOfErrorModal,
  getXPositionOfErrorModal
} from '../../util/signup_form_util';

export default class ErrorModal extends Component {
  render() {
    const { field, message } = this.props;
    const YPos = getYPositionOfErrorModal(field);
    const XPos = getXPositionOfErrorModal(field);
    if (!message) return <div />;
    return (
      <div className="error-modal" style={{ top: YPos, left: XPos }}>
        {message}
        <div className="error-modal-triangle" />
      </div>
    );
  }
}
