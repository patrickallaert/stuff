YUI.add("app-transitions",function(b){function a(){}a.ATTRS={transitions:{setter:"_setTransitions",value:!1}};a.CLASS_NAMES={transitioning:b.ClassNameManager.getClassName("app","transitioning")};a.FX={fade:{viewIn:"app:fadeIn",viewOut:"app:fadeOut"},slideLeft:{viewIn:"app:slideLeft",viewOut:"app:slideLeft"},slideRight:{viewIn:"app:slideRight",viewOut:"app:slideRight"}};a.prototype={transitions:{navigate:"fade",toChild:"slideLeft",toParent:"slideRight"},_setTransitions:function(a){var c=this.transitions;
return a&&!0===a?b.merge(c):a}};b.App.Transitions=a;b.Base.mix(b.App,[a])},"3.5.1",{requires:["app-base"]});