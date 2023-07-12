import Time from './components/Time/Time.js';

const App = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  return (
    <Time />
  );
};

export default App;
