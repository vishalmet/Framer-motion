import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Framer1 from './pages/Framer1';
import Solids from './pages/Solids';
import { motion } from "framer-motion";
import Menus from './pages/Menus';



function App() {
  return (
   <div>
    {/* <Framer1 /> */}
    {/* <Solids /> */}

    <Router>
      <Menus />
      <Routes>
        <Route path="/" Component={Framer1} />
        <Route path="/solids" Component={Solids} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
