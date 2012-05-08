YUI.add("widget-stack",function(d){function c(){this._stackNode=this.get(h);this._stackHandles={};d.after(this._renderUIStack,this,i);d.after(this._syncUIStack,this,j);d.after(this._bindUIStack,this,k)}var f=d.Lang,e=d.UA,l=d.Node,g=d.Widget,h="boundingBox",i="renderUI",k="bindUI",j="syncUI";c.ATTRS={shim:{value:6==e.ie},zIndex:{value:0,setter:"_setZIndex"}};c.HTML_PARSER={zIndex:function(a){return this._parseZIndex(a)}};c.SHIM_CLASS_NAME=g.getClassName("shim");c.STACKED_CLASS_NAME=g.getClassName("stacked");
c.SHIM_TEMPLATE='<iframe class="'+c.SHIM_CLASS_NAME+'" frameborder="0" title="Widget Stacking Shim" src="javascript:false" tabindex="-1" role="presentation"></iframe>';c.prototype={_syncUIStack:function(){this._uiSetShim(this.get("shim"));this._uiSetZIndex(this.get("zIndex"))},_bindUIStack:function(){this.after("shimChange",this._afterShimChange);this.after("zIndexChange",this._afterZIndexChange)},_renderUIStack:function(){this._stackNode.addClass(c.STACKED_CLASS_NAME)},_parseZIndex:function(a){a=
!a.inDoc()||"static"===a.getStyle("position")?"auto":a.getComputedStyle("zIndex");return"auto"===a?null:a},_setZIndex:function(a){f.isString(a)&&(a=parseInt(a,10));f.isNumber(a)||(a=0);return a},_afterShimChange:function(a){this._uiSetShim(a.newVal)},_afterZIndexChange:function(a){this._uiSetZIndex(a.newVal)},_uiSetZIndex:function(a){this._stackNode.setStyle("zIndex",a)},_uiSetShim:function(a){a?(this.get("visible")?this._renderShim():this._renderShimDeferred(),6==e.ie&&this._addShimResizeHandlers()):
this._destroyShim()},_renderShimDeferred:function(){this._stackHandles.shimdeferred=this._stackHandles.shimdeferred||[];this._stackHandles.shimdeferred.push(this.on("visibleChange",function(a){a.newVal&&this._renderShim()}))},_addShimResizeHandlers:function(){this._stackHandles.shimresize=this._stackHandles.shimresize||[];var a=this.sizeShim,b=this._stackHandles.shimresize;b.push(this.after("visibleChange",a));b.push(this.after("widthChange",a));b.push(this.after("heightChange",a));b.push(this.after("contentUpdate",
a))},_detachStackHandles:function(a){var a=this._stackHandles[a],b;if(a&&0<a.length)for(;b=a.pop();)b.detach()},_renderShim:function(){var a=this._shimNode,b=this._stackNode;a||(a=this._shimNode=this._getShimTemplate(),b.insertBefore(a,b.get("firstChild")),this._detachStackHandles("shimdeferred"),this.sizeShim())},_destroyShim:function(){this._shimNode&&(this._shimNode.get("parentNode").removeChild(this._shimNode),this._shimNode=null,this._detachStackHandles("shimdeferred"),this._detachStackHandles("shimresize"))},
sizeShim:function(){var a=this._shimNode,b=this._stackNode;a&&6===e.ie&&this.get("visible")&&(a.setStyle("width",b.get("offsetWidth")+"px"),a.setStyle("height",b.get("offsetHeight")+"px"))},_getShimTemplate:function(){return l.create(c.SHIM_TEMPLATE,this._stackNode.get("ownerDocument"))}};d.WidgetStack=c},"3.5.1",{requires:["base-build","widget"]});