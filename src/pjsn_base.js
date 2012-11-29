var pjsn = window.pjsn = window.pjsn || {};

try {
  var mergeObject = function(orig, ext) {
    for(k in ext) {
      orig[k] = ext[k]
    }
    return orig;
  };

  var methods = {
    openNote:function() {
      var c = window.open(chrome.extension.getURL('popup.html'),'mytracker',
                  'width=800,height=800'
                  +',menubar=0'
                  +',toolbar=0'
                  +',status=0'
                  +',resizable=1');
    }
  }
  
  mergeObject(pjsn, methods);
} catch(ex) {
}
