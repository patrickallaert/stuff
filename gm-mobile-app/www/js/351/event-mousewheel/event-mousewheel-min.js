YUI.add("event-mousewheel",function(a){var d=function(b){var b=a.Array(b,0,!0),c;a.UA.gecko?(b[0]="DOMMouseScroll",c=a.config.win):c=a.config.doc;3>b.length?b[2]=c:b.splice(2,0,c);return b};a.Env.evt.plugins.mousewheel={on:function(){return a.Event._attach(d(arguments))},detach:function(){return a.Event.detach.apply(a.Event,d(arguments))}}},"3.5.1",{requires:["node-base"]});