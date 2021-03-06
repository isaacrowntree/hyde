import React, { Component } from 'react';
import axios from 'axios';

import ListItem from './ListItem';
import Editor from './../Editor/Editor';

import { config } from './../../config';

import './Files.css';

class Files extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      file: '',
    };
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    axios.get(`${config.url}/files`).then(res => {
      this.setState({ files: res.data });
    }).catch(err => console.log(err.message));
  }

  edit(value) {
    this.setState({ file: value });
  }

  render() {
    var rows = [];
    var counter = 0;
    for (var value of this.state.files) {
      counter++;
      if (value.match(/\.md|\.yml$/)) {
        rows.push(<ListItem onItemClick={this.edit} key={counter} value={value} />);
      }
    }
    return (
      <div>
        <div className="list-group">
          { rows }
        </div>
        <Editor file={this.state.file} />
      </div>
    );
  }
}

export default Files;
