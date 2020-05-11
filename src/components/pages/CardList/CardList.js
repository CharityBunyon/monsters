import React from 'react';
import './CardList.scss';


class CardList extends React.Component {
  render() {
    const names = this.props;
    return (<div className='card-list'>{names.children}</div>);
  }
}

export default CardList;
