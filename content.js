// default incase thelist doesn't load
var theList = [
  "official_hitomitanaka",
  "anri_okita"
];

window.onload = function(){
  document.addEventListener('scroll', function(){
    console.log(theList)
    for(var i=0; i < theList.length; i++){
      var name = theList[i];
      console.log('//h1/a[@title="'+ name + '"]');
      var element = document.evaluate( '//h1/a[@title="'+ name + '"]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue
      console.log(element);
      if (element && element.parentElement.childNodes[1].innerHTML !== '') {
        element.parentElement.childNodes[1].innerHTML = '';
      }
    }
  });
};
