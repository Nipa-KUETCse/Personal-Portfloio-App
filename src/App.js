import "./App.css";
import About from "./components/About/About";

import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/><br/><br/><br/><br/><br/>
      <About />
      <Service />
    </div>
  );
}

export default App;
