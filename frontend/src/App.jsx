import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Route Component={HomePage} path='/' exact/>
      <Route Component={LoginPage} path='/login' />
    </Router>
    </div>
  );
}

export default App;
