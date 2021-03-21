import React from 'react';
import { useStateValue } from './StateProvider.js';
import './Game.css';
function Game({ id, title, image }) {
  const [{ games }, dispatch] = useStateValue();
  const addToGames = () => {
    dispatch({
      type: 'ADD_TO_GAMES',
      item: {
        id: id,
        title: title,
        image: image,
      },
    });
  };
  return (
    <div className="game">
      <div className="game__info">
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <img src={image} />
      <button onClick={addToGames}>Play</button>
    </div>
  );
}

export default Game;
