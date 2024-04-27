import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Routes>
              <Route path='/' element={<PrivateRoute component={HomePage} />} />
              <Route path='/login' element={<LoginPage />} />  {/* this changed first */}
            </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
