import React, { useState } from "react";
import "./App.css";

function App() {
  const Brackets: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const [result, setResult] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str: string = e.target.value;
    const stack: string[] = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] in Brackets) {
        stack.push(str[i]);
      } else {
        if (
          str.length % 2 !== 0 ||
          str.length === 0 ||
          stack.length === 0 ||
          str[i] !== Brackets[stack.pop()!]
        ) {
          setResult(false);
          return;
        }
      }
    }
    if (str.length === 0) setResult(false);
    else setResult(stack.length === 0);
  };

  return (
    <div className="App">
      <h1>BracketsJudgementTool</h1>
      <div>
        <p>小括弧'()' / 中括弧'｛｝' / 大括弧'[]'を入力してください。</p>
        <form>
          <input type="text" onChange={(e) => handleChange(e)} />
        </form>
        <p>判定：{String(result)}</p>
      </div>
    </div>
  );
}

export default App;
