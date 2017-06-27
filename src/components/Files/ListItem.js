import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onItemClick(this.props.value);
  }

  format(val) {
    return val.split('\\').slice(2).join('\\');
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
