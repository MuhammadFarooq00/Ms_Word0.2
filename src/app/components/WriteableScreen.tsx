"use client";

import React, { useEffect, useRef, useState } from "react";

const WriteableScreen = () => {
  const [input, setinput] = useState({
    x: 0,
    y: 0,
  });
   const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [content, setContent] = useState("");
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const handledoublClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    setinput({ x, y });
  };
  
  
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleResize();
     window.addEventListener("resize", handleResize);
     return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInput = () => {
    if (paragraphRef.current) {
      const text = paragraphRef.current.innerText;
      setContent(text);
    }
  };

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const letterCount = content.replace(/\s/g, '').length;

  // const wordCount = content.trim().split(' ').filter(word => word.length > 0).length;
  // const letterCount = content.split('').filter(char => char !== ' ' && char !== '\n' && char !== '\t').length;


  return (
    <>
    <div
      className=" w-full h-full overflow-hidden bg-white rounded-lg shadow-xl ring-2"
      onDoubleClick={handledoublClick}
    >
      <p id="text" ref={paragraphRef} onInput={handleInput}

        className={` w-full h-auto block border-none outline-none ps-1`}
        style={{
          position: "relative",
          maxWidth: `${windowSize.width-input.x}px`,
          left: windowSize.width > 767?  input.x ? `${input.x - 87}px` : 0 :input.x ? `${input.x }px` : 0,
          top: input.y ? `${input.y - 19}px` : 0,
        }}
        contentEditable={true}
      >
        
      </p>
    </div>
    <p className=" fixed bottom-4 right-5">Word counts: {wordCount} Letters counts: {letterCount}</p>
    </>
  );
};

export default WriteableScreen;
