YUI.add("datatable-sort-deprecated",function(d){function f(){f.superclass.constructor.apply(this,arguments)}var g=d.ClassNameManager.getClassName;d.mix(f,{NS:"sort",NAME:"dataTableSort",ATTRS:{trigger:{value:{event:"click",selector:"th"},writeOnce:"initOnly"},lastSortedBy:{setter:"_setLastSortedBy",lazyAdd:!1},template:{value:'<a class="{link_class}" title="{link_title}" href="{link_href}">{value}</a>'},strings:{valueFn:function(){return d.Intl.get("datatable-sort-deprecated")}}}});d.extend(f,d.Plugin.Base,
{initializer:function(){var a=this.get("host"),b=this.get("trigger");a.get("recordset").plug(d.Plugin.RecordsetSort,{dt:a});a.get("recordset").sort.addTarget(a);this.doBefore("_createTheadThNode",this._beforeCreateTheadThNode);this.doBefore("_attachTheadThNode",this._beforeAttachTheadThNode);this.doBefore("_attachTbodyTdNode",this._beforeAttachTbodyTdNode);a.delegate(b.event,d.bind(this._onEventSortColumn,this),b.selector);a.after("recordsetSort:sort",function(){this._uiSetRecordset(this.get("recordset"))});
this.on("lastSortedByChange",function(b){this._uiSetLastSortedBy(b.prevVal,b.newVal,a)});a.get("rendered")&&(a._uiSetColumnset(a.get("columnset")),this._uiSetLastSortedBy(null,this.get("lastSortedBy"),a))},_setLastSortedBy:function(a){d.Lang.isString(a)&&(a={key:a,dir:"desc"});return a?"desc"===a.dir?{key:a.key,dir:"desc",notdir:"asc"}:{key:a.key,dir:"asc",notdir:"desc"}:null},_uiSetLastSortedBy:function(a,b,c){var l=this.get("strings"),e=c.get("columnset"),h=a&&a.key,f=b&&b.key,k=a&&c.getClassName(a.dir),
a=b&&c.getClassName(b.dir),h=e.keyHash[h],e=e.keyHash[f],c=c._tbodyNode,f=d.Lang.sub,i,j;h&&k&&(i=h.thNode,(j=i.one("a"))&&j.set("title",f(l.sortBy,{column:h.get("label")})),i.removeClass(k),c.all("."+g("column",h.get("id"))).removeClass(k));if(e&&a){i=e.thNode;if(j=i.one("a"))b="asc"===b.dir?"reverseSortBy":"sortBy",j.set("title",f(l[b],{column:e.get("label")}));i.addClass(a);c.all("."+g("column",e.get("id"))).addClass(a)}},_beforeCreateTheadThNode:function(a){var b;a.column.get("sortable")&&(b=
(b=this.get("lastSortedBy"))&&"asc"===b.dir&&b.key===a.column.get("key")?"reverseSortBy":"sortBy",a.value=d.Lang.sub(this.get("template"),{link_class:a.link_class||"",link_title:d.Lang.sub(this.get("strings."+b),{column:a.column.get("label")}),link_href:"#",value:a.value}))},_beforeAttachTheadThNode:function(a){var b=this.get("lastSortedBy"),c=b&&b.key,d=b&&b.dir,b=b&&b.notdir;a.column.get("sortable")&&a.th.addClass(g("datatable","sortable"));c&&c===a.column.get("key")&&a.th.replaceClass(g("datatable",
b),g("datatable",d))},_beforeAttachTbodyTdNode:function(a){var b=this.get("lastSortedBy"),c=b&&b.key,d=b&&b.dir,b=b&&b.notdir;a.column.get("sortable")&&a.td.addClass(g("datatable","sortable"));c&&c===a.column.get("key")&&a.td.replaceClass(g("datatable",b),g("datatable",d))},_onEventSortColumn:function(a){a.halt();var b=this.get("host"),c=b.get("columnset").idHash[a.currentTarget.get("id")],d,e;c.get("sortable")&&(a=c.get("key"),d=c.get("field"),e=this.get("lastSortedBy")||{},e=e.key===a&&"asc"===
e.dir,c=c.get("sortFn"),b.get("recordset").sort.sort(d,e,c),this.set("lastSortedBy",{key:a,dir:e?"desc":"asc"}))}});d.namespace("Plugin").DataTableSort=f},"3.5.0",{requires:["datatable-base-deprecated","plugin","recordset-sort"],lang:["en"]});