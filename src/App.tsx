
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Account from './component/Account';
import Startupdetails from './component/StartUpDetails';
import Startuplist from './component/StartUpList';
import StartUpHome from './component/StartUpHome';
import StartUpCardData from './component/StartUpCardData';
import Message from './component/Message';
import Connection from './component/Connection';
import MentorHome from './component/MentorHome';
import MentorList from './component/MentorList';
import MentorDetail from './component/MentorDetail';
import ProtectedRoute from './middleware';
import MentorInputDetail from './component/MentorInputDetail';
const Startup = () => (
    <ProtectedRoute>
        <Startuplist />
    </ProtectedRoute>
);
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path='/startupList' element={<Startup></Startup>}></Route>
        <Route path="/startup/:id" element={<Startupdetails />} />
        <Route path='/startuphome' element={<StartUpHome></StartUpHome>}></Route>
        <Route path='/startupFill' element={<StartUpCardData></StartUpCardData>}></Route>
        <Route path='/message' element={<Message></Message>}></Route>
         <Route path='/Connection' element={<Connection></Connection>}></Route>
         <Route path='/MentorHome' element={<MentorHome></MentorHome>}></Route>
         <Route path='/Mentors' element={<MentorList></MentorList>}></Route>
         <Route path='/MentorsDetail/:id' element={<MentorDetail></MentorDetail>}></Route>
         <Route path='/MentorsInput' element={<MentorInputDetail></MentorInputDetail>}></Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;