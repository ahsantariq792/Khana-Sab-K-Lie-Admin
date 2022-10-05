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

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route path="addmanager" element={<AddManager />} />
        <Route path="accepted" element={<AcceptedRequests />} />
        <Route path="rejected" element={<RejectedRequests />} />
        <Route path="details" element={<Details />} />
        <Route path="/" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;





