import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage';

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
  );
}

export default App
