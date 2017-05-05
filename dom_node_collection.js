class DOMNodeCollection {
  constructor (htmlElements) {
    this.htmlElements = htmlElements;
  }

  html (value) {
    if (value === undefined){
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements.forEach( (el) => {
        el.innerHTML = value;
      });
    }
 }

 empty (){
   this.htmlElements.forEach( (node) => {
     node.innerHTML = "";
   });
 }

 append(x) {
   this.htmlElements.forEach((el) => {
    el.appendChild(x);
   });
 }

 children() {
   let kids = [];

   this.htmlElements.forEach( (el) => {
     kids.push(el.children);
   });
   return new DOMNodeCollection(kids);
 }

 parents(){
   let adults = [];
   this.htmlElements.forEach( (el) => {
     adults.push(el.parentNode);
   });
   return new DOMNodeCollection(adults);
 }

 find(selector) {
   let results = [];

   this.htmlElements.forEach( (el) => {
     results.push(el.querySelectorAll(selector));
   });

   return new DOMNodeCollection(results);
 }

 remove() {
   this.htmlElements.forEach( (el, idx) => {
     el.parentNode.removeChild(el);
   });
  this.htmlElements = [];
 }

 on(action, cb){
   this.htmlElements.forEach( (el) =>{
     el.setAttribute("cb", cb);
     el.addEventListener(action, cb);
   });
 }

 off(action){
   this.htmlElements.forEach( (el) => {
     console.log(el.cb);
     el.removeEventListener(action, el.cb);
   });
 }

}

module.exports = DOMNodeCollection;
