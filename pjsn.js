try {
  var arrayIncludes = function(arr, v) {
    var i = 0;
    var n = arr.length;
    for(;i<n;++i){
      var val = arr[i];
      if (val == v) {
        return true;
      }
    }
    return false;
  };
  var closestByClass = function(el, clz) {
    while(el && el != document) {
      var p = el.parentNode;
      var classes = (p.className || '').split(/\s+/);
      if (arrayIncludes(classes,clz)) {
        return p;
      }
      else {
        el = p;
      }
    }
    return null;
  };
  var pjsn = {
    saveNote:function(content) {
      chrome.storage.local.set({currentStory: content});
      var c = window.open(chrome.extension.getURL('popup.html'),'mytracker',
                  'width=800,height=800'
                  +',menubar=0'
                  +',toolbar=1'
                  +',status=0'
                  +',scrollbars=1'
                  +',resizable=1');
    },
    init: function() {/* backlog start buttons */
      var _that = this;
      var getStoryName = function(startB) {
        var item = closestByClass(startB, 'storyItem');
        if(item) {
          var story_name_elements = item.getElementsByClassName('story_name');
          var span = '';
          var i = 0;
          var n = story_name_elements.length;
          for(;i<n;++i) {
            var sp = story_name_elements[i];
            if (sp.tagName == 'SPAN') {
              span = sp;
              break;
            }
          }
          if (span) {
            return (span.textContent||span.innerText).replace(/(.*)\s+\(.*/, "$1");
          }
        }
        return 'N/A';
      };
      jQuery('body').on('mousedown', '#layout a.start', function() {
        var story = getStoryName(this);
        _that.saveNote(story);
      });
      this.init = function() {};
    }
    
  };

  jQuery(document).ready(pjsn.init());
  console.log('loaded pivotal notifier');
} catch(ex) {
  console.log('Failed to load the pivotal notifier extension');
  console.log("Exception", ex.message);
}
