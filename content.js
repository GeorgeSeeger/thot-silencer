var theList;

function updateList() {
  chrome.storage.sync.get('theList', function(obj){
    theList = obj['theList'];
  })
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('received message');
    if( request.message === "update" ) {
      console.log('Updating list')
      updateList();
    }
});

window.onload = function(){
  updateList();
  document.addEventListener('scroll', function(){
    console.log(theList);
    for(var i=0; i < theList.length; i++){
      var name = theList[i];
      var element = document.evaluate( '//h1/a[@title="'+ name + '"]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue
      if (element && element.parentElement.childNodes[1].innerHTML !== '') {
        element.parentElement.childNodes[1].setAttribute('style', 'display: none;');
      }
    }
  });
};
