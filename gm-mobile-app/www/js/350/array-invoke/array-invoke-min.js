YUI.add("array-invoke",function(a){a.Array.invoke=function(b,c){var e=a.Array(arguments,2,!0),f=a.Lang.isFunction,d=[];a.Array.each(a.Array(b),function(a,b){a&&f(a[c])&&(d[b]=a[c].apply(a,e))});return d}},"3.5.0",{requires:["yui-base"]});