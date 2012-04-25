YUI.add("datasource-io",function(b){var g=function(){g.superclass.constructor.apply(this,arguments)};b.mix(g,{NAME:"dataSourceIO",ATTRS:{io:{value:b.io,cloneDefaultValue:!1},ioConfig:{value:null}}});b.extend(g,b.DataSource.Local,{initializer:function(){this._queue={interval:null,conn:null,requests:[]}},successHandler:function(d,e,f){var a=this.get("ioConfig"),c=f.details[0];delete b.DataSource.Local.transactions[f.tId];c.data=e;this.fire("data",c);a&&a.on&&a.on.success&&a.on.success.apply(a.context||
b,arguments)},failureHandler:function(d,e,f){var a=this.get("ioConfig"),c=f.details[0];delete b.DataSource.Local.transactions[f.tId];c.error=Error("IO data failure");c.data=e;this.fire("data",c);a&&a.on&&a.on.failure&&a.on.failure.apply(a.context||b,arguments)},_queue:null,_defRequestFn:function(d){var e=this.get("source"),f=this.get("io"),a=this.get("ioConfig"),c=d.request,a=b.merge(a,d.cfg,{on:b.merge(a,{success:this.successHandler,failure:this.failureHandler}),context:this,arguments:d});b.Lang.isString(c)&&
(a.method&&"POST"===a.method.toUpperCase()?a.data=a.data?a.data+c:c:e+=c);b.DataSource.Local.transactions[d.tId]=f(e,a);return d.tId}});b.DataSource.IO=g},"3.5.0",{requires:["datasource-local","io-base"]});