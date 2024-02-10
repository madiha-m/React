import "./App.css";
import Fragments from "./components/Fragments";
import ParentComp from "./components/ParentComp";
import PureComp from "./components/PureComp";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <ParentComp />
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <Fragments />  */}
    </div>
  );
}

export default App;
