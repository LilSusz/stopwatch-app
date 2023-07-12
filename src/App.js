import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import FormattedTime from './components/FormattedTime/FormattedTime';



const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
    console.log('started');
    console.log(timer);
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
  }, []);

  return (
    <Container>
      <FormattedTime time={time} />
      <Button value={start}>start</Button>
      <Button value={stop}>stop</Button>
      <Button value={reset}>reset</Button>
    </Container>
  );
}

export default App;
