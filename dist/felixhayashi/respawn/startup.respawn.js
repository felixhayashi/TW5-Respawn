/*\

title: $:/plugins/felixhayashi/respawn/respawn.js
type: application/javascript
module-type: startup

@preserve

\*/
(function(){"use strict";var t="$:/plugins/felixhayashi/respawn/Configuration";var e=function(e){if(!e["$:/StoryList"])return;var i=$tw.wiki.getTiddler("$:/StoryList");if(i&&!i.fields["list"].length){var r=$tw.wiki.getTiddler(t).fields;window.setTimeout(function(){$tw.rootWidget.dispatchEvent({type:"tm-home"})},parseInt(r.delay)||500)}};exports.name="respawn";exports.platforms=["browser"];exports.after=["story"];exports.synchronous=true;exports.startup=function(){$tw.wiki.addEventListener("change",e)}})();