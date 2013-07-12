// nothing there yet
window.addEventListener('DOMContentLoaded', function() {

  var languages = ["en", "fr", "zh"];
  var language = window.navigator.userLanguage || window.navigator.language;

  if (language != undefined) {
    if (language.indexOf('-') > -1) {
      language = language.substr(0,language.indexOf('-'));
    }
    if (languages.indexOf(language) == -1) {
      language = 'en';
    }
    var here = window.location.href;
    here = here.substr(here.lastIndexOf('/')+1);
    if ((here == 'index.html' || here == '') && language != 'en') {
      window.location.href = "index-"+language+".html";
    }
  }

  var openlink = document.getElementById("open");
  var body = document.getElementById("body");
  addEvent(openlink, 'click', function(e) {
    e.preventDefault();
    removeClass(body,"full");
  });

});