import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProject from "./components/AddProject";
import UpdateForm from "./components/updateForm";
import Taskpage from "./pages/Taskpage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <div className="container">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/update/:id" element={<UpdateForm />} />
              <Route path="/add_task/:id" element={<Taskpage />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
              <Route path="/addNew" element={<AddProject />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
