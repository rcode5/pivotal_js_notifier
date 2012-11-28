f = window.onload;

window.onload = function() {
  if(typeof f == 'function') { f(); }
  var content = chrome.storage.local.get('currentStory');
  console.log(content);
  document.getElementById('main_content').innerHTML=content;
  self.focus();
};
