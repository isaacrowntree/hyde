import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Status.css';

class Status extends Component {

	render () {
		if (this.props.msg) {
			if (this.props.msg.success.length > 0) {
				return (
					<p className="alert alert-success">{this.props.msg.success}</p>
				);
			}
			else if (this.props.msg.error.length > 0) {
				return (
					<p className="alert alert-danger">{this.props.msg.error}</p>
				);
			}
		}
		else {
			// No message
			return false;
		}
	}
}

Status = connect(state => state)(Status);

export default Status;
