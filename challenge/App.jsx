import Greeting from './Greeting';
import MouseTracker from './MouseTracker';
import Shouter from './Shouter';

function App() {
  return (
    <main>
      <Greeting name="tom" />
      <Shouter />
      <MouseTracker />
    </main>
  );
}

export default App;
