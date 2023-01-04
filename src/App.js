// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TxtInput from "./components/TxtInput";
import { useState } from "react";
import Alert from "./components/Alert";

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
        <TxtInput mode={mode} alert={alert} heading="Enter The Text Below! " />
      </div>
    </>
  );
}

export default App;
