import React, { Component } from 'react';
import { connect } from 'react-redux';

class Status extends Component {

  render () {
    const { success = '', error = '' } = this.props;

    if (success.length > 0) {
      return (
        <p className="alert alert-success">{success}</p>
      );
    }
    else if (error.length > 0) {
      return (
        <p className="alert alert-danger">{error}</p>
      );
    }
    else {
      // No message
      return false;
    }
  }
}

const mapStateToProps = (state) => {
  const { success, error } = state.msg;
  return { success, error };
};

Status = connect(mapStateToProps)(Status);

export default Status;
