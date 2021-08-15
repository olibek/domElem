'use strict';
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
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
    `;
      elem.innerHTML = (text);
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
    `;
      elem.innerHTML(text);
      return elem;
    }
  };
}

let test = new DomElement('.dom', '400px', '500px', 'red', '24px');
test.create('Привет мир');
