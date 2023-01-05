// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TxtInput from "./components/TxtInput";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router, Route, Routes

} from "react-router-dom"
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#354554";
      showalert("Dark Mode Enabled! ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled! ", "success");
    }
  };
  const purpleMode = () => {
    if (mode === "light" ) {
      setMode("a");
      document.body.style.backgroundColor = "#D7A1F9";
      showalert("Purple Mode Enabled! ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled! ", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Utils"
          home="HomePage"
          about="About"
          mode={mode}
          darkMode={darkMode}
          purpleMode={purpleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TxtInput
                  mode={mode}
                  alert={alert}
                  setalert={showalert}
                  heading="Enter The Text Below! "
                />
              }
            />

            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
