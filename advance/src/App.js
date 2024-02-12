import "./App.css";
import CallbackRefsComp from "./components/CallbackRefsComp";
import Fragments from "./components/Fragments";
import ParentComp from "./components/ParentComp";
import ParentMemoComp from "./components/ParentMemoComp";
import PureComp from "./components/PureComp";
import RefClassCom from "./components/RefClassCom";
import RefParentClassCom from "./components/RefParentClassCom";
import RefsComp from "./components/RefsComp";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <RefParentClassCom />
      {/* <RefClassCom /> */}
      {/* <CallbackRefsComp /> */}
      {/* <RefsComp /> */}
      {/* <ParentMemoComp /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <Fragments />  */}
    </div>
  );
}

export default App;
