import './App.css';
import { Routes, Route } from 'react-router-dom';
import LaboratorySelection from './pages/laboratorySelection/laboratorySelection';
import LaboratoryInfo from './pages/laboratoryInfo/laboratoryInfo';
import Register from "./pages/RegisterPages/RegisterPage";
import Login from "./pages/RegisterPages/LoginPage";
import {useEffect, useState} from "react";
import Account from "./pages/AccountPages/AccountMainTitle";

function App() {
    const [name, setName] = useState('');
    useEffect(() => {
        (
            async () => {
                const response = await fetch('api/Authificate/User', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',

                });

                const content = await response.json();
                setName(content.name);
            }
        )();
    });
    
  return (
    <Routes>
        <Route path="account" element={<Account/>}/>
      <Route path="login" element={<Login setName={setName}/>}/>
      <Route path="/" element={<LaboratorySelection name={name} setName={setName}/>} />
      <Route path="/labInfo" element={<LaboratoryInfo />} />
    </Routes>
  );
}

export default App;
