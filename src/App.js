import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const handelTextChange = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  };

  const postMessageFnc = () => {
    window.postMessage(inputText);
    alert("here : " + inputText);
  };

  return (
    <div className="App">
      <h1>Window.postMessage() Example</h1>
      <input
        type="text"
        value={inputText}
        // onChange={(e) => setInputText(e.target.value)}
        onChange={(e) => handelTextChange(e)}
      ></input>
      <button type="button" onClick={() => postMessageFnc()}>
        Post Message
      </button>
    </div>
  );
}