import React from 'react';
import { BiAlignJustify, BiBold, BiFontFamily, BiFontSize, BiItalic, BiText, BiUnderline } from "react-icons/bi";
import { FaRemoveFormat } from "react-icons/fa";

// Define the type for each Nav item
interface NavItem {
  statement: string;
  icon: JSX.Element;
  handlers: (click: boolean) => void;
}

// Create the Nav array with correct typing
const Nav: NavItem[] = [
  {
    statement: "used to bold",
    icon: <BiBold />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      if (click) {
        text.style.fontWeight = "700";
      } else {
        text.style.fontWeight = "";
      }
    },
  },
  {
    statement: "used to italic",
    icon: <BiItalic />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      if (click) {
        text.style.fontStyle = "italic";
      } else {
        text.style.fontStyle = "";
      }
    },
  },
  {
    statement: "used to underline",
    icon: <BiUnderline />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      if (click) {
        text.style.textDecoration = "underline";
      } else {
        text.style.textDecoration = "";
      }
    },
  },
  {
    statement: "change fontsize",
    icon: <BiFontSize />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      if (click) {
        text.style.fontSize = `${Math.floor(Math.random() * 60)}px`;
      } else {
        text.style.fontSize = "";
      }
    },
  },
  {
    statement: "change fontfamily",
    icon: <BiFontFamily />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      if (click) {
        const fonts: string[] = ["monospace", "sans-serif", "serif", "cursive", "fantasy", "verdana"];
        text.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
      } else {
        text.style.fontFamily = "";
      }
    },
  },
  {
    statement: "change TextTransform",
    icon: <BiText />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      if (click) {
        const transforms: string[] = ["uppercase", "capitalize", "lowercase"];
        text.style.textTransform = transforms[Math.floor(Math.random() * transforms.length)];
      } else {
        text.style.textTransform = "";
      }
    },
  },
  {
    statement: "Clear Format",
    icon: <FaRemoveFormat />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      if (click) {
        text.style.textTransform = "";
        text.style.fontSize = "";
        text.style.textDecoration = "none";
        text.style.fontWeight = "";
        text.style.fontFamily = "";
      }
    },
  },
  {
    statement: "change Alignment",
    icon: <BiAlignJustify />,
    handlers: (click: boolean) => {
      const text = document.getElementById("text")!;
      if (click) {
        const alignments: string[] = ["left", "center", "right"];
        text.style.textAlign = alignments[Math.floor(Math.random() * alignments.length)];
      } else {
        text.style.textAlign = "";
      }
    },
  },
];
