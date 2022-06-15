import "./App.css";
import { React, useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function App() {
  const first_text = "const sayHello = () = {";
  const second_text = "console.log('hello')";
  const third_text = "//This prints out Hello World";

  const textState = ["istyping", "isdeleting"];
  const [typing1, setTyping1] = useState(textState[0]);
  const [typing2, setTyping2] = useState(textState[0]);
  const [typing3, setTyping3] = useState(textState[0]);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing1 === "istyping" && text1 !== first_text) {
        setText1(first_text.slice(0, text1.length + 1));
      } else if (text1 === first_text && typing1 === "istyping") {
        sleep(2000).then(() => {
          setTyping1(textState[1]);
        });
      } else if (
        (text1 === first_text && typing1 === "isdeleting") ||
        typing1 === "isdeleting"
      ) {
        setText1(first_text.slice(0, text1.length - 1));
        if (text1.length <= 2) {
          setTyping1(textState[0]);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text1, typing1]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing2 === "istyping" && text2 !== second_text) {
        setText2(second_text.slice(0, text2.length + 1));
      } else if (text2 === second_text && typing2 === "istyping") {
        sleep(2000).then(() => {
          setTyping2(textState[1]);
        });
      } else if (
        (text2 === second_text && typing2 === "isdeleting") ||
        typing2 === "isdeleting"
      ) {
        setText2(second_text.slice(0, text2.length - 1));
        if (text2.length <= 2) {
          setTyping2(textState[0]);
        }
      }
    }, 250);

    return () => clearTimeout(timeout);
  }, [text2, typing2]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing3 === "istyping" && text3 !== third_text) {
        setText3(third_text.slice(0, text3.length + 1));
      } else if (text3 === third_text && typing3 === "istyping") {
        sleep(2000).then(() => {
          setTyping3(textState[1]);
        });
      } else if (
        (text3 === third_text && typing3 === "isdeleting") ||
        typing3 === "isdeleting"
      ) {
        setText3(third_text.slice(0, text3.length - 1));
        if (text3.length <= 2) {
          setTyping3(textState[0]);
        }
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [text3, typing3]);

  return (
    <div className=" flex h-screen justify-center items-center">
      <div className=" h-1/2 w-1/2 bg-code rounded-md flex items-center pl-6">
        {/* type writer display */}
        <span>
          <div className=" text-2xl">
            <SyntaxHighlighter className="blinking-cursor" language="javascript" style={dracula}>
              {text1}
            </SyntaxHighlighter>
          </div>
          <div className=" text-2xl">
            <SyntaxHighlighter className="blinking-cursor" language="javascript" style={dracula}>
              {text2}
            </SyntaxHighlighter>
          </div>
          <div className=" text-2xl">
            <SyntaxHighlighter className="blinking-cursor" language="javascript" style={dracula}>
              {text3}
            </SyntaxHighlighter>
          </div>
          <div className=" text-2xl">
            <SyntaxHighlighter className="blinking-cursor" language="javascript" style={dracula}>
              {`}`}
            </SyntaxHighlighter>
          </div>
        </span>
      </div>
    </div>
  );
}

export default App;
