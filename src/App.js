import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from 'react'


function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [modeTextColor, setmodeTextColor] = useState("dark")
  // const [modeColor, setModeColor] = useState("black"); 
 

  const toggleMode = () => {
    if(mode === "light"){
    setMode("dark");
    setModeText("Enable Light Mode")
    setmodeTextColor("light")
    document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      setModeText('Enable Dark Mode')
      setmodeTextColor("dark")
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText} modeTextColor={modeTextColor} />
      <div className="container my-4">
        <TextForm helpText="hello world" heading="New Form" mode={mode} />
        {/* <About/> */}

      </div>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
    </>
  );
}

export default App;
