import "./App.css";
import CompLifecycleMethod from "./components/CompLifecycleMethod";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";

function App() {
  return (
    <div className="App">
      <LifecycleA />
      <CompLifecycleMethod />
      {/* <Form /> */}
    </div>
  );
}

export default App;
