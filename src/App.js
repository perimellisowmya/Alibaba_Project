import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";
import Discover from "./components/Discover";
import NavBarTwo from "./components/NavBarTwo";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <NavBarTwo />
      <Explore />
      <Discover />
    </div>
  );
}

export default App;
