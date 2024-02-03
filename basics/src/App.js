// import logo from "./logo.svg";
import "./App.css";
import { Greet } from "../../basics/src/components/Greet";
import Hi from "../../basics/src/components/Hi";
import Welcome from "../../basics/src/components/Welcome";
// import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}
      <Hi />
    </div>
  );
}

export default App;
