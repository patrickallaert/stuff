YUI.add("plugin",function(f){function b(a){!this.hasImpl||!this.hasImpl(f.Plugin.Base)?b.superclass.constructor.apply(this,arguments):b.prototype.initializer.apply(this,arguments)}b.ATTRS={host:{writeOnce:!0}};b.NAME="plugin";b.NS="plugin";f.extend(b,f.Base,{_handles:null,initializer:function(){this._handles=[]},destructor:function(){if(this._handles)for(var a=0,d=this._handles.length;a<d;a++)this._handles[a].detach()},doBefore:function(a,d,c){var b=this.get("host"),e;a in b?e=this.beforeHostMethod(a,
d,c):b.on&&(e=this.onHostEvent(a,d,c));return e},doAfter:function(a,d,c){var b=this.get("host"),e;a in b?e=this.afterHostMethod(a,d,c):b.after&&(e=this.afterHostEvent(a,d,c));return e},onHostEvent:function(a,d,b){a=this.get("host").on(a,d,b||this);this._handles.push(a);return a},afterHostEvent:function(a,b,c){a=this.get("host").after(a,b,c||this);this._handles.push(a);return a},beforeHostMethod:function(a,b,c){a=f.Do.before(b,this.get("host"),a,c||this);this._handles.push(a);return a},afterHostMethod:function(a,
b,c){a=f.Do.after(b,this.get("host"),a,c||this);this._handles.push(a);return a},toString:function(){return this.constructor.NAME+"["+this.constructor.NS+"]"}});f.namespace("Plugin").Base=b},"3.5.1",{requires:["base-base"]});