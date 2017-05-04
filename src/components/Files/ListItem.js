import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onItemClick(this.props.value);
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.value}
      </li>
    );
  }
}

export default ListItem;
