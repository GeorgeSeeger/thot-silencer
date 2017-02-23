var theList;

window.addEventListener('load', function() {
    updateList();
    displayList();

    document.getElementById('addusername').addEventListener('submit', addUserName);

    document.getElementById('display').addEventListener('click', displayList);

    document.getElementById('remove').addEventListener('click', removeUserName);

    document.getElementById('remove-all').addEventListener('click', emptyList);
});

function addUserName(boolean = true) {
  event.preventDefault();
  chrome.storage.sync.get('theList', function(list){
    var element = document.getElementById('username');
    var username = encodeURIComponent(element.value);
    element.value = '';
    var theNewList = list['theList']
    if (boolean){ //add
      theNewList.push(username);
    } else { //remove
      theNewList.splice(theNewList.indexOf(username), 1);
    }
    newList(theNewList);

    //send message to content.js to update theList
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "update"});
    });
    displayList();
  });
}

function removeUserName() {
  addUserName(false);
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

function updateList() {
  chrome.storage.sync.get('theList', function(obj){
    theList = obj['theList'];
  })
}

function displayList() {
  updateList();
  var holder = document.getElementById('username-list');
  holder.innerHTML = '';
  for (var i = 0; i < theList.length; i++){
    holder.innerHTML += "<div class='list'>\t" + theList[i] + "</div>";
  }
}
