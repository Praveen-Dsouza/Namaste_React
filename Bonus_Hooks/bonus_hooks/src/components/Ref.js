import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  // const x = 10; Error
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  /**
   * not like ref = 0
   * ref = { current: 0 }
   */

  /**
   * Whenever the component is re-rendered "x" is refreshed
   */

  const i = useRef(null);
  //   let i = {
  //     current: null,
  //   };

  useEffect(() => {
    if (i.current) return
    i.current = setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000);

    // clear garbage
    // return () => clearInterval(i.current);
  }, []);

  console.log("Rendering...");

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-200 p-2 m-10"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-200 p-2 m-10"
          onClick={() => {
            setY(y + 1);
            console.log("y=" + y);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-200 p-2 m-10"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=" + ref.current);
          }}
        >
          Increase ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
        <button
          className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
          onClick={() => {
            clearInterval(i.current);
          }}
        >
          Stop Printing
        </button>
      </div>
    </div>
  );
};

export default Ref;
