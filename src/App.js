import Stars from './Components/Stars';
import './index.css';

function App() {
  return (
      <div>
        <Stars count={2} />
        <Stars count={5} />
        <Stars count={3} />
      </div>
  );
}

export default App;
