YUI.add("dd-proxy",function(c){var d=c.DD.DDM,e=function(a){e.superclass.constructor.apply(this,arguments)};e.NAME="DDProxy";e.NS="proxy";e.ATTRS={host:{},moveOnEnd:{value:!0},hideOnEnd:{value:!0},resizeFrame:{value:!0},positionProxy:{value:!0},borderStyle:{value:"1px solid #808080"},cloneNode:{value:!1}};c.namespace("Plugin");c.extend(e,c.Base,{_hands:null,_init:function(){if(d._proxy){this._hands||(this._hands=[]);var a,f,b=this.get("host");b.get("dragNode").compareTo(b.get("node"))&&d._proxy&&
b.set("dragNode",d._proxy);c.each(this._hands,function(a){a.detach()});a=d.on("ddm:start",c.bind(function(){d.activeDrag===b&&d._setFrame(b)},this));f=d.on("ddm:end",c.bind(function(){if(b.get("dragging")){this.get("moveOnEnd")&&b.get("node").setXY(b.lastXY);this.get("hideOnEnd")&&b.get("dragNode").setStyle("display","none");if(this.get("cloneNode")){b.get("dragNode").remove();b.set("dragNode",d._proxy)}}},this));this._hands=[a,f]}else d._createFrame(),c.on("domready",c.bind(this._init,this))},initializer:function(){this._init()},
destructor:function(){var a=this.get("host");c.each(this._hands,function(a){a.detach()});a.set("dragNode",a.get("node"))},clone:function(){var a=this.get("host"),d=a.get("node"),b=d.cloneNode(!0);delete b._yuid;b.setAttribute("id",c.guid());b.setStyle("position","absolute");d.get("parentNode").appendChild(b);a.set("dragNode",b);return b}});c.Plugin.DDProxy=e;c.mix(d,{_createFrame:function(){if(!d._proxy){d._proxy=!0;var a=c.Node.create("<div></div>"),f=c.one("body");a.setStyles({position:"absolute",
display:"none",zIndex:"999",top:"-999px",left:"-999px"});f.prepend(a);a.set("id",c.guid());a.addClass(d.CSS_PREFIX+"-proxy");d._proxy=a}},_setFrame:function(a){var c=a.get("node"),b=a.get("dragNode"),e,g="auto";(e=d.activeDrag.get("activeHandle"))&&(g=e.getStyle("cursor"));"auto"==g&&(g=d.get("dragCursor"));b.setStyles({visibility:"hidden",display:"block",cursor:g,border:a.proxy.get("borderStyle")});a.proxy.get("cloneNode")&&(b=a.proxy.clone());a.proxy.get("resizeFrame")&&b.setStyles({height:c.get("offsetHeight")+
"px",width:c.get("offsetWidth")+"px"});a.proxy.get("positionProxy")&&b.setXY(a.nodeXY);b.setStyle("visibility","visible")}})},"3.5.1",{skinnable:!1,requires:["dd-drag"]});