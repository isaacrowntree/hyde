import React, { Component } from 'react';

class Message extends Component {

	render () {
		if (!this.props.store.publish) {
			return false;
		}
		if (this.props.store.publish.success) {
			return (
				<p className="alert alert-success">Publish successful!</p>
			);
		}
		else if (this.props.store.publish.noResponse) {
			return (
				<p className="alert alert-danger">No response from server.</p>
			);
		}
		else if (this.props.store.publish.notAvailable) {
			return (
				<p className="alert alert-danger">Server unavailable.</p>
			);
		}
		else {
			// No message
			return false;
		}
	}
}

export default Message;
