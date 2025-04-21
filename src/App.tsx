
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Account from './component/Account';
import Startupdetails from './component/StartUpDetails';
import Startuplist from './component/StartUpList';
import StartUpHome from './component/StartUpHome';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path='/startupList' element={<Startuplist></Startuplist>}></Route>
        <Route path="/startup/:id" element={<Startupdetails />} />
        <Route path='/startuphome' element={<StartUpHome></StartUpHome>}></Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;