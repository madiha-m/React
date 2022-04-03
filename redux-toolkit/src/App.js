import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import StudyCRUD from './components/StudyCRUD'

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <StudyCRUD/>
    </div>
  );
}

export default App;
