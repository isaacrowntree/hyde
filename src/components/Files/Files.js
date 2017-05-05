import React, { Component } from 'react';
import axios from 'axios';

import ListItem from './ListItem.js';
import Editor from './../Editor/Editor.js';

import { config } from './../../../server/config';

class Files extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      file: '',
      data: false,
    };
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:${config.port}/repository`).then(res => {
      console.log(res);
      this.setState({ data: res.data });
    });

    if (this.state.data === false) {
      axios.get(`http://localhost:${config.port}/files`).then(res => {
        this.setState({ files: res.data });
      });
    }
  }

  edit(value) {
    this.setState({ file: value });
  }

  render() {
    var rows = [];
    var counter = 0;
    for (var value of this.state.files) {
      counter++;
      if (value.match(/\.md$/)) {
        rows.push(<ListItem onItemClick={this.edit} key={counter} value={value} />);
      }
    }
    return (
      <div>
        { rows }
        <Editor file={this.state.file} />
      </div>
    );
  }
}

export default Files;
