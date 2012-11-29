var f = window.onload

var setStory = function() {
  chrome.storage.local.get('currentStory', function(data) {
    document.getElementById('main_content').innerHTML = data.currentStory;
  });
};

window.addEventListener("storage", function() { 
  console.log("storage update"); setStory(); 
}, false);

window.onload = function() {
  if(typeof f == 'function') {
    f();
  }
  setStory();
};

window.onfocus = setStory;
  
