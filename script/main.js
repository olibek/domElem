'use strict';
function DomElement(selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  this.create = function (text) {
    if (this.selector.charAt(0) === '.') {
      let elem = document.createElement('div');
      let att = this.selector.slice(1);
      elem.className = att;
      document.body.appendChild(elem);
      elem.style.cssText = `height:${this.height};
      width: ${this.width};
      background-color: ${this.bg};
      font-size: ${this.fontSize};
      position: ${this.position};`;

      if (text !== undefined) {
        elem.innerHTML = (text);
      }
      return elem;
    }

    else if (this.selector.charAt(0) === '#') {
      let elem = document.createElement('div');
      let att = this.selector.slice(1);
      elem.id = att;
      document.body.appendChild(elem);
      elem.style.cssText = `height:${this.height};
      width: ${this.width};
      background-color: ${this.bg};
      font-size: ${this.fontSize};
      position: ${this.position};`;

      if (text !== undefined) {
        elem.innerHTML = (text);
      }
      return elem;
    }
  };
}

let test = new DomElement('#move', '100px', '100px', 'red', '24', 'absolute');
// test.create('Привет');
document.addEventListener('DOMContentLoaded', test.create('Привет'));


// document.addEventListener("DOMContentLoaded", test.create());
let leftNumber = 0;
let topNumber = 0;
let rightNumber = 0;
let bottomNumber = 0;
let newDiv = document.getElementsByTagName('div');
newDiv[0].style.position = "absolute";
newDiv[0].style.top = 0;
newDiv[0].style.left = 0;

addEventListener("keydown", function (e) {
  switch (e.key) {

    case "ArrowUp":
      topNumber -= 10;
      newDiv[0].style.top = topNumber + "px";
      break;

    case "ArrowDown":
      topNumber += 10;
      newDiv[0].style.top = topNumber + "px";

      break;

    case "ArrowLeft":
      rightNumber -= 10;
      newDiv[0].style.left = rightNumber + "px";

      break;

    case "ArrowRight":
      rightNumber += 10;
      newDiv[0].style.left = rightNumber + "px";

      break;
  }

});