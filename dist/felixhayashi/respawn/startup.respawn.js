/*\

title: $:/plugins/felixhayashi/respawn/respawn.js
type: application/javascript
module-type: startup

@preserve

\*/
(function(){"use strict";var t="$:/plugins/felixhayashi/respawn/config";var e=function(e){if(!e["$:/StoryList"])return;var r=$tw.wiki.getTiddler("$:/StoryList");if(r&&!r.fields["list"].length){var i=$tw.wiki.getTiddler(t);var s=i?i.fields:{};window.setTimeout(function(){$tw.rootWidget.dispatchEvent({type:"tm-home"})},parseInt(s.delay)||500)}};exports.name="respawn";exports.platforms=["browser"];exports.after=["story"];exports.synchronous=true;exports.startup=function(){$tw.wiki.addEventListener("change",e)}})();