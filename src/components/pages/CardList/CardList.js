import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';


class CardList extends React.Component {
  render() {
    const { props } = this;
    return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
      ))}
    </div>);
  }
}

export default CardList;
