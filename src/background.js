chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.browserAction.setBadgeText({text:'loaded'});
  pjsn.openNote();
});

