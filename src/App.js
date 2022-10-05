import logo from './logo.svg';
import './App.css';
// import TemporaryDrawer from './components/Drawer';
import Dashboard from './pages/Dashboard';
import AddManager from './pages/AddManager';
import ResponsiveAppBar from './components/Navbar';
import AcceptedRequests from './pages/AcceptedRequests';
import RejectedRequests from './pages/RejectedRequests';
import Details from './pages/Details';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { userSelect } from './state/User';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(userSelect)
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        {!user ?
          <Route path="/" element={<Login />} />
          :
          <>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="addmanager" element={<AddManager />} />
            <Route path="accepted" element={<AcceptedRequests />} />
            <Route path="rejected" element={<RejectedRequests />} />
            <Route path="details" element={<Details />} />
          </>
        }
      </Routes>
    </>
  );
}

export default App;





