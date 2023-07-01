import './App.css';
import { Routes, Route } from 'react-router-dom';
import LaboratorySelection from './pages/laboratorySelection/laboratorySelection';
import LaboratoryInfo from './pages/laboratoryInfo/laboratoryInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LaboratorySelection />} />
      <Route path="/labInfo" element={<LaboratoryInfo />} />
    </Routes>
  );
}

export default App;
