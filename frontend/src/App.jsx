import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute component={HomePage} />} />
          <Route path='/login' element={<PrivateRoute component={LoginPage} />} /> 
        </Routes>
    </Router>
      
    </div>
  );
}

export default App;
