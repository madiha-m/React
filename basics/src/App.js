// import logo from "./logo.svg";
import "./App.css";
import Greet from "../../basics/src/components/Greet";
import Hi from "../../basics/src/components/Hi";
import Welcome from "../../basics/src/components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import CssStylesheet from "./components/CssStylesheet";
import InlineStyling from "./components/InlineStyling";
// import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <InlineStyling />
      {/* <CssStylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick />
      <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="madiha." task=" Working now.">
        <p>This is children props</p>
      </Greet>
      <Greet name="use of props" task=" and study of reusability.">
        <button>Action</button>
      </Greet> */}
      {/* <Welcome name=", this is welcom screen." task=" Studying props" />
      <Welcome name="Hi, " task="Whats going on" />
      <Welcome /> */}
      {/*<Hi /> */}
    </div>
  );
}

export default App;
