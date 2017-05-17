import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import Interweave from 'interweave';
import './Editor.css';

import { config } from './../../../server/config';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileContent: '',
      file: '',
      saved: false,
    };
  }

  componentWillReceiveProps(nextProps) {
      this.file(nextProps.file);
      this.setState({ file: nextProps.file });
  }

  file(file) {
    if (file !== '') {
      axios.post(`http://localhost:${config.port}/file`, { file }).then(res => {
        this.setState({ fileContent: res.data });
      });
    }
  }

  handleChange(event) {
    this.setState({ fileContent: event.target.value });
  }

  handleSubmit(event) {
    axios.post(`http://localhost:${config.port}/save`, { file: this.state.file, data: this.state.fileContent }).then(res => {
      this.setState({ saved: true });
    });
  }

  render() {
    return (
      <div>
        <textarea className="Editor" value={this.state.fileContent} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        <h2>Preview</h2>
        <Interweave tagName="div" content={marked(this.state.fileContent) } />
      </div>
    );
  }
}

export default Editor;
