YUI.add("yui-log-nodejs",function(c){var f=require(process.binding("natives").util?"util":"sys"),d=!1;try{d=require("stdio").isStderrATTY()}catch(h){d=!0}c.config.useColor=d;c.consoleColor=function(a,b){if(!this.config.useColor)return a;b||(b="32");return"\u001b["+b+"m"+a+"\u001b[0m"};c.config.logFn||(c.config.logFn=function(a,b,c){b=b||"info";c=c?this.consoleColor(" ("+c.toLowerCase()+"):",35):"";null===a&&(a="null");if("object"===typeof a||a instanceof Array)try{a=a.tagName||a._yuid||a._query?a.toString():
f.inspect(a)}catch(d){}var e="37;40",g=a?"":31,b=b+"";switch(b.toLowerCase()){case "error":e=g=31;break;case "warn":e=33;break;case "debug":e=34}"string"===typeof a&&a&&-1!==a.indexOf("\n")&&(a="\n"+a);f.error(this.consoleColor(b.toLowerCase()+":",e)+c+" "+this.consoleColor(a,g))})},"3.5.1",{requires:["yui-log"]});