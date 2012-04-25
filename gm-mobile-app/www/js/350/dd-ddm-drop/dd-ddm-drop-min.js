YUI.add("dd-ddm-drop",function(d){d.mix(d.DD.DDM,{_noShim:!1,_activeShims:[],_hasActiveShim:function(){return this._noShim?!0:this._activeShims.length},_addActiveShim:function(a){this._activeShims[this._activeShims.length]=a},_removeActiveShim:function(a){var b=[];d.each(this._activeShims,function(c){c._yuid!==a._yuid&&(b[b.length]=c)});this._activeShims=b},syncActiveShims:function(a){d.later(0,this,function(a){a=a?this.targets:this._lookup();d.each(a,function(a){a.sizeShim.call(a)},this)},a)},mode:0,
POINT:0,INTERSECT:1,STRICT:2,useHash:!0,activeDrop:null,validDrops:[],otherDrops:{},targets:[],_addValid:function(a){this.validDrops[this.validDrops.length]=a;return this},_removeValid:function(a){var b=[];d.each(this.validDrops,function(c){c!==a&&(b[b.length]=c)});this.validDrops=b;return this},isOverTarget:function(a){if(this.activeDrag&&a){var b=this.activeDrag.mouseXY,c=this.activeDrag.get("dragMode"),d,e=a.shim;if(b&&this.activeDrag){d=this.activeDrag.region;if(c==this.STRICT)return this.activeDrag.get("dragNode").inRegion(a.region,
!0,d);if(a&&a.shim){if(c==this.INTERSECT&&this._noShim)return b=d?d:this.activeDrag.get("node"),a.get("node").intersect(b,a.region).inRegion;this._noShim&&(e=a.get("node"));return e.intersect({top:b[1],bottom:b[1],left:b[0],right:b[0]},a.region).inRegion}}}return!1},clearCache:function(){this.validDrops=[];this.otherDrops={};this._activeShims=[]},_activateTargets:function(){this._noShim=!0;this.clearCache();d.each(this.targets,function(a){a._activateShim([]);!0==a.get("noShim")&&(this._noShim=!1)},
this);this._handleTargetOver()},getBestMatch:function(a,b){var c=null,f=0,e;d.each(a,function(a){var b=this.activeDrag.get("dragNode").intersect(a.get("node"));a.region.area=b.area;b.inRegion&&b.area>f&&(f=b.area,c=a)},this);return b?(e=[],d.each(a,function(a){a!==c&&(e[e.length]=a)},this),[c,e]):c},_deactivateTargets:function(){var a=[],b=this.activeDrag,c=this.activeDrop;if(b&&c&&this.otherDrops[c]){if(b.get("dragMode")?(a=this.getBestMatch(this.otherDrops,!0),c=a[0],a=a[1]):(a=this.otherDrops,
delete a[c]),b.get("node").removeClass(this.CSS_PREFIX+"-drag-over"),c)c.fire("drop:hit",{drag:b,drop:c,others:a}),b.fire("drag:drophit",{drag:b,drop:c,others:a})}else b&&b.get("dragging")&&(b.get("node").removeClass(this.CSS_PREFIX+"-drag-over"),b.fire("drag:dropmiss",{pageX:b.lastXY[0],pageY:b.lastXY[1]}));this.activeDrop=null;d.each(this.targets,function(a){a._deactivateShim([])},this)},_dropMove:function(){this._hasActiveShim()?this._handleTargetOver():d.each(this.otherDrops,function(a){a._handleOut.apply(a,
[])})},_lookup:function(){if(!this.useHash||this._noShim)return this.validDrops;var a=[];d.each(this.validDrops,function(b){b.shim&&b.shim.inViewportRegion(!1,b.region)&&(a[a.length]=b)});return a},_handleTargetOver:function(){var a=this._lookup();d.each(a,function(a){a._handleTargetOver.call(a)},this)},_regTarget:function(a){this.targets[this.targets.length]=a},_unregTarget:function(a){var b=[],c;d.each(this.targets,function(c){c!=a&&(b[b.length]=c)},this);this.targets=b;c=[];d.each(this.validDrops,
function(b){b!==a&&(c[c.length]=b)});this.validDrops=c},getDrop:function(a){var b=!1,c=d.one(a);c instanceof d.Node&&d.each(this.targets,function(a){c.compareTo(a.get("node"))&&(b=a)});return b}},!0)},"3.5.0",{skinnable:!1,requires:["dd-ddm"]});