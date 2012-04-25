YUI.add("datatype-date-math",function(f){var g=f.Lang;f.mix(f.namespace("DataType.Date"),{isValidDate:function(a){return g.isDate(a)&&isFinite(a)&&"Invalid Date"!=a&&!isNaN(a)&&null!=a?!0:!1},areEqual:function(a,b){return this.isValidDate(a)&&this.isValidDate(b)&&a.getTime()==b.getTime()},isGreater:function(a,b){return this.isValidDate(a)&&this.isValidDate(b)&&a.getTime()>b.getTime()},isGreaterOrEqual:function(a,b){return this.isValidDate(a)&&this.isValidDate(b)&&a.getTime()>=b.getTime()},isInRange:function(a,
b,c){return this.isGreaterOrEqual(a,b)&&this.isGreaterOrEqual(c,a)},addDays:function(a,b){return new Date(a.getTime()+864E5*b)},addMonths:function(a,b){var c=a.getFullYear(),d=a.getMonth()+b,c=Math.floor(c+d/12),d=(d%12+12)%12,e=new Date(a.getTime());e.setYear(c);e.setMonth(d);return e},addYears:function(a,b){var c=a.getFullYear()+b,d=new Date(a.getTime());d.setYear(c);return d},listOfDatesInMonth:function(a){if(!this.isValidDate(a))return[];for(var b=this.daysInMonth(a),c=a.getFullYear(),a=a.getMonth(),
d=[],e=1;e<=b;e++)d.push(new Date(c,a,e,12,0,0));return d},daysInMonth:function(a){if(!this.isValidDate(a))return 0;var b=a.getMonth(),c=[31,28,31,30,31,30,31,31,30,31,30,31];if(1!=b)return c[b];a=a.getFullYear();return 0===a%400?29:0===a%100?28:0===a%4?29:28}})},"3.5.0",{requires:["yui-base"]});