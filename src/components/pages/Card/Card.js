import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render() {
    const { props } = this;
    return (
            <div className='card-container'>
                <img alt='monster' src={`https://robohash.org/${props.monster.id}1?set=set2&size=180x180`}/>
                <h2>{props.monster.name}</h2>
                <p>{props.monster.email}</p>
            </div>
    );
  }
}

export default Card;
