import React from 'react';
import { Redirect } from 'react-router';
import './Home.css';
import Game from './Game';
import { useStateValue } from './StateProvider';
function Home() {
  const [{ user }] = useStateValue();
  return (
    <div>
      {!user && <Redirect to="/login" />}
      <div className="home">
        <div className="home__container">
          <div className="home__row home__row1">
            <Game
              id="4664789"
              title="HANG MAN"
              image="https://t4.ftcdn.net/jpg/02/62/24/45/360_F_262244537_RjHfRBucxPyo7o6QetIAQYpd5O3h6cEN.jpg"
            />
            <Game
              id="1354689"
              image="https://blog.alexdevero.com/wp-content/uploads/2019/06/how-to-build-simple-tic-tac-toe-game-with-react-blog.jpg"
              title="TIC TAC TOE"
            />
            <Game
              id="4903850"
              title="BINGO"
              image="https://www.performancehealth.com/media/amasty/blog/shutterstock_1474018052_1_.jpg"
            />
          </div>
          <div className="home__row">
            <Game
              id="4903850"
              title="TETRIS"
              image="https://image.freepik.com/free-vector/brick-retro-tetris-game_79145-60.jpg"
            />
            <Game
              id="3342345"
              title="SUDOKU"
              image="https://i.pinimg.com/originals/c2/6b/11/c26b1116eeb536e21118aba82aa1e7c4.jpg"
            />
            <Game
              id="4645465"
              title="PONG"
              image="https://assets.skyfilabs.com/images/blog/ping-pong-game-using-html-java-javascript.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
