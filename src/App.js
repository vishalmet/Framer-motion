import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Framer1 from './pages/Framer1';
import Solids from './pages/Solids';
import { motion } from "framer-motion";
import Menus from './pages/Menus';



function App() {
  return (
   <div>
    <Framer1 />
    <Solids />

    <Router>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
