var els = document.getElementsByTagName("p");   
var colors = [
  'red', 'blue'
];
var text, span, activeColorIdx ;
for (var el of els) {
  text = el.innerHTML.split(' ');
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
  for (var word of text) {
    activeColorIdx = Math.floor(Math.random()*colors.length);
    span = document.createElement('span');
    span.innerHTML = word+" " ;
    span.style.color = colors[activeColorIdx] ;
    el.appendChild(span);
  }
}
