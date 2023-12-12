import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Memo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  console.log("Rendering...");

  // Heavy Operation
  // const prime = findPrime(text);
  // Memoize it and only change when the text changes
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black
        ${isDarkTheme && "bg-gray-900 text-white"}`}
    >
      <div
        className="m-10 p-2 bg-green-200 text-center cursor-pointer "
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Toggle
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-lg">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Memo;
