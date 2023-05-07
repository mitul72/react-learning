import React, { useState } from "react";
import PropTypes from "prop-types";


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    setText(text.toUpperCase());
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
  }
  const handleLoClick = () => {
    setText(text.toLowerCase());
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
  }

  const [text, setText] = useState("");

  return (
    <>
    <div className={`container text-${(props.mode === "light") ? "dark":"light"}`}>
      <h1>{props.heading}</h1>
        <textarea
          rows="6"      
          style={{backgroundColor: (props.mode==='dark')?"#212529":"white",
                color:(props.mode==='dark')?"white":"black"}
                }
          value={text} 
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          onChange={handleOnChange}
        ></textarea>
      <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>
        Clear text
      </button> 
      <button className="btn btn-primary my-3 mx-1" onClick={copyToClipboard}>
        Copy to Clipboard
      </button>   
    </div>
    <div className={`container my-3 text-${(props.mode === "light") ? "dark":"light"}`}>
        <h1>{props.summary}</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>Time required to read {Math.round(((0.008 * text.trim().split(" ").length)+Number.EPSILON)*10)/10} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something for preview"}</p>
    </div>
    </>
  );
}


TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
};
