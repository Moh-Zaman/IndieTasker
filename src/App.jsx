import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="navigation-container">
      </div>
      <Home />
    </div>
  );
}

export default App;
