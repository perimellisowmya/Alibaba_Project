import './index.css'
import './App.css';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Discover from './components/Discover';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Explore/>
     <Discover/>
    </div>
  );
}

export default App;
