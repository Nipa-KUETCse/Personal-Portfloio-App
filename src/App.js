import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
