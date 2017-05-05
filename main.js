const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(selector){
  var array = [];
  if (typeof selector === "string") {
    var nodelist = document.querySelectorAll(selector);
    array = Array.from(nodelist);
    return new DOMNodeCollection(array);
  } else if (selector instanceof HTMLElement) {
    array = [selector];
    return new DOMNodeCollection(array);
  } else {
    console.log("error");
  }

};
