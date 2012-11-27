var j = jQuery;
var f = function() {/* backlog start buttons */
  var getStoryName = function(startB) {
    var desc = j(startB).closest('.storyItem').find('.story_name')[0];
    return (desc.textContent||desc.innerText).replace(/(.*)\s+\(.*/, "$1");
  };

  j('#layout').on('mousedown', 'a.start', function() {
    var story = getStoryName(this);
    
  });
};
jQuery(document).ready(f);
