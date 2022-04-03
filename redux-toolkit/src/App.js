import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';
import StudyCRUD from './components/StudyCRUD'

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      <StudyCRUD />
    </div>
  );
}

export default App;
