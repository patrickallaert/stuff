YUI.add("scrollview-list",function(a){function b(){b.superclass.constructor.apply(this,arguments)}var c=a.ClassNameManager.getClassName,d=c("scrollview","list"),e=c("scrollview","item");b.NAME="pluginList";b.NS="list";b.ATTRS={isAttached:{value:!1,validator:a.Lang.isBoolean}};a.namespace("Plugin").ScrollViewList=a.extend(b,a.Plugin.Base,{initializer:function(){this._host=this.get("host");this.afterHostEvent("render",this._addClassesToList)},_addClassesToList:function(){if(!this.get("isAttached")){var a=
this._host.get("contentBox"),b;a.hasChildNodes()&&(b=a.all("> ul"),a=a.all("> ul > li"),b.each(function(a){a.addClass(d)}),a.each(function(a){a.addClass(e)}),this.set("isAttached",!0),this._host.syncUI())}}})},"3.5.0",{requires:["plugin","classnamemanager"],skinnable:!0});