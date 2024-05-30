import React, { useState } from "react";

export default function TextForm(props) {
  function onChangeHandler(event) {
    //console.log('onchange is click.');
    setText(event.target.value);
  }
  const uppercaseClickHandler = () => {
    console.log("uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to uppercase", 'success');
  };
  const lowercaseClickHandler = () => {
    console.log("lowercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to Lowercase", 'success');
  };
  const clipBoardHandler = () => {
    let clipboard = navigator.clipboard;
    clipboard.writeText(text);
    props.alert("Enterd text has been copied to clipboard", 'success');
  };
  const resetText = () => {
    setText("");
    props.alert("Text has been reset.", 'success');
  }
  let [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style = {{ color : props.mode ==='dark' ? 'white' : 'black'  }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control" style = {{ backgroundColor : props.mode ==='dark' ? 'grey' : 'white'  }}
            onChange={onChangeHandler}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={uppercaseClickHandler}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={lowercaseClickHandler}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={clipBoardHandler}
          >
            Copy to Clipboard
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={resetText}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="container my-3" style = {{ color : props.mode ==='dark' ? 'white' : 'black'  }}>
        <h1>Your text summary</h1>
        <p>
          {(text.length > 0) ? text.split(" ").length : 0} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter someting in the above box to preview it here" }</p> 
      </div>
    </>
  );
}
