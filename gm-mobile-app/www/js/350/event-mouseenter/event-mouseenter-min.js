YUI.add("event-mouseenter",function(c){var l=c.Env.evt.dom_wrappers,k=c.DOM.contains,m=c.Array,n=function(){},g={proxyType:"mouseover",relProperty:"fromElement",_notify:function(b,a,d){var e=this._node,a=b.relatedTarget||b[a];e!==a&&!k(e,a)&&d.fire(new c.DOMEventFacade(b,e,l["event:"+c.stamp(e)+b.type]))},on:function(b,a,d){b=[this.proxyType,this._notify,c.Node.getDOMNode(b),null,this.relProperty,d];a.handle=c.Event._attach(b,{facade:!1})},detach:function(b,a){a.handle.detach()},delegate:function(b,
a,d,e){b=c.Node.getDOMNode(b);a.handle=c.Event._attach([this.proxyType,n,b,null,d],{facade:!1});a.handle.sub.filter=e;a.handle.sub.relProperty=this.relProperty;a.handle.sub._notify=this._filterNotify},_filterNotify:function(b,a,d){a=a.slice();this.args&&a.push.apply(a,this.args);var b=c.delegate._applyFilter(this.filter,a,d),e=a[0].relatedTarget||a[0][this.relProperty],f,i,g,j,h;if(b){b=m(b);i=0;for(g=b.length&&(!f||!f.stopped);i<g&&!(h=b[0],!k(h,e)&&(f||(f=new c.DOMEventFacade(a[0],h,d),f.container=
c.one(d.el)),f.currentTarget=c.one(h),j=a[1].fire(f),!1===j));++i);}return j},detachDelegate:function(b,a){a.handle.detach()}};c.Event.define("mouseenter",g,!0);c.Event.define("mouseleave",c.merge(g,{proxyType:"mouseout",relProperty:"toElement"}),!0)},"3.5.0",{requires:["event-synthetic"]});