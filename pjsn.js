var j = jQuery;
var pjsn = {
  showNote:function(content) {
    top.trackerRef=window.open('','mytracker',
                               'width=800,height=800'
                               +',menubar=0'
                               +',toolbar=1'
                               +',status=0'
                               +',scrollbars=1'
                               +',resizable=1')
    top.trackerRef.document.writeln(
      '<html><head>'
        +'<title>Current Tracker Story</title>'
        +'<style media="all">'
        +'body,div{letter-spacing:-0.12em; font-weight:bold; text-transform: uppercase; '
        +'         font-family: Helvetica, Arial, sans-serif; color: #000; background: #eee; }'
        +'.center{text-align:center}'
        +'.calm{color: #611;}'
        +'span{font-size: 80%;}'
        +'.main{width:95%; margin:.4em auto;}</style>'
        +'<style media="(min-width:200px)">body,div,p {font-size:130%;}'
        +'</style>'
        +'<style media="(min-width:400px)">body,div,p {font-size:180%;}'
        +'</style>'
        +'<style media="(min-width:600px)">body,div,p {font-size:220%;}'
        +'</style>'
        +'<style media="(min-width:800px)">body,div,p {font-size:240%;}'
        +'</style>'
        +'<style media="(min-width:1000px)">body,div,p {font-size:260%;}'
        +'</style>'
        +'</head>'
        +'<body bgcolor=white onLoad="self.focus()">'
        +'<div class="main">' + content + '</div>'
        +'<div class="main calm center"><span>and</span><br>Do Not Panic</div>'
        +'</body></html>'
    )
    top.consoleRef.document.close()
  },
  init: function() {/* backlog start buttons */
    var _that = this;
    var getStoryName = function(startB) {
      var desc = j(startB).closest('.storyItem').find('.story_name')[0];
      return (desc.textContent||desc.innerText).replace(/(.*)\s+\(.*/, "$1");
    };
    j('#layout').on('mousedown', 'a.start', function() {
      var story = getStoryName(this);
      _that.showNote(story);
    });
    this.init = function() {};
  }
    
};

jQuery(document).ready(pjsn.init());
