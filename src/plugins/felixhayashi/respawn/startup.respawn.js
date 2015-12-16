/*\

title: $:/plugins/felixhayashi/respawn/respawn.js
type: application/javascript
module-type: startup

@preserve

\*/

(function(){
  
  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";
  
  var configTRef = "$:/plugins/felixhayashi/respawn/Configuration";
  
  var changeListener = function(changedTiddlers) {
    
    if(!changedTiddlers["$:/StoryList"]) return;
    
    var tObj = $tw.wiki.getTiddler("$:/StoryList");
    if(tObj && !tObj.fields["list"].length) {
      
      var config = $tw.wiki.getTiddler(configTRef).fields;
      window.setTimeout(function() {
        $tw.rootWidget.dispatchEvent({
          type: "tm-home"
        });
      }, parseInt(config.delay) || 500);
    }
    
  };
  
  exports.name = "respawn";
  exports.platforms = ["browser"];
  exports.after = ["story"];
  exports.synchronous = true;
  
  exports.startup = function() {
        
    $tw.wiki.addEventListener("change", changeListener);
    
  };

})();
