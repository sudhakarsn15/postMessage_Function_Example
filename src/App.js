import "./styles.css";

export default function App() {
  const postMessageFnc = () => {
    alert("here");
  };

  return (
    <div className="App">
      <h1>Window.postMessage() Example</h1>
      <input type="text"></input>
      <button type="button" onClick={() => postMessageFnc()}>
        Post Message
      </button>
    </div>
  );
}
