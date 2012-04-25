YUI.add("dd-scroll",function(a){var c=function(){c.superclass.constructor.apply(this,arguments)},d,f;c.ATTRS={parentScroll:{value:!1,setter:function(b){return b?b:!1}},buffer:{value:30,validator:a.Lang.isNumber},scrollDelay:{value:235,validator:a.Lang.isNumber},host:{value:null},windowScroll:{value:!1,validator:a.Lang.isBoolean},vertical:{value:!0,validator:a.Lang.isBoolean},horizontal:{value:!0,validator:a.Lang.isBoolean}};a.extend(c,a.Base,{_scrolling:null,_vpRegionCache:null,_dimCache:null,_scrollTimer:null,
_getVPRegion:function(){var b={},b=this.get("parentScroll"),a=this.get("buffer"),g=this.get("windowScroll"),c=g?[]:b.getXY(),e=g?"winWidth":"offsetWidth",d=g?"winHeight":"offsetHeight",h=g?b.get("scrollTop"):c[1],g=g?b.get("scrollLeft"):c[0];return this._vpRegionCache=b={top:h+a,right:b.get(e)+g-a,bottom:b.get(d)+h-a,left:g+a}},initializer:function(){var b=this.get("host");b.after("drag:start",a.bind(this.start,this));b.after("drag:end",a.bind(this.end,this));b.on("drag:align",a.bind(this.align,this));
a.one("win").on("scroll",a.bind(function(){this._vpRegionCache=null},this))},_checkWinScroll:function(a){var c=this._getVPRegion(),g=this.get("host"),d=this.get("windowScroll"),e=g.lastXY,f=!1,h=this.get("buffer"),m=this.get("parentScroll"),n=m.get("scrollTop"),o=m.get("scrollLeft"),r=e[1]+this._dimCache.h,p=e[1],s=e[0]+this._dimCache.w,q=e[0],i=p,j=q,k=n,l=o;if(this.get("horizontal")&&(q<=c.left&&(f=!0,j=e[0]-(d?h:0),l=o-h),s>=c.right))f=!0,j=e[0]+(d?h:0),l=o+h;if(this.get("vertical")&&(r>=c.bottom&&
(f=!0,i=e[1]+(d?h:0),k=n+h),p<=c.top))f=!0,i=e[1]-(d?h:0),k=n-h;0>k&&(k=0,i=e[1]);0>l&&(l=0,j=e[0]);0>i&&(i=e[1]);0>j&&(j=e[0]);a?(g.actXY=[j,i],g._moveNode({node:m,top:k,left:l}),!k&&!l&&this._cancelScroll()):f?this._initScroll():this._cancelScroll()},_initScroll:function(){this._cancelScroll();this._scrollTimer=a.Lang.later(this.get("scrollDelay"),this,this._checkWinScroll,[!0],!0)},_cancelScroll:function(){this._scrolling=!1;this._scrollTimer&&(this._scrollTimer.cancel(),delete this._scrollTimer)},
align:function(a){this._scrolling&&(this._cancelScroll(),a.preventDefault());this._scrolling||this._checkWinScroll()},_setDimCache:function(){var a=this.get("host").get("dragNode");this._dimCache={h:a.get("offsetHeight"),w:a.get("offsetWidth")}},start:function(){this._setDimCache()},end:function(){this._dimCache=null;this._cancelScroll()}});a.namespace("Plugin");d=function(){d.superclass.constructor.apply(this,arguments)};d.ATTRS=a.merge(c.ATTRS,{windowScroll:{value:!0,setter:function(b){b&&this.set("parentScroll",
a.one("win"));return b}}});a.extend(d,c,{initializer:function(){this.set("windowScroll",this.get("windowScroll"))}});d.NAME=d.NS="winscroll";a.Plugin.DDWinScroll=d;f=function(){f.superclass.constructor.apply(this,arguments)};f.ATTRS=a.merge(c.ATTRS,{node:{value:!1,setter:function(b){var c=a.one(b);c?this.set("parentScroll",c):!1!==b&&a.error("DDNodeScroll: Invalid Node Given: "+b);return c}}});a.extend(f,c,{initializer:function(){this.set("node",this.get("node"))}});f.NAME=f.NS="nodescroll";a.Plugin.DDNodeScroll=
f;a.DD.Scroll=c},"3.5.0",{skinnable:!1,optional:["dd-proxy"],requires:["dd-drag"]});