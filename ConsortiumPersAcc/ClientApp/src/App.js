import './App.css';
import {  Routes, Route } from 'react-router-dom';
import LaboratorySelection from './pages/laboratorySelection/laboratorySelection';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<LaboratorySelection />}/>
    </Routes>
  );
}

export default App;
