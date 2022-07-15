import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Success from './components/Success';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/success' element={<Success/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
