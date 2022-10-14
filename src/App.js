import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
