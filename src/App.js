import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from './pages/sign-in/Signin';
import Homepage from "./pages/homepage/Homepage";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./components/dashboard/sidebar/Sidebar";
import Users from "./pages/users/Users";

function App() {
  return (

<>
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      
    </BrowserRouter>
   </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
