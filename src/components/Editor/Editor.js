import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import Interweave from 'interweave';
import { Store, SUCCESS, ERROR } from '../../Redux';
import './Editor.css';

import { config } from './../../config';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileContent: '',
      file: '',
      saved: false,
      publishing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.file(nextProps.file);
    this.setState({ file: nextProps.file });
  }

  file(file) {
    if (file !== '') {
      axios.post(`${config.url}/file`, { file }).then(res => {
        this.setState({ fileContent: res.data });
      });
    }
  }

  handleChange(event) {
    this.setState({ fileContent: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ publishing: true });
    axios.post(`${config.url}/save`, { file: this.state.file, data: this.state.fileContent })
      .then(res => {
        this.setState({ saved: true, publishing: false });
        Store.dispatch({ type: SUCCESS, payload: "Saved successfully!" });
      })
      .catch(error => {
        this.setState({ publishing: false });
        Store.dispatch({ type: ERROR, payload: error.message });
      });
  }

  render() {
    const isPublishing = this.state.publishing;

    return (
      <div className="row">
        <div className="col-md-5 offset-md-2">
          <textarea className="Editor" value={this.state.fileContent} onChange={this.handleChange.bind(this)} />
          <br />
          <button
            onClick={this.handleSubmit.bind(this)}
            className="btn btn-primary"
            disabled={ isPublishing }
            >{ isPublishing ? "Publishing...": "Publish" }
          </button>
        </div>
        <div className="col-md-5">
          <Interweave tagName="div" content={marked(this.state.fileContent) } />
        </div>
      </div>
    );
  }
}

export default Editor;
