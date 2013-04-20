// nothing there yet
window.addEventListener('DOMContentLoaded', function() {

  var body = document.getElementById('body');
  var items = document.getElementsByTagName('li');

  function display() {
    w = window.innerWidth;
    h = window.innerHeight;
    big = (w < h) ? h : w;
    n = Math.round((big-100) / items.length);
    if (n < 150) {
      n = 150;
      h = Math.round(h/2);
    }
    for (i=0;i<items.length;i++) {
      items[i].style.width = (n-11)+'px';
      items[i].style.height = (h-12)+'px';
      items[i].childNodes[0].style.width = (n-11)+'px';
      items[i].childNodes[0].style.height = (h/2)+'px';
      items[i].childNodes[0].style.fontSize = (n/10)+'px';
      items[i].childNodes[0].style.lineHeight = (n/10)+'px';
      items[i].childNodes[0].style.paddingTop = (h/2-n/10)+'px';
    }
  }

  // display();
  // window.onresize = function(){ display() };
});