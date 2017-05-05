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
    };
  }

  componentWillReceiveProps(nextProps) {
      this.file(nextProps.file);
  }

  file(file) {
    axios.post(`http://localhost:${config.port}/file`, { file }).then(res => {
      this.setState({ fileContent: res.data });
    });
  }

  render() {
    return (
      <div>
        <textarea className="Editor" value={this.state.fileContent} />
        <h2>Preview</h2>
        <Interweave tagName="div" content={marked(this.state.fileContent) } />
      </div>
    );
  }
}

export default Editor;
