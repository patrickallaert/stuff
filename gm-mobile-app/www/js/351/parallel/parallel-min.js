YUI.add("parallel",function(c){c.Parallel=function(b){this.config=b||{};this.results=[];this.context=this.config.context||c;this.finished=this.total=0};c.Parallel.prototype={results:null,total:null,finished:null,add:function(b){var a=this;a.total+=1;return function(){a.finished++;a.results.push(b&&b.apply(a.context,arguments));a.test()}},test:function(){this.finished>=this.total&&this.callback&&this.callback.call(this.context,this.results,this.data)},done:function(b,a){this.callback=b;this.data=a;
this.test()}}},"3.5.1",{requires:["yui-base"]});