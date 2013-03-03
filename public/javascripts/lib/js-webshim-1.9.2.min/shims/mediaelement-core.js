(function(i,l,f){var j=l.audio&&l.video,s=!1,o=f.cfg.mediaelement,m=f.bugs,v=function(){f.ready("mediaelement-swf",function(){if(!f.mediaelement.createSWF)f.modules["mediaelement-swf"].test=i.noop,f.reTest(["mediaelement-swf"],j)})},k;if(j){var p=document.createElement("video");l.videoBuffered="buffered"in p;s="loop"in p;f.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));l.videoBuffered||(f.addPolyfill("mediaelement-native-fix",{f:"mediaelement",
test:l.videoBuffered,d:["dom-support"]}),f.reTest("mediaelement-native-fix"))}if(j&&!o.preferFlash){var n=function(c){var e=c.target.parentNode;!o.preferFlash&&(i(c.target).is("audio, video")||e&&i("source:last",e)[0]==c.target)&&f.ready("DOM mediaelement",function(){k&&v();f.ready("WINDOWLOAD mediaelement-swf",function(){setTimeout(function(){k&&!o.preferFlash&&f.mediaelement.createSWF&&!i(c.target).closest("audio, video").is(".nonnative-api-active")?(o.preferFlash=!0,document.removeEventListener("error",
n,!0),i("audio, video").mediaLoad(),f.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+c.target.src)):k||document.removeEventListener("error",n,!0)},20)})})};document.addEventListener("error",n,!0);i("audio, video").each(function(){this.error&&n({target:this})})}m.track=!1;l.track&&function(){if(!m.track)m.track="number"!=typeof i("<track />")[0].readyState;if(!m.track)try{new TextTrackCue(2,3,"")}catch(c){m.track=!0}var e=f.cfg.track,k=function(c){i(c.target).filter("track").each(j)},
j=function(){if(m.track||!e.override&&3==i.prop(this,"readyState"))e.override=!0,f.reTest("track"),document.removeEventListener("error",k,!0),this&&i.nodeName(this,"track")?f.error("track support was overwritten. Please check your vtt including your vtt mime-type"):f.info("track support was overwritten. due to bad browser support")},l=function(){document.addEventListener("error",k,!0);m.track?j():i("track").each(j)};e.override||(f.isReady("track")?l():i(l))}();f.register("mediaelement-core",function(c,
e,f,i,n){k=swfobject.hasFlashPlayerVersion("9.0.115");var g=e.mediaelement,p=function(a,b){var a=c(a),h={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!h.src)return h;var d=a.attr("type");if(d)h.type=d,h.container=c.trim(d.split(";")[0]);else if(b||(b=a[0].nodeName.toLowerCase(),"source"==b&&(b=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),d=g.getTypeForSrc(h.src,b))h.type=d,h.container=d;if(d=a.attr("media"))h.media=d;return h},q=!k&&"postMessage"in f&&j,w=
function(){var a;return function(){!a&&q&&(a=!0,e.loader.loadScript("https://www.youtube.com/player_api"),c(function(){e.polyfill("mediaelement-yt")}))}}(),x=function(){k?v():w()};e.addPolyfill("mediaelement-yt",{test:!q,d:["dom-support"]});g.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};g.mimeTypes.source=c.extend({},g.mimeTypes.audio,g.mimeTypes.video);g.getTypeForSrc=function(a,b){if(-1!=a.indexOf("youtube.com/watch?")||
-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],h;c.each(g.mimeTypes[b],function(b,c){if(-1!==c.indexOf(a))return h=b,!1});return h};g.srces=function(a,b){a=c(a);if(b)a.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(b)||(b=[b]),b.forEach(function(b){var c=i.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});
else{var b=[],h=a[0].nodeName.toLowerCase(),d=p(a,h);d.src?b.push(d):c("source",a).each(function(){d=p(this,h);d.src&&b.push(d)});return b}};c.fn.loadMediaSrc=function(a,b){return this.each(function(){b!==n&&(c(this).removeAttr("poster"),b&&c.attr(this,"poster",b));g.srces(this,a);c(this).mediaLoad()})};g.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
g.canThirdPlaySrces=function(a,b){var h="";if(k||q)a=c(a),b=b||g.srces(a),c.each(b,function(a,b){if(b.container&&b.src&&(k&&-1!=g.swfMimeTypes.indexOf(b.container)||q&&"video/youtube"==b.container))return h=b,!1});return h};var r={};g.canNativePlaySrces=function(a,b){var h="";if(j){var a=c(a),d=(a[0].nodeName||"").toLowerCase();if(!r[d])return h;b=b||g.srces(a);c.each(b,function(b,c){if(c.type&&r[d].prop._supvalue.call(a[0],c.type))return h=c,!1})}return h};g.setError=function(a,b){b||(b="can't play sources");
c(a).pause().data("mediaerror",b);e.warn("mediaelementError: "+b);setTimeout(function(){c(a).data("mediaerror")&&c(a).trigger("mediaerror")},1)};var y=function(){var a;return function(b,c,d){e.ready(k?"mediaelement-swf":"mediaelement-yt",function(){g.createSWF?g.createSWF(b,c,d):a||(a=!0,x(),y(b,c,d))});!a&&q&&!g.createSWF&&w()}}(),t=function(a,b,c,d,e){c||!1!==c&&b&&"third"==b.isActive?(c=g.canThirdPlaySrces(a,d))?y(a,c,b):e?g.setError(a,!1):t(a,b,!1,d,!0):(c=g.canNativePlaySrces(a,d))?b&&"third"==
b.isActive&&g.setActive(a,"html5",b):e?(g.setError(a,!1),b&&"third"==b.isActive&&g.setActive(a,"html5",b)):t(a,b,!0,d,!0)},z=/^(?:embed|object|datalist)$/i,u=function(a,b){var h=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{}),d=g.srces(a),f=a.parentNode;clearTimeout(h.loadTimer);c.data(a,"mediaerror",!1);if(d.length&&f&&!(1!=f.nodeType||z.test(f.nodeName||"")))b=b||e.data(a,"mediaelement"),t(a,b,o.preferFlash||n,d)};c(i).bind("ended",function(a){var b=e.data(a.target,"mediaelement");
(!s||b&&"html5"!=b.isActive||c.prop(a.target,"loop"))&&setTimeout(function(){!c.prop(a.target,"paused")&&c.prop(a.target,"loop")&&c(a.target).prop("currentTime",0).play()},1)});s||e.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var b=e.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=e.data(this,"mediaelement");u(this,a);j&&(!a||"html5"==a.isActive)&&b.prop._supvalue&&b.prop._supvalue.apply(this,arguments)}}});r[a]=e.defineNodeNameProperty(a,
"canPlayType",{prop:{value:function(b){var d="";j&&r[a].prop._supvalue&&(d=r[a].prop._supvalue.call(this,b),"no"==d&&(d=""));!d&&k&&(b=c.trim((b||"").split(";")[0]),-1!=g.swfMimeTypes.indexOf(b)&&(d="maybe"));return d}}})});e.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){u(a);a=null},9)}});f=function(){e.addReady(function(a,b){c("video, audio",
a).add(b.filter("video, audio")).each(function(){c.browser.msie&&8<e.browserVersion&&c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():u(this);if(j){var a,b,f=this,g=function(){var a=c.prop(f,"buffered");if(a){for(var b="",d=0,e=a.length;d<e;d++)b+=a.end(d);return b}},i=function(){var a=g();a!=b&&(b=a,c(f).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==
c.type&&(b=g());clearTimeout(a);a=setTimeout(i,999)}).bind("emptied stalled mediaerror abort suspend",function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})})};l.track&&!m.track&&e.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});j?(e.isReady("mediaelement-core",!0),f(),e.ready("WINDOWLOAD mediaelement",x)):e.ready("mediaelement-swf",f);c(function(){e.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
