import { b, addOneB, timesTwoB } from "../sharestate";

// function composition
addOneB(timesTwoB(b));

const createElement =
  (tag = "div") =>
  (content = "", atributes = {}) => {
    const element = document.createElement(tag);
    element.innerText = content;
    Object.entries(atributes).map(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  };

createElement("header")("TITLE", { class: "Header black" });
