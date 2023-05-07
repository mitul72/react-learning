import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from 'react'


function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [modeTextColor, setmodeTextColor] = useState("dark")
  const [alert, setAlert] = useState(null)
  // const [modeColor, setModeColor] = useState("black"); 
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
  }

  const toggleMode = () => {
    if(mode === "light"){
    setMode("dark");
    setModeText("Enable Light Mode")
    setmodeTextColor("light")
    document.body.style.backgroundColor = '#252829';
    showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      setModeText('Enable Dark Mode')
      setmodeTextColor("dark")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText} modeTextColor={modeTextColor} />
      <div className="container my-4">
        <Alert alert={alert}/>
        <TextForm summary="Text Summary" heading="Welcome to TextUtils" mode={mode} />
        {/* <About/> */}

      </div>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
    </>
  );
}

export default App;
