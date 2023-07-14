import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import FormattedTime from './components/FormattedTime/FormattedTime';

function useTimer() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1));
  };

  const stop = () => {
    clearInterval(timer);
    setTimer();
  };

  const reset = () => {
    setTime(0);
    setTimer(null);
  }

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, [timer]);

  return [time, start, stop, reset]
}

const App = () => {
const timerData = useTimer();
console.log(timerData);

  return (
    <Container>
      <FormattedTime time={timerData[0]} />
      <Button value={timerData[1]}>start</Button>
      <Button value={timerData[2]}>stop</Button>
      <Button value={timerData[3]}>reset</Button>
    </Container>
  );
}

export default App;
