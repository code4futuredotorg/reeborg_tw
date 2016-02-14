(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("xml",function(y,k){var p=y.indentUnit;var x=k.multilineTagIndentFactor||1;var d=k.multilineTagIndentPastTag;if(d==null){d=true}var w=k.htmlMode?{autoSelfClosers:{area:true,base:true,br:true,col:true,command:true,embed:true,frame:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true,menuitem:true},implicitlyClosed:{dd:true,li:true,optgroup:true,option:true,p:true,rp:true,rt:true,tbody:true,td:true,tfoot:true,th:true,tr:true},contextGrabbers:{dd:{dd:true,dt:true},dt:{dd:true,dt:true},li:{li:true},option:{option:true,optgroup:true},optgroup:{optgroup:true},p:{address:true,article:true,aside:true,blockquote:true,dir:true,div:true,dl:true,fieldset:true,footer:true,form:true,h1:true,h2:true,h3:true,h4:true,h5:true,h6:true,header:true,hgroup:true,hr:true,menu:true,nav:true,ol:true,p:true,pre:true,section:true,table:true,ul:true},rp:{rp:true,rt:true},rt:{rp:true,rt:true},tbody:{tbody:true,tfoot:true},td:{td:true,th:true},tfoot:{tbody:true},th:{td:true,th:true},thead:{tbody:true,tfoot:true},tr:{tr:true}},doNotIndent:{pre:true},allowUnquoted:true,allowMissing:true,caseFold:true}:{autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:false,allowMissing:false,caseFold:false};var c=k.alignCDATA;var f,g;function n(F,E){function C(G){E.tokenize=G;return G(F,E)}var D=F.next();if(D=="<"){if(F.eat("!")){if(F.eat("[")){if(F.match("CDATA[")){return C(v("atom","]]>"))}else{return null}}else{if(F.match("--")){return C(v("comment","-->"))}else{if(F.match("DOCTYPE",true,true)){F.eatWhile(/[\w\._\-]/);return C(z(1))}else{return null}}}}else{if(F.eat("?")){F.eatWhile(/[\w\._\-]/);E.tokenize=v("meta","?>");return"meta"}else{f=F.eat("/")?"closeTag":"openTag";E.tokenize=m;return"tag bracket"}}}else{if(D=="&"){var B;if(F.eat("#")){if(F.eat("x")){B=F.eatWhile(/[a-fA-F\d]/)&&F.eat(";")}else{B=F.eatWhile(/[\d]/)&&F.eat(";")}}else{B=F.eatWhile(/[\w\.\-:]/)&&F.eat(";")}return B?"atom":"error"}else{F.eatWhile(/[^&<]/);return null}}}n.isInText=true;function m(E,D){var C=E.next();if(C==">"||(C=="/"&&E.eat(">"))){D.tokenize=n;f=C==">"?"endTag":"selfcloseTag";return"tag bracket"}else{if(C=="="){f="equals";return null}else{if(C=="<"){D.tokenize=n;D.state=l;D.tagName=D.tagStart=null;var B=D.tokenize(E,D);return B?B+" tag error":"tag error"}else{if(/[\'\"]/.test(C)){D.tokenize=j(C);D.stringStartCol=E.column();return D.tokenize(E,D)}else{E.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);return"word"}}}}}function j(B){var C=function(E,D){while(!E.eol()){if(E.next()==B){D.tokenize=m;break}}return"string"};C.isInAttribute=true;return C}function v(C,B){return function(E,D){while(!E.eol()){if(E.match(B)){D.tokenize=n;break}E.next()}return C}}function z(B){return function(E,D){var C;while((C=E.next())!=null){if(C=="<"){D.tokenize=z(B+1);return D.tokenize(E,D)}else{if(C==">"){if(B==1){D.tokenize=n;break}else{D.tokenize=z(B-1);return D.tokenize(E,D)}}}}return"meta"}}function r(C,B,D){this.prev=C.context;this.tagName=B;this.indent=C.indented;this.startOfLine=D;if(w.doNotIndent.hasOwnProperty(B)||(C.context&&C.context.noIndent)){this.noIndent=true}}function u(B){if(B.context){B.context=B.context.prev}}function q(D,C){var B;while(true){if(!D.context){return}B=D.context.tagName;if(!w.contextGrabbers.hasOwnProperty(B)||!w.contextGrabbers[B].hasOwnProperty(C)){return}u(D)}}function l(B,D,C){if(B=="openTag"){C.tagStart=D.column();return b}else{if(B=="closeTag"){return t}else{return l}}}function b(B,D,C){if(B=="word"){C.tagName=D.current();g="tag";return e}else{g="error";return b}}function t(C,E,D){if(C=="word"){var B=E.current();if(D.context&&D.context.tagName!=B&&w.implicitlyClosed.hasOwnProperty(D.context.tagName)){u(D)}if(D.context&&D.context.tagName==B){g="tag";return s}else{g="tag error";return A}}else{g="error";return A}}function s(C,B,D){if(C!="endTag"){g="error";return s}u(D);return l}function A(B,D,C){g="error";return s(B,D,C)}function e(E,C,F){if(E=="word"){g="attribute";return i}else{if(E=="endTag"||E=="selfcloseTag"){var D=F.tagName,B=F.tagStart;F.tagName=F.tagStart=null;if(E=="selfcloseTag"||w.autoSelfClosers.hasOwnProperty(D)){q(F,D)}else{q(F,D);F.context=new r(F,D,B==F.indented)}return l}}g="error";return e}function i(B,D,C){if(B=="equals"){return o}if(!w.allowMissing){g="error"}return e(B,D,C)}function o(B,D,C){if(B=="string"){return h}if(B=="word"&&w.allowUnquoted){g="string";return e}g="error";return e(B,D,C)}function h(B,D,C){if(B=="string"){return h}return e(B,D,C)}return{startState:function(){return{tokenize:n,state:l,indented:0,tagName:null,tagStart:null,context:null}},token:function(D,C){if(!C.tagName&&D.sol()){C.indented=D.indentation()}if(D.eatSpace()){return null}f=null;var B=C.tokenize(D,C);if((B||f)&&B!="comment"){g=null;C.state=C.state(f||B,D,C);if(g){B=g=="error"?B+" error":g}}return B},indent:function(G,C,F){var E=G.context;if(G.tokenize.isInAttribute){if(G.tagStart==G.indented){return G.stringStartCol+1}else{return G.indented+p}}if(E&&E.noIndent){return a.Pass}if(G.tokenize!=m&&G.tokenize!=n){return F?F.match(/^(\s*)/)[0].length:0}if(G.tagName){if(d){return G.tagStart+G.tagName.length+2}else{return G.tagStart+p*x}}if(c&&/<!\[CDATA\[/.test(C)){return 0}var B=C&&/^<(\/)?([\w_:\.-]*)/.exec(C);if(B&&B[1]){while(E){if(E.tagName==B[2]){E=E.prev;break}else{if(w.implicitlyClosed.hasOwnProperty(E.tagName)){E=E.prev}else{break}}}}else{if(B){while(E){var D=w.contextGrabbers[E.tagName];if(D&&D.hasOwnProperty(B[2])){E=E.prev}else{break}}}}while(E&&!E.startOfLine){E=E.prev}if(E){return E.indent+p}else{return 0}},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:k.htmlMode?"html":"xml",helperType:k.htmlMode?"html":"xml"}});a.defineMIME("text/xml","xml");a.defineMIME("application/xml","xml");if(!a.mimeModes.hasOwnProperty("text/html")){a.defineMIME("text/html",{name:"xml",htmlMode:true})}});