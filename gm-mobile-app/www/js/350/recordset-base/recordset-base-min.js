YUI.add("recordset-base",function(d){var g=d.Base.create("record",d.Base,[],{_setId:function(){return d.guid()},initializer:function(){},destructor:function(){},getValue:function(a){return void 0===a?this.get("data"):this.get("data")[a]}},{ATTRS:{id:{valueFn:"_setId"},data:{value:null}}});d.Record=g;var g=d.ArrayList,f=d.Lang,h=d.Base.create("recordset",d.Base,[],{initializer:function(){this._items||(this._items=[]);this.publish({add:{defaultFn:this._defAddFn},remove:{defaultFn:this._defRemoveFn},
empty:{defaultFn:this._defEmptyFn},update:{defaultFn:this._defUpdateFn}});this._buildHashTable(this.get("key"));this.after(["recordsChange","add","remove","update","empty"],this._updateHash)},getRecord:function(a){return f.isString(a)?this.get("table")[a]:f.isNumber(a)?this._items[a]:null},getRecordByIndex:function(a){return this._items[a]},getRecordsByIndex:function(a,b){for(var c=0,e=[],b=f.isNumber(b)&&0<b?b:1;c<b;c++)e.push(this._items[a+c]);return e},getLength:function(){return this.size()},
getValuesByKey:function(a){for(var b=0,c=this._items.length,e=[];b<c;b++)e.push(this._items[b].getValue(a));return e},add:function(a,b){var c=[],e,d=0;e=f.isNumber(b)&&-1<b?b:this._items.length;if(f.isArray(a))for(;d<a.length;d++)c[d]=this._changeToRecord(a[d]);else f.isObject(a)&&(c[0]=this._changeToRecord(a));this.fire("add",{added:c,index:e});return this},remove:function(a,b){var c=[],a=-1<a?a:this._items.length-1,b=0<b?b:1,c=this._items.slice(a,a+b);this.fire("remove",{removed:c,range:b,index:a});
return this},empty:function(){this.fire("empty",{});return this},update:function(a,b){var c,e,d=0;e=!f.isArray(a)?[a]:a;for(c=this._items.slice(b,b+e.length);d<e.length;d++)e[d]=this._changeToRecord(e[d]);this.fire("update",{updated:e,overwritten:c,index:b});return this},_defAddFn:function(a){this._items.splice.apply(this._items,[a.index,0].concat(a.added))},_defRemoveFn:function(a){this._items.splice(a.index,a.range||1)},_defUpdateFn:function(a){for(var b=0;b<a.updated.length;b++)this._items[a.index+
b]=this._changeToRecord(a.updated[b])},_defEmptyFn:function(){this._items=[]},_updateHash:function(a){var b="_hash",c=a.type.replace(/.*:/,""),b=b+(c.charAt(0).toUpperCase()+c.slice(1));(a=this[b]&&this[b](this.get("table"),this.get("key"),a))&&this.set("table",a)},_hashRecordsChange:function(a,b){return this._buildHashTable(b)},_buildHashTable:function(a){return this._hashAdd({},a,{added:this._items})},_hashAdd:function(a,b,c){var d=c.added,f;f=0;for(c=c.added.length;f<c;++f)a[d[f].get(b)]=d[f];
return a},_hashRemove:function(a,b,c){for(var d=c.removed.length-1;0<=d;--d)delete a[c.removed[d].get(b)];return a},_hashUpdate:function(a,b,c){c.overwritten&&c.overwritten.length&&(a=this._hashRemove(a,b,{removed:c.overwritten}));return this._hashAdd(a,b,{added:c.updated})},_hashEmpty:function(){return{}},_initHashTable:function(){return this._hashAdd({},this.get("key"),{added:this._items||[]})},_changeToRecord:function(a){return a instanceof d.Record?a:new d.Record({data:a})},_setRecords:function(a){if(!d.Lang.isArray(a))return d.Attribute.INVALID_VALUE;
var b=[],c,e;c=0;for(e=a.length;c<e;++c)b[c]=this._changeToRecord(a[c]);return this._items=b}},{ATTRS:{records:{lazyAdd:!1,getter:function(){return d.Array(this._items)},setter:"_setRecords"},table:{valueFn:"_initHashTable"},key:{value:"id",readOnly:!0}}});d.augment(h,g);d.Recordset=h},"3.5.0",{requires:["base","arraylist"]});