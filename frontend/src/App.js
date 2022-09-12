import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignupPageComponent from "./Components/Pages/SignupPageComponent";
import LoginPageComponent from "./Components/Pages/LoginPageComponent";
import NavBarComponent from "./Components/UI-Components/NavBarComponent";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBarComponent />
          <Routes>
            <Route path="/" element={<LoginPageComponent />} />
            <Route path="/signup" element={<SignupPageComponent />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
