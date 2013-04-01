var k=!0,r=null,s=!1;if(/^u/.test(typeof define)){var K={};this.define=function(t,u){K[t]=u()};this.require=function(t){return K[t]}}define("minified",function(){function t(a){return a!=r?""+a:""}function u(a){return"string"==typeof a}function y(a){return"function"==typeof a}function C(a){return a&&a.nodeType}function z(a){return a&&a.length!=r&&!u(a)&&!C(a)&&!y(a)}function v(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function m(a,b){if(a)for(var c=0;c<a.length;c++)b(a[c],c);return a}function H(a,b){var c=[];m(a,function(a,e){b(a,e)&&c.push(a)});return c}function w(a,b,c){var d=[];(c||m)(a,function(a,c){z(a=b(a,c))?m(a,function(a){d.push(a)}):a!=r&&d.push(a)});return d}function j(a,b,c){return t(a).replace(b,c||"")}function A(a){return parseFloat(j(a,/^[^\d-]/))}function L(a){var b={o:"absolute",g:"hidden",d:"block",f:r},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function M(a){a()}function N(){m(D,M);D=r}function O(a){D?D.push(a):n.setTimeout(a,0)}function I(){function a(a,e){b==r&&(b=a,c=e,n.setTimeout(function(){m(d,M)},0))}var b,c=[],d=[],e=a.then=function(a,e){function f(){try{var d=b?a:e;if(y(d)){var f=d.apply(r,c);f&&y(f.then)?f.then(function(a){l(k,[a])},function(a){l(s,[a])}):l(k,[f])}else l(b,c)}catch(j){l(s,[j])}}var l=I();b!=r?n.setTimeout(f,0):d.push(f);return l};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function P(a){return R[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function x(a,b,c){return y(a)?O(a):new F(B(a,b,c))}function B(a,b,c){function d(a){return z(a)?w(a,d):a}function e(a){a=d(a);return h?H(a,function(a){for(;a=a.parentNode;){if(a===h)return k;if(c)return s}}):a}var h,g,f,l,q;if(b&&1!=(b=B(b)).length)return w(b,function(b){return B(a,b)});h=b&&b[0];if(!u(a))return e(z(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return w(b,function(a){return B(a,h)});if(b=/(\S+)\s+(.+)$/.exec(a))return B(b[2],B(b[1],h));if(a!=(b=j(a,/^#/)))return e([p.getElementById(b)]);h=h||p;g=(b=/([^.]*)\.?([^.]*)/.exec(a))[1];l=b[2];b=(f=h.getElementsByClassName&&l)?h.getElementsByClassName(l):h.getElementsByTagName(g||"*");if(g=f?g:l)q=RegExp("\\b"+g+"\\b","i"),b=H(b,function(a){return q.test(a[f?"nodeName":"className"])});return c?e(b):b}function F(a){for(var b=0;b<a.length;b++)this[b]=a[b];this.length=a.length}var n=this,p=document,D=[],E=[],S=w(["msR","webkitR","mozR","r"],function(a){return n[a+"equestAnimationFrame"]})[0]||function(a){n.setTimeout(a,33)},G=!!p.all&&!D.map,R={"	":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};v({each:function(a){m(this,a);return this},filter:function(a){return new F(H(this,a))},collect:function(a){return new F(w(this,a))},sub:function(a,b){var c=this.length,d=0>a?c+a:a,e=b==r?c:0<=b?b:c+b;return this.filter(function(a,b){return b>=d&&b<e})},find:function(a){for(var b=y(a)?a:function(b,c){if(a===b)return c},c,d=0;d<this.length;d++)if((c=b(this[d],d))!=r)return c},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:r})},remove:function(){this.each(function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,d=c[0];if(d){if(u(a)){var e=j(a,/^[$@]/),h,g=/^\$\$/.test(a)&&("hidden"==c.get("$visibility")||"none"==c.get("$display"));h="$"==a?d.className:"$$"==a?G?d.style.cssText:d.getAttribute("style"):"$$fade"==a?isNaN(h=g?0:G?A(c.get("$filter"))/100:A(c.get("$opacity")))?1:h:"$$slide"==a?(g?0:d.offsetHeight)+"px":/^\$/.test(a)?n.getComputedStyle?n.getComputedStyle(d,r).getPropertyValue(j(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):d.currentStyle[e]:/^@/.test(a)?d.getAttribute(e):d[e];return b?A(h):h}var f={};(z(a)?m:v)(a,function(a){f[a]=c.get(a,b)});return f}},set:function(a,b,c){var d=this,e;void 0!==b?"$$fade"==a||"$$slide"==a?d.set({g:0<(e=A(b))?"visible":"hidden",d:"block"}).set("$$fade"==a?G?{k:"alpha(opacity = "+100*e+")",p:1}:{l:e}:{f:/px$/.test(b)?b:function(a,b,c){return e*(e&&L($(c)))+"px"},m:"hidden"}):d.each(function(d,e){var f=y(b)?b:c,l=j(a,/^[@$]/),q=d.className||"",J=/^\$/.test(a)?d.style:d,f=f?f(x(d).get(a),e,d,b):b;"$"==a?(m(f.split(/\s+/),function(a){var b=j(a,/^[+-]/),c=q;q=j(q,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==q)q+=" "+b}),d.className=j(q,/^\s+|\s+(?=\s|$)/g)):"$$"==a?G?J.cssText=f:d.setAttribute("style",f):/^@/.test(a)?f!=r&&J.setAttribute(l,f):J[l]=f}):u(a)||y(a)?d.set("$",a):v(a,function(a,b){d.set(a,b,c)});return d},append:function(a,b){return this.set(a,b,function(a,b,e,h){return t(a)+h})},prepend:function(a,b){return this.set(a,b,function(a,b,e,h){return h+t(a)})},add:function(a,b){return this.each(function(c,d){var e;(function g(a){z(a)?m(a,g):y(a)?g(a(c,d)):a!=r&&(a=C(a)?a:p.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(C(a)&&d?r:a)})},fill:function(a){return this.each(function(a){x(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(){return this.collect(function(a){var b={},c,d=C(a);return 1==d?(m(a.attributes,function(a){c=a.name;"id"!=c&&(b["style"==c?"$$":"class"==c?"$":"@"+c]=a.value)}),x.EE(a.tagName,b,x(a.childNodes).clone())):5>d?a.textContent:r})},animate:function(a,b,c,d){var e=this,h=[],g=/-?[\d.]+/,f,l=I();d=d||{};d.time=0;d.stop=function(){f();l(s)};b=b||500;c=c||0;e.each(function(b){var c={b:x(b),a:{},c:{}};v(c.a=c.b.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*L(c.b)+"px");c.c[b]=/^[+-]=/.test(e)?j(e.substr(2),g,A(d)+A(j(e,/\+?=/))):e});h.push(c)});f=x.loop(function(a){function n(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(j(a,/[^\d,]+/g).split(",")[b])}function p(d,e){return d+a/b*(e-d)*(c+(1-c)*a/b*(3-2*a/b))}d.time=a;a>=b||0>a?(m(h,function(a){a.b.set(a.c)}),f(),d.time=r,l(k,[e])):m(h,function(a){v(a.a,function(b,c){var d="rgb(",e=a.c[b];if(/^#|rgb\(/.test(e))for(var f=0;3>f;f++)d+=Math.round(p(n(c,f),n(e,f)))+(2>f?",":")");else d=j(e,g,p(A(c),A(e)));a.b.set(b,d)})})});return l},toggle:function(a,b,c,d){var e={},h=s,g=/\b(?=\w)/g,f=this;return!b?f.toggle(j(a,g,"-"),j(a,g,"+")):f.set(a)&&function(g){g!==h&&(h="boolean"==typeof g?g:!h,c?f.q(h?b:a,e.stop?e.stop()||e.time:c,d,e):f.set(h?b:a))}},on:function(a,b,c,d){return this.each(function(e,h){function g(a){a=a||n.event;if(!b.apply(d?c:a.target,d||c||[a,h])||d)a.stopPropagation&&(a.preventDefault(),a.stopPropagation()),a.returnValue=s,a.cancelBubble=k}(b.M=b.M||[]).push({e:e,h:g,n:a});e.addEventListener?e.addEventListener(a,g,k):e.attachEvent("on"+a,g)})},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b}},function(a,b){F.prototype[a]=b});v({$$:function(a){return B(a)[0]},EE:function(a,b,c,d){return function(){var e=p.documentElement.namespaceURI,e=x(e?p.createElementNS(e,a):p.createElement(a));z(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}},request:function(a,b,c,d,e,h){var g,f=c,l=0,j=I();try{return g=n.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),c!=r&&(d=d||{},!u(c)&&!C(c)&&(f=w(c,function Q(a,b){return z(b)?w(b,function(b){return Q(a,b)}):encodeURIComponent(a)+(b!=r?"="+encodeURIComponent(b):"")},v).join("&")),/post/i.test(a)?!C(c)&&!u(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+f,f=r)),g.open(a,b,k,e,h),v(d,function(a,b){g.setRequestHeader(a,b)}),g.onreadystatechange=function(){4==g.readyState&&!l++&&(200==g.status?j(k,[g.responseText,g.responseXML]):j(s,[g.status,g.statusText,g.responseText]))},g.send(f),j}catch(m){l||j(s,[0,r,t(m)])}},toJSON:function b(c){return c==r?""+c:u(c=c.valueOf())?'"'+j(c,/[\\\"\x00-\x1f\x22\x5c]/g,P)+'"':z(c)?"["+w(c,b).join()+"]":"object"==typeof c?"{"+w(c,function(c,e){return b(c)+":"+b(e)},v).join()+"}":t(c)},parseJSON:n.JSON?n.JSON.parse:function(b){b=j(b,/[\x00\xad\u0600-\uffff]/g,P);if(/^[[\],:{}\s]*$/.test(j(j(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+b+")")},ready:O,setCookie:function(b,c,d,e,h,g){p.cookie=b+"="+(g?c:escape(c))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864e5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(h?"; domain="+escape(h):"")},getCookie:function(b,c){var d,e=(d=RegExp("(^|;)\\s*"+b+"=([^;]*)").exec(p.cookie))&&d[2];return c?e:e&&unescape(e)},loop:function(b){var c={i:b,j:(new Date).getTime(),a:function(){for(var b=0;b<E.length;b++)E[b]===c&&E.splice(b--,1)}};2>E.push(c)&&function e(){m(E,function(b){b.i(Math.max(0,(new Date).getTime()-b.j),b.a)}).length&&S(e)}();return c.a},off:function(b){m(b.M,function(b){b.e.addEventListener?b.e.removeEventListener(b.n,b.h,k):b.e.detachEvent("on"+b.n,b.h)});b.M=r}},function(b,c){x[b]=c});n.onload=N;p.addEventListener&&p.addEventListener("DOMContentLoaded",N,s);return{$:x}});