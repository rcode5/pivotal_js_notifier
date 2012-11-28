try {
  var j = jQuery;
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
        var desc = j(startB).closest('.storyItem').find('.story_name')[0];
        return (desc.textContent||desc.innerText).replace(/(.*)\s+\(.*/, "$1");
      };
      j('body').on('mousedown', '#layout a.start', function() {
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
}
