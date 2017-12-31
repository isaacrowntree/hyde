import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Store, SUCCESS, ERROR } from '../../Redux';

class Status extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // Prevent a re-render if there's nothing to render
    if (!nextProps.success && !nextProps.error) {
      return false;
    }
    return true;
  }

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

  componentDidUpdate() {
    // Consume status messages by emptying Storage after render
    Store.dispatch({ type: SUCCESS, payload: undefined });
    Store.dispatch({ type: ERROR, payload: undefined });
  }
}

const mapStateToProps = (state) => {
  if (state.msg) {
    const { success, error } = state.msg;
    return { success, error };
  }
};

Status = connect(mapStateToProps)(Status);

export default Status;
