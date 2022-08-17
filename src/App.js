import { useState } from 'react';
import './styles.css';

export default function App() {
    const [inputText, setInputText] = useState('');

    const handelTextChange = (e) => {
        setInputText(e.target.value);
        // console.log(e.target.value);
    };

    const postMessageFnc = () => {
        // The postMessage() method takes in three arguments as follows
        // message	Required. Message string/object to be sent.
        // domain	Required. The URL of the receiver window to which the message is being sent.
        // transfer	Optional. Transferable objects like instances of ImageBitmap, ArrayBuffer, MessagePort; becomes unusable on the sender side after transfer.
        var domain = 'https://scriptverse.academy';
        var popUp = window.open(domain + '/sample/post-message-listener.html');

        //message sender
        var message = inputText;
        popUp.postMessage(message, domain); //sending the message
        // window.postMessage(inputText);
        // alert("Input text: " + inputText);
        // console.log(receiverWindo)
    };

    const iframe = (
        <iframe
            src='https://codesandbox.io/p/github/sudhakarsn15/postMessage_Function_Example/draft/fervent-dan?create=true&import=true&selection=%5B%7B%22endColumn%22%3A16%2C%22endLineNumber%22%3A41%2C%22startColumn%22%3A16%2C%22startLineNumber%22%3A41%7D%5D&file=%2Fsrc%2FApp.js'
            width='540'
            height='450'
        ></iframe>
    );
    return (
        <div className='App'>
            <h1>Window.postMessage() Example</h1>
            <input
                type='text'
                value={inputText}
                // onChange={(e) => setInputText(e.target.value)}
                onChange={(e) => handelTextChange(e)}
            ></input>
            <button type='button' onClick={() => postMessageFnc()}>
                Post Message
            </button>
            <div>{iframe}</div>
        </div>
    );
}
