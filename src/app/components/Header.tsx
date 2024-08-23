"use client";
import { ReactElement, useState } from "react";
import { BiAlignJustify, BiBold, BiFontFamily, BiFontSize, BiItalic, BiText, BiUnderline } from "react-icons/bi";
import { FaRemoveFormat } from "react-icons/fa";

interface props {
  statement: string;
  icon: ReactElement;
  hanlers: (click: boolean) => void;
}

const Nav = [
  {
    statement: "used to bold",
    icon: <BiBold />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      const val = text?.innerText;
      if (click) {
        text.style.fontWeight = "700";
      }
      else{
        text.style.fontWeight = "";
      }
    },
  },
  {
    statement: "used to italic",
    icon: <BiItalic />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      const val = text?.innerText;
      if (click) {
        text.style.fontStyle = "italic";
      }
      else{
        text.style.fontStyle = "";
      }
    },
  },
  {
    statement: "used to underline",
    icon: <BiUnderline />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      const val = text?.innerText;
      if (click) {
        text.style.textDecorationLine = "underline";
      }
      else{
        text.style.textDecorationLine = "";
      }
    },
  },
  {
    statement: "change fontsize ",
    icon: <BiFontSize />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      const val = text?.innerText;
      if (click) {
        text.style.fontSize = `${Math.floor(Math.random()*60)}px`;
      }
      else{
        text.style.fontSize = "";
      }
    },
  },
  {
    statement: "change fontfamily ",
    icon: <BiFontFamily className=" h-full"/>,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      const val = text?.innerText;
      if (click) {
        const fonts:string[] = [
          "monospace",
          "sans-serif",
          "serif",
          "cursiv",
          "fantasy",
          "verdana"
        ]
        text.style.fontFamily = `${fonts[Math.floor(Math.random()*5)]}`;
      }
      else{
        text.style.fontFamily = "";
      }
    },
  },
  {
    statement: "change TextTransform ",
    icon: <BiText/>,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      const val = text?.innerText;
      if (click) {
        const fonts:string[] = [
          "uppercase",
          "capitalize",
          "lowercase",
        ]
        text.style.textTransform = `${fonts[Math.floor(Math.random()*2)]}`;
      }
      else{
        text.style.textTransform = "";
      }
    },
  },
  {
    statement: "Clear Format ",
    icon: <FaRemoveFormat/>,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      const val = text?.innerText;
      if (click) {
        text.style.textTransform = "";
        text.style.fontSize = "";
        text.style.textDecoration = "none";
        text.style.fontWeight = "";
        text.style.fontFamily ="";
      }
    },
  },
  {
    statement: "change Alighnment ",
    icon: <BiAlignJustify/>,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      const val = text?.innerText;
      if (click) {
        const align:string[] = [
          "left",
          "right",
          "center"
        ]
        text.style.textAlign = `${align[Math.floor(Math.random()*3)]}`;
      }
      else{
        text.style.textAlign = "";
      }
    },
  },
];

const Header: React.FC = () => {
  const [clic,setclic] = useState(true);
  const handlerContent = (handlers: { (click: boolean): void; (arg0: boolean): void; })=>{
    setclic((prev)=>!prev)
    handlers(clic)
  }
  return (
    <div
      style={{ backgroundColor: "#002147" }}
      className=" h-full w-full py-4 px-2 text-white pt-20"
    >
        {Nav.map((val, ind) => {
          const {statement,icon,handlers} = val;
          return (
      <div key={ind} className=" mb-2 w-full h-11 bg-slate-50 bg-opacity-10 hover:bg-opacity-40 overflow-hidden text-center rounded-md shadow-sm flex justify-center items-center">
            <button onClick={()=>handlerContent(handlers)}
              className=" w-full h-full cursor-pointer flex justify-evenly items-center overflow-hidden flex-wrap"
            >
              <p className=" h-full w-fit flex justify-center items-center text-2xl">
                {icon}
              </p>
              <p className=" h-full flex justify-center items-center w-fit">
                {statement}
              </p>
            </button>
            </div>
          );
        })}
      
    </div>
  );
};

export default Header;
