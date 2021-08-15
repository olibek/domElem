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

const move = document.querySelector(test.selector);

let moveLeft = 0;

function direction(key) {
  if (key.keyCode === 39) {
    moveLeft += 10;
    move.style.left = moveLeft + 'px';
  }

  if (key.keyCode === 37) {
    moveLeft -= 10;
    move.style.left = moveLeft + 'px';
  }

  if (key.keyCode === 38) {
    moveLeft -= 10;
    move.style.top = moveLeft + 'px';
  }

  if (key.keyCode === 40) {
    moveLeft += 10;
    move.style.top = moveLeft + 'px';
  }
}

document.onkeydown = direction;

