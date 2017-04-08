import React, { Component } from 'react';
import Request from 'request';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    Request.post({
        url: 'http://localhost:3001/api',
        form: {key: event.target.value}
    });
  }

  render() {
    return (
      <div>
        Editor
        <form>
          <textarea onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Editor;
