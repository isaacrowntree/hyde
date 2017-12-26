import React, { Component } from 'react';
import { connect } from 'react-redux';

class Status extends Component {

  render () {
    const { success, error } = this.props;

    if (success) {
      return (
        <p className="alert alert-success">{success}</p>
      );
    }

    if (error) {
      return (
        <p className="alert alert-danger">{error}</p>
      );
    }

    return false;
  }
}

const mapStateToProps = (state) => {
  const { success, error } = state.msg;
  return { success, error };
};

Status = connect(mapStateToProps)(Status);

export default Status;
