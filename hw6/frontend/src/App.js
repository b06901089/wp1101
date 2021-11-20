import './App.css';
import { useState } from 'react';
import { startGame, guess, restart } from './axios'; 

function App() {

  const [hasStarted, setHasStarted] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleGuess = async () => {
    const response = await guess(number);

    if (response === 'Equal') {
      setHasWon(true);
    }
    else {
      setStatus(response);
      setNumber('');
    }
  }

  const handleStartGame = async () => {
    const response = await startGame();
    setStatus(response);
    setHasStarted(true);
  }

  const handleRestart = async () => {
    const response = await restart();
    setStatus(response);
    setHasWon(false);
  }

  const startMenu = 
    <div>
      <button onClick={handleStartGame}> start game </button>
    </div>

  const gameMode = 
    <>
      <p>Guess a number between 1 to 100</p>
      <input 
        value={number} 
        onInput={e => setNumber(e.target.value)}>
      </input>
      <button
        onClick={handleGuess}
        disabled={!number}>
      guess!</button>
      <p>{status}</p>      
    </>

  const winningMode = 
    <>
      <p>you won! the number was {number}.</p>
      <button onClick={handleRestart}>restart</button>
    </>

  const game = 
    <div>
      {hasWon ? winningMode : gameMode}
    </div>

  return (
    <div className='App'>
      {hasStarted ? game : startMenu}
    </div>
  );
}

export default App;
