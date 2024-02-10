import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import {fontAtom} from "./store/state.ts";
import {useAtomValue} from "jotai";

function App() {
    const currentFont = useAtomValue(fontAtom);
  return (
    <div style={{ fontFamily: currentFont }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
