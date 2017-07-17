import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onItemClick(this.props.value);
  }

  format(val) {
    let splitter = '\\';
    if (val.split(splitter).length === 1) {
      splitter = '/';
    }
    return val.split(splitter).slice(2).join(splitter);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>
        {this.format(this.props.value)}
      </li>
    );
  }
}

export default ListItem;
