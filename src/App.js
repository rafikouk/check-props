import profilepic from "./Images/profilepic.png"
import  Profile from './components/Profile';
import './App.css';

function App() {
  const alertmyinput = name => alert (name);
  return (
    <div className="App">
      <Profile fullName="Rafik Jamli" bio="HAVE FUN" profession="Actor" alert={alertmyinput}>
        <h2>My profile picture </h2>
        <img src={profilepic} alt=""/> 
      </Profile>
    </div>
  );
}

export default App;
