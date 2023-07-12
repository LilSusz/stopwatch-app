import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import Button from './components/Button/Button';



const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue +1);
    }, 1))
  };

  const stop = () => {
    clearInterval(timer);
    setTimer();
  };

  const reset = () => {
    setTime(0);
    setTimer(null);
  }

  return (
    <Container>
      <Button value={start}>start</Button>
      <Button value={stop}>stop</Button>
      <Button value={reset}>reset</Button>
    </Container>
  );
}

export default App;
