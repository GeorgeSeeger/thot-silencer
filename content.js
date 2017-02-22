// default incase thelist doesn't load
var theList = [
  "official_hitomitanaka",
  "anri_okita"
];

window.onload = function(){
  document.addEventListener('scroll', function(){
    for(var i=0; i < theList.length; i++){
      var name = theList[i];
      var element = document.evaluate( '//h1/a[@title="'+ name + '"]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue
      if (element && element.parentElement.childNodes[1].innerHTML !== '') {
        element.parentElement.childNodes[1].innerHTML = '';
      }
    }
  });
};
