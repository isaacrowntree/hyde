import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import Interweave from 'interweave';
import './Editor.css';

import { config } from './../../config';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileContent: '',
      file: '',
      saved: false,
    };

    this.interval = setInterval(() => this.autosave(), 2000);
  }

  componentWillReceiveProps(nextProps) {
    this.file(nextProps.file);
    this.setState({ file: nextProps.file });
  }

  file(file) {
    if (file !== '') {
      this.changesPending = false;
      if (localStorage.getItem(file)) {
        this.setState({ fileContent: localStorage.getItem(file) });
      }
      else {
        axios.post(`${config.url}/file`, { file }).then(res => {
          this.setState({ fileContent: res.data });
        });
      }
    }
  }

  autosave() {
    if (this.changesPending) {
      localStorage.setItem(this.state.file, this.state.fileContent);
    }
  }

  handleChange(event) {
    this.setState({ fileContent: event.target.value });
    this.changesPending = true;
  }

  handleSubmit(event) {
    axios.post(`${config.url}/save`, { file: this.state.file, data: this.state.fileContent }).then(res => {
      this.setState({ saved: true });
      localStorage.removeItem(this.state.file);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-5 offset-md-2">
          <textarea className="Editor" value={this.state.fileContent} onChange={this.handleChange.bind(this)} />
          <br />
          <button onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Publish</button>
        </div>
        <div className="col-md-5">
          <Interweave tagName="div" content={marked(this.state.fileContent) } />
        </div>
      </div>
    );
  }
}

export default Editor;
