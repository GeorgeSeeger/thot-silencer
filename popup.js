window.addEventListener('load', function() {
    document.getElementById('addusername').addEventListener('submit', addUserName);
});

function addUserName() {
  event.preventDefault();
  chrome.storage.sync.get('theList', function(list){
    var username = encodeURIComponent(document.getElementById('username').value);
    var theNewList = list['theList']
    theNewList.push(username);
    newList(theNewList);
  });
}

function printList() {
  chrome.storage.sync.get('theList', function(list){
    console.log(list);
  });
}

function newList(array) {
  chrome.storage.sync.set({'theList': array}, function(){
    console.log('Saved ' + array[array.length - 1]);
  });
}

function emptyList() {
  chrome.storage.sync.remove('theList', function(){
    console.log('Emptied the list');
  });
  newList([]);
}
