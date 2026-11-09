import{C as K,D as Ko,E as ie,F as er,H as jr,J as It}from"./chunk-T7USR7DF.mjs";import{a as oe,b as Oe,d as Lr,e as We,g as _s,j as ys,k as Ss,o as As,p as Qt,u as Hr,y as Ft}from"./chunk-RXFBIJBQ.mjs";import{a as yt,b as z}from"./chunk-CECBSGIX.mjs";import{H as Fs}from"./chunk-ZMNQTWIH.mjs";import{b as At}from"./chunk-RHDWEUYG.mjs";import{V as Ms,_ as Os}from"./chunk-KGE23JEU.mjs";import{a as Ds,c as Rs}from"./chunk-WXFR5OFY.mjs";import{h as Yr}from"./chunk-GFHZD3BV.mjs";import{$ as nt,M as ks,b as kr,j as Et,l as Gs,m as Is,n as Ls,y as Ns}from"./chunk-JWJJWGNC.mjs";import{a as Nr,c as St}from"./chunk-V7TD2QFL.mjs";import{M as Gt,f as Vr,h as qr,t as Ps}from"./chunk-O6ENNMZ4.mjs";import{B as Ot,I as Us,L as Ie,p as Xr,q as Wr,r as Cs,s as Es,t as ws,u as Bs,v as zr,w as $r,x as Jt}from"./chunk-SKT4YJVL.mjs";import{A as Fe,C as jo,H as Z,I as vt,K as Ve,L as Me,M as vs,N as ot,Q as Tt,R as ye,b as ke,o as bs,r as Pt}from"./chunk-SCGCMTQI.mjs";import{A as Yo,D as Ue,E as He,F as xe,G as be,K as M,M as I,V as _e,W as Zt,a as Kt,b as ic,ba as ve,c as m,ca as Ts,da as Ee,e as G,f as xs,g as te,ia as se,ja as Ut,k as _t,ka as Ge,l as Y,la as Ct,m as Gr,o as X,oa as Mt,q as U,r as q,v as qo,w as qe,x as Ir,y as Rt}from"./chunk-XDDJSWO4.mjs";var ur=Kt(lt=>{"use strict";function yf(t,e,r){if(r===void 0&&(r=Array.prototype),t&&typeof r.find=="function")return r.find.call(t,e);for(var o=0;o<t.length;o++)if(Object.prototype.hasOwnProperty.call(t,o)){var n=t[o];if(e.call(void 0,n,o,t))return n}}function Ci(t,e){return e===void 0&&(e=Object),e&&typeof e.freeze=="function"?e.freeze(t):t}function Sf(t,e){if(t===null||typeof t!="object")throw new TypeError("target is not an object");for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}var bu=Ci({HTML:"text/html",isHTML:function(t){return t===bu.HTML},XML_APPLICATION:"application/xml",XML_TEXT:"text/xml",XML_XHTML_APPLICATION:"application/xhtml+xml",XML_SVG_IMAGE:"image/svg+xml"}),_u=Ci({HTML:"http://www.w3.org/1999/xhtml",isHTML:function(t){return t===_u.HTML},SVG:"http://www.w3.org/2000/svg",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlns/"}),On=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,Ti=new RegExp("[\\-\\.0-9"+On.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),Af=new RegExp("^"+On.source+Ti.source+"*(?::"+On.source+Ti.source+"*)?$");lt.assign=Sf;lt.find=yf;lt.freeze=Ci;lt.MIME_TYPE=bu;lt.NAMESPACE=_u;lt.nameStartChar=On;lt.nameChar=Ti;lt.tagNamePattern=Af});var Ii=Kt(dt=>{var Ei=ur(),Ye=Ei.find,mo=Ei.NAMESPACE,lr=Ei.tagNamePattern;function Tf(t){return t!==""}function Cf(t){return t?t.split(/[\t\n\f\r ]+/).filter(Tf):[]}function Ef(t,e){return t.hasOwnProperty(e)||(t[e]=!0),t}function vu(t){if(!t)return[];var e=Cf(t);return Object.keys(e.reduce(Ef,{}))}function wf(t){return function(e){return t&&t.indexOf(e)!==-1}}function go(t,e){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}function De(t,e){var r=t.prototype;if(!(r instanceof e)){let n=function(){};var o=n;n.prototype=e.prototype,n=new n,go(r,n),t.prototype=r=n}r.constructor!=t&&(typeof t!="function"&&console.error("unknown Class:"+t),r.constructor=t)}var Re={},Xe=Re.ELEMENT_NODE=1,cr=Re.ATTRIBUTE_NODE=2,po=Re.TEXT_NODE=3,Bu=Re.CDATA_SECTION_NODE=4,Du=Re.ENTITY_REFERENCE_NODE=5,Bf=Re.ENTITY_NODE=6,wi=Re.PROCESSING_INSTRUCTION_NODE=7,Bi=Re.COMMENT_NODE=8,Ru=Re.DOCUMENT_NODE=9,Pu=Re.DOCUMENT_TYPE_NODE=10,ct=Re.DOCUMENT_FRAGMENT_NODE=11,Df=Re.NOTATION_NODE=12,he={},pe={},E0=he.INDEX_SIZE_ERR=(pe[1]="Index size error",1),w0=he.DOMSTRING_SIZE_ERR=(pe[2]="DOMString size error",2),Be=he.HIERARCHY_REQUEST_ERR=(pe[3]="Hierarchy request error",3),B0=he.WRONG_DOCUMENT_ERR=(pe[4]="Wrong document",4),yu=he.INVALID_CHARACTER_ERR=(pe[5]="Invalid character",5),D0=he.NO_DATA_ALLOWED_ERR=(pe[6]="No data allowed",6),R0=he.NO_MODIFICATION_ALLOWED_ERR=(pe[7]="No modification allowed",7),Uu=he.NOT_FOUND_ERR=(pe[8]="Not found",8),P0=he.NOT_SUPPORTED_ERR=(pe[9]="Not supported",9),Su=he.INUSE_ATTRIBUTE_ERR=(pe[10]="Attribute in use",10),$e=he.INVALID_STATE_ERR=(pe[11]="Invalid state",11),U0=he.SYNTAX_ERR=(pe[12]="Syntax error",12),F0=he.INVALID_MODIFICATION_ERR=(pe[13]="Invalid modification",13),M0=he.NAMESPACE_ERR=(pe[14]="Invalid namespace",14),O0=he.INVALID_ACCESS_ERR=(pe[15]="Invalid access",15);function N(t,e){if(e instanceof Error)var r=e;else r=this,Error.call(this,pe[t]),this.message=pe[t],Error.captureStackTrace&&Error.captureStackTrace(this,N);return r.code=t,e&&(this.message=this.message+": "+e),r}N.prototype=Error.prototype;go(he,N);function ft(){}ft.prototype={length:0,item:function(t){return t>=0&&t<this.length?this[t]:null},toString:function(t,e,r){for(var o=!!r&&!!r.requireWellFormed,n=[],s=0;s<this.length;s++)Gi(this[s],n,t,e,null,o);return n.join("")},filter:function(t){return Array.prototype.filter.call(this,t)},indexOf:function(t){return Array.prototype.indexOf.call(this,t)}};function fr(t,e){this._node=t,this._refresh=e,Di(this)}function Di(t){var e=t._node._inc||t._node.ownerDocument._inc;if(t._inc!==e){var r=t._refresh(t._node);if(zu(t,"length",r.length),!t.$$length||r.length<t.$$length)for(var o=r.length;o in t;o++)Object.prototype.hasOwnProperty.call(t,o)&&delete t[o];go(r,t),t._inc=e}}fr.prototype.item=function(t){return Di(this),this[t]||null};De(fr,ft);function In(){this._nameIndex=Object.create(null)}function Fu(t,e){for(var r=t.length;r--;)if(t[r]===e)return r}function Rf(t,e){t._nameIndex[e.nodeName]=e}function Mu(t,e){t._nameIndex[e.nodeName]===e&&delete t._nameIndex[e.nodeName]}function Au(t,e,r,o){if(o?(e[Fu(e,o)]=r,Mu(e,o)):e[e.length++]=r,Rf(e,r),t){r.ownerElement=t;var n=t.ownerDocument;n&&(o&&Iu(n,t,o),Pf(n,t,r))}}function Tu(t,e,r){var o=Fu(e,r);if(o>=0){for(var n=e.length-1;o<n;)e[o]=e[++o];if(e.length=n,Mu(e,r),t){var s=t.ownerDocument;s&&(Iu(s,t,r),r.ownerElement=null)}}else throw new N(Uu,new Error(t.tagName+"@"+r))}In.prototype={length:0,item:ft.prototype.item,getNamedItem:function(t){for(var e=this.length;e--;){var r=this[e];if(r.nodeName==t)return r}},setNamedItem:function(t){var e=t.ownerElement;if(e&&e!=this._ownerElement)throw new N(Su);var r=this._nameIndex[t.nodeName];return Au(this._ownerElement,this,t,r),r},setNamedItemNS:function(t){var e=t.ownerElement,r;if(e&&e!=this._ownerElement)throw new N(Su);return r=this.getNamedItemNS(t.namespaceURI,t.localName),Au(this._ownerElement,this,t,r),r},removeNamedItem:function(t){var e=this.getNamedItem(t);return Tu(this._ownerElement,this,e),e},removeNamedItemNS:function(t,e){var r=this.getNamedItemNS(t,e);return Tu(this._ownerElement,this,r),r},getNamedItemNS:function(t,e){for(var r=this.length;r--;){var o=this[r];if(o.localName==e&&o.namespaceURI==t)return o}return null}};function Ou(){}Ou.prototype={hasFeature:function(t,e){return!0},createDocument:function(t,e,r){var o=new xo;if(o.implementation=this,o.childNodes=new ft,o.doctype=r||null,r&&o.appendChild(r),e){var n=o.createElementNS(t,e);o.appendChild(n)}return o},createDocumentType:function(t,e,r){var o=new Vn;return o.name=t,o.nodeName=t,o.publicId=e||"",o.systemId=r||"",o}};function $(){}$.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(t,e){return Nn(this,t,e)},replaceChild:function(t,e){Nn(this,t,e,Nu),e&&this.removeChild(e)},removeChild:function(t){return Lu(this,t)},appendChild:function(t){return this.insertBefore(t,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(t){return Wu(this.ownerDocument||this,this,t)},normalize:function(){fe(this,null,{enter:function(t){for(var e=t.firstChild;e;){var r=e.nextSibling;if(r!==null&&r.nodeType===po&&e.nodeType===po){for(var o=[],n=r;n!==null&&n.nodeType===po;)o.push(n.data),n=n.nextSibling;for(var s=e.nextSibling;s!==n;){var i=s.nextSibling;s.parentNode=null,s.previousSibling=null,s.nextSibling=null,s=i}e.nextSibling=n,n!==null?n.previousSibling=e:t.lastChild=e,e.appendData(o.join("")),Hn(t.ownerDocument,t),e=n}else e=r}return!0}})},isSupported:function(t,e){return this.ownerDocument.implementation.hasFeature(t,e)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(t){for(var e=this;e;){var r=e._nsMap;if(r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)&&r[o]===t)return o}e=e.nodeType==cr?e.ownerDocument:e.parentNode}return null},lookupNamespaceURI:function(t){for(var e=this;e;){var r=e._nsMap;if(r&&Object.prototype.hasOwnProperty.call(r,t))return r[t];e=e.nodeType==cr?e.ownerDocument:e.parentNode}return null},isDefaultNamespace:function(t){var e=this.lookupPrefix(t);return e==null}};function Gu(t){return t=="<"&&"&lt;"||t==">"&&"&gt;"||t=="&"&&"&amp;"||t=='"'&&"&quot;"||"&#"+t.charCodeAt()+";"}go(Re,$);go(Re,$.prototype);function Ln(t,e){return fe(t,null,{enter:function(r){return e(r)?fe.STOP:!0}})===fe.STOP}function fe(t,e,r){for(var o=[{node:t,context:e,phase:fe.ENTER}];o.length>0;){var n=o.pop();if(n.phase===fe.ENTER){var s=r.enter(n.node,n.context);if(s===fe.STOP)return fe.STOP;if(o.push({node:n.node,context:s,phase:fe.EXIT}),s==null)continue;for(var i=n.node.lastChild;i;)o.push({node:i,context:s,phase:fe.ENTER}),i=i.previousSibling}else r.exit&&r.exit(n.node,n.context)}}fe.STOP=Symbol("walkDOM.STOP");fe.ENTER=0;fe.EXIT=1;function xo(){this.ownerDocument=this}function Pf(t,e,r){t&&t._inc++;var o=r.namespaceURI;o===mo.XMLNS&&(e._nsMap[r.prefix?r.localName:""]=r.value)}function Iu(t,e,r,o){t&&t._inc++;var n=r.namespaceURI;n===mo.XMLNS&&delete e._nsMap[r.prefix?r.localName:""]}function Hn(t,e,r){if(t&&t._inc){t._inc++;var o=e.childNodes;if(r)o[o.length++]=r;else{for(var n=e.firstChild,s=0;n;)o[s++]=n,n=n.nextSibling;o.length=s,delete o[o.length]}}}function Lu(t,e){var r=e.previousSibling,o=e.nextSibling;return r?r.nextSibling=o:t.firstChild=o,o?o.previousSibling=r:t.lastChild=r,e.parentNode=null,e.previousSibling=null,e.nextSibling=null,Hn(t.ownerDocument,t),e}function Uf(t){return t&&(t.nodeType===$.DOCUMENT_NODE||t.nodeType===$.DOCUMENT_FRAGMENT_NODE||t.nodeType===$.ELEMENT_NODE)}function Ff(t){return t&&(je(t)||Ri(t)||pt(t)||t.nodeType===$.DOCUMENT_FRAGMENT_NODE||t.nodeType===$.COMMENT_NODE||t.nodeType===$.PROCESSING_INSTRUCTION_NODE)}function pt(t){return t&&t.nodeType===$.DOCUMENT_TYPE_NODE}function je(t){return t&&t.nodeType===$.ELEMENT_NODE}function Ri(t){return t&&t.nodeType===$.TEXT_NODE}function Cu(t,e){var r=t.childNodes||[];if(Ye(r,je)||pt(e))return!1;var o=Ye(r,pt);return!(e&&o&&r.indexOf(o)>r.indexOf(e))}function Eu(t,e){var r=t.childNodes||[];function o(s){return je(s)&&s!==e}if(Ye(r,o))return!1;var n=Ye(r,pt);return!(e&&n&&r.indexOf(n)>r.indexOf(e))}function Mf(t,e,r){if(!Uf(t))throw new N(Be,"Unexpected parent node type "+t.nodeType);if(r&&r.parentNode!==t)throw new N(Uu,"child not in parent");if(!Ff(e)||pt(e)&&t.nodeType!==$.DOCUMENT_NODE)throw new N(Be,"Unexpected node type "+e.nodeType+" for parent node type "+t.nodeType)}function Of(t,e,r){var o=t.childNodes||[],n=e.childNodes||[];if(e.nodeType===$.DOCUMENT_FRAGMENT_NODE){var s=n.filter(je);if(s.length>1||Ye(n,Ri))throw new N(Be,"More than one element or text in fragment");if(s.length===1&&!Cu(t,r))throw new N(Be,"Element in fragment can not be inserted before doctype")}if(je(e)&&!Cu(t,r))throw new N(Be,"Only one element can be added and only after doctype");if(pt(e)){if(Ye(o,pt))throw new N(Be,"Only one doctype is allowed");var i=Ye(o,je);if(r&&o.indexOf(i)<o.indexOf(r))throw new N(Be,"Doctype can only be inserted before an element");if(!r&&i)throw new N(Be,"Doctype can not be appended since element is present")}}function Nu(t,e,r){var o=t.childNodes||[],n=e.childNodes||[];if(e.nodeType===$.DOCUMENT_FRAGMENT_NODE){var s=n.filter(je);if(s.length>1||Ye(n,Ri))throw new N(Be,"More than one element or text in fragment");if(s.length===1&&!Eu(t,r))throw new N(Be,"Element in fragment can not be inserted before doctype")}if(je(e)&&!Eu(t,r))throw new N(Be,"Only one element can be added and only after doctype");if(pt(e)){let u=function(l){return pt(l)&&l!==r};var a=u;if(Ye(o,u))throw new N(Be,"Only one doctype is allowed");var i=Ye(o,je);if(r&&o.indexOf(i)<o.indexOf(r))throw new N(Be,"Doctype can only be inserted before an element")}}function Nn(t,e,r,o){Mf(t,e,r),t.nodeType===$.DOCUMENT_NODE&&(o||Of)(t,e,r);var n=e.parentNode;if(n&&n.removeChild(e),e.nodeType===ct){var s=e.firstChild;if(s==null)return e;var i=e.lastChild}else s=i=e;var a=r?r.previousSibling:t.lastChild;s.previousSibling=a,i.nextSibling=r,a?a.nextSibling=s:t.firstChild=s,r==null?t.lastChild=i:r.previousSibling=i;do{s.parentNode=t;var u=t.ownerDocument||t;ho(s,u)}while(s!==i&&(s=s.nextSibling));return Hn(t.ownerDocument||t,t),e.nodeType==ct&&(e.firstChild=e.lastChild=null),e}function ho(t,e){if(t.ownerDocument!==e){if(t.ownerDocument=e,t.nodeType===Xe&&t.attributes)for(var r=0;r<t.attributes.length;r++){var o=t.attributes.item(r);o&&(o.ownerDocument=e)}for(var n=t.firstChild;n;)ho(n,e),n=n.nextSibling}}function Gf(t,e){e.parentNode&&e.parentNode.removeChild(e),e.parentNode=t,e.previousSibling=t.lastChild,e.nextSibling=null,e.previousSibling?e.previousSibling.nextSibling=e:t.firstChild=e,t.lastChild=e,Hn(t.ownerDocument,t,e);var r=t.ownerDocument||t;return ho(e,r),e}xo.prototype={nodeName:"#document",nodeType:Ru,doctype:null,documentElement:null,_inc:1,insertBefore:function(t,e){if(t.nodeType==ct){for(var r=t.firstChild;r;){var o=r.nextSibling;this.insertBefore(r,e),r=o}return t}return Nn(this,t,e),ho(t,this),this.documentElement===null&&t.nodeType===Xe&&(this.documentElement=t),t},removeChild:function(t){return this.documentElement==t&&(this.documentElement=null),Lu(this,t)},replaceChild:function(t,e){Nn(this,t,e,Nu),ho(t,this),e&&this.removeChild(e),je(t)&&(this.documentElement=t)},importNode:function(t,e){return If(this,t,e)},getElementById:function(t){var e=null;return Ln(this.documentElement,function(r){if(r.nodeType==Xe&&r.getAttribute("id")==t)return e=r,!0}),e},getElementsByClassName:function(t){var e=vu(t);return new fr(this,function(r){var o=[];return e.length>0&&Ln(r.documentElement,function(n){if(n!==r&&n.nodeType===Xe){var s=n.getAttribute("class");if(s){var i=t===s;if(!i){var a=vu(s);i=e.every(wf(a))}i&&o.push(n)}}}),o})},createElement:function(t){var e=new kt;e.ownerDocument=this,e.nodeName=t,e.tagName=t,e.localName=t,e.childNodes=new ft;var r=e.attributes=new In;return r._ownerElement=e,e},createDocumentFragment:function(){var t=new Xn;return t.ownerDocument=this,t.childNodes=new ft,t},createTextNode:function(t){var e=new Pi;return e.ownerDocument=this,e.appendData(t),e},createComment:function(t){var e=new Ui;return e.ownerDocument=this,e.appendData(t),e},createCDATASection:function(t){if(t.indexOf("]]>")!==-1)throw new N(yu,'data contains "]]>"');var e=new Fi;return e.ownerDocument=this,e.appendData(t),e},createProcessingInstruction:function(t,e){var r=new Oi;return r.ownerDocument=this,r.tagName=r.nodeName=r.target=t,r.nodeValue=r.data=e,r},createAttribute:function(t){var e=new kn;return e.ownerDocument=this,e.name=t,e.nodeName=t,e.localName=t,e.specified=!0,e},createEntityReference:function(t){if(!lr.test(t))throw new N(yu,'not a valid xml name "'+t+'"');var e=new Mi;return e.ownerDocument=this,e.nodeName=t,e},createElementNS:function(t,e){var r=new kt,o=e.split(":"),n=r.attributes=new In;return r.childNodes=new ft,r.ownerDocument=this,r.nodeName=e,r.tagName=e,r.namespaceURI=t,o.length==2?(r.prefix=o[0],r.localName=o[1]):r.localName=e,n._ownerElement=r,r},createAttributeNS:function(t,e){var r=new kn,o=e.split(":");return r.ownerDocument=this,r.nodeName=e,r.name=e,r.namespaceURI=t,r.specified=!0,o.length==2?(r.prefix=o[0],r.localName=o[1]):r.localName=e,r}};De(xo,$);function kt(){this._nsMap={}}kt.prototype={nodeType:Xe,hasAttribute:function(t){return this.getAttributeNode(t)!=null},getAttribute:function(t){var e=this.getAttributeNode(t);return e&&e.value||""},getAttributeNode:function(t){return this.attributes.getNamedItem(t)},setAttribute:function(t,e){var r=this.ownerDocument.createAttribute(t);r.value=r.nodeValue=""+e,this.setAttributeNode(r)},removeAttribute:function(t){var e=this.getAttributeNode(t);e&&this.removeAttributeNode(e)},appendChild:function(t){return t.nodeType===ct?this.insertBefore(t,null):Gf(this,t)},setAttributeNode:function(t){return this.attributes.setNamedItem(t)},setAttributeNodeNS:function(t){return this.attributes.setNamedItemNS(t)},removeAttributeNode:function(t){return this.attributes.removeNamedItem(t.nodeName)},removeAttributeNS:function(t,e){var r=this.getAttributeNodeNS(t,e);r&&this.removeAttributeNode(r)},hasAttributeNS:function(t,e){return this.getAttributeNodeNS(t,e)!=null},getAttributeNS:function(t,e){var r=this.getAttributeNodeNS(t,e);return r&&r.value||""},setAttributeNS:function(t,e,r){var o=this.ownerDocument.createAttributeNS(t,e);o.value=o.nodeValue=""+r,this.setAttributeNode(o)},getAttributeNodeNS:function(t,e){return this.attributes.getNamedItemNS(t,e)},getElementsByTagName:function(t){return new fr(this,function(e){var r=[];return Ln(e,function(o){o!==e&&o.nodeType==Xe&&(t==="*"||o.tagName==t)&&r.push(o)}),r})},getElementsByTagNameNS:function(t,e){return new fr(this,function(r){var o=[];return Ln(r,function(n){n!==r&&n.nodeType===Xe&&(t==="*"||n.namespaceURI===t)&&(e==="*"||n.localName==e)&&o.push(n)}),o})}};xo.prototype.getElementsByTagName=kt.prototype.getElementsByTagName;xo.prototype.getElementsByTagNameNS=kt.prototype.getElementsByTagNameNS;De(kt,$);function kn(){}kn.prototype.nodeType=cr;De(kn,$);function bo(){}bo.prototype={data:"",substringData:function(t,e){return this.data.substring(t,t+e)},appendData:function(t){t=this.data+t,this.nodeValue=this.data=t,this.length=t.length},insertData:function(t,e){this.replaceData(t,0,e)},appendChild:function(t){throw new Error(pe[Be])},deleteData:function(t,e){this.replaceData(t,e,"")},replaceData:function(t,e,r){var o=this.data.substring(0,t),n=this.data.substring(t+e);r=o+r+n,this.nodeValue=this.data=r,this.length=r.length}};De(bo,$);function Pi(){}Pi.prototype={nodeName:"#text",nodeType:po,splitText:function(t){var e=this.data,r=e.substring(t);e=e.substring(0,t),this.data=this.nodeValue=e,this.length=e.length;var o=this.ownerDocument.createTextNode(r);return this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling),o}};De(Pi,bo);function Ui(){}Ui.prototype={nodeName:"#comment",nodeType:Bi};De(Ui,bo);function Fi(){}Fi.prototype={nodeName:"#cdata-section",nodeType:Bu};De(Fi,bo);function Vn(){}Vn.prototype.nodeType=Pu;De(Vn,$);function ku(){}ku.prototype.nodeType=Df;De(ku,$);function Hu(){}Hu.prototype.nodeType=Bf;De(Hu,$);function Mi(){}Mi.prototype.nodeType=Du;De(Mi,$);function Xn(){}Xn.prototype.nodeName="#document-fragment";Xn.prototype.nodeType=ct;De(Xn,$);function Oi(){}Oi.prototype.nodeType=wi;De(Oi,$);function Vu(){}Vu.prototype.serializeToString=function(t,e,r,o){return Xu.call(t,e,r,o)};$.prototype.toString=Xu;function Xu(t,e,r){var o=!!r&&!!r.requireWellFormed,n=[],s=this.nodeType==9&&this.documentElement||this,i=s.prefix,a=s.namespaceURI;if(a&&i==null){var i=s.lookupPrefix(a);if(i==null)var u=[{namespace:a,prefix:null}]}return Gi(this,n,t,e,u,o),n.join("")}function wu(t,e,r){var o=t.prefix||"",n=t.namespaceURI;if(!n||o==="xml"&&n===mo.XML||n===mo.XMLNS)return!1;for(var s=r.length;s--;){var i=r[s];if(i.prefix===o)return i.namespace!==n}return!0}function Gn(t,e,r,o){if(o&&!lr.test(e))throw new N($e,'The attribute name "'+e+'" is not a valid XML QName');t.push(" ",e,'="',r.replace(/[<>&"\t\n\r]/g,Gu),'"')}function Gi(t,e,r,o,n,s){n||(n=[]),fe(t,{ns:n,isHTML:r},{enter:function(i,a){var u=a.ns,l=a.isHTML;if(o)if(i=o(i),i){if(typeof i=="string")return e.push(i),null}else return null;switch(i.nodeType){case Xe:var c=i.attributes,f=c.length,p=i.tagName;l=mo.isHTML(i.namespaceURI)||l;var d=p;if(!l&&!i.prefix&&i.namespaceURI){for(var x,g=0;g<c.length;g++)if(c.item(g).name==="xmlns"){x=c.item(g).value;break}if(!x)for(var h=u.length-1;h>=0;h--){var v=u[h];if(v.prefix===""&&v.namespace===i.namespaceURI){x=v.namespace;break}}if(x!==i.namespaceURI)for(var h=u.length-1;h>=0;h--){var v=u[h];if(v.namespace===i.namespaceURI){v.prefix&&(d=v.prefix+":"+p);break}}}if(s&&!lr.test(d))throw new N($e,'The element name "'+d+'" is not a valid XML QName');e.push("<",d);for(var _=u.slice(),b=0;b<f;b++){var y=c.item(b);y.prefix=="xmlns"?_.push({prefix:y.localName,namespace:y.value}):y.nodeName=="xmlns"&&_.push({prefix:"",namespace:y.value})}for(var b=0;b<f;b++){var y=c.item(b);if(wu(y,l,_)){var S=y.prefix||"",C=y.namespaceURI;Gn(e,S?"xmlns:"+S:"xmlns",C,s),_.push({prefix:S,namespace:C})}var T=o?o(y):y;T&&(typeof T=="string"?e.push(T):Gn(e,T.name,T.value,s))}if(p===d&&wu(i,l,_)){var P=i.prefix||"",C=i.namespaceURI;Gn(e,P?"xmlns:"+P:"xmlns",C,s),_.push({prefix:P,namespace:C})}var A=i.firstChild;if(A||l&&!/^(?:meta|link|img|br|hr|input)$/i.test(p)){if(e.push(">"),l&&/^script$/i.test(p)){for(;A;)A.data?e.push(A.data):Gi(A,e,l,o,_.slice(),s),A=A.nextSibling;return e.push("</",p,">"),null}return{ns:_,isHTML:l,tag:d}}else return e.push("/>"),null;case Ru:case ct:return{ns:u.slice(),isHTML:l,tag:null};case cr:return Gn(e,i.name,i.value,s),null;case po:return e.push(i.data.replace(/[<&>]/g,Gu)),null;case Bu:if(s&&i.data.indexOf("]]>")!==-1)throw new N($e,'The CDATASection data contains "]]>"');return e.push("<![CDATA[",i.data.replace(/]]>/g,"]]]]><![CDATA[>"),"]]>"),null;case Bi:if(s&&i.data.indexOf("-->")!==-1)throw new N($e,'The comment node data contains "-->"');return e.push("<!--",i.data,"-->"),null;case Pu:if(s){if(!lr.test(i.name))throw new N($e,'The doctype name "'+i.name+'" is not a valid XML Name');if(i.publicId&&!/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(i.publicId))throw new N($e,"DocumentType publicId is not a valid PubidLiteral");if(i.systemId&&!/^("[^"]*"|'[^']*')$/.test(i.systemId))throw new N($e,"DocumentType systemId is not a valid SystemLiteral");if(i.internalSubset&&i.internalSubset.indexOf("]>")!==-1)throw new N($e,'DocumentType internalSubset contains "]>"')}var k=i.publicId,B=i.systemId;if(e.push("<!DOCTYPE ",i.name),k)e.push(" PUBLIC ",k),B&&B!="."&&e.push(" ",B),e.push(">");else if(B&&B!=".")e.push(" SYSTEM ",B,">");else{var re=i.internalSubset;re&&e.push(" [",re,"]"),e.push(">")}return null;case wi:if(s){if(!lr.test(i.target)||i.target.indexOf(":")!==-1||i.target.toLowerCase()==="xml")throw new N($e,'The processing instruction target "'+i.target+'" is not a valid XML NCName or is reserved');if(i.data.indexOf("?>")!==-1)throw new N($e,'The ProcessingInstruction data contains "?>"')}return e.push("<?",i.target," ",i.data,"?>"),null;case Du:if(s&&!lr.test(i.nodeName))throw new N($e,'The entity reference name "'+i.nodeName+'" is not a valid XML Name');return e.push("&",i.nodeName,";"),null;default:return e.push("??",i.nodeName),null}},exit:function(i,a){a&&a.tag&&e.push("</",a.tag,">")}})}function If(t,e,r){var o;return fe(e,null,{enter:function(n,s){var i=n.cloneNode(!1);i.ownerDocument=t,i.parentNode=null,s===null?o=i:s.appendChild(i);var a=n.nodeType===cr||r;return a?i:null}}),o}function Wu(t,e,r){var o;return fe(e,null,{enter:function(n,s){var i=new n.constructor;for(var a in n)if(Object.prototype.hasOwnProperty.call(n,a)){var u=n[a];typeof u!="object"&&u!=i[a]&&(i[a]=u)}n.childNodes&&(i.childNodes=new ft),i.ownerDocument=t;var l=r;switch(i.nodeType){case Xe:var c=n.attributes,f=i.attributes=new In,p=c.length;f._ownerElement=i;for(var d=0;d<p;d++)i.setAttributeNode(Wu(t,c.item(d),!0));break;case cr:l=!0}return s!==null?s.appendChild(i):o=i,l?i:null}}),o}function zu(t,e,r){t[e]=r}try{Object.defineProperty&&(Object.defineProperty(fr.prototype,"length",{get:function(){return Di(this),this.$$length}}),Object.defineProperty($.prototype,"textContent",{get:function(){if(this.nodeType===Xe||this.nodeType===ct){var t=[];return fe(this,null,{enter:function(e){if(e.nodeType===Xe||e.nodeType===ct)return!0;if(e.nodeType===wi||e.nodeType===Bi)return null;t.push(e.nodeValue)}}),t.join("")}return this.nodeValue},set:function(t){switch(this.nodeType){case Xe:case ct:for(;this.firstChild;)this.removeChild(this.firstChild);(t||String(t))&&this.appendChild(this.ownerDocument.createTextNode(t));break;default:this.data=t,this.value=t,this.nodeValue=t}}}),zu=function(t,e,r){t["$$"+e]=r})}catch{}dt.DocumentType=Vn;dt.DOMException=N;dt.DOMImplementation=Ou;dt.Element=kt;dt.Node=$;dt.NodeList=ft;dt.walkDOM=fe;dt.XMLSerializer=Vu});var qu=Kt(_o=>{"use strict";var $u=ur().freeze;_o.XML_ENTITIES=$u({amp:"&",apos:"'",gt:">",lt:"<",quot:'"'});_o.HTML_ENTITIES=$u({Aacute:"\xC1",aacute:"\xE1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223E",acd:"\u223F",acE:"\u223E\u0333",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",Acy:"\u0410",acy:"\u0430",AElig:"\xC6",aelig:"\xE6",af:"\u2061",Afr:"\u{1D504}",afr:"\u{1D51E}",Agrave:"\xC0",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03B1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2A3F",AMP:"&",amp:"&",And:"\u2A53",and:"\u2227",andand:"\u2A55",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",ange:"\u29A4",angle:"\u2220",angmsd:"\u2221",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angst:"\xC5",angzarr:"\u237C",Aogon:"\u0104",aogon:"\u0105",Aopf:"\u{1D538}",aopf:"\u{1D552}",ap:"\u2248",apacir:"\u2A6F",apE:"\u2A70",ape:"\u224A",apid:"\u224B",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224A",Aring:"\xC5",aring:"\xE5",Ascr:"\u{1D49C}",ascr:"\u{1D4B6}",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224D",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",awconint:"\u2233",awint:"\u2A11",backcong:"\u224C",backepsilon:"\u03F6",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",Backslash:"\u2216",Barv:"\u2AE7",barvee:"\u22BD",Barwed:"\u2306",barwed:"\u2305",barwedge:"\u2305",bbrk:"\u23B5",bbrktbrk:"\u23B6",bcong:"\u224C",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201E",becaus:"\u2235",Because:"\u2235",because:"\u2235",bemptyv:"\u29B0",bepsi:"\u03F6",bernou:"\u212C",Bernoullis:"\u212C",Beta:"\u0392",beta:"\u03B2",beth:"\u2136",between:"\u226C",Bfr:"\u{1D505}",bfr:"\u{1D51F}",bigcap:"\u22C2",bigcirc:"\u25EF",bigcup:"\u22C3",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",bigvee:"\u22C1",bigwedge:"\u22C0",bkarow:"\u290D",blacklozenge:"\u29EB",blacksquare:"\u25AA",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",blacktriangleright:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bNot:"\u2AED",bnot:"\u2310",Bopf:"\u{1D539}",bopf:"\u{1D553}",bot:"\u22A5",bottom:"\u22A5",bowtie:"\u22C8",boxbox:"\u29C9",boxDL:"\u2557",boxDl:"\u2556",boxdL:"\u2555",boxdl:"\u2510",boxDR:"\u2554",boxDr:"\u2553",boxdR:"\u2552",boxdr:"\u250C",boxH:"\u2550",boxh:"\u2500",boxHD:"\u2566",boxHd:"\u2564",boxhD:"\u2565",boxhd:"\u252C",boxHU:"\u2569",boxHu:"\u2567",boxhU:"\u2568",boxhu:"\u2534",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxUL:"\u255D",boxUl:"\u255C",boxuL:"\u255B",boxul:"\u2518",boxUR:"\u255A",boxUr:"\u2559",boxuR:"\u2558",boxur:"\u2514",boxV:"\u2551",boxv:"\u2502",boxVH:"\u256C",boxVh:"\u256B",boxvH:"\u256A",boxvh:"\u253C",boxVL:"\u2563",boxVl:"\u2562",boxvL:"\u2561",boxvl:"\u2524",boxVR:"\u2560",boxVr:"\u255F",boxvR:"\u255E",boxvr:"\u251C",bprime:"\u2035",Breve:"\u02D8",breve:"\u02D8",brvbar:"\xA6",Bscr:"\u212C",bscr:"\u{1D4B7}",bsemi:"\u204F",bsim:"\u223D",bsime:"\u22CD",bsol:"\\",bsolb:"\u29C5",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bump:"\u224E",bumpE:"\u2AAE",bumpe:"\u224F",Bumpeq:"\u224E",bumpeq:"\u224F",Cacute:"\u0106",cacute:"\u0107",Cap:"\u22D2",cap:"\u2229",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",capcup:"\u2A47",capdot:"\u2A40",CapitalDifferentialD:"\u2145",caps:"\u2229\uFE00",caret:"\u2041",caron:"\u02C7",Cayleys:"\u212D",ccaps:"\u2A4D",Ccaron:"\u010C",ccaron:"\u010D",Ccedil:"\xC7",ccedil:"\xE7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2A4C",ccupssm:"\u2A50",Cdot:"\u010A",cdot:"\u010B",cedil:"\xB8",Cedilla:"\xB8",cemptyv:"\u29B2",cent:"\xA2",CenterDot:"\xB7",centerdot:"\xB7",Cfr:"\u212D",cfr:"\u{1D520}",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03A7",chi:"\u03C7",cir:"\u25CB",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",CircleDot:"\u2299",circledR:"\xAE",circledS:"\u24C8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cirE:"\u29C3",cire:"\u2257",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201D",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",Colon:"\u2237",colon:":",Colone:"\u2A74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2A6D",Congruent:"\u2261",Conint:"\u222F",conint:"\u222E",ContourIntegral:"\u222E",Copf:"\u2102",copf:"\u{1D554}",coprod:"\u2210",Coproduct:"\u2210",COPY:"\xA9",copy:"\xA9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21B5",Cross:"\u2A2F",cross:"\u2717",Cscr:"\u{1D49E}",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cularrp:"\u293D",Cup:"\u22D3",cup:"\u222A",cupbrcap:"\u2A48",CupCap:"\u224D",cupcap:"\u2A46",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curarrm:"\u293C",curlyeqprec:"\u22DE",curlyeqsucc:"\u22DF",curlyvee:"\u22CE",curlywedge:"\u22CF",curren:"\xA4",curvearrowleft:"\u21B6",curvearrowright:"\u21B7",cuvee:"\u22CE",cuwed:"\u22CF",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232D",Dagger:"\u2021",dagger:"\u2020",daleth:"\u2138",Darr:"\u21A1",dArr:"\u21D3",darr:"\u2193",dash:"\u2010",Dashv:"\u2AE4",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",Dcaron:"\u010E",dcaron:"\u010F",Dcy:"\u0414",dcy:"\u0434",DD:"\u2145",dd:"\u2146",ddagger:"\u2021",ddarr:"\u21CA",DDotrahd:"\u2911",ddotseq:"\u2A77",deg:"\xB0",Del:"\u2207",Delta:"\u0394",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",Dfr:"\u{1D507}",dfr:"\u{1D521}",dHar:"\u2965",dharl:"\u21C3",dharr:"\u21C2",DiacriticalAcute:"\xB4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"`",DiacriticalTilde:"\u02DC",diam:"\u22C4",Diamond:"\u22C4",diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\xA8",DifferentialD:"\u2146",digamma:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"$",Dopf:"\u{1D53B}",dopf:"\u{1D555}",Dot:"\xA8",dot:"\u02D9",DotDot:"\u20DC",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22A1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222F",DoubleDot:"\xA8",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleRightTee:"\u22A8",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DoubleVerticalBar:"\u2225",DownArrow:"\u2193",Downarrow:"\u21D3",downarrow:"\u2193",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVector:"\u21BD",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295F",DownRightVector:"\u21C1",DownRightVectorBar:"\u2957",DownTee:"\u22A4",DownTeeArrow:"\u21A7",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",Dscr:"\u{1D49F}",dscr:"\u{1D4B9}",DScy:"\u0405",dscy:"\u0455",dsol:"\u29F6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",DZcy:"\u040F",dzcy:"\u045F",dzigrarr:"\u27FF",Eacute:"\xC9",eacute:"\xE9",easter:"\u2A6E",Ecaron:"\u011A",ecaron:"\u011B",ecir:"\u2256",Ecirc:"\xCA",ecirc:"\xEA",ecolon:"\u2255",Ecy:"\u042D",ecy:"\u044D",eDDot:"\u2A77",Edot:"\u0116",eDot:"\u2251",edot:"\u0117",ee:"\u2147",efDot:"\u2252",Efr:"\u{1D508}",efr:"\u{1D522}",eg:"\u2A9A",Egrave:"\xC8",egrave:"\xE8",egs:"\u2A96",egsdot:"\u2A98",el:"\u2A99",Element:"\u2208",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",elsdot:"\u2A97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25FB",emptyv:"\u2205",EmptyVerySmallSquare:"\u25AB",emsp:"\u2003",emsp13:"\u2004",emsp14:"\u2005",ENG:"\u014A",eng:"\u014B",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\u{1D53C}",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",Epsilon:"\u0395",epsilon:"\u03B5",epsiv:"\u03F5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2A96",eqslantless:"\u2A95",Equal:"\u2A75",equals:"=",EqualTilde:"\u2242",equest:"\u225F",Equilibrium:"\u21CC",equiv:"\u2261",equivDD:"\u2A78",eqvparsl:"\u29E5",erarr:"\u2971",erDot:"\u2253",Escr:"\u2130",escr:"\u212F",esdot:"\u2250",Esim:"\u2A73",esim:"\u2242",Eta:"\u0397",eta:"\u03B7",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",euro:"\u20AC",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",ExponentialE:"\u2147",exponentiale:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",Ffr:"\u{1D509}",ffr:"\u{1D523}",filig:"\uFB01",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",Fopf:"\u{1D53D}",fopf:"\u{1D557}",ForAll:"\u2200",forall:"\u2200",fork:"\u22D4",forkv:"\u2AD9",Fouriertrf:"\u2131",fpartint:"\u2A0D",frac12:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",Fscr:"\u2131",fscr:"\u{1D4BB}",gacute:"\u01F5",Gamma:"\u0393",gamma:"\u03B3",Gammad:"\u03DC",gammad:"\u03DD",gap:"\u2A86",Gbreve:"\u011E",gbreve:"\u011F",Gcedil:"\u0122",Gcirc:"\u011C",gcirc:"\u011D",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",gE:"\u2267",ge:"\u2265",gEl:"\u2A8C",gel:"\u22DB",geq:"\u2265",geqq:"\u2267",geqslant:"\u2A7E",ges:"\u2A7E",gescc:"\u2AA9",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",Gfr:"\u{1D50A}",gfr:"\u{1D524}",Gg:"\u22D9",gg:"\u226B",ggg:"\u22D9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gl:"\u2277",gla:"\u2AA5",glE:"\u2A92",glj:"\u2AA4",gnap:"\u2A8A",gnapprox:"\u2A8A",gnE:"\u2269",gne:"\u2A88",gneq:"\u2A88",gneqq:"\u2269",gnsim:"\u22E7",Gopf:"\u{1D53E}",gopf:"\u{1D558}",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Gscr:"\u{1D4A2}",gscr:"\u210A",gsim:"\u2273",gsime:"\u2A8E",gsiml:"\u2A90",Gt:"\u226B",GT:">",gt:">",gtcc:"\u2AA7",gtcir:"\u2A7A",gtdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrapprox:"\u2A86",gtrarr:"\u2978",gtrdot:"\u22D7",gtreqless:"\u22DB",gtreqqless:"\u2A8C",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",Hacek:"\u02C7",hairsp:"\u200A",half:"\xBD",hamilt:"\u210B",HARDcy:"\u042A",hardcy:"\u044A",hArr:"\u21D4",harr:"\u2194",harrcir:"\u2948",harrw:"\u21AD",Hat:"^",hbar:"\u210F",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22B9",Hfr:"\u210C",hfr:"\u{1D525}",HilbertSpace:"\u210B",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",Hopf:"\u210D",hopf:"\u{1D559}",horbar:"\u2015",HorizontalLine:"\u2500",Hscr:"\u210B",hscr:"\u{1D4BD}",hslash:"\u210F",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224E",HumpEqual:"\u224F",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xCD",iacute:"\xED",ic:"\u2063",Icirc:"\xCE",icirc:"\xEE",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xA1",iff:"\u21D4",Ifr:"\u2111",ifr:"\u{1D526}",Igrave:"\xCC",igrave:"\xEC",ii:"\u2148",iiiint:"\u2A0C",iiint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Im:"\u2111",Imacr:"\u012A",imacr:"\u012B",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",imof:"\u22B7",imped:"\u01B5",Implies:"\u21D2",in:"\u2208",incare:"\u2105",infin:"\u221E",infintie:"\u29DD",inodot:"\u0131",Int:"\u222C",int:"\u222B",intcal:"\u22BA",integers:"\u2124",Integral:"\u222B",intercal:"\u22BA",Intersection:"\u22C2",intlarhk:"\u2A17",intprod:"\u2A3C",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012E",iogon:"\u012F",Iopf:"\u{1D540}",iopf:"\u{1D55A}",Iota:"\u0399",iota:"\u03B9",iprod:"\u2A3C",iquest:"\xBF",Iscr:"\u2110",iscr:"\u{1D4BE}",isin:"\u2208",isindot:"\u22F5",isinE:"\u22F9",isins:"\u22F4",isinsv:"\u22F3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xCF",iuml:"\xEF",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\u{1D50D}",jfr:"\u{1D527}",jmath:"\u0237",Jopf:"\u{1D541}",jopf:"\u{1D55B}",Jscr:"\u{1D4A5}",jscr:"\u{1D4BF}",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039A",kappa:"\u03BA",kappav:"\u03F0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041A",kcy:"\u043A",Kfr:"\u{1D50E}",kfr:"\u{1D528}",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040C",kjcy:"\u045C",Kopf:"\u{1D542}",kopf:"\u{1D55C}",Kscr:"\u{1D4A6}",kscr:"\u{1D4C0}",lAarr:"\u21DA",Lacute:"\u0139",lacute:"\u013A",laemptyv:"\u29B4",lagran:"\u2112",Lambda:"\u039B",lambda:"\u03BB",Lang:"\u27EA",lang:"\u27E8",langd:"\u2991",langle:"\u27E8",lap:"\u2A85",Laplacetrf:"\u2112",laquo:"\xAB",Larr:"\u219E",lArr:"\u21D0",larr:"\u2190",larrb:"\u21E4",larrbfs:"\u291F",larrfs:"\u291D",larrhk:"\u21A9",larrlp:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",lat:"\u2AAB",lAtail:"\u291B",latail:"\u2919",late:"\u2AAD",lates:"\u2AAD\uFE00",lBarr:"\u290E",lbarr:"\u290C",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",Lcaron:"\u013D",lcaron:"\u013E",Lcedil:"\u013B",lcedil:"\u013C",lceil:"\u2308",lcub:"{",Lcy:"\u041B",lcy:"\u043B",ldca:"\u2936",ldquo:"\u201C",ldquor:"\u201E",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",lE:"\u2266",le:"\u2264",LeftAngleBracket:"\u27E8",LeftArrow:"\u2190",Leftarrow:"\u21D0",leftarrow:"\u2190",LeftArrowBar:"\u21E4",LeftArrowRightArrow:"\u21C6",leftarrowtail:"\u21A2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVector:"\u21C3",LeftDownVectorBar:"\u2959",LeftFloor:"\u230A",leftharpoondown:"\u21BD",leftharpoonup:"\u21BC",leftleftarrows:"\u21C7",LeftRightArrow:"\u2194",Leftrightarrow:"\u21D4",leftrightarrow:"\u2194",leftrightarrows:"\u21C6",leftrightharpoons:"\u21CB",leftrightsquigarrow:"\u21AD",LeftRightVector:"\u294E",LeftTee:"\u22A3",LeftTeeArrow:"\u21A4",LeftTeeVector:"\u295A",leftthreetimes:"\u22CB",LeftTriangle:"\u22B2",LeftTriangleBar:"\u29CF",LeftTriangleEqual:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVector:"\u21BF",LeftUpVectorBar:"\u2958",LeftVector:"\u21BC",LeftVectorBar:"\u2952",lEg:"\u2A8B",leg:"\u22DA",leq:"\u2264",leqq:"\u2266",leqslant:"\u2A7D",les:"\u2A7D",lescc:"\u2AA8",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessapprox:"\u2A85",lessdot:"\u22D6",lesseqgtr:"\u22DA",lesseqqgtr:"\u2A8B",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2AA1",lesssim:"\u2272",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",lfisht:"\u297C",lfloor:"\u230A",Lfr:"\u{1D50F}",lfr:"\u{1D529}",lg:"\u2276",lgE:"\u2A91",lHar:"\u2962",lhard:"\u21BD",lharu:"\u21BC",lharul:"\u296A",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",Ll:"\u22D8",ll:"\u226A",llarr:"\u21C7",llcorner:"\u231E",Lleftarrow:"\u21DA",llhard:"\u296B",lltri:"\u25FA",Lmidot:"\u013F",lmidot:"\u0140",lmoust:"\u23B0",lmoustache:"\u23B0",lnap:"\u2A89",lnapprox:"\u2A89",lnE:"\u2268",lne:"\u2A87",lneq:"\u2A87",lneqq:"\u2268",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",lobrk:"\u27E6",LongLeftArrow:"\u27F5",Longleftarrow:"\u27F8",longleftarrow:"\u27F5",LongLeftRightArrow:"\u27F7",Longleftrightarrow:"\u27FA",longleftrightarrow:"\u27F7",longmapsto:"\u27FC",LongRightArrow:"\u27F6",Longrightarrow:"\u27F9",longrightarrow:"\u27F6",looparrowleft:"\u21AB",looparrowright:"\u21AC",lopar:"\u2985",Lopf:"\u{1D543}",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25CA",lozenge:"\u25CA",lozf:"\u29EB",lpar:"(",lparlt:"\u2993",lrarr:"\u21C6",lrcorner:"\u231F",lrhar:"\u21CB",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",Lscr:"\u2112",lscr:"\u{1D4C1}",Lsh:"\u21B0",lsh:"\u21B0",lsim:"\u2272",lsime:"\u2A8D",lsimg:"\u2A8F",lsqb:"[",lsquo:"\u2018",lsquor:"\u201A",Lstrok:"\u0141",lstrok:"\u0142",Lt:"\u226A",LT:"<",lt:"<",ltcc:"\u2AA6",ltcir:"\u2A79",ltdot:"\u22D6",lthree:"\u22CB",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltri:"\u25C3",ltrie:"\u22B4",ltrif:"\u25C2",ltrPar:"\u2996",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",macr:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21A6",mapsto:"\u21A6",mapstodown:"\u21A7",mapstoleft:"\u21A4",mapstoup:"\u21A5",marker:"\u25AE",mcomma:"\u2A29",Mcy:"\u041C",mcy:"\u043C",mdash:"\u2014",mDDot:"\u223A",measuredangle:"\u2221",MediumSpace:"\u205F",Mellintrf:"\u2133",Mfr:"\u{1D510}",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",mid:"\u2223",midast:"*",midcir:"\u2AF0",middot:"\xB7",minus:"\u2212",minusb:"\u229F",minusd:"\u2238",minusdu:"\u2A2A",MinusPlus:"\u2213",mlcp:"\u2ADB",mldr:"\u2026",mnplus:"\u2213",models:"\u22A7",Mopf:"\u{1D544}",mopf:"\u{1D55E}",mp:"\u2213",Mscr:"\u2133",mscr:"\u{1D4C2}",mstpos:"\u223E",Mu:"\u039C",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20D2",nap:"\u2249",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",napprox:"\u2249",natur:"\u266E",natural:"\u266E",naturals:"\u2115",nbsp:"\xA0",nbump:"\u224E\u0338",nbumpe:"\u224F\u0338",ncap:"\u2A43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",Ncy:"\u041D",ncy:"\u043D",ndash:"\u2013",ne:"\u2260",nearhk:"\u2924",neArr:"\u21D7",nearr:"\u2197",nearrow:"\u2197",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NewLine:`
`,nexist:"\u2204",nexists:"\u2204",Nfr:"\u{1D511}",nfr:"\u{1D52B}",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",nGg:"\u22D9\u0338",ngsim:"\u2275",nGt:"\u226B\u20D2",ngt:"\u226F",ngtr:"\u226F",nGtv:"\u226B\u0338",nhArr:"\u21CE",nharr:"\u21AE",nhpar:"\u2AF2",ni:"\u220B",nis:"\u22FC",nisd:"\u22FA",niv:"\u220B",NJcy:"\u040A",njcy:"\u045A",nlArr:"\u21CD",nlarr:"\u219A",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nLeftarrow:"\u21CD",nleftarrow:"\u219A",nLeftrightarrow:"\u21CE",nleftrightarrow:"\u21AE",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",nless:"\u226E",nLl:"\u22D8\u0338",nlsim:"\u2274",nLt:"\u226A\u20D2",nlt:"\u226E",nltri:"\u22EA",nltrie:"\u22EC",nLtv:"\u226A\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xA0",Nopf:"\u2115",nopf:"\u{1D55F}",Not:"\u2AEC",not:"\xAC",NotCongruent:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",notin:"\u2209",notindot:"\u22F5\u0338",notinE:"\u22F9\u0338",notinva:"\u2209",notinvb:"\u22F7",notinvc:"\u22F6",NotLeftTriangle:"\u22EA",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",notni:"\u220C",notniva:"\u220C",notnivb:"\u22FE",notnivc:"\u22FD",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",NotReverseElement:"\u220C",NotRightTriangle:"\u22EB",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangleEqual:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",NotSubset:"\u2282\u20D2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",npar:"\u2226",nparallel:"\u2226",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",npr:"\u2280",nprcue:"\u22E0",npre:"\u2AAF\u0338",nprec:"\u2280",npreceq:"\u2AAF\u0338",nrArr:"\u21CF",nrarr:"\u219B",nrarrc:"\u2933\u0338",nrarrw:"\u219D\u0338",nRightarrow:"\u21CF",nrightarrow:"\u219B",nrtri:"\u22EB",nrtrie:"\u22ED",nsc:"\u2281",nsccue:"\u22E1",nsce:"\u2AB0\u0338",Nscr:"\u{1D4A9}",nscr:"\u{1D4C3}",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22E2",nsqsupe:"\u22E3",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsube:"\u2288",nsubset:"\u2282\u20D2",nsubseteq:"\u2288",nsubseteqq:"\u2AC5\u0338",nsucc:"\u2281",nsucceq:"\u2AB0\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20D2",nsupseteq:"\u2289",nsupseteqq:"\u2AC6\u0338",ntgl:"\u2279",Ntilde:"\xD1",ntilde:"\xF1",ntlg:"\u2278",ntriangleleft:"\u22EA",ntrianglelefteq:"\u22EC",ntriangleright:"\u22EB",ntrianglerighteq:"\u22ED",Nu:"\u039D",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224D\u20D2",nVDash:"\u22AF",nVdash:"\u22AE",nvDash:"\u22AD",nvdash:"\u22AC",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvHarr:"\u2904",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwarhk:"\u2923",nwArr:"\u21D6",nwarr:"\u2196",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xD3",oacute:"\xF3",oast:"\u229B",ocir:"\u229A",Ocirc:"\xD4",ocirc:"\xF4",Ocy:"\u041E",ocy:"\u043E",odash:"\u229D",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2A38",odot:"\u2299",odsold:"\u29BC",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29BF",Ofr:"\u{1D512}",ofr:"\u{1D52C}",ogon:"\u02DB",Ograve:"\xD2",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",ohm:"\u03A9",oint:"\u222E",olarr:"\u21BA",olcir:"\u29BE",olcross:"\u29BB",oline:"\u203E",olt:"\u29C0",Omacr:"\u014C",omacr:"\u014D",Omega:"\u03A9",omega:"\u03C9",Omicron:"\u039F",omicron:"\u03BF",omid:"\u29B6",ominus:"\u2296",Oopf:"\u{1D546}",oopf:"\u{1D560}",opar:"\u29B7",OpenCurlyDoubleQuote:"\u201C",OpenCurlyQuote:"\u2018",operp:"\u29B9",oplus:"\u2295",Or:"\u2A54",or:"\u2228",orarr:"\u21BB",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oS:"\u24C8",Oscr:"\u{1D4AA}",oscr:"\u2134",Oslash:"\xD8",oslash:"\xF8",osol:"\u2298",Otilde:"\xD5",otilde:"\xF5",Otimes:"\u2A37",otimes:"\u2297",otimesas:"\u2A36",Ouml:"\xD6",ouml:"\xF6",ovbar:"\u233D",OverBar:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",OverParenthesis:"\u23DC",par:"\u2225",para:"\xB6",parallel:"\u2225",parsim:"\u2AF3",parsl:"\u2AFD",part:"\u2202",PartialD:"\u2202",Pcy:"\u041F",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",perp:"\u22A5",pertenk:"\u2031",Pfr:"\u{1D513}",pfr:"\u{1D52D}",Phi:"\u03A6",phi:"\u03C6",phiv:"\u03D5",phmmat:"\u2133",phone:"\u260E",Pi:"\u03A0",pi:"\u03C0",pitchfork:"\u22D4",piv:"\u03D6",planck:"\u210F",planckh:"\u210E",plankv:"\u210F",plus:"+",plusacir:"\u2A23",plusb:"\u229E",pluscir:"\u2A22",plusdo:"\u2214",plusdu:"\u2A25",pluse:"\u2A72",PlusMinus:"\xB1",plusmn:"\xB1",plussim:"\u2A26",plustwo:"\u2A27",pm:"\xB1",Poincareplane:"\u210C",pointint:"\u2A15",Popf:"\u2119",popf:"\u{1D561}",pound:"\xA3",Pr:"\u2ABB",pr:"\u227A",prap:"\u2AB7",prcue:"\u227C",prE:"\u2AB3",pre:"\u2AAF",prec:"\u227A",precapprox:"\u2AB7",preccurlyeq:"\u227C",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",preceq:"\u2AAF",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",precsim:"\u227E",Prime:"\u2033",prime:"\u2032",primes:"\u2119",prnap:"\u2AB9",prnE:"\u2AB5",prnsim:"\u22E8",prod:"\u220F",Product:"\u220F",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prop:"\u221D",Proportion:"\u2237",Proportional:"\u221D",propto:"\u221D",prsim:"\u227E",prurel:"\u22B0",Pscr:"\u{1D4AB}",pscr:"\u{1D4C5}",Psi:"\u03A8",psi:"\u03C8",puncsp:"\u2008",Qfr:"\u{1D514}",qfr:"\u{1D52E}",qint:"\u2A0C",Qopf:"\u211A",qopf:"\u{1D562}",qprime:"\u2057",Qscr:"\u{1D4AC}",qscr:"\u{1D4C6}",quaternions:"\u210D",quatint:"\u2A16",quest:"?",questeq:"\u225F",QUOT:'"',quot:'"',rAarr:"\u21DB",race:"\u223D\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221A",raemptyv:"\u29B3",Rang:"\u27EB",rang:"\u27E9",rangd:"\u2992",range:"\u29A5",rangle:"\u27E9",raquo:"\xBB",Rarr:"\u21A0",rArr:"\u21D2",rarr:"\u2192",rarrap:"\u2975",rarrb:"\u21E5",rarrbfs:"\u2920",rarrc:"\u2933",rarrfs:"\u291E",rarrhk:"\u21AA",rarrlp:"\u21AC",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21A3",rarrw:"\u219D",rAtail:"\u291C",ratail:"\u291A",ratio:"\u2236",rationals:"\u211A",RBarr:"\u2910",rBarr:"\u290F",rbarr:"\u290D",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201D",rdquor:"\u201D",rdsh:"\u21B3",Re:"\u211C",real:"\u211C",realine:"\u211B",realpart:"\u211C",reals:"\u211D",rect:"\u25AD",REG:"\xAE",reg:"\xAE",ReverseElement:"\u220B",ReverseEquilibrium:"\u21CB",ReverseUpEquilibrium:"\u296F",rfisht:"\u297D",rfloor:"\u230B",Rfr:"\u211C",rfr:"\u{1D52F}",rHar:"\u2964",rhard:"\u21C1",rharu:"\u21C0",rharul:"\u296C",Rho:"\u03A1",rho:"\u03C1",rhov:"\u03F1",RightAngleBracket:"\u27E9",RightArrow:"\u2192",Rightarrow:"\u21D2",rightarrow:"\u2192",RightArrowBar:"\u21E5",RightArrowLeftArrow:"\u21C4",rightarrowtail:"\u21A3",RightCeiling:"\u2309",RightDoubleBracket:"\u27E7",RightDownTeeVector:"\u295D",RightDownVector:"\u21C2",RightDownVectorBar:"\u2955",RightFloor:"\u230B",rightharpoondown:"\u21C1",rightharpoonup:"\u21C0",rightleftarrows:"\u21C4",rightleftharpoons:"\u21CC",rightrightarrows:"\u21C9",rightsquigarrow:"\u219D",RightTee:"\u22A2",RightTeeArrow:"\u21A6",RightTeeVector:"\u295B",rightthreetimes:"\u22CC",RightTriangle:"\u22B3",RightTriangleBar:"\u29D0",RightTriangleEqual:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVector:"\u21BE",RightUpVectorBar:"\u2954",RightVector:"\u21C0",RightVectorBar:"\u2953",ring:"\u02DA",risingdotseq:"\u2253",rlarr:"\u21C4",rlhar:"\u21CC",rlm:"\u200F",rmoust:"\u23B1",rmoustache:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",robrk:"\u27E7",ropar:"\u2986",Ropf:"\u211D",ropf:"\u{1D563}",roplus:"\u2A2E",rotimes:"\u2A35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rrarr:"\u21C9",Rrightarrow:"\u21DB",rsaquo:"\u203A",Rscr:"\u211B",rscr:"\u{1D4C7}",Rsh:"\u21B1",rsh:"\u21B1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22CC",rtimes:"\u22CA",rtri:"\u25B9",rtrie:"\u22B5",rtrif:"\u25B8",rtriltri:"\u29CE",RuleDelayed:"\u29F4",ruluhar:"\u2968",rx:"\u211E",Sacute:"\u015A",sacute:"\u015B",sbquo:"\u201A",Sc:"\u2ABC",sc:"\u227B",scap:"\u2AB8",Scaron:"\u0160",scaron:"\u0161",sccue:"\u227D",scE:"\u2AB4",sce:"\u2AB0",Scedil:"\u015E",scedil:"\u015F",Scirc:"\u015C",scirc:"\u015D",scnap:"\u2ABA",scnE:"\u2AB6",scnsim:"\u22E9",scpolint:"\u2A13",scsim:"\u227F",Scy:"\u0421",scy:"\u0441",sdot:"\u22C5",sdotb:"\u22A1",sdote:"\u2A66",searhk:"\u2925",seArr:"\u21D8",searr:"\u2198",searrow:"\u2198",sect:"\xA7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\u{1D516}",sfr:"\u{1D530}",sfrown:"\u2322",sharp:"\u266F",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xAD",Sigma:"\u03A3",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",sim:"\u223C",simdot:"\u2A6A",sime:"\u2243",simeq:"\u2243",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2A33",smeparsl:"\u29E4",smid:"\u2223",smile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",SOFTcy:"\u042C",softcy:"\u044C",sol:"/",solb:"\u29C4",solbar:"\u233F",Sopf:"\u{1D54A}",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\uFE00",sqcup:"\u2294",sqcups:"\u2294\uFE00",Sqrt:"\u221A",sqsub:"\u228F",sqsube:"\u2291",sqsubset:"\u228F",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",squ:"\u25A1",Square:"\u25A1",square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25AA",squf:"\u25AA",srarr:"\u2192",Sscr:"\u{1D4AE}",sscr:"\u{1D4C8}",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22C6",Star:"\u22C6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03F5",straightphi:"\u03D5",strns:"\xAF",Sub:"\u22D0",sub:"\u2282",subdot:"\u2ABD",subE:"\u2AC5",sube:"\u2286",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subne:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",Subset:"\u22D0",subset:"\u2282",subseteq:"\u2286",subseteqq:"\u2AC5",SubsetEqual:"\u2286",subsetneq:"\u228A",subsetneqq:"\u2ACB",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",succ:"\u227B",succapprox:"\u2AB8",succcurlyeq:"\u227D",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",succeq:"\u2AB0",succnapprox:"\u2ABA",succneqq:"\u2AB6",succnsim:"\u22E9",succsim:"\u227F",SuchThat:"\u220B",Sum:"\u2211",sum:"\u2211",sung:"\u266A",Sup:"\u22D1",sup:"\u2283",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",supdot:"\u2ABE",supdsub:"\u2AD8",supE:"\u2AC6",supe:"\u2287",supedot:"\u2AC4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supne:"\u228B",supplus:"\u2AC0",Supset:"\u22D1",supset:"\u2283",supseteq:"\u2287",supseteqq:"\u2AC6",supsetneq:"\u228B",supsetneqq:"\u2ACC",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swarhk:"\u2926",swArr:"\u21D9",swarr:"\u2199",swarrow:"\u2199",swnwar:"\u292A",szlig:"\xDF",Tab:"	",target:"\u2316",Tau:"\u03A4",tau:"\u03C4",tbrk:"\u23B4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20DB",telrec:"\u2315",Tfr:"\u{1D517}",tfr:"\u{1D531}",there4:"\u2234",Therefore:"\u2234",therefore:"\u2234",Theta:"\u0398",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",thickapprox:"\u2248",thicksim:"\u223C",ThickSpace:"\u205F\u200A",thinsp:"\u2009",ThinSpace:"\u2009",thkap:"\u2248",thksim:"\u223C",THORN:"\xDE",thorn:"\xFE",Tilde:"\u223C",tilde:"\u02DC",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",times:"\xD7",timesb:"\u22A0",timesbar:"\u2A31",timesd:"\u2A30",tint:"\u222D",toea:"\u2928",top:"\u22A4",topbot:"\u2336",topcir:"\u2AF1",Topf:"\u{1D54B}",topf:"\u{1D565}",topfork:"\u2ADA",tosa:"\u2929",tprime:"\u2034",TRADE:"\u2122",trade:"\u2122",triangle:"\u25B5",triangledown:"\u25BF",triangleleft:"\u25C3",trianglelefteq:"\u22B4",triangleq:"\u225C",triangleright:"\u25B9",trianglerighteq:"\u22B5",tridot:"\u25EC",trie:"\u225C",triminus:"\u2A3A",TripleDot:"\u20DB",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",Tscr:"\u{1D4AF}",tscr:"\u{1D4C9}",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040B",tshcy:"\u045B",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226C",twoheadleftarrow:"\u219E",twoheadrightarrow:"\u21A0",Uacute:"\xDA",uacute:"\xFA",Uarr:"\u219F",uArr:"\u21D1",uarr:"\u2191",Uarrocir:"\u2949",Ubrcy:"\u040E",ubrcy:"\u045E",Ubreve:"\u016C",ubreve:"\u016D",Ucirc:"\xDB",ucirc:"\xFB",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21C5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296E",ufisht:"\u297E",Ufr:"\u{1D518}",ufr:"\u{1D532}",Ugrave:"\xD9",ugrave:"\xF9",uHar:"\u2963",uharl:"\u21BF",uharr:"\u21BE",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",Umacr:"\u016A",umacr:"\u016B",uml:"\xA8",UnderBar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",UnionPlus:"\u228E",Uogon:"\u0172",uogon:"\u0173",Uopf:"\u{1D54C}",uopf:"\u{1D566}",UpArrow:"\u2191",Uparrow:"\u21D1",uparrow:"\u2191",UpArrowBar:"\u2912",UpArrowDownArrow:"\u21C5",UpDownArrow:"\u2195",Updownarrow:"\u21D5",updownarrow:"\u2195",UpEquilibrium:"\u296E",upharpoonleft:"\u21BF",upharpoonright:"\u21BE",uplus:"\u228E",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",Upsi:"\u03D2",upsi:"\u03C5",upsih:"\u03D2",Upsilon:"\u03A5",upsilon:"\u03C5",UpTee:"\u22A5",UpTeeArrow:"\u21A5",upuparrows:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",Uring:"\u016E",uring:"\u016F",urtri:"\u25F9",Uscr:"\u{1D4B0}",uscr:"\u{1D4CA}",utdot:"\u22F0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25B5",utrif:"\u25B4",uuarr:"\u21C8",Uuml:"\xDC",uuml:"\xFC",uwangle:"\u29A7",vangrt:"\u299C",varepsilon:"\u03F5",varkappa:"\u03F0",varnothing:"\u2205",varphi:"\u03D5",varpi:"\u03D6",varpropto:"\u221D",vArr:"\u21D5",varr:"\u2195",varrho:"\u03F1",varsigma:"\u03C2",varsubsetneq:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vartheta:"\u03D1",vartriangleleft:"\u22B2",vartriangleright:"\u22B3",Vbar:"\u2AEB",vBar:"\u2AE8",vBarv:"\u2AE9",Vcy:"\u0412",vcy:"\u0432",VDash:"\u22AB",Vdash:"\u22A9",vDash:"\u22A8",vdash:"\u22A2",Vdashl:"\u2AE6",Vee:"\u22C1",vee:"\u2228",veebar:"\u22BB",veeeq:"\u225A",vellip:"\u22EE",Verbar:"\u2016",verbar:"|",Vert:"\u2016",vert:"|",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200A",Vfr:"\u{1D519}",vfr:"\u{1D533}",vltri:"\u22B2",vnsub:"\u2282\u20D2",vnsup:"\u2283\u20D2",Vopf:"\u{1D54D}",vopf:"\u{1D567}",vprop:"\u221D",vrtri:"\u22B3",Vscr:"\u{1D4B1}",vscr:"\u{1D4CB}",vsubnE:"\u2ACB\uFE00",vsubne:"\u228A\uFE00",vsupnE:"\u2ACC\uFE00",vsupne:"\u228B\uFE00",Vvdash:"\u22AA",vzigzag:"\u299A",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2A5F",Wedge:"\u22C0",wedge:"\u2227",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\u{1D51A}",wfr:"\u{1D534}",Wopf:"\u{1D54E}",wopf:"\u{1D568}",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\u{1D4B2}",wscr:"\u{1D4CC}",xcap:"\u22C2",xcirc:"\u25EF",xcup:"\u22C3",xdtri:"\u25BD",Xfr:"\u{1D51B}",xfr:"\u{1D535}",xhArr:"\u27FA",xharr:"\u27F7",Xi:"\u039E",xi:"\u03BE",xlArr:"\u27F8",xlarr:"\u27F5",xmap:"\u27FC",xnis:"\u22FB",xodot:"\u2A00",Xopf:"\u{1D54F}",xopf:"\u{1D569}",xoplus:"\u2A01",xotime:"\u2A02",xrArr:"\u27F9",xrarr:"\u27F6",Xscr:"\u{1D4B3}",xscr:"\u{1D4CD}",xsqcup:"\u2A06",xuplus:"\u2A04",xutri:"\u25B3",xvee:"\u22C1",xwedge:"\u22C0",Yacute:"\xDD",yacute:"\xFD",YAcy:"\u042F",yacy:"\u044F",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042B",ycy:"\u044B",yen:"\xA5",Yfr:"\u{1D51C}",yfr:"\u{1D536}",YIcy:"\u0407",yicy:"\u0457",Yopf:"\u{1D550}",yopf:"\u{1D56A}",Yscr:"\u{1D4B4}",yscr:"\u{1D4CE}",YUcy:"\u042E",yucy:"\u044E",Yuml:"\u0178",yuml:"\xFF",Zacute:"\u0179",zacute:"\u017A",Zcaron:"\u017D",zcaron:"\u017E",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017B",zdot:"\u017C",zeetrf:"\u2128",ZeroWidthSpace:"\u200B",Zeta:"\u0396",zeta:"\u03B6",Zfr:"\u2128",zfr:"\u{1D537}",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21DD",Zopf:"\u2124",zopf:"\u{1D56B}",Zscr:"\u{1D4B5}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"});_o.entityMap=_o.HTML_ENTITIES});var Zu=Kt(Ni=>{var So=ur().NAMESPACE,Li=ur().tagNamePattern,pr=0,wt=1,dr=2,vo=3,mr=4,hr=5,yo=6,Wn=7;function gr(t,e){this.message=t,this.locator=e,Error.captureStackTrace&&Error.captureStackTrace(this,gr)}gr.prototype=new Error;gr.prototype.name=gr.name;function Ku(){}Ku.prototype={parse:function(t,e,r){var o=this.domBuilder;o.startDocument(),Vf(e,e={}),Lf(t,e,r,o,this.errorHandler),o.endDocument()}};function Lf(t,e,r,o,n){function s(E){if(E>65535){E-=65536;var F=55296+(E>>10),V=56320+(E&1023);return String.fromCharCode(F,V)}else return String.fromCharCode(E)}function i(E){var F=E.slice(1,-1);return Object.hasOwnProperty.call(r,F)?r[F]:F.charAt(0)==="#"?s(parseInt(F.substr(1).replace("x","0x"))):(n.error("entity not found:"+E),E)}function a(E){if(E>g){var F=t.substring(g,E).replace(/&#?\w+;/g,i);p&&u(g),o.characters(F,0,E-g),g=E}}function u(E,F){for(;E>=c&&(F=f.exec(t));)l=F.index,c=l+F[0].length,p.lineNumber++;p.columnNumber=E-l+1}for(var l=0,c=0,f=/.*(?:\r\n?|\n)|.*$/g,p=o.locator,d=[{currentNSMap:e}],x={},g=0;;){try{var h=t.indexOf("<",g);if(h<0){if(!t.substr(g).match(/^\s*$/)){var v=o.doc,_=v.createTextNode(t.substr(g));v.appendChild(_),o.currentElement=_}return}switch(h>g&&a(h),t.charAt(h+1)){case"/":var B=t.indexOf(">",h+3),b=t.substring(h+2,B).replace(/^([\s\S]*?[^ \t\n\r])?[ \t\n\r]*$/,"$1"),y=d.pop();B<0?(b=t.substring(h+2).replace(/[\s<].*/,""),n.error("end tag name: "+b+" is not complete:"+y.tagName),B=h+1+b.length):b.match(/\s</)?(b=b.replace(/[\s<].*/,""),n.error("end tag name: "+b+" maybe not complete"),B=h+1+b.length):/[ \t\n\r]/.test(b)&&Li.test(b.split(/[ \t\n\r]/)[0])&&n.error('end tag name is followed by whitespace and trailing content: "'+b+'"');var S=y.localNSMap,C=y.tagName==b,T=C||y.tagName&&y.tagName.toLowerCase()==b.toLowerCase();if(T){if(o.endElement(y.uri,y.localName,b),S)for(var P in S)Object.prototype.hasOwnProperty.call(S,P)&&o.endPrefixMapping(P);C||n.fatalError("end tag name: "+b+" is not match the current start tagName:"+y.tagName)}else d.push(y);B++;break;case"?":p&&u(h),B=Wf(t,h,o);break;case"!":p&&u(h),B=Xf(t,h,o,n);break;default:p&&u(h);var A=new Qu,k=d[d.length-1].currentNSMap,B=Nf(t,h,A,k,i,n),re=A.length;if(!A.closed&&Hf(t,B,A.tagName,x)&&(A.closed=!0,r.nbsp||n.warning("unclosed xml attribute")),p&&re){for(var ge=Yu(p,{}),j=0;j<re;j++){var H=A[j];u(H.offset),H.locator=Yu(p,{})}o.locator=ge,ju(A,o,k)&&d.push(A),o.locator=p}else ju(A,o,k)&&d.push(A);So.isHTML(A.uri)&&!A.closed?B=kf(t,B,A.tagName,i,o):B++}}catch(E){if(E instanceof gr)throw E;n.error("element parse error: "+E),B=-1}B>g?g=B:a(Math.max(h,g)+1)}}function Yu(t,e){return e.lineNumber=t.lineNumber,e.columnNumber=t.columnNumber,e}function Nf(t,e,r,o,n,s){function i(d,x,g){r.attributeNames.hasOwnProperty(d)&&s.fatalError("Attribute "+d+" redefined"),r.addValue(d,x.replace(/[\t\n\r]/g," ").replace(/&#?\w+;/g,n),g)}for(var a,u,l=++e,c=pr;;){var f=t.charAt(l);if(c===pr&&f==="<")throw new Error("unexpected < in tag name: "+t.slice(e,l));switch(f){case"=":if(c===wt)a=t.slice(e,l),c=vo;else if(c===dr)c=vo;else throw new Error("attribute equal must after attrName");break;case"'":case'"':if(c===vo||c===wt)if(c===wt&&(s.warning('attribute value must after "="'),a=t.slice(e,l)),e=l+1,l=t.indexOf(f,e),l>0)u=t.slice(e,l),i(a,u,e-1),c=hr;else throw new Error("attribute value no end '"+f+"' match");else if(c==mr)u=t.slice(e,l),i(a,u,e),s.warning('attribute "'+a+'" missed start quot('+f+")!!"),e=l+1,c=hr;else throw new Error('attribute value must after "="');break;case"/":switch(c){case pr:r.setTagName(t.slice(e,l));case hr:case yo:case Wn:c=Wn,r.closed=!0;case mr:case wt:break;case dr:r.closed=!0;break;default:throw new Error("attribute invalid close char('/')")}break;case"":return s.error("unexpected end of input"),c==pr&&r.setTagName(t.slice(e,l)),l;case">":switch(c){case pr:r.setTagName(t.slice(e,l));case hr:case yo:case Wn:break;case mr:case wt:u=t.slice(e,l),u.slice(-1)==="/"&&(r.closed=!0,u=u.slice(0,-1));case dr:c===dr&&(u=a),c==mr?(s.warning('attribute "'+u+'" missed quot(")!'),i(a,u,e)):((!So.isHTML(o[""])||!u.match(/^(?:disabled|checked|selected)$/i))&&s.warning('attribute "'+u+'" missed value!! "'+u+'" instead!!'),i(u,u,e));break;case vo:throw new Error("attribute value missed!!")}return l;case"\x80":f=" ";default:if(f<=" ")switch(c){case pr:r.setTagName(t.slice(e,l)),c=yo;break;case wt:a=t.slice(e,l),c=dr;break;case mr:var u=t.slice(e,l);s.warning('attribute "'+u+'" missed quot(")!!'),i(a,u,e);case hr:c=yo;break}else switch(c){case dr:var p=r.tagName;(!So.isHTML(o[""])||!a.match(/^(?:disabled|checked|selected)$/i))&&s.warning('attribute "'+a+'" missed value!! "'+a+'" instead2!!'),i(a,a,e),e=l,c=wt;break;case hr:s.warning('attribute space is required"'+a+'"!!');case yo:c=wt,e=l;break;case vo:c=mr,e=l;break;case Wn:throw new Error("elements closed character '/' and '>' must be connected to")}}l++}}function ju(t,e,r){for(var o=t.tagName,n=null,f=t.length;f--;){var s=t[f],i=s.qName,a=s.value,p=i.indexOf(":");if(p>0)var u=s.prefix=i.slice(0,p),l=i.slice(p+1),c=u==="xmlns"&&l;else l=i,u=null,c=i==="xmlns"&&"";s.localName=l,c!==!1&&(n==null&&(n={},r=Object.create(r)),r[c]=n[c]=a,s.uri=So.XMLNS,e.startPrefixMapping(c,a))}for(var f=t.length;f--;){s=t[f];var u=s.prefix;u&&(u==="xml"&&(s.uri=So.XML),u!=="xmlns"&&(s.uri=r[u||""]))}var p=o.indexOf(":");p>0?(u=t.prefix=o.slice(0,p),l=t.localName=o.slice(p+1)):(u=null,l=t.localName=o);var d=t.uri=r[u||""];if(e.startElement(d,l,o,t),t.closed){if(e.endElement(d,l,o),n)for(u in n)Object.prototype.hasOwnProperty.call(n,u)&&e.endPrefixMapping(u)}else return t.currentNSMap=r,t.localNSMap=n,!0}function kf(t,e,r,o,n){if(/^(?:script|textarea)$/i.test(r)){var s=t.indexOf("</"+r+">",e),i=t.substring(e+1,s);if(/[&<]/.test(i))return/^script$/i.test(r)?(n.characters(i,0,i.length),s):(i=i.replace(/&#?\w+;/g,o),n.characters(i,0,i.length),s)}return e+1}function Hf(t,e,r,o){var n=o[r];return n==null&&(n=t.lastIndexOf("</"+r+">"),n<e&&(n=t.lastIndexOf("</"+r)),o[r]=n),n<e}function Vf(t,e){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}function Xf(t,e,r,o){var n=t.charAt(e+2);switch(n){case"-":if(t.charAt(e+3)==="-"){var s=t.indexOf("-->",e+4);return s>e?(r.comment(t,e+4,s-e-4),s+3):(o.error("Unclosed comment"),-1)}else return-1;default:if(t.substr(e+3,6)=="CDATA["){var s=t.indexOf("]]>",e+9);return r.startCDATA(),r.characters(t,e+9,s-e-9),r.endCDATA(),s+3}var i=zf(t,e),a=i.length;if(a>1&&/!doctype/i.test(i[0][0])){var u=i[1][0],l=!1,c=!1;a>3&&(/^public$/i.test(i[2][0])?(l=i[3][0],c=a>4&&i[4][0]):/^system$/i.test(i[2][0])&&(c=i[3][0]));var f=i[a-1];return r.startDTD(u,l,c),r.endDTD(),f.index+f[0].length}}return-1}function Wf(t,e,r){var o=t.indexOf("?>",e);if(o){var n=t.substring(e,o).match(/^<\?(\S*)\s*([\s\S]*?)$/);if(n){var s=n[0].length;return r.processingInstruction(n[1],n[2]),o+2}else return-1}return-1}function Qu(){this.attributeNames={}}Qu.prototype={setTagName:function(t){if(!Li.test(t))throw new Error("invalid tagName:"+t);this.tagName=t},addValue:function(t,e,r){if(!Li.test(t))throw new Error("invalid attribute:"+t);this.attributeNames[t]=this.length,this[this.length++]={qName:t,value:e,offset:r}},length:0,getLocalName:function(t){return this[t].localName},getLocator:function(t){return this[t].locator},getQName:function(t){return this[t].qName},getURI:function(t){return this[t].uri},getValue:function(t){return this[t].value}};function zf(t,e){var r,o=[],n=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(n.lastIndex=e,n.exec(t);r=n.exec(t);)if(o.push(r),r[1])return o}Ni.XMLReader=Ku;Ni.ParseError=gr});var sl=Kt($n=>{var $f=ur(),qf=Ii(),Ju=qu(),rl=Zu(),Yf=qf.DOMImplementation,el=$f.NAMESPACE,jf=rl.ParseError,Kf=rl.XMLReader;function ol(t){return t.replace(/\r[\n\u0085]/g,`
`).replace(/[\r\u0085\u2028]/g,`
`)}function nl(t){this.options=t||{locator:{}}}nl.prototype.parseFromString=function(t,e){var r=this.options,o=new Kf,n=r.domBuilder||new Ao,s=r.errorHandler,i=r.locator,a=r.xmlns||{},u=/\/x?html?$/.test(e),l=u?Ju.HTML_ENTITIES:Ju.XML_ENTITIES;i&&n.setDocumentLocator(i),o.errorHandler=Qf(s,n,i),o.domBuilder=r.domBuilder||n,u&&(a[""]=el.HTML),a.xml=a.xml||el.XML;var c=r.normalizeLineEndings||ol;return t&&typeof t=="string"?o.parse(c(t),a,l):o.errorHandler.error("invalid doc source"),n.doc};function Qf(t,e,r){if(!t){if(e instanceof Ao)return e;t=e}var o={},n=t instanceof Function;r=r||{};function s(i){var a=t[i];!a&&n&&(a=t.length==2?function(u){t(i,u)}:t),o[i]=a&&function(u){a("[xmldom "+i+"]	"+u+ki(r))}||function(){}}return s("warning"),s("error"),s("fatalError"),o}function Ao(){this.cdata=!1}function xr(t,e){e.lineNumber=t.lineNumber,e.columnNumber=t.columnNumber}Ao.prototype={startDocument:function(){this.doc=new Yf().createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(t,e,r,o){var n=this.doc,s=n.createElementNS(t,r||e),i=o.length;zn(this,s),this.currentElement=s,this.locator&&xr(this.locator,s);for(var a=0;a<i;a++){var t=o.getURI(a),u=o.getValue(a),r=o.getQName(a),l=n.createAttributeNS(t,r);this.locator&&xr(o.getLocator(a),l),l.value=l.nodeValue=u,s.setAttributeNode(l)}},endElement:function(t,e,r){var o=this.currentElement,n=o.tagName;this.currentElement=o.parentNode},startPrefixMapping:function(t,e){},endPrefixMapping:function(t){},processingInstruction:function(t,e){var r=this.doc.createProcessingInstruction(t,e);this.locator&&xr(this.locator,r),zn(this,r)},ignorableWhitespace:function(t,e,r){},characters:function(t,e,r){if(t=tl.apply(this,arguments),t){if(this.cdata)var o=this.doc.createCDATASection(t);else var o=this.doc.createTextNode(t);this.currentElement?this.currentElement.appendChild(o):/^\s*$/.test(t)&&this.doc.appendChild(o),this.locator&&xr(this.locator,o)}},skippedEntity:function(t){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(t){(this.locator=t)&&(t.lineNumber=0)},comment:function(t,e,r){t=tl.apply(this,arguments);var o=this.doc.createComment(t);this.locator&&xr(this.locator,o),zn(this,o)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(t,e,r){var o=this.doc.implementation;if(o&&o.createDocumentType){var n=o.createDocumentType(t,e,r);this.locator&&xr(this.locator,n),zn(this,n),this.doc.doctype=n}},warning:function(t){console.warn("[xmldom warning]	"+t,ki(this.locator))},error:function(t){console.error("[xmldom error]	"+t,ki(this.locator))},fatalError:function(t){throw new jf(t,this.locator)}};function ki(t){if(t)return`
@`+(t.systemId||"")+"#[line:"+t.lineNumber+",col:"+t.columnNumber+"]"}function tl(t,e,r){return typeof t=="string"?t.substr(e,r):t.length>=e+r||e?new java.lang.String(t,e,r)+"":t}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(t){Ao.prototype[t]=function(){return null}});function zn(t,e){t.currentElement?t.currentElement.appendChild(e):t.doc.appendChild(e)}$n.__DOMHandler=Ao;$n.normalizeLineEndings=ol;$n.DOMParser=nl});var al=Kt(qn=>{var il=Ii();qn.DOMImplementation=il.DOMImplementation;qn.XMLSerializer=il.XMLSerializer;qn.DOMParser=sl().DOMParser});var Qa={extension:{type:m.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./browserAll-VLPQZUEN.mjs")}};var Za={extension:{type:m.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./webworkerAll-W5GAEFNI.mjs")}};var Hs=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uBlend;

uniform sampler2D uTexture;
uniform sampler2D uBackTexture;

{FUNCTIONS}

void main()
{ 
    vec4 back = texture(uBackTexture, vTextureCoord);
    vec4 front = texture(uTexture, vTextureCoord);
    float blendedAlpha = front.a + back.a * (1.0 - front.a);
    
    {MAIN}
}
`;var Vs=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 backgroundUv;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;var Xs=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlendUniforms {
  uBlend:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(0) @binding(3) var uBackTexture: texture_2d<f32>;

@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

{FUNCTIONS}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {


   var back =  textureSample(uBackTexture, uSampler, uv);
   var front = textureSample(uTexture, uSampler, uv);
   var blendedAlpha = front.a + back.a * (1.0 - front.a);
   
   var out = vec4<f32>(0.0,0.0,0.0,0.0);

   {MAIN}

   return out;
}`;var R=class extends ye{constructor(e){let r=e.gpu,o=Ja({source:Xs,...r}),n=ve.from({vertex:{source:o,entryPoint:"mainVertex"},fragment:{source:o,entryPoint:"mainFragment"}}),s=e.gl,i=Ja({source:Hs,...s}),a=_e.from({vertex:Vs,fragment:i}),u=new se({uBlend:{value:1,type:"f32"}});super({gpuProgram:n,glProgram:a,blendRequired:!0,resources:{blendUniforms:u,uBackTexture:M.EMPTY}})}};function Ja(t){let{source:e,functions:r,main:o}=t;return e.replace("{FUNCTIONS}",r).replace("{MAIN}",o)}var Lt=`
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `;var Nt=`
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;var Qo=class extends R{constructor(){super({gl:{functions:`
                ${Lt}

                vec3 blendColor(vec3 base, vec3 blend,  float opacity)
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendColor(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                ${Nt}

                fn blendColorOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendColorOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};Qo.extension={name:"color",type:m.BlendMode};var Zo=class extends R{constructor(){super({gl:{functions:`
                float colorBurn(float base, float blend)
                {
                    return max((1.0 - ((1.0 - base) / blend)), 0.0);
                }

                vec3 blendColorBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendColorBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn blendColorBurn(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendColorBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};Zo.extension={name:"color-burn",type:m.BlendMode};var Jo=class extends R{constructor(){super({gl:{functions:`
                float colorDodge(float base, float blend)
                {
                    return base / (1.0 - blend);
                }

                vec3 blendColorDodge(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendColorDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return base / (1.0 - blend);
                }

                fn blendColorDodge(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                    out = vec4<f32>(blendColorDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};Jo.extension={name:"color-dodge",type:m.BlendMode};var en=class extends R{constructor(){super({gl:{functions:`
                vec3 blendDarken(vec3 base, vec3 blend, float opacity)
                {
                    return (min(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendDarken(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn blendDarken(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (min(blend,base) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendDarken(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};en.extension={name:"darken",type:m.BlendMode};var tn=class extends R{constructor(){super({gl:{functions:`
                vec3 blendDifference(vec3 base, vec3 blend,  float opacity)
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendDifference(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn blendDifference(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendDifference(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};tn.extension={name:"difference",type:m.BlendMode};var rn=class extends R{constructor(){super({gl:{functions:`
                float divide(float base, float blend)
                {
                    return (blend > 0.0) ? clamp(base / blend, 0.0, 1.0) : 1.0;
                }

                vec3 blendDivide(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendDivide(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn divide(base: f32, blend: f32) -> f32
                {
                    return select(1.0, clamp(base / blend, 0.0, 1.0), blend > 0.0);
                }

                fn blendDivide(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendDivide(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};rn.extension={name:"divide",type:m.BlendMode};var on=class extends R{constructor(){super({gl:{functions:`
                vec3 exclusion(vec3 base, vec3 blend)
                {
                    return base + blend - 2.0 * base * blend;
                }

                vec3 blendExclusion(vec3 base, vec3 blend, float opacity)
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendExclusion(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn exclusion(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return base+blend-2.0*base*blend;
                }

                fn blendExclusion(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendExclusion(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};on.extension={name:"exclusion",type:m.BlendMode};var nn=class extends R{constructor(){super({gl:{functions:`
                float hardLight(float base, float blend)
                {
                    return (blend < 0.5) ? 2.0 * base * blend : 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
                }

                vec3 blendHardLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendHardLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn hardLight(base: f32, blend: f32) -> f32
                {
                    return select(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, blend < 0.5);
                }

                fn blendHardLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendHardLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};nn.extension={name:"hard-light",type:m.BlendMode};var sn=class extends R{constructor(){super({gl:{functions:`
                float hardMix(float base, float blend)
                {
                    return (base + blend >= 1.0) ? 1.0 : 0.0;
                }

                vec3 blendHardMix(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blended = vec3(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendHardMix(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn hardMix(base: f32, blend: f32) -> f32
                {
                    return select(0.0, 1.0, base + blend >= 1.0);
                }

                fn blendHardMix(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendHardMix(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};sn.extension={name:"hard-mix",type:m.BlendMode};var an=class extends R{constructor(){super({gl:{functions:`
                vec3 blendLighten(vec3 base, vec3 blend, float opacity)
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendLighten(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn blendLighten(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLighten(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};an.extension={name:"lighten",type:m.BlendMode};var un=class extends R{constructor(){super({gl:{functions:`
                float linearBurn(float base, float blend)
                {
                    return max(0.0, base + blend - 1.0);
                }

                vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendLinearBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn blendLinearBurn(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendLinearBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};un.extension={name:"linear-burn",type:m.BlendMode};var ln=class extends R{constructor(){super({gl:{functions:`
                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendLinearDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1, base + blend);
                }

                fn blendLinearDodge(base:vec3<f32>, blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLinearDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};ln.extension={name:"linear-dodge",type:m.BlendMode};var cn=class extends R{constructor(){super({gl:{functions:`
                float linearBurn(float base, float blend) {
                    return max(0.0, base + blend - 1.0);
                }

                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                float linearLight(float base, float blend) {
                    return (blend <= 0.5) ? linearBurn(base,2.0*blend) : linearBurn(base,2.0*(blend-0.5));
                }

                vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendLinearLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base + blend);
                }

                fn linearLight(base: f32, blend: f32) -> f32
                {
                    return select(linearBurn(base,2.0*(blend-0.5)), linearBurn(base,2.0*blend), blend <= 0.5);
                }

                fn blendLinearLightOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLinearLightOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};cn.extension={name:"linear-light",type:m.BlendMode};var fn=class extends R{constructor(){super({gl:{functions:`
                ${Lt}

                vec3 blendLuminosity(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendLuminosity = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendLuminosity(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                ${Nt}

                fn blendLuminosity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendLuminosity: vec3<f32> = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLuminosity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};fn.extension={name:"luminosity",type:m.BlendMode};var pn=class extends R{constructor(){super({gl:{functions:`
                vec3 negation(vec3 base, vec3 blend)
                {
                    return 1.0-abs(1.0-base-blend);
                }

                vec3 blendNegation(vec3 base, vec3 blend, float opacity)
                {
                    return (negation(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendNegation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn blendNegation(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return 1.0-abs(1.0-base-blend);
                }

                fn blendNegationOpacity(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendNegationOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};pn.extension={name:"negation",type:m.BlendMode};var dn=class extends R{constructor(){super({gl:{functions:`
                float overlay(float base, float blend)
                {
                    return (base < 0.5) ? (2.0*base*blend) : (1.0-2.0*(1.0-base)*(1.0-blend));
                }

                vec3 blendOverlay(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendOverlay(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn overlay(base: f32, blend: f32) -> f32
                {
                    return select((1.0-2.0*(1.0-base)*(1.0-blend)), (2.0*base*blend), base < 0.5);
                }

                fn blendOverlay(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendOverlay(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};dn.extension={name:"overlay",type:m.BlendMode};var mn=class extends R{constructor(){super({gl:{functions:`
                float pinLight(float base, float blend)
                {
                    return (blend <= 0.5) ? min(base, 2.0 * blend) : max(base, 2.0 * (blend - 0.5));
                }

                vec3 blendPinLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn pinLight(base: f32, blend: f32) -> f32
                {
                    return select(max(base,2.0*(blend-0.5)), min(base,2.0*blend), blend <= 0.5);
                }

                fn blendPinLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};mn.extension={name:"pin-light",type:m.BlendMode};var hn=class extends R{constructor(){super({gl:{functions:`
                ${Lt}

                vec3 blendSaturation(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                ${Nt}

                fn blendSaturation(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};hn.extension={name:"saturation",type:m.BlendMode};var gn=class extends R{constructor(){super({gl:{functions:`
                float softLight(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend));
                }

                vec3 blendSoftLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn softLight(base: f32, blend: f32) -> f32
                {
                    return select(2.0 * base * blend + base * base * (1.0 - 2.0 * blend), sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), blend < 0.5);
                }

                fn blendSoftLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};gn.extension={name:"soft-light",type:m.BlendMode};var xn=class extends R{constructor(){super({gl:{functions:`
                float subtract(float base, float blend)
                {
                    return max(0.0, base - blend);
                }

                vec3 blendSubtract(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn subtract(base: f32, blend: f32) -> f32
                {
                    return max(0, base - blend);
                }

                fn blendSubtract(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};xn.extension={name:"subtract",type:m.BlendMode};var bn=class extends R{constructor(){super({gl:{functions:`
                float colorBurn(float base, float blend)
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                float colorDodge(float base, float blend)
                {
                    return min(1.0, base / (1.0-blend));
                }

                float vividLight(float base, float blend)
                {
                    return (blend < 0.5) ? colorBurn(base,(2.0*blend)) : colorDodge(base,(2.0*(blend-0.5)));
                }

                vec3 blendVividLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendVividLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base / (1.0-blend));
                }

                fn vividLight(base: f32, blend: f32) -> f32
                {
                    return select(colorDodge(base,(2.0*(blend-0.5))), colorBurn(base,(2.0*blend)), blend<0.5);
                }

                fn blendVividLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendVividLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};bn.extension={name:"vivid-light",type:m.BlendMode};var _n;function st(t){return _n!==void 0||(_n=(()=>{let e={stencil:!0,failIfMajorPerformanceCaveat:t??Vr.defaultOptions.failIfMajorPerformanceCaveat};try{if(!I.get().getWebGLRenderingContext())return!1;let o=I.get().createCanvas().getContext("webgl",e),n=!!o?.getContextAttributes()?.stencil;if(o){let s=o.getExtension("WEBGL_lose_context");s&&s.loseContext()}return o=null,n}catch{return!1}})()),_n}var vn;async function it(t={}){return vn!==void 0||(vn=await(async()=>{let e=I.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),vn}var eu=["webgl","webgpu","canvas"];async function Ws(t){let e=[];t.preference?Array.isArray(t.preference)?e=t.preference.slice():(e.push(t.preference),eu.forEach(s=>{s!==t.preference&&e.push(s)})):e=eu.slice();let r,o={};for(let s=0;s<e.length;s++){let i=e[s];if(i==="webgpu"&&await it()){let{WebGPURenderer:a}=await import("./WebGPURenderer-4PGPCBAU.mjs");r=a,o={...t,...t.webgpu};break}else if(i==="webgl"&&st(t.failIfMajorPerformanceCaveat??Vr.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:a}=await import("./WebGLRenderer-TRHSQ3VK.mjs");r=a,o={...t,...t.webgl};break}else if(i==="canvas"){let{CanvasRenderer:a}=await import("./CanvasRenderer-RFJBE7TM.mjs");r=a,o={...t,...t.canvasOptions};break}}if(delete o.webgpu,delete o.webgl,delete o.canvasOptions,!r)throw new Error("No available renderer for the current environment");let n=new r;return await n.init(o),n}var tr=class{static init(e){Object.defineProperty(this,"resizeTo",{configurable:!0,set(r){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=r,r&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let r,o;if(this._resizeTo===globalThis.window)r=globalThis.innerWidth,o=globalThis.innerHeight;else{let{clientWidth:n,clientHeight:s}=this._resizeTo;r=n,o=s}this.renderer.resize(r,o),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};tr.extension=m.Application;var rr=class{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{configurable:!0,set(r){this._ticker&&this._ticker.remove(this.render,this),this._ticker=r,r&&r.add(this.render,this,vt.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?Ve.shared:new Ve,e.autoStart&&this.start()}static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null,e.destroy()}}};rr.extension=m.Application;G.add(tr);G.add(rr);var tu=class zs{constructor(...e){this.stage=new Z,e[0]!==void 0&&U(X,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.stage||(this.stage=new Z),this.renderer=await Ws(e),zs._plugins.forEach(r=>{r.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return U(X,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,r=!1){let o=zs._plugins.slice(0);o.reverse(),o.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(r),this.stage=null,this.renderer.destroy(e),this.renderer=null}};tu._plugins=[];var ru=tu;G.handleByList(m.Application,ru._plugins);G.add(Ps);var Kr={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let e=t.match(/^[a-z]+\s+.+$/gm),r={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let f in e){let p=e[f].match(/^[a-z]+/gm)[0],d=e[f].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),x={};for(let g in d){let h=d[g].split("="),v=h[0],_=h[1].replace(/"/gm,""),b=parseFloat(_),y=isNaN(b)?_:b;x[v]=y}r[p].push(x)}let o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=r.info,[s]=r.common,[i]=r.distanceField??[];i&&(o.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),o.fontSize=parseInt(n.size,10),o.fontFamily=n.face,o.lineHeight=parseInt(s.lineHeight,10);let a=r.page;for(let f=0;f<a.length;f++)o.pages.push({id:parseInt(a[f].id,10)||0,file:a[f].file});let u={};o.baseLineOffset=s.base===void 0?0:o.lineHeight-parseInt(s.base,10);let l=r.char;for(let f=0;f<l.length;f++){let p=l[f],d=parseInt(p.id,10),x=p.letter??p.char??String.fromCharCode(d);x==="space"&&(x=" "),u[d]=x,o.chars[x]={id:d,page:parseInt(p.page,10)||0,x:parseInt(p.x,10),y:parseInt(p.y,10),width:parseInt(p.width,10),height:parseInt(p.height,10),xOffset:parseInt(p.xoffset,10),yOffset:parseInt(p.yoffset,10),xAdvance:parseInt(p.xadvance,10),kerning:{}}}let c=r.kerning||[];for(let f=0;f<c.length;f++){let p=parseInt(c[f].first,10),d=parseInt(c[f].second,10),x=parseInt(c[f].amount,10);o.chars[u[d]]&&(o.chars[u[d]].kerning[u[p]]=x)}return o}};var yn={test(t){let e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},r=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],n=t.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});let s=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),a=t.getElementsByTagName("kerning");e.fontSize=parseInt(r.getAttribute("size"),10),e.fontFamily=r.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let c=0;c<s.length;c++)e.pages.push({id:parseInt(s[c].getAttribute("id"),10)||0,file:s[c].getAttribute("file")});let u={},l=o.getAttribute("base");e.baseLineOffset=l===null?0:e.lineHeight-parseInt(l,10);for(let c=0;c<i.length;c++){let f=i[c],p=parseInt(f.getAttribute("id"),10),d=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(p);d==="space"&&(d=" "),u[p]=d,e.chars[d]={id:p,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let c=0;c<a.length;c++){let f=parseInt(a[c].getAttribute("first"),10),p=parseInt(a[c].getAttribute("second"),10),d=parseInt(a[c].getAttribute("amount"),10);e.chars[u[p]]&&(e.chars[u[p]].kerning[u[f]]=d)}return e}};var Sn={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?yn.test(I.get().parseXML(t)):!1},parse(t){return yn.parse(I.get().parseXML(t))}};var ac=[".xml",".fnt"],$s={extension:{type:m.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,e){let r={};return t.forEach(o=>{r[o]=e,r[`${o}-bitmap`]=e}),r[`${e.fontFamily}-bitmap`]=e,r}},qs={extension:{type:m.LoadParser,priority:oe.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return ac.includes(Oe.extname(t).toLowerCase())},async testParse(t){return Kr.test(t)||Sn.test(t)},async parse(t,e,r){let o=Kr.test(t)?Kr.parse(t):Sn.parse(t),{src:n}=e,{pages:s}=o,i=[],a=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let p=0;p<s.length;++p){let d=s[p].file,x=Oe.join(Oe.dirname(n),d);x=_s(x,n),i.push({src:x,data:a})}let[u,{BitmapFont:l}]=await Promise.all([r.load(i),import("./BitmapFont-BTTRFB4B.mjs")]),c=i.map(p=>u[p.src]);return new l({data:o,textures:c},n)},async load(t,e){return await(await I.get().fetch(t)).text()},async unload(t,e,r){await Promise.all(t.pages.map(o=>r.unload(o.texture.source._sourceOrigin))),t.destroy()}};var Qr=class{constructor(e,r=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=r}add(e){e.forEach(r=>{this._assetList.push(r)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let e=[],r=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<r;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}};var Ys={extension:{type:m.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof M),getCacheableAssets:(t,e)=>{let r={};return t.forEach(o=>{e.forEach((n,s)=>{r[o+(s===0?"":s+1)]=n})}),r}};async function Zr(t){if("Image"in globalThis)return new Promise(e=>{let r=new Image;r.onload=()=>{e(!0)},r.onerror=()=>{e(!1)},r.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}var js={extension:{type:m.DetectionParser,priority:1},test:async()=>Zr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")};var ou=["png","jpg","jpeg"],Ks={extension:{type:m.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...ou],remove:async t=>t.filter(e=>!ou.includes(e))};var uc="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function at(t){return uc?!1:document.createElement("video").canPlayType(t)!==""}var Qs={extension:{type:m.DetectionParser,priority:0},test:async()=>at("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")};var Zs={extension:{type:m.DetectionParser,priority:0},test:async()=>at("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")};var Js={extension:{type:m.DetectionParser,priority:0},test:async()=>at("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")};var ei={extension:{type:m.DetectionParser,priority:0},test:async()=>Zr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};var nu=class An{constructor(){this.loadOptions={...An.defaultOptions},this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,r,o)=>(this._parsersValidated=!1,e[r]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,r){let o={promise:null,parser:null};return o.promise=(async()=>{let n=null,s=null;if((r.parser||r.loadParser)&&(s=this._parserHash[r.parser||r.loadParser],r.loadParser&&q(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),s||q(`[Assets] specified load parser "${r.parser||r.loadParser}" not found while loading ${e}`)),!s){for(let i=0;i<this.parsers.length;i++){let a=this.parsers[i];if(a.load&&a.test?.(e,r,this)){s=a;break}}if(!s)return q(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await s.load(e,r,this),o.parser=s;for(let i=0;i<this.parsers.length;i++){let a=this.parsers[i];a.parse&&a.parse&&await a.testParse?.(n,r,this)&&(n=await a.parse(n,r,this)||n,o.parser=a)}return n})(),o}async load(e,r){this._parsersValidated||this._validateParsers();let o=typeof r=="function"?{...An.defaultOptions,...this.loadOptions,onProgress:r}:{...An.defaultOptions,...this.loadOptions,...r||{}},{onProgress:n,onError:s,strategy:i,retryCount:a,retryDelay:u}=o,l=0,c={},f=Lr(e),p=yt(e,g=>({alias:[g],src:g,data:{}})),d=p.reduce((g,h)=>g+(h.progressSize||1),0),x=p.map(async g=>{let h=Oe.toAbsolute(g.src);c[g.src]||(await this._loadAssetWithRetry(h,g,{onProgress:n,onError:s,strategy:i,retryCount:a,retryDelay:u},c),l+=g.progressSize||1,n&&n(l/d))});return await Promise.all(x),f?c[p[0].src]:c}async unload(e){let o=yt(e,n=>({alias:[n],src:n})).map(async n=>{let s=Oe.toAbsolute(n.src),i=this.promiseCache[s];if(i){let a=await i.promise;delete this.promiseCache[s],await i.parser?.unload?.(a,n,this)}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,r)=>(!r.name&&!r.id?q("[Assets] parser should have an id"):(e[r.name]||e[r.id])&&q(`[Assets] parser id conflict "${r.id}"`),e[r.name]=r,r.id&&(e[r.id]=r),e),{})}async _loadAssetWithRetry(e,r,o,n){let s=0,{onError:i,strategy:a,retryCount:u,retryDelay:l}=o,c=f=>new Promise(p=>setTimeout(p,f));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,r)),n[r.src]=await this.promiseCache[e].promise;return}catch(f){delete this.promiseCache[e],delete n[r.src],s++;let p=a!=="retry"||s>u;if(a==="retry"&&!p){i&&i(f,r),await c(l);continue}if(a==="skip"){i&&i(f,r);return}i&&i(f,r);let d=new Error(`[Loader.load] Failed to load ${e}.
${f}`);throw f instanceof Error&&f.stack&&(d.stack=f.stack),d}}};nu.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250};var ti=nu;function Le(t,e){if(Array.isArray(e)){for(let r of e)if(t.startsWith(`data:${r}`))return!0;return!1}return t.startsWith(`data:${e}`)}function J(t,e){let r=t.split("?")[0],o=Oe.extname(r).toLowerCase();return Array.isArray(e)?e.includes(o):o===e}var lc=".json",cc="application/json",ri={extension:{type:m.LoadParser,priority:oe.Low},name:"loadJson",id:"json",test(t){return Le(t,cc)||J(t,lc)},async load(t){return await(await I.get().fetch(t)).json()}};var fc=".txt",pc="text/plain",oi={name:"loadTxt",id:"text",extension:{type:m.LoadParser,priority:oe.Low,name:"loadTxt"},test(t){return Le(t,pc)||J(t,fc)},async load(t){return await(await I.get().fetch(t)).text()}};var dc=["normal","bold","100","200","300","400","500","600","700","800","900"],mc=[".ttf",".otf",".woff",".woff2"],hc=["font/ttf","font/otf","font/woff","font/woff2"],gc=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function su(t){let e=Oe.extname(t),n=Oe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1)),s=n.length>0;for(let a of n)if(!a.match(gc)){s=!1;break}let i=n.join(" ");return s||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}var xc=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function bc(t){return xc.test(t)?t:encodeURI(t)}var ni={extension:{type:m.LoadParser,priority:oe.Low},name:"loadWebFont",id:"web-font",test(t){return Le(t,hc)||J(t,mc)},async load(t,e){let r=I.get().getFontFaceSet();if(r){let o=[],n=e.data?.family??su(t),s=e.data?.weights?.filter(a=>dc.includes(a))??["normal"],i=e.data??{};for(let a=0;a<s.length;a++){let u=s[a],l=new FontFace(n,`url('${bc(t)}')`,{...i,weight:u});await l.load(),r.add(l),o.push(l)}return z.has(`${n}-and-url`)?z.get(`${n}-and-url`).entries.push({url:t,faces:o}):z.set(`${n}-and-url`,{entries:[{url:t,faces:o}]}),o.length===1?o[0]:o}return q("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let e=Array.isArray(t)?t:[t],r=e[0].family,o=z.get(`${r}-and-url`),n=o.entries.find(s=>s.faces.some(i=>e.indexOf(i)!==-1));n.faces=n.faces.filter(s=>e.indexOf(s)===-1),n.faces.length===0&&(o.entries=o.entries.filter(s=>s!==n)),e.forEach(s=>{I.get().getFontFaceSet().delete(s)}),o.entries.length===0&&z.remove(`${r}-and-url`)}};function Se(t,e=1){let r=We.RETINA_PREFIX?.exec(t);return r?parseFloat(r[1]):e}function Ae(t,e,r){t.label=r,t._sourceOrigin=r;let o=new M({source:t,label:r}),n=()=>{delete e.promiseCache[r],z.has(r)&&z.remove(r)};return o.source.once("destroy",()=>{e.promiseCache[r]&&(q("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),o.once("destroy",()=>{t.destroyed||(q("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),o}var _c=".svg",vc="image/svg+xml",si={extension:{type:m.LoadParser,priority:oe.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Le(t,vc)||J(t,_c)},async load(t,e,r){return e.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Sc(t):yc(t,e,r,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function yc(t,e,r,o){let n=await I.get().fetch(t),s=I.get().createImage();s.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await n.text())}`,s.crossOrigin=o,await s.decode();let i=e.data?.width??s.width,a=e.data?.height??s.height,u=e.data?.resolution||Se(t),l=Math.ceil(i*u),c=Math.ceil(a*u),f=I.get().createCanvas(l,c),p=f.getContext("2d");p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.drawImage(s,0,0,i*u,a*u);let{parseAsGraphicsContext:d,...x}=e.data??{},g=new Nr({resource:f,alphaMode:"premultiply-alpha-on-upload",resolution:u,...x});return Ae(g,r,t)}async function Sc(t){let r=await(await I.get().fetch(t)).text(),o=new nt;return o.svg(r),o}var Ac=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function") return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`,or=null,nr=class{constructor(){or||(or=URL.createObjectURL(new Blob([Ac],{type:"application/javascript"}))),this.worker=new Worker(or)}};nr.revokeObjectURL=function(){or&&(URL.revokeObjectURL(or),or=null)};var Tc=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`,sr=null,Jr=class{constructor(){sr||(sr=URL.createObjectURL(new Blob([Tc],{type:"application/javascript"}))),this.worker=new Worker(sr)}};Jr.revokeObjectURL=function(){sr&&(URL.revokeObjectURL(sr),sr=null)};var iu=0,ii,ai=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{let{worker:r}=new nr;r.addEventListener("message",o=>{r.terminate(),nr.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,r){return this._run("loadImageBitmap",[e,r?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ii===void 0&&(ii=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ii&&(this._createdWorkers++,e=new Jr().worker,e.addEventListener("message",r=>{this._complete(r.data),this._returnWorker(r.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){this._resolveHash[e.uuid]&&(e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),delete this._resolveHash[e.uuid])}async _run(e,r){await this._initWorkers();let o=new Promise((n,s)=>{this._queue.push({id:e,arguments:r,resolve:n,reject:s})});return this._next(),o}_next(){if(!this._queue.length)return;let e=this._getWorker();if(!e)return;let r=this._queue.pop(),o=r.id;this._resolveHash[iu]={resolve:r.resolve,reject:r.reject},e.postMessage({data:r.arguments,uuid:iu++,id:o})}reset(){this._workerPool.forEach(e=>e.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:e})=>{e?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},Tn=new ai;var Cc=[".jpeg",".jpg",".png",".webp",".avif"],Ec=["image/jpeg","image/png","image/webp","image/avif"];async function au(t,e){let r=await I.get().fetch(t);if(!r.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${r.status} ${r.statusText}`);let o=await r.blob();return e?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}var eo={name:"loadTextures",id:"texture",extension:{type:m.LoadParser,priority:oe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Le(t,Ec)||J(t,Cc)},async load(t,e,r){let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Tn.isImageBitmapSupported()?o=await Tn.loadImageBitmap(t,e):o=await au(t,e):o=await new Promise((s,i)=>{o=I.get().createImage(),o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?s(o):(o.onload=()=>{s(o)},o.onerror=i)});let n=new Nr({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:e.data?.resolution||Se(t),...e.data});return Ae(n,r,t)},unload(t){t.destroy(!0)}};var wc=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],ui,li;function uu(t,e,r){r===void 0&&!e.startsWith("data:")?t.crossOrigin=cu(e):r!==!1&&(t.crossOrigin=typeof r=="string"?r:"anonymous")}function lu(t){return new Promise((e,r)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",n),t.load();function o(){s(),e()}function n(i){s(),r(i)}function s(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",n)}})}function cu(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);let r=new URL(t,document.baseURI);return r.hostname!==e.hostname||r.port!==e.port||r.protocol!==e.protocol?"anonymous":""}function Bc(){let t=[],e=[];for(let r of wc){let o=Qt.MIME_TYPES[r.substring(1)]||`video/${r.substring(1)}`;at(o)&&(t.push(r),e.includes(o)||e.push(o))}return{validVideoExtensions:t,validVideoMime:e}}var ci={name:"loadVideo",id:"video",extension:{type:m.LoadParser,name:"loadVideo"},test(t){if(!ui||!li){let{validVideoExtensions:o,validVideoMime:n}=Bc();ui=o,li=n}let e=Le(t,li),r=J(t,ui);return e||r},async load(t,e,r){let o={...Qt.defaultOptions,resolution:e.data?.resolution||Se(t),alphaMode:e.data?.alphaMode||await As(),...e.data},n=document.createElement("video"),s={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(s).forEach(u=>{let l=s[u];l!==void 0&&n.setAttribute(u,l)}),o.muted===!0&&(n.muted=!0),uu(n,t,o.crossorigin);let i=document.createElement("source"),a;if(o.mime)a=o.mime;else if(t.startsWith("data:"))a=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let u=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();a=Qt.MIME_TYPES[u]||`video/${u}`}return i.src=t,a&&(i.type=a),new Promise((u,l)=>{o.preload&&!o.autoPlay&&n.load(),n.addEventListener("canplay",c),n.addEventListener("error",f),i.addEventListener("error",f),n.appendChild(i);async function c(){let d=new Qt({...o,resource:n});p(),e.data.preload&&await lu(n),u(Ae(d,r,t))}function f(d){p(),l(d)}function p(){n.removeEventListener("canplay",c),n.removeEventListener("error",f),i.removeEventListener("error",f)}})},unload(t){t.destroy(!0)}};var to={extension:{type:m.ResolveParser,name:"resolveTexture"},test:eo.test,parse:t=>({resolution:parseFloat(We.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var fi={extension:{type:m.ResolveParser,priority:-2,name:"resolveJson"},test:t=>We.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:to.parse};var Cn=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new We,this.loader=new ti,this.cache=z,this._backgroundLoader=new Qr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){if(this._initialized){q("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let s=e.manifest;typeof s=="string"&&(s=await this.load(s)),this.resolver.addManifest(s)}let r=e.texturePreference?.resolution??1,o=typeof r=="number"?[r]:r,n=await this._detectFormats({preferredFormats:e.texturePreference?.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:o}}),e.preferences&&this.setPreferences(e.preferences),e.loadOptions&&(this.loader.loadOptions={...this.loader.loadOptions,...e.loadOptions})}add(e){this.resolver.add(e)}async load(e,r){this._initialized||await this.init();let o=Lr(e),n=yt(e).map(a=>{if(typeof a!="string"){let u=this.resolver.getAlias(a);return u.some(l=>!this.resolver.hasKey(l))&&this.add(a),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(n),i=await this._mapLoadToResolve(s,r);return o?i[n[0]]:i}addBundle(e,r){this.resolver.addBundle(e,r)}async loadBundle(e,r){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);let n=this.resolver.resolveBundle(e),s={},i=Object.keys(n),a=0,u=[],l=()=>{r?.(u.reduce((f,p)=>f+p,0)/a)},c=i.map((f,p)=>{let d=n[f],x=Object.values(d),h=[...new Set(x.flat())].reduce((v,_)=>v+(_.progressSize||1),0);return u.push(0),a+=h,this._mapLoadToResolve(d,v=>{u[p]=v*h,l()}).then(v=>{s[f]=v})});return await Promise.all(c),o?s[e[0]]:s}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);let r=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(r))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);let r=this.resolver.resolveBundle(e);Object.values(r).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return z.get(e);let r={};for(let o=0;o<e.length;o++)r[o]=z.get(e[o]);return r}async _mapLoadToResolve(e,r){let o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;let n=await this.loader.load(o,r);this._backgroundLoader.active=!0;let s={};return o.forEach(i=>{let a=n[i.src],u=[i.src];i.alias&&u.push(...i.alias),u.forEach(l=>{s[l]=a}),z.set(u,a)}),s}async unload(e){this._initialized||await this.init();let r=yt(e).map(n=>typeof n!="string"?n.src:n),o=this.resolver.resolve(r);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=yt(e);let r=this.resolver.resolveBundle(e),o=Object.keys(r).map(n=>this._unloadFromResolved(r[n]));await Promise.all(o)}async _unloadFromResolved(e){let r=Object.values(e);r.forEach(o=>{z.remove(o.src)}),await this.loader.unload(r)}async _detectFormats(e){let r=[];e.preferredFormats&&(r=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(let o of e.detections)e.skipDetections||await o.test()?r=await o.add(r):e.skipDetections||(r=await o.remove(r));return r=r.filter((o,n)=>r.indexOf(o)===n),r}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(r=>{r.config&&Object.keys(r.config).filter(o=>o in e).forEach(o=>{r.config[o]=e[o]})})}},ro=new Cn;G.handleByList(m.LoadParser,ro.loader.parsers).handleByList(m.ResolveParser,ro.resolver.parsers).handleByList(m.CacheParser,ro.cache.parsers).handleByList(m.DetectionParser,ro.detections);G.add(Ys,Ks,js,ei,Qs,Zs,Js,ri,oi,ni,si,eo,ci,qs,$s,to,fi);var fu={loader:m.LoadParser,resolver:m.ResolveParser,cache:m.CacheParser,detection:m.DetectionParser};G.handle(m.Asset,t=>{let e=t.ref;Object.entries(fu).filter(([r])=>!!e[r]).forEach(([r,o])=>G.add(Object.assign(e[r],{extension:e[r].extension??o})))},t=>{let e=t.ref;Object.keys(fu).filter(r=>!!e[r]).forEach(r=>G.remove(e[r]))});var Dc={extension:{type:m.DetectionParser,priority:3},test:async()=>!!(await it()||st()),add:async t=>[...t,"basis"],remove:async t=>t.filter(e=>e!=="basis")};var ze=class extends xe{constructor(e){super({...e,mipLevelCount:e.resource.length}),this.uploadMethodId="compressed"}};var En;function wn(){if(En)return En;let e=I.get().createCanvas(1,1).getContext("webgl");return e?(En=[...e.getExtension("EXT_texture_compression_bptc")?["bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"]:[],...e.getExtension("WEBGL_compressed_texture_s3tc")?["bc1-rgba-unorm","bc2-rgba-unorm","bc3-rgba-unorm"]:[],...e.getExtension("WEBGL_compressed_texture_s3tc_srgb")?["bc1-rgba-unorm-srgb","bc2-rgba-unorm-srgb","bc3-rgba-unorm-srgb"]:[],...e.getExtension("EXT_texture_compression_rgtc")?["bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm"]:[],...e.getExtension("WEBGL_compressed_texture_etc")?["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","eac-r11unorm","eac-rg11unorm"]:[],...e.getExtension("WEBGL_compressed_texture_astc")?["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]:[]],En):[]}var Bn;async function Dn(){if(Bn)return Bn;let t=await I.get().getNavigator().gpu.requestAdapter();return Bn=[...t.features.has("texture-compression-bc")?["bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"]:[],...t.features.has("texture-compression-etc2")?["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"]:[],...t.features.has("texture-compression-astc")?["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]:[]],Bn}var Rn;async function oo(){return Rn!==void 0||(Rn=await(async()=>{let t=await it(),e=st();if(t&&e){let r=await Dn(),o=wn();return r.filter(n=>o.includes(n))}else{if(t)return await Dn();if(e)return wn()}return[]})()),Rn}var pu=["r8unorm","r8snorm","r8uint","r8sint","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32uint","r32sint","r32float","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb9e5ufloat","rgb10a2unorm","rg11b10ufloat","rg32uint","rg32sint","rg32float","rgba16uint","rgba16sint","rgba16float","rgba32uint","rgba32sint","rgba32float","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8"],Pn;async function ut(){if(Pn!==void 0)return Pn;let t=await oo();return Pn=[...pu,...t],Pn}var Rc=`(function () {
    'use strict';

    function createLevelBuffers(basisTexture, basisTranscoderFormat) {
      const images = basisTexture.getNumImages();
      const levels = basisTexture.getNumLevels(0);
      const success = basisTexture.startTranscoding();
      if (!success) {
        throw new Error("startTranscoding failed");
      }
      const levelBuffers = [];
      for (let levelIndex = 0; levelIndex < levels; ++levelIndex) {
        for (let sliceIndex = 0; sliceIndex < images; ++sliceIndex) {
          const transcodeSize = basisTexture.getImageTranscodedSizeInBytes(sliceIndex, levelIndex, basisTranscoderFormat);
          const levelBuffer = new Uint8Array(transcodeSize);
          const success2 = basisTexture.transcodeImage(levelBuffer, sliceIndex, levelIndex, basisTranscoderFormat, 1, 0);
          if (!success2) {
            throw new Error("transcodeImage failed");
          }
          levelBuffers.push(levelBuffer);
        }
      }
      return levelBuffers;
    }

    const gpuFormatToBasisTranscoderFormatMap = {
      "bc3-rgba-unorm": 3,
      // cTFBC3_RGBA
      "bc7-rgba-unorm": 6,
      // cTFBC7_RGBA,
      "etc2-rgba8unorm": 1,
      // cTFETC2_RGBA,
      "astc-4x4-unorm": 10,
      // cTFASTC_4x4_RGBA,
      // Uncompressed
      rgba8unorm: 13,
      // cTFRGBA32,
      rgba4unorm: 16
      // cTFRGBA4444,
    };
    function gpuFormatToBasisTranscoderFormat(transcoderFormat) {
      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported transcoderFormat: \${transcoderFormat}\`);
    }

    const settings = {
      jsUrl: "basis/basis_transcoder.js",
      wasmUrl: "basis/basis_transcoder.wasm"
    };
    let basisTranscoderFormat;
    let basisTranscodedTextureFormat;
    let basisPromise;
    async function getBasis() {
      if (!basisPromise) {
        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;
        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;
        importScripts(absoluteJsUrl);
        basisPromise = new Promise((resolve) => {
          BASIS({
            locateFile: (_file) => absoluteWasmUrl
          }).then((module) => {
            module.initializeBasis();
            resolve(module.BasisFile);
          });
        });
      }
      return basisPromise;
    }
    async function fetchBasisTexture(url, BasisTexture) {
      const basisResponse = await fetch(url);
      if (basisResponse.ok) {
        const basisArrayBuffer = await basisResponse.arrayBuffer();
        return new BasisTexture(new Uint8Array(basisArrayBuffer));
      }
      throw new Error(\`Failed to load Basis texture: \${url}\`);
    }
    const preferredTranscodedFormat = [
      "bc7-rgba-unorm",
      "astc-4x4-unorm",
      "etc2-rgba8unorm",
      "bc3-rgba-unorm",
      "rgba8unorm"
    ];
    async function load(url) {
      const BasisTexture = await getBasis();
      const basisTexture = await fetchBasisTexture(url, BasisTexture);
      const levelBuffers = createLevelBuffers(basisTexture, basisTranscoderFormat);
      return {
        width: basisTexture.getImageWidth(0, 0),
        height: basisTexture.getImageHeight(0, 0),
        format: basisTranscodedTextureFormat,
        resource: levelBuffers,
        alphaMode: "no-premultiply-alpha"
      };
    }
    async function init(jsUrl, wasmUrl, supportedTextures) {
      if (jsUrl) settings.jsUrl = jsUrl;
      if (wasmUrl) settings.wasmUrl = wasmUrl;
      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];
      basisTranscoderFormat = gpuFormatToBasisTranscoderFormat(basisTranscodedTextureFormat);
      await getBasis();
    }
    const messageHandlers = {
      init: async (data) => {
        const { jsUrl, wasmUrl, supportedTextures } = data;
        await init(jsUrl, wasmUrl, supportedTextures);
      },
      load: async (data) => {
        try {
          const textureOptions = await load(data.url);
          return {
            type: "load",
            url: data.url,
            success: true,
            textureOptions,
            transferables: textureOptions.resource?.map((arr) => arr.buffer)
          };
        } catch (e) {
          throw e;
        }
      }
    };
    self.onmessage = (async (messageEvent) => {
      const message = messageEvent.data;
      const response = await messageHandlers[message.type](message);
      if (response) {
        self.postMessage(response, response.transferables);
      }
    });

})();
`,ir=null,no=class{constructor(){ir||(ir=URL.createObjectURL(new Blob([Rc],{type:"application/javascript"}))),this.worker=new Worker(ir)}};no.revokeObjectURL=function(){ir&&(URL.revokeObjectURL(ir),ir=null)};var so={jsUrl:"https://cdn.jsdelivr.net/npm/pixi.js/transcoders/basis/basis_transcoder.js",wasmUrl:"https://cdn.jsdelivr.net/npm/pixi.js/transcoders/basis/basis_transcoder.wasm"};function Pc(t){Object.assign(so,t)}var io,du={};function Uc(t){return io||(io=new no().worker,io.onmessage=e=>{let{success:r,url:o,textureOptions:n}=e.data;r||console.warn("Failed to load Basis texture",o),du[o](n)},io.postMessage({type:"init",jsUrl:so.jsUrl,wasmUrl:so.wasmUrl,supportedTextures:t})),io}function pi(t,e){let r=Uc(e);return new Promise(o=>{du[t]=o,r.postMessage({type:"load",url:t})})}var Fc={extension:{type:m.LoadParser,priority:oe.High,name:"loadBasis"},name:"loadBasis",id:"basis",test(t){return J(t,[".basis"])},async load(t,e,r){let o=await ut(),n=await pi(t,o),s=new ze({...n,resolution:e.data?.resolution||Se(t)});return Ae(s,r,t)},unload(t){Array.isArray(t)?t.forEach(e=>e.destroy(!0)):t.destroy(!0)}};function Mc(t,e){let r=t.getNumImages(),o=t.getNumLevels(0);if(!t.startTranscoding())throw new Error("startTranscoding failed");let s=[];for(let i=0;i<o;++i)for(let a=0;a<r;++a){let u=t.getImageTranscodedSizeInBytes(a,i,e),l=new Uint8Array(u);if(!t.transcodeImage(l,a,i,e,1,0))throw new Error("transcodeImage failed");s.push(l)}return s}var Oc={"bc3-rgba-unorm":3,"bc7-rgba-unorm":6,"etc2-rgba8unorm":1,"astc-4x4-unorm":10,rgba8unorm:13,rgba4unorm:16};function Gc(t){let e=Oc[t];if(e)return e;throw new Error(`Unsupported transcoderFormat: ${t}`)}var Ic={MAGIC:0,SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19,PF_FLAGS:20,FOURCC:21,RGB_BITCOUNT:22,R_BIT_MASK:23,G_BIT_MASK:24,B_BIT_MASK:25,A_BIT_MASK:26},Lc={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},di=(t=>(t[t.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",t[t.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",t[t.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",t[t.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",t[t.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",t[t.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",t[t.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",t[t.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",t[t.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",t[t.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",t[t.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",t[t.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",t[t.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",t[t.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",t[t.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",t[t.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",t[t.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",t[t.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",t[t.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",t[t.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",t[t.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",t[t.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",t[t.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",t[t.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",t[t.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",t[t.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",t[t.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",t[t.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",t[t.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",t[t.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",t[t.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",t[t.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",t[t.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",t[t.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",t[t.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",t[t.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",t[t.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",t[t.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",t[t.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",t[t.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",t[t.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",t[t.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",t[t.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",t[t.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",t[t.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",t[t.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",t[t.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",t[t.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",t[t.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",t[t.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",t[t.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",t[t.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",t[t.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",t[t.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",t[t.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",t[t.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",t[t.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",t[t.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",t[t.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",t[t.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",t[t.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",t[t.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",t[t.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",t[t.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",t[t.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",t[t.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",t[t.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",t[t.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",t[t.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",t[t.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",t[t.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",t[t.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",t[t.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",t[t.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",t[t.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",t[t.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",t[t.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",t[t.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",t[t.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",t[t.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",t[t.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",t[t.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",t[t.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",t[t.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",t[t.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",t[t.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",t[t.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",t[t.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",t[t.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",t[t.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",t[t.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",t[t.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",t[t.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",t[t.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",t[t.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",t[t.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",t[t.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",t[t.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",t[t.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",t[t.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",t[t.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",t[t.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",t[t.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",t[t.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",t[t.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",t[t.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",t[t.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",t[t.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",t[t.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",t[t.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",t[t.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",t[t.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",t[t.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",t[t.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",t[t.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",t[t.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",t[t.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",t[t.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",t[t.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",t[t.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT",t))(di||{}),mi=(t=>(t[t.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",t[t.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",t[t.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D",t))(mi||{});function ce(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}var we=(t=>(t[t.UNKNOWN=0]="UNKNOWN",t[t.R8G8B8=20]="R8G8B8",t[t.A8R8G8B8=21]="A8R8G8B8",t[t.X8R8G8B8=22]="X8R8G8B8",t[t.R5G6B5=23]="R5G6B5",t[t.X1R5G5B5=24]="X1R5G5B5",t[t.A1R5G5B5=25]="A1R5G5B5",t[t.A4R4G4B4=26]="A4R4G4B4",t[t.R3G3B2=27]="R3G3B2",t[t.A8=28]="A8",t[t.A8R3G3B2=29]="A8R3G3B2",t[t.X4R4G4B4=30]="X4R4G4B4",t[t.A2B10G10R10=31]="A2B10G10R10",t[t.A8B8G8R8=32]="A8B8G8R8",t[t.X8B8G8R8=33]="X8B8G8R8",t[t.G16R16=34]="G16R16",t[t.A2R10G10B10=35]="A2R10G10B10",t[t.A16B16G16R16=36]="A16B16G16R16",t[t.A8P8=40]="A8P8",t[t.P8=41]="P8",t[t.L8=50]="L8",t[t.A8L8=51]="A8L8",t[t.A4L4=52]="A4L4",t[t.V8U8=60]="V8U8",t[t.L6V5U5=61]="L6V5U5",t[t.X8L8V8U8=62]="X8L8V8U8",t[t.Q8W8V8U8=63]="Q8W8V8U8",t[t.V16U16=64]="V16U16",t[t.A2W10V10U10=67]="A2W10V10U10",t[t.Q16W16V16U16=110]="Q16W16V16U16",t[t.R16F=111]="R16F",t[t.G16R16F=112]="G16R16F",t[t.A16B16G16R16F=113]="A16B16G16R16F",t[t.R32F=114]="R32F",t[t.G32R32F=115]="G32R32F",t[t.A32B32G32R32F=116]="A32B32G32R32F",t[t.UYVY=ce("UYVY")]="UYVY",t[t.R8G8_B8G8=ce("RGBG")]="R8G8_B8G8",t[t.YUY2=ce("YUY2")]="YUY2",t[t.D3DFMT_G8R8_G8B8=ce("GRGB")]="D3DFMT_G8R8_G8B8",t[t.DXT1=ce("DXT1")]="DXT1",t[t.DXT2=ce("DXT2")]="DXT2",t[t.DXT3=ce("DXT3")]="DXT3",t[t.DXT4=ce("DXT4")]="DXT4",t[t.DXT5=ce("DXT5")]="DXT5",t[t.ATI1=ce("ATI1")]="ATI1",t[t.AT1N=ce("AT1N")]="AT1N",t[t.ATI2=ce("ATI2")]="ATI2",t[t.AT2N=ce("AT2N")]="AT2N",t[t.BC4U=ce("BC4U")]="BC4U",t[t.BC4S=ce("BC4S")]="BC4S",t[t.BC5U=ce("BC5U")]="BC5U",t[t.BC5S=ce("BC5S")]="BC5S",t[t.DX10=ce("DX10")]="DX10",t))(we||{}),Un={[we.DXT1]:"bc1-rgba-unorm",[we.DXT2]:"bc2-rgba-unorm",[we.DXT3]:"bc2-rgba-unorm",[we.DXT4]:"bc3-rgba-unorm",[we.DXT5]:"bc3-rgba-unorm",[we.ATI1]:"bc4-r-unorm",[we.BC4U]:"bc4-r-unorm",[we.BC4S]:"bc4-r-snorm",[we.ATI2]:"bc5-rg-unorm",[we.BC5U]:"bc5-rg-unorm",[we.BC5S]:"bc5-rg-snorm",36:"rgba16uint",110:"rgba16sint",111:"r16float",112:"rg16float",113:"rgba16float",114:"r32float",115:"rg32float",116:"rgba32float"},Te={70:"bc1-rgba-unorm",71:"bc1-rgba-unorm",72:"bc1-rgba-unorm-srgb",73:"bc2-rgba-unorm",74:"bc2-rgba-unorm",75:"bc2-rgba-unorm-srgb",76:"bc3-rgba-unorm",77:"bc3-rgba-unorm",78:"bc3-rgba-unorm-srgb",79:"bc4-r-unorm",80:"bc4-r-unorm",81:"bc4-r-snorm",82:"bc5-rg-unorm",83:"bc5-rg-unorm",84:"bc5-rg-snorm",94:"bc6h-rgb-ufloat",95:"bc6h-rgb-ufloat",96:"bc6h-rgb-float",97:"bc7-rgba-unorm",98:"bc7-rgba-unorm",99:"bc7-rgba-unorm-srgb",28:"rgba8unorm",29:"rgba8unorm-srgb",87:"bgra8unorm",91:"bgra8unorm-srgb",41:"r32float",49:"rg8unorm",56:"r16uint",61:"r8unorm",24:"rgb10a2unorm",11:"rgba16uint",13:"rgba16sint",10:"rgba16float",54:"r16float",34:"rg16float",16:"rg32float",2:"rgba32float"},D={MAGIC_VALUE:542327876,MAGIC_SIZE:4,HEADER_SIZE:124,HEADER_DX10_SIZE:20,PIXEL_FORMAT_FLAGS:{ALPHAPIXELS:1,ALPHA:2,FOURCC:4,RGB:64,RGBA:65,YUV:512,LUMINANCE:131072,LUMINANCEA:131073},RESOURCE_MISC_TEXTURECUBE:4,HEADER_FIELDS:Ic,HEADER_DX10_FIELDS:Lc,DXGI_FORMAT:di,D3D10_RESOURCE_DIMENSION:mi,D3DFMT:we},hi={"bc1-rgba-unorm":8,"bc1-rgba-unorm-srgb":8,"bc2-rgba-unorm":16,"bc2-rgba-unorm-srgb":16,"bc3-rgba-unorm":16,"bc3-rgba-unorm-srgb":16,"bc4-r-unorm":8,"bc4-r-snorm":8,"bc5-rg-unorm":16,"bc5-rg-snorm":16,"bc6h-rgb-ufloat":16,"bc6h-rgb-float":16,"bc7-rgba-unorm":16,"bc7-rgba-unorm-srgb":16};function gi(t,e){let{format:r,fourCC:o,width:n,height:s,dataOffset:i,mipmapCount:a}=kc(t);if(!e.includes(r))throw new Error(`Unsupported texture format: ${o} ${r}, supported: ${e}`);if(a<=1)return{format:r,width:n,height:s,resource:[new Uint8Array(t,i)],alphaMode:"no-premultiply-alpha"};let u=Nc(r,n,s,i,a,t);return{format:r,width:n,height:s,resource:u,alphaMode:"no-premultiply-alpha"}}function Nc(t,e,r,o,n,s){let i=[],a=hi[t],u=e,l=r,c=o;for(let f=0;f<n;++f){let p=Math.ceil(Math.max(4,u)/4)*4,d=Math.ceil(Math.max(4,l)/4)*4,x=a?p/4*d/4*a:u*l*4,g=new Uint8Array(s,c,x);i.push(g),c+=x,u=Math.max(u>>1,1),l=Math.max(l>>1,1)}return i}function kc(t){let e=new Uint32Array(t,0,D.HEADER_SIZE/Uint32Array.BYTES_PER_ELEMENT);if(e[D.HEADER_FIELDS.MAGIC]!==D.MAGIC_VALUE)throw new Error("Invalid magic number in DDS header");let r=e[D.HEADER_FIELDS.HEIGHT],o=e[D.HEADER_FIELDS.WIDTH],n=Math.max(1,e[D.HEADER_FIELDS.MIPMAP_COUNT]),s=e[D.HEADER_FIELDS.PF_FLAGS],i=e[D.HEADER_FIELDS.FOURCC],a=Hc(e,s,i,t),u=D.MAGIC_SIZE+D.HEADER_SIZE+(i===D.D3DFMT.DX10?D.HEADER_DX10_SIZE:0);return{format:a,fourCC:i,width:o,height:r,dataOffset:u,mipmapCount:n}}function Hc(t,e,r,o){if(e&D.PIXEL_FORMAT_FLAGS.FOURCC){if(r===D.D3DFMT.DX10){let n=new Uint32Array(o,D.MAGIC_SIZE+D.HEADER_SIZE,D.HEADER_DX10_SIZE/Uint32Array.BYTES_PER_ELEMENT);if(n[D.HEADER_DX10_FIELDS.MISC_FLAG]===D.RESOURCE_MISC_TEXTURECUBE)throw new Error("DDSParser does not support cubemap textures");if(n[D.HEADER_DX10_FIELDS.RESOURCE_DIMENSION]===D.D3D10_RESOURCE_DIMENSION.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSParser does not supported 3D texture data");let a=n[D.HEADER_DX10_FIELDS.DXGI_FORMAT];if(a in Te)return Te[a];throw new Error(`DDSParser cannot parse texture data with DXGI format ${a}`)}if(r in Un)return Un[r];throw new Error(`DDSParser cannot parse texture data with fourCC format ${r}`)}if(e&D.PIXEL_FORMAT_FLAGS.RGB||e&D.PIXEL_FORMAT_FLAGS.RGBA)return Vc(t);throw e&D.PIXEL_FORMAT_FLAGS.YUV?new Error("DDSParser does not supported YUV uncompressed texture data."):e&D.PIXEL_FORMAT_FLAGS.LUMINANCE||e&D.PIXEL_FORMAT_FLAGS.LUMINANCEA?new Error("DDSParser does not support single-channel (lumninance) texture data!"):e&D.PIXEL_FORMAT_FLAGS.ALPHA||e&D.PIXEL_FORMAT_FLAGS.ALPHAPIXELS?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}function Vc(t){let e=t[D.HEADER_FIELDS.RGB_BITCOUNT],r=t[D.HEADER_FIELDS.R_BIT_MASK],o=t[D.HEADER_FIELDS.G_BIT_MASK],n=t[D.HEADER_FIELDS.B_BIT_MASK],s=t[D.HEADER_FIELDS.A_BIT_MASK];switch(e){case 32:if(r===255&&o===65280&&n===16711680&&s===4278190080)return Te[D.DXGI_FORMAT.DXGI_FORMAT_R8G8B8A8_UNORM];if(r===16711680&&o===65280&&n===255&&s===4278190080)return Te[D.DXGI_FORMAT.DXGI_FORMAT_B8G8R8A8_UNORM];if(r===1072693248&&o===1047552&&n===1023&&s===3221225472)return Te[D.DXGI_FORMAT.DXGI_FORMAT_R10G10B10A2_UNORM];if(r===65535&&o===4294901760&&n===0&&s===0)return Te[D.DXGI_FORMAT.DXGI_FORMAT_R16G16_UNORM];if(r===4294967295&&o===0&&n===0&&s===0)return Te[D.DXGI_FORMAT.DXGI_FORMAT_R32_FLOAT];break;case 24:break;case 16:if(r===31744&&o===992&&n===31&&s===32768)return Te[D.DXGI_FORMAT.DXGI_FORMAT_B5G5R5A1_UNORM];if(r===63488&&o===2016&&n===31&&s===0)return Te[D.DXGI_FORMAT.DXGI_FORMAT_B5G6R5_UNORM];if(r===3840&&o===240&&n===15&&s===61440)return Te[D.DXGI_FORMAT.DXGI_FORMAT_B4G4R4A4_UNORM];if(r===255&&o===0&&n===0&&s===65280)return Te[D.DXGI_FORMAT.DXGI_FORMAT_R8G8_UNORM];if(r===65535&&o===0&&n===0&&s===0)return Te[D.DXGI_FORMAT.DXGI_FORMAT_R16_UNORM];break;case 8:if(r===255&&o===0&&n===0&&s===0)return Te[D.DXGI_FORMAT.DXGI_FORMAT_R8_UNORM];break}throw new Error(`DDSParser does not support uncompressed texture with configuration:
                bitCount = ${e}, rBitMask = ${r}, gBitMask = ${o}, aBitMask = ${s}`)}var Xc={extension:{type:m.LoadParser,priority:oe.High,name:"loadDDS"},name:"loadDDS",id:"dds",test(t){return J(t,[".dds"])},async load(t,e,r){let o=await ut(),s=await(await fetch(t)).arrayBuffer(),i=gi(s,o),a=new ze({...i,resolution:e.data?.resolution||Se(t)});return Ae(a,r,t)},unload(t){Array.isArray(t)?t.forEach(e=>e.destroy(!0)):t.destroy(!0)}};var mu=(t=>(t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGBA=6408]="RGBA",t[t.RGBA8UI=36220]="RGBA8UI",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGBA8I=36238]="RGBA8I",t[t.RGBA8=32856]="RGBA8",t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RED_RGTC1_EXT=36283]="COMPRESSED_RED_RGTC1_EXT",t[t.COMPRESSED_SIGNED_RED_RGTC1_EXT=36284]="COMPRESSED_SIGNED_RED_RGTC1_EXT",t[t.COMPRESSED_RED_GREEN_RGTC2_EXT=36285]="COMPRESSED_RED_GREEN_RGTC2_EXT",t[t.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286]="COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",t[t.COMPRESSED_RGBA_ASTC_5x4_KHR=37809]="COMPRESSED_RGBA_ASTC_5x4_KHR",t[t.COMPRESSED_RGBA_ASTC_5x5_KHR=37810]="COMPRESSED_RGBA_ASTC_5x5_KHR",t[t.COMPRESSED_RGBA_ASTC_6x5_KHR=37811]="COMPRESSED_RGBA_ASTC_6x5_KHR",t[t.COMPRESSED_RGBA_ASTC_6x6_KHR=37812]="COMPRESSED_RGBA_ASTC_6x6_KHR",t[t.COMPRESSED_RGBA_ASTC_8x5_KHR=37813]="COMPRESSED_RGBA_ASTC_8x5_KHR",t[t.COMPRESSED_RGBA_ASTC_8x6_KHR=37814]="COMPRESSED_RGBA_ASTC_8x6_KHR",t[t.COMPRESSED_RGBA_ASTC_8x8_KHR=37815]="COMPRESSED_RGBA_ASTC_8x8_KHR",t[t.COMPRESSED_RGBA_ASTC_10x5_KHR=37816]="COMPRESSED_RGBA_ASTC_10x5_KHR",t[t.COMPRESSED_RGBA_ASTC_10x6_KHR=37817]="COMPRESSED_RGBA_ASTC_10x6_KHR",t[t.COMPRESSED_RGBA_ASTC_10x8_KHR=37818]="COMPRESSED_RGBA_ASTC_10x8_KHR",t[t.COMPRESSED_RGBA_ASTC_10x10_KHR=37819]="COMPRESSED_RGBA_ASTC_10x10_KHR",t[t.COMPRESSED_RGBA_ASTC_12x10_KHR=37820]="COMPRESSED_RGBA_ASTC_12x10_KHR",t[t.COMPRESSED_RGBA_ASTC_12x12_KHR=37821]="COMPRESSED_RGBA_ASTC_12x12_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840]="COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR",t[t.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR",t[t.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",t[t.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]="COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT",t[t.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]="COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",t[t.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495]="COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",t))(mu||{});var Wc={33776:"bc1-rgba-unorm",33777:"bc1-rgba-unorm",33778:"bc2-rgba-unorm",33779:"bc3-rgba-unorm",35916:"bc1-rgba-unorm-srgb",35917:"bc1-rgba-unorm-srgb",35918:"bc2-rgba-unorm-srgb",35919:"bc3-rgba-unorm-srgb",36283:"bc4-r-unorm",36284:"bc4-r-snorm",36285:"bc5-rg-unorm",36286:"bc5-rg-snorm",37488:"eac-r11unorm",37490:"eac-rg11snorm",37492:"etc2-rgb8unorm",37496:"etc2-rgba8unorm",37493:"etc2-rgb8unorm-srgb",37497:"etc2-rgba8unorm-srgb",37494:"etc2-rgb8a1unorm",37495:"etc2-rgb8a1unorm-srgb",37808:"astc-4x4-unorm",37840:"astc-4x4-unorm-srgb",37809:"astc-5x4-unorm",37841:"astc-5x4-unorm-srgb",37810:"astc-5x5-unorm",37842:"astc-5x5-unorm-srgb",37811:"astc-6x5-unorm",37843:"astc-6x5-unorm-srgb",37812:"astc-6x6-unorm",37844:"astc-6x6-unorm-srgb",37813:"astc-8x5-unorm",37845:"astc-8x5-unorm-srgb",37814:"astc-8x6-unorm",37846:"astc-8x6-unorm-srgb",37815:"astc-8x8-unorm",37847:"astc-8x8-unorm-srgb",37816:"astc-10x5-unorm",37848:"astc-10x5-unorm-srgb",37817:"astc-10x6-unorm",37849:"astc-10x6-unorm-srgb",37818:"astc-10x8-unorm",37850:"astc-10x8-unorm-srgb",37819:"astc-10x10-unorm",37851:"astc-10x10-unorm-srgb",37820:"astc-12x10-unorm",37852:"astc-12x10-unorm-srgb",37821:"astc-12x12-unorm",37853:"astc-12x12-unorm-srgb",36492:"bc7-rgba-unorm",36493:"bc7-rgba-unorm-srgb",36494:"bc6h-rgb-float",36495:"bc6h-rgb-ufloat",35907:"rgba8unorm-srgb",36759:"rgba8snorm",36220:"rgba8uint",36238:"rgba8sint",6408:"rgba8unorm"},zc=[171,75,84,88,32,49,49,187,13,10,26,10],$c={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},qc=64,Yc=67305985,jc={5121:1,5123:2,5124:4,5125:4,5126:4,36193:8},Kc={6408:4,6407:3,33319:2,6403:1,6409:1,6410:2,6406:1},Qc={32819:2,32820:2,33635:2},Zc={33776:.5,33777:.5,33778:1,33779:1,35916:.5,35917:.5,35918:1,35919:1,36283:.5,36284:.5,36285:1,36286:1,37488:.5,37489:.5,37490:1,37491:1,37492:.5,37496:1,37493:.5,37497:1,37494:.5,37495:.5,37808:1,37840:1,37809:.8,37841:.8,37810:.64,37842:.64,37811:.53375,37843:.53375,37812:.445,37844:.445,37813:.4,37845:.4,37814:.33375,37846:.33375,37815:.25,37847:.25,37816:.32,37848:.32,37817:.26625,37849:.26625,37818:.2,37850:.2,37819:.16,37851:.16,37820:.13375,37852:.13375,37821:.11125,37853:.11125,36492:1,36493:1,36494:1,36495:1},ee={FILE_HEADER_SIZE:qc,FILE_IDENTIFIER:zc,FORMATS_TO_COMPONENTS:Kc,INTERNAL_FORMAT_TO_BYTES_PER_PIXEL:Zc,INTERNAL_FORMAT_TO_TEXTURE_FORMATS:Wc,FIELDS:$c,TYPES_TO_BYTES_PER_COMPONENT:jc,TYPES_TO_BYTES_PER_PIXEL:Qc,ENDIANNESS:Yc};function xi(t,e){let r=new DataView(t);if(!rf(r))throw new Error("Invalid KTX identifier in header");let{littleEndian:o,glType:n,glFormat:s,glInternalFormat:i,pixelWidth:a,pixelHeight:u,numberOfMipmapLevels:l,offset:c}=tf(r),f=ee.INTERNAL_FORMAT_TO_TEXTURE_FORMATS[i];if(!f)throw new Error(`Unknown texture format ${i}`);if(!e.includes(f))throw new Error(`Unsupported texture format: ${f}, supportedFormats: ${e}`);let p=ef(n,s,i),d=Jc(r,n,p,a,u,c,l,o);return{format:f,width:a,height:u,resource:d,alphaMode:"no-premultiply-alpha"}}function Jc(t,e,r,o,n,s,i,a){let u=o+3&-4,l=n+3&-4,c=o*n;e===0&&(c=u*l);let f=c*r,p=o,d=n,x=u,g=l,h=s,v=new Array(i);for(let _=0;_<i;_++){let b=t.getUint32(h,a),y=h+4;v[_]=new Uint8Array(t.buffer,y,f),y+=f,h+=b+4,h=h%4!==0?h+4-h%4:h,p=p>>1||1,d=d>>1||1,x=p+4-1&-4,g=d+4-1&-4,f=x*g*r}return v}function ef(t,e,r){let o=ee.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[r];if(t!==0&&(ee.TYPES_TO_BYTES_PER_COMPONENT[t]?o=ee.TYPES_TO_BYTES_PER_COMPONENT[t]*ee.FORMATS_TO_COMPONENTS[e]:o=ee.TYPES_TO_BYTES_PER_PIXEL[t]),o===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");return o}function tf(t){let e=t.getUint32(ee.FIELDS.ENDIANNESS,!0)===ee.ENDIANNESS,r=t.getUint32(ee.FIELDS.GL_TYPE,e),o=t.getUint32(ee.FIELDS.GL_FORMAT,e),n=t.getUint32(ee.FIELDS.GL_INTERNAL_FORMAT,e),s=t.getUint32(ee.FIELDS.PIXEL_WIDTH,e),i=t.getUint32(ee.FIELDS.PIXEL_HEIGHT,e)||1,a=t.getUint32(ee.FIELDS.PIXEL_DEPTH,e)||1,u=t.getUint32(ee.FIELDS.NUMBER_OF_ARRAY_ELEMENTS,e)||1,l=t.getUint32(ee.FIELDS.NUMBER_OF_FACES,e),c=t.getUint32(ee.FIELDS.NUMBER_OF_MIPMAP_LEVELS,e),f=t.getUint32(ee.FIELDS.BYTES_OF_KEY_VALUE_DATA,e);if(i===0||a!==1)throw new Error("Only 2D textures are supported");if(l!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(u!==1)throw new Error("WebGL does not support array textures");return{littleEndian:e,glType:r,glFormat:o,glInternalFormat:n,pixelWidth:s,pixelHeight:i,numberOfMipmapLevels:c,offset:ee.FILE_HEADER_SIZE+f}}function rf(t){for(let e=0;e<ee.FILE_IDENTIFIER.length;e++)if(t.getUint8(e)!==ee.FILE_IDENTIFIER[e])return!1;return!0}var of={extension:{type:m.LoadParser,priority:oe.High,name:"loadKTX"},name:"loadKTX",id:"ktx",test(t){return J(t,".ktx")},async load(t,e,r){let o=await ut(),s=await(await fetch(t)).arrayBuffer(),i=xi(s,o),a=new ze({...i,resolution:e.data?.resolution||Se(t)});return Ae(a,r,t)},unload(t){Array.isArray(t)?t.forEach(e=>e.destroy(!0)):t.destroy(!0)}};var nf=`(function () {
    'use strict';

    const converters = {
      rgb8unorm: {
        convertedFormat: "rgba8unorm",
        convertFunction: convertRGBtoRGBA
      },
      "rgb8unorm-srgb": {
        convertedFormat: "rgba8unorm-srgb",
        convertFunction: convertRGBtoRGBA
      }
    };
    function convertFormatIfRequired(textureOptions) {
      const format = textureOptions.format;
      if (converters[format]) {
        const convertFunction = converters[format].convertFunction;
        const levelBuffers = textureOptions.resource;
        for (let i = 0; i < levelBuffers.length; i++) {
          levelBuffers[i] = convertFunction(levelBuffers[i]);
        }
        textureOptions.format = converters[format].convertedFormat;
      }
    }
    function convertRGBtoRGBA(levelBuffer) {
      const pixelCount = levelBuffer.byteLength / 3;
      const levelBufferWithAlpha = new Uint32Array(pixelCount);
      for (let i = 0; i < pixelCount; ++i) {
        levelBufferWithAlpha[i] = levelBuffer[i * 3] + (levelBuffer[i * 3 + 1] << 8) + (levelBuffer[i * 3 + 2] << 16) + 4278190080;
      }
      return new Uint8Array(levelBufferWithAlpha.buffer);
    }

    function createLevelBuffersFromKTX(ktxTexture) {
      const levelBuffers = [];
      for (let i = 0; i < ktxTexture.numLevels; i++) {
        const imageData = ktxTexture.getImageData(i, 0, 0);
        const levelBuffer = new Uint8Array(imageData.byteLength);
        levelBuffer.set(imageData);
        levelBuffers.push(levelBuffer);
      }
      return levelBuffers;
    }

    const glFormatToGPUFormatMap = {
      6408: "rgba8unorm",
      32856: "bgra8unorm",
      //
      32857: "rgb10a2unorm",
      33189: "depth16unorm",
      33190: "depth24plus",
      33321: "r8unorm",
      33323: "rg8unorm",
      33325: "r16float",
      33326: "r32float",
      33327: "rg16float",
      33328: "rg32float",
      33329: "r8sint",
      33330: "r8uint",
      33331: "r16sint",
      33332: "r16uint",
      33333: "r32sint",
      33334: "r32uint",
      33335: "rg8sint",
      33336: "rg8uint",
      33337: "rg16sint",
      33338: "rg16uint",
      33339: "rg32sint",
      33340: "rg32uint",
      33778: "bc2-rgba-unorm",
      33779: "bc3-rgba-unorm",
      34836: "rgba32float",
      34842: "rgba16float",
      35056: "depth24plus-stencil8",
      35898: "rg11b10ufloat",
      35901: "rgb9e5ufloat",
      35907: "rgba8unorm-srgb",
      // bgra8unorm-srgb
      36012: "depth32float",
      36013: "depth32float-stencil8",
      36168: "stencil8",
      36208: "rgba32uint",
      36214: "rgba16uint",
      36220: "rgba8uint",
      36226: "rgba32sint",
      36232: "rgba16sint",
      36238: "rgba8sint",
      36492: "bc7-rgba-unorm",
      36756: "r8snorm",
      36757: "rg8snorm",
      36759: "rgba8snorm",
      37496: "etc2-rgba8unorm",
      37808: "astc-4x4-unorm"
    };
    function glFormatToGPUFormat(glInternalFormat) {
      const format = glFormatToGPUFormatMap[glInternalFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported glInternalFormat: \${glInternalFormat}\`);
    }

    const vkFormatToGPUFormatMap = {
      23: "rgb8unorm",
      // VK_FORMAT_R8G8B8_UNORM
      37: "rgba8unorm",
      // VK_FORMAT_R8G8B8A8_UNORM
      43: "rgba8unorm-srgb"
      // VK_FORMAT_R8G8B8A8_SRGB
      // TODO add more!
    };
    function vkFormatToGPUFormat(vkFormat) {
      const format = vkFormatToGPUFormatMap[vkFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported VkFormat: \${vkFormat}\`);
    }

    function getTextureFormatFromKTXTexture(ktxTexture) {
      if (ktxTexture.classId === 2) {
        return vkFormatToGPUFormat(ktxTexture.vkFormat);
      }
      return glFormatToGPUFormat(ktxTexture.glInternalformat);
    }

    const gpuFormatToBasisTranscoderFormatMap = {
      "bc3-rgba-unorm": "BC3_RGBA",
      "bc7-rgba-unorm": "BC7_M5_RGBA",
      "etc2-rgba8unorm": "ETC2_RGBA",
      "astc-4x4-unorm": "ASTC_4x4_RGBA",
      // Uncompressed
      rgba8unorm: "RGBA32",
      rg11b10ufloat: "R11F_G11F_B10F"
    };
    function gpuFormatToKTXBasisTranscoderFormat(transcoderFormat) {
      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported transcoderFormat: \${transcoderFormat}\`);
    }

    const settings = {
      jsUrl: "",
      wasmUrl: ""
    };
    let basisTranscoderFormat;
    let basisTranscodedTextureFormat;
    let ktxPromise;
    async function getKTX() {
      if (!ktxPromise) {
        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;
        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;
        importScripts(absoluteJsUrl);
        ktxPromise = new Promise((resolve) => {
          LIBKTX({
            locateFile: (_file) => absoluteWasmUrl
          }).then((libktx) => {
            resolve(libktx);
          });
        });
      }
      return ktxPromise;
    }
    async function fetchKTXTexture(url, ktx) {
      const ktx2Response = await fetch(url);
      if (ktx2Response.ok) {
        const ktx2ArrayBuffer = await ktx2Response.arrayBuffer();
        return new ktx.ktxTexture(new Uint8Array(ktx2ArrayBuffer));
      }
      throw new Error(\`Failed to load KTX(2) texture: \${url}\`);
    }
    const preferredTranscodedFormat = [
      "bc7-rgba-unorm",
      "astc-4x4-unorm",
      "etc2-rgba8unorm",
      "bc3-rgba-unorm",
      "rgba8unorm"
    ];
    async function load(url) {
      const ktx = await getKTX();
      const ktxTexture = await fetchKTXTexture(url, ktx);
      let format;
      if (ktxTexture.needsTranscoding) {
        format = basisTranscodedTextureFormat;
        const transcodeFormat = ktx.TranscodeTarget[basisTranscoderFormat];
        const result = ktxTexture.transcodeBasis(transcodeFormat, 0);
        if (result !== ktx.ErrorCode.SUCCESS) {
          throw new Error("Unable to transcode basis texture.");
        }
      } else {
        format = getTextureFormatFromKTXTexture(ktxTexture);
      }
      const levelBuffers = createLevelBuffersFromKTX(ktxTexture);
      const textureOptions = {
        width: ktxTexture.baseWidth,
        height: ktxTexture.baseHeight,
        format,
        mipLevelCount: ktxTexture.numLevels,
        resource: levelBuffers,
        alphaMode: "no-premultiply-alpha"
      };
      convertFormatIfRequired(textureOptions);
      return textureOptions;
    }
    async function init(jsUrl, wasmUrl, supportedTextures) {
      if (jsUrl) settings.jsUrl = jsUrl;
      if (wasmUrl) settings.wasmUrl = wasmUrl;
      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];
      basisTranscoderFormat = gpuFormatToKTXBasisTranscoderFormat(basisTranscodedTextureFormat);
      await getKTX();
    }
    const messageHandlers = {
      init: async (data) => {
        const { jsUrl, wasmUrl, supportedTextures } = data;
        await init(jsUrl, wasmUrl, supportedTextures);
      },
      load: async (data) => {
        try {
          const textureOptions = await load(data.url);
          return {
            type: "load",
            url: data.url,
            success: true,
            textureOptions,
            transferables: textureOptions.resource?.map((arr) => arr.buffer)
          };
        } catch (e) {
          throw e;
        }
      }
    };
    self.onmessage = (async (messageEvent) => {
      const message = messageEvent.data;
      try {
        const response = await messageHandlers[message.type]?.(message);
        if (response) {
          self.postMessage(response, response.transferables);
        }
      } catch (err) {
        self.postMessage({
          type: "error",
          err,
          url: message.url
        });
      }
    });

})();
`,ar=null,ao=class{constructor(){ar||(ar=URL.createObjectURL(new Blob([nf],{type:"application/javascript"}))),this.worker=new Worker(ar)}};ao.revokeObjectURL=function(){ar&&(URL.revokeObjectURL(ar),ar=null)};var uo={jsUrl:"https://cdn.jsdelivr.net/npm/pixi.js/transcoders/ktx/libktx.js",wasmUrl:"https://cdn.jsdelivr.net/npm/pixi.js/transcoders/ktx/libktx.wasm"};function sf(t){Object.assign(uo,t)}var lo,hu={},gu={};function af(t){return lo||(lo=new ao().worker,lo.onmessage=e=>{let{err:r,success:o,url:n,textureOptions:s}=e.data;if(r){gu[n](r);return}o||console.warn("Failed to load KTX texture",n),hu[n](s)},lo.postMessage({type:"init",jsUrl:uo.jsUrl,wasmUrl:uo.wasmUrl,supportedTextures:t})),lo}function bi(t,e){let r=af(e);return new Promise((o,n)=>{hu[t]=o,gu[t]=n,r.postMessage({type:"load",url:t})})}var uf={extension:{type:m.LoadParser,priority:oe.High,name:"loadKTX2"},name:"loadKTX2",id:"ktx2",test(t){return J(t,".ktx2")},async load(t,e,r){let o=await ut(),n=await bi(t,o),s=new ze({...n,resolution:e.data?.resolution||Se(t)});return Ae(s,r,t)},async unload(t){Array.isArray(t)?t.forEach(e=>e.destroy(!0)):t.destroy(!0)}};var _i={rgb8unorm:{convertedFormat:"rgba8unorm",convertFunction:xu},"rgb8unorm-srgb":{convertedFormat:"rgba8unorm-srgb",convertFunction:xu}};function lf(t){let e=t.format;if(_i[e]){let r=_i[e].convertFunction,o=t.resource;for(let n=0;n<o.length;n++)o[n]=r(o[n]);t.format=_i[e].convertedFormat}}function xu(t){let e=t.byteLength/3,r=new Uint32Array(e);for(let o=0;o<e;++o)r[o]=t[o*3]+(t[o*3+1]<<8)+(t[o*3+2]<<16)+4278190080;return new Uint8Array(r.buffer)}function cf(t){let e=[];for(let r=0;r<t.numLevels;r++){let o=t.getImageData(r,0,0),n=new Uint8Array(o.byteLength);n.set(o),e.push(n)}return e}var ff={6408:"rgba8unorm",32856:"bgra8unorm",32857:"rgb10a2unorm",33189:"depth16unorm",33190:"depth24plus",33321:"r8unorm",33323:"rg8unorm",33325:"r16float",33326:"r32float",33327:"rg16float",33328:"rg32float",33329:"r8sint",33330:"r8uint",33331:"r16sint",33332:"r16uint",33333:"r32sint",33334:"r32uint",33335:"rg8sint",33336:"rg8uint",33337:"rg16sint",33338:"rg16uint",33339:"rg32sint",33340:"rg32uint",33778:"bc2-rgba-unorm",33779:"bc3-rgba-unorm",34836:"rgba32float",34842:"rgba16float",35056:"depth24plus-stencil8",35898:"rg11b10ufloat",35901:"rgb9e5ufloat",35907:"rgba8unorm-srgb",36012:"depth32float",36013:"depth32float-stencil8",36168:"stencil8",36208:"rgba32uint",36214:"rgba16uint",36220:"rgba8uint",36226:"rgba32sint",36232:"rgba16sint",36238:"rgba8sint",36492:"bc7-rgba-unorm",36756:"r8snorm",36757:"rg8snorm",36759:"rgba8snorm",37496:"etc2-rgba8unorm",37808:"astc-4x4-unorm"};function vi(t){let e=ff[t];if(e)return e;throw new Error(`Unsupported glInternalFormat: ${t}`)}var pf={23:"rgb8unorm",37:"rgba8unorm",43:"rgba8unorm-srgb"};function yi(t){let e=pf[t];if(e)return e;throw new Error(`Unsupported VkFormat: ${t}`)}function df(t){return t.classId===2?yi(t.vkFormat):vi(t.glInternalformat)}var mf={"bc3-rgba-unorm":"BC3_RGBA","bc7-rgba-unorm":"BC7_M5_RGBA","etc2-rgba8unorm":"ETC2_RGBA","astc-4x4-unorm":"ASTC_4x4_RGBA",rgba8unorm:"RGBA32",rg11b10ufloat:"R11F_G11F_B10F"};function hf(t){let e=mf[t];if(e)return e;throw new Error(`Unsupported transcoderFormat: ${t}`)}var co=["basis","bc7","bc6h","astc","etc2","bc5","bc4","bc3","bc2","bc1","eac"],gf={extension:m.ResolveParser,test:t=>J(t,[".ktx",".ktx2",".dds"]),parse:t=>{let e,r=t.split(".");if(r.length>2){let o=r[r.length-2];co.includes(o)&&(e=o)}else e=r[r.length-1];return{resolution:parseFloat(We.RETINA_PREFIX.exec(t)?.[1]??"1"),format:e,src:t}}};var Fn,xf={extension:{type:m.DetectionParser,priority:2},test:async()=>!!(await it()||st()),add:async t=>{let e=await oo();return Fn=bf(e),[...Fn,...t]},remove:async t=>Fn?t.filter(e=>!(e in Fn)):t};function bf(t){let e=["basis"],r={};return t.forEach(o=>{let n=o.split("-")[0];n&&!r[n]&&(r[n]=!0,e.push(n))}),e.sort((o,n)=>{let s=co.indexOf(o),i=co.indexOf(n);return s===-1?1:i===-1?-1:s-i}),e}var _f=new Ir,vf=new Y,fo=new qe,Si=class{cull(e,r,o=!0){this._cullRecursive(e,r,o)}_cullRecursive(e,r,o=!0){if(e.cullable&&e.measurable&&e.includeInBuild)if(e.cullArea){fo.x=r.x,fo.y=r.y,fo.width=r.width,fo.height=r.height;let n=o?e.worldTransform:e.getGlobalTransform(vf,o);e.culled=!fo.intersects(e.cullArea,n)}else{let n=bs(e,o,_f);e.culled=n.x>=r.x+r.width||n.y>=r.y+r.height||n.x+n.width<=r.x||n.y+n.height<=r.y}else e.culled=!1;if(!(!e.cullableChildren||e.culled||!e.renderable||!e.measurable||!e.includeInBuild))for(let n=0;n<e.children.length;n++)this._cullRecursive(e.children[n],r,o)}};Si.shared=new Si;var Ai=Si;var Mn=class{static init(e){this._renderRef=this.render.bind(this),this.render=()=>{let r=e?.culler?.updateTransform!==!0;Ai.shared.cull(this.stage,this.renderer.screen,r),this.renderer.render({container:this.stage})}}static destroy(){this.render=this._renderRef}};Mn.extension={priority:10,type:m.Application,name:"culler"};var ul=ic(al(),1),Zf={createCanvas:(t,e)=>new OffscreenCanvas(t??0,e??0),createImage:()=>new Image,getCanvasRenderingContext2D:()=>OffscreenCanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>globalThis.location.href,getFontFaceSet:()=>globalThis.fonts,fetch:(t,e)=>fetch(t,e),parseXML:t=>new ul.DOMParser().parseFromString(t,"text/xml")};function Yn(t,e,r,o,n,s,i,a){let u=i-r,l=a-o,c=n-r,f=s-o,p=t-r,d=e-o,x=u*u+l*l,g=u*c+l*f,h=u*p+l*d,v=c*c+f*f,_=c*p+f*d,b=1/(x*v-g*g),y=(v*h-g*_)*b,S=(x*_-g*h)*b;return y>=0&&S>=0&&y+S<1}var Hi=class t{constructor(e=0,r=0,o=0,n=0,s=0,i=0){this.type="triangle",this.x=e,this.y=r,this.x2=o,this.y2=n,this.x3=s,this.y3=i}contains(e,r){let o=(this.x-this.x3)*(r-this.y3)-(this.y-this.y3)*(e-this.x3),n=(this.x2-this.x)*(r-this.y)-(this.y2-this.y)*(e-this.x);if(o<0!=n<0&&o!==0&&n!==0)return!1;let s=(this.x3-this.x2)*(r-this.y2)-(this.y3-this.y2)*(e-this.x2);return s===0||s<0==o+n<=0}strokeContains(e,r,o,n=.5){let s=o/2,i=s*s,{x:a,x2:u,x3:l,y:c,y2:f,y3:p}=this;return kr(e,r,a,c,u,f)<=i||kr(e,r,u,f,l,p)<=i||kr(e,r,l,p,a,c)<=i}clone(){return new t(this.x,this.y,this.x2,this.y2,this.x3,this.y3)}copyFrom(e){return this.x=e.x,this.y=e.y,this.x2=e.x2,this.y2=e.y2,this.x3=e.x3,this.y3=e.y3,this}copyTo(e){return e.copyFrom(this),e}getBounds(e){e||(e=new qe);let r=Math.min(this.x,this.x2,this.x3),o=Math.max(this.x,this.x2,this.x3),n=Math.min(this.y,this.y2,this.y3),s=Math.max(this.y,this.y2,this.y3);return e.x=r,e.y=n,e.width=o-r,e.height=s-n,e}};var Vi=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`;var jn=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;var ll=class cl extends ye{constructor(e){e={...cl.defaultOptions,...e};let r=ve.from({vertex:{source:jn,entryPoint:"mainVertex"},fragment:{source:jn,entryPoint:"mainFragment"}}),o=_e.from({vertex:Ft,fragment:Vi,name:"alpha-filter"}),{alpha:n,...s}=e,i=new se({uAlpha:{value:n,type:"f32"}});super({...s,gpuProgram:r,glProgram:o,resources:{alphaUniforms:i}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};ll.defaultOptions={alpha:1};var Jf=ll;var To={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]};var ep=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    %blur%","}"].join(`
`);function Xi(t){let e=To[t],r=e.length,o="",n="finalColor = ",s="    + ",i="texture(uTexture, vBlurTexCoords[%index%]) * %value%";for(let a=0;a<t;a++){let u=a===0?n:s,l=a<r?a:t-a-1,c=i.replace("%index%",a.toString()).replace("%value%",e[l].toString());o+=`${u}${c}
`}return ep.replace("%blur%",`${o};`).replace("%size%",t.toString())}var tp=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Wi(t,e){let r=Math.ceil(t/2),o=tp,n="",s;e?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let i=0;i<t;i++){let a=s.replace("%index%",i.toString());a=a.replace("%sampleIndex%",`${i-(r-1)}.0`),n+=a,n+=`
`}return o=o.replace("%blur%",n),o=o.replace("%size%",t.toString()),o=o.replace("%dimension%",e?"z":"w"),o}function zi(t,e){let r=Wi(e,t),o=Xi(e);return _e.from({vertex:r,fragment:o,name:`blur-${t?"horizontal":"vertical"}-pass-filter`})}var $i=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}
`;function qi(t,e){let r=To[e],o=r.length,n=[],s=[],i=[];for(let f=0;f<e;f++){n[f]=`@location(${f}) offset${f}: vec2<f32>,`,t?s[f]=`filteredCord + vec2(${f-o+1} * pixelStrength, 0.0),`:s[f]=`filteredCord + vec2(0.0, ${f-o+1} * pixelStrength),`;let p=f<o?f:e-f-1,d=r[p].toString();i[f]=`finalColor += textureSample(uTexture, uSampler, offset${f}) * ${d};`}let a=n.join(`
`),u=s.join(`
`),l=i.join(`
`),c=$i.replace("%blur-struct%",a).replace("%blur-vertex-out%",u).replace("%blur-fragment-in%",a).replace("%blur-sampling%",l).replace("%dimension%",t?"z":"w");return ve.from({vertex:{source:c,entryPoint:"mainVertex"},fragment:{source:c,entryPoint:"mainFragment"}})}var fl=class pl extends ye{constructor(e){e={...pl.defaultOptions,...e};let r=zi(e.horizontal,e.kernelSize),o=qi(e.horizontal,e.kernelSize);super({glProgram:r,gpuProgram:o,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this.legacy=e.legacy??!1,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._blurUniforms=this.resources.blurUniforms,this._uniforms=this._blurUniforms.uniforms}apply(e,r,o,n){this.legacy?this._applyLegacy(e,r,o,n):this._applyOptimized(e,r,o,n)}_applyLegacy(e,r,o,n){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,r,o,n);else{let s=Fe.getSameSizeTexture(r),i=r,a=s;this._state.blend=!1;let u=e.renderer.type===Ee.WEBGPU;for(let l=0;l<this.passes-1;l++){e.applyFilter(this,i,a,l===0?!0:u);let c=a;a=i,i=c}this._state.blend=!0,e.applyFilter(this,i,o,n),Fe.returnTexture(s)}}_applyOptimized(e,r,o,n){if(this._uniforms.uStrength=this._calculateInitialStrength(),this.passes===1)e.applyFilter(this,r,o,n);else{let s=Fe.getSameSizeTexture(r),i=r,a=s;this._state.blend=!1;let u=e.renderer,l=u.type===Ee.WEBGPU,c=l?u.renderPipes.uniformBatch:null;for(let f=0;f<this.passes-1;f++){c&&this.groups[1].setResource(c.getUboResource(this._blurUniforms),0),e.applyFilter(this,i,a,l);let p=a;a=i,i=p,this._uniforms.uStrength*=.5}c&&this.groups[1].setResource(c.getUboResource(this._blurUniforms),0),this._state.blend=!0,e.applyFilter(this,i,o,n),Fe.returnTexture(s)}}_calculateInitialStrength(){let e=1,r=.5;for(let o=1;o<this.passes;o++)e+=r*r,r*=.5;return this.strength/Math.sqrt(e)}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};fl.defaultOptions={strength:8,quality:4,kernelSize:5,legacy:!1};var Co=fl;var Kn=class extends ye{constructor(...e){let r=e[0]??{};typeof r=="number"&&(U(X,"BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"),r={strength:r},e[1]!==void 0&&(r.quality=e[1]),e[2]!==void 0&&(r.resolution=e[2]||"inherit"),e[3]!==void 0&&(r.kernelSize=e[3])),r={...Co.defaultOptions,...r};let{strength:o,strengthX:n,strengthY:s,quality:i,...a}=r;super({...a,compatibleRenderers:Ee.BOTH,resources:{}}),this._repeatEdgePixels=!1,this.blurXFilter=new Co({horizontal:!0,...r}),this.blurYFilter=new Co({horizontal:!1,...r}),this.quality=i,this.strengthX=n??o,this.strengthY=s??o,this.repeatEdgePixels=!1}apply(e,r,o,n){let s=Math.abs(this.blurXFilter.strength),i=Math.abs(this.blurYFilter.strength);if(s&&i){let a=Fe.getSameSizeTexture(r);this.blurXFilter.blendMode="normal",this.blurXFilter.apply(e,r,a,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,a,o,n),Fe.returnTexture(a)}else i?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(e,r,o,n)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(e,r,o,n))}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get strength(){if(this.strengthX!==this.strengthY)throw new Error("BlurFilter's strengthX and strengthY are different");return this.strengthX}set strength(e){this.blurXFilter.blur=this.blurYFilter.blur=e,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}get strengthX(){return this.blurXFilter.blur}set strengthX(e){this.blurXFilter.blur=e,this.updatePadding()}get strengthY(){return this.blurYFilter.blur}set strengthY(e){this.blurYFilter.blur=e,this.updatePadding()}get blur(){return U("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength}set blur(e){U("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength=e}get blurX(){return U("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX}set blurX(e){U("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX=e}get blurY(){return U("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY}set blurY(e){U("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY=e}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(e){this._repeatEdgePixels=e,this.updatePadding()}};Kn.defaultOptions={strength:8,quality:4,kernelSize:5,legacy:!1};var Yi=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`;var Qn=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
  };
  
fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`;var ji=class extends ye{constructor(e={}){let r=new se({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),o=ve.from({vertex:{source:Qn,entryPoint:"mainVertex"},fragment:{source:Qn,entryPoint:"mainFragment"}}),n=_e.from({vertex:Ft,fragment:Yi,name:"color-matrix-filter"});super({...e,gpuProgram:o,glProgram:n,resources:{colorMatrixUniforms:r}}),this.alpha=1}_loadMatrix(e,r=!1){if(r){let o=[...e];this._multiply(o,this.matrix,e),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=o}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=e;this.resources.colorMatrixUniforms.update()}_multiply(e,r,o){return e[0]=r[0]*o[0]+r[1]*o[5]+r[2]*o[10]+r[3]*o[15],e[1]=r[0]*o[1]+r[1]*o[6]+r[2]*o[11]+r[3]*o[16],e[2]=r[0]*o[2]+r[1]*o[7]+r[2]*o[12]+r[3]*o[17],e[3]=r[0]*o[3]+r[1]*o[8]+r[2]*o[13]+r[3]*o[18],e[4]=r[0]*o[4]+r[1]*o[9]+r[2]*o[14]+r[3]*o[19]+r[4],e[5]=r[5]*o[0]+r[6]*o[5]+r[7]*o[10]+r[8]*o[15],e[6]=r[5]*o[1]+r[6]*o[6]+r[7]*o[11]+r[8]*o[16],e[7]=r[5]*o[2]+r[6]*o[7]+r[7]*o[12]+r[8]*o[17],e[8]=r[5]*o[3]+r[6]*o[8]+r[7]*o[13]+r[8]*o[18],e[9]=r[5]*o[4]+r[6]*o[9]+r[7]*o[14]+r[8]*o[19]+r[9],e[10]=r[10]*o[0]+r[11]*o[5]+r[12]*o[10]+r[13]*o[15],e[11]=r[10]*o[1]+r[11]*o[6]+r[12]*o[11]+r[13]*o[16],e[12]=r[10]*o[2]+r[11]*o[7]+r[12]*o[12]+r[13]*o[17],e[13]=r[10]*o[3]+r[11]*o[8]+r[12]*o[13]+r[13]*o[18],e[14]=r[10]*o[4]+r[11]*o[9]+r[12]*o[14]+r[13]*o[19]+r[14],e[15]=r[15]*o[0]+r[16]*o[5]+r[17]*o[10]+r[18]*o[15],e[16]=r[15]*o[1]+r[16]*o[6]+r[17]*o[11]+r[18]*o[16],e[17]=r[15]*o[2]+r[16]*o[7]+r[17]*o[12]+r[18]*o[17],e[18]=r[15]*o[3]+r[16]*o[8]+r[17]*o[13]+r[18]*o[18],e[19]=r[15]*o[4]+r[16]*o[9]+r[17]*o[14]+r[18]*o[19]+r[19],e}brightness(e,r){let o=[e,0,0,0,0,0,e,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(o,r)}tint(e,r){let[o,n,s]=te.shared.setValue(e).toArray(),i=[o,0,0,0,0,0,n,0,0,0,0,0,s,0,0,0,0,0,1,0];this._loadMatrix(i,r)}greyscale(e,r){let o=[e,e,e,0,0,e,e,e,0,0,e,e,e,0,0,0,0,0,1,0];this._loadMatrix(o,r)}grayscale(e,r){this.greyscale(e,r)}blackAndWhite(e){let r=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(r,e)}hue(e,r){e=(e||0)/180*Math.PI;let o=Math.cos(e),n=Math.sin(e),s=Math.sqrt,i=1/3,a=s(i),u=o+(1-o)*i,l=i*(1-o)-a*n,c=i*(1-o)+a*n,f=i*(1-o)+a*n,p=o+i*(1-o),d=i*(1-o)-a*n,x=i*(1-o)-a*n,g=i*(1-o)+a*n,h=o+i*(1-o),v=[u,l,c,0,0,f,p,d,0,0,x,g,h,0,0,0,0,0,1,0];this._loadMatrix(v,r)}contrast(e,r){let o=(e||0)+1,n=-.5*(o-1),s=[o,0,0,0,n,0,o,0,0,n,0,0,o,0,n,0,0,0,1,0];this._loadMatrix(s,r)}saturate(e=0,r){let o=e*2/3+1,n=(o-1)*-.5,s=[o,n,n,0,0,n,o,n,0,0,n,n,o,0,0,0,0,0,1,0];this._loadMatrix(s,r)}desaturate(){this.saturate(-1)}negative(e){let r=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(r,e)}sepia(e){let r=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(r,e)}technicolor(e){let r=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(r,e)}polaroid(e){let r=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(r,e)}toBGR(e){let r=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(r,e)}kodachrome(e){let r=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(r,e)}browni(e){let r=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(r,e)}vintage(e){let r=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(r,e)}colorTone(e,r,o,n,s){e||(e=.2),r||(r=.15),o||(o=16770432),n||(n=3375104);let i=te.shared,[a,u,l]=i.setValue(o).toArray(),[c,f,p]=i.setValue(n).toArray(),d=[.3,.59,.11,0,0,a,u,l,e,0,c,f,p,r,0,a-c,u-f,l-p,0,0];this._loadMatrix(d,s)}night(e,r){e||(e=.1);let o=[e*-2,-e,0,0,0,-e,0,e,0,0,0,e,e*2,0,0,0,0,0,1,0];this._loadMatrix(o,r)}predator(e,r){let o=[11.224130630493164*e,-4.794486999511719*e,-2.8746118545532227*e,0*e,.40342438220977783*e,-3.6330697536468506*e,9.193157196044922*e,-2.951810836791992*e,0*e,-1.316135048866272*e,-3.2184197902679443*e,-4.2375030517578125*e,7.476448059082031*e,0*e,.8044459223747253*e,0,0,0,1,0];this._loadMatrix(o,r)}lsd(e){let r=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(r,e)}reset(){let e=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(e,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(e){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=e}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(e){this.resources.colorMatrixUniforms.uniforms.uAlpha=e}};var Ki=`
in vec2 vTextureCoord;
in vec2 vFilterUv;

out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;

uniform vec4 uInputClamp;
uniform highp vec4 uInputSize;
uniform mat2 uRotation;
uniform vec2 uScale;

void main()
{
    vec4 map = texture(uMapTexture, vFilterUv);
    
    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; 

    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));
}
`;var Qi=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterUv;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

uniform mat3 uFilterMatrix;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( void )
{
  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;
}


void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterUv = getFilterCoord();
}
`;var Zn=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct DisplacementUniforms {
  uFilterMatrix:mat3x3<f32>,
  uScale:vec2<f32>,
  uRotation:mat2x2<f32>
};



@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var map = textureSample(uMapTexture, uMapSampler, filterUv);

    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; 
   
    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
}`;var Zi=class extends ye{constructor(...e){let r=e[0];r instanceof ot&&(e[1]&&U(X,"DisplacementFilter now uses options object instead of params. {sprite, scale}"),r={sprite:r,scale:e[1]});let{sprite:o,scale:n,...s}=r,i=n??20;typeof i=="number"&&(i=new _t(i,i));let a=new se({uFilterMatrix:{value:new Y,type:"mat3x3<f32>"},uScale:{value:i,type:"vec2<f32>"},uRotation:{value:new Float32Array([0,0,0,0]),type:"mat2x2<f32>"}}),u=_e.from({vertex:Qi,fragment:Ki,name:"displacement-filter"}),l=ve.from({vertex:{source:Zn,entryPoint:"mainVertex"},fragment:{source:Zn,entryPoint:"mainFragment"}}),c=o.texture.source;super({...s,gpuProgram:l,glProgram:u,resources:{filterUniforms:a,uMapTexture:c,uMapSampler:c.style}}),this._sprite=r.sprite,this._sprite.renderable=!1}apply(e,r,o,n){let s=this.resources.filterUniforms.uniforms;e.calculateSpriteMatrix(s.uFilterMatrix,this._sprite);let i=this._sprite.worldTransform,a=Math.sqrt(i.a*i.a+i.b*i.b),u=Math.sqrt(i.c*i.c+i.d*i.d);a!==0&&u!==0&&(s.uRotation[0]=i.a/a,s.uRotation[1]=i.b/a,s.uRotation[2]=i.c/u,s.uRotation[3]=i.d/u),this.resources.uMapTexture=this._sprite.texture.source,e.applyFilter(this,r,o,n)}get scale(){return this.resources.filterUniforms.uniforms.uScale}};var Ji=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) *  uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    finalColor = color;
}
`;var Jn=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct NoiseUniforms {
  uNoise:f32,
  uSeed:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

fn rand(co:vec2<f32>) -> f32
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}



@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);
  
    
    var sample = textureSample(uTexture, uSampler, uv);
    var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);
    var diff = (randomValue - 0.5) * noiseUniforms.uNoise;
  
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (sample.a > 0.0) {
      sample.r /= sample.a;
      sample.g /= sample.a;
      sample.b /= sample.a;
    }

    sample.r += diff;
    sample.g += diff;
    sample.b += diff;

    // Premultiply alpha again.
    sample.r *= sample.a;
    sample.g *= sample.a;
    sample.b *= sample.a;
    
    return sample;
}`;var dl=class ml extends ye{constructor(e={}){e={...ml.defaultOptions,...e};let r=ve.from({vertex:{source:Jn,entryPoint:"mainVertex"},fragment:{source:Jn,entryPoint:"mainFragment"}}),o=_e.from({vertex:Ft,fragment:Ji,name:"noise-filter"}),{noise:n,seed:s,...i}=e;super({...i,gpuProgram:r,glProgram:o,resources:{noiseUniforms:new se({uNoise:{value:1,type:"f32"},uSeed:{value:1,type:"f32"}})}}),this.noise=n,this.seed=s??Math.random()}get noise(){return this.resources.noiseUniforms.uniforms.uNoise}set noise(e){this.resources.noiseUniforms.uniforms.uNoise=e}get seed(){return this.resources.noiseUniforms.uniforms.uSeed}set seed(e){this.resources.noiseUniforms.uniforms.uSeed=e}};dl.defaultOptions={noise:.5};var rp=dl;var op=`fn getLuminosity(c: vec3<f32>) -> f32 {
  return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
}

fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32> {
  let d: f32 = lum - getLuminosity(c);
  let newColor: vec3<f32> = c.rgb + vec3<f32>(d, d, d);

  // clip back into legal range
  let newLum: f32 = getLuminosity(newColor);
  let cMin: f32 = min(newColor.r, min(newColor.g, newColor.b));
  let cMax: f32 = max(newColor.r, max(newColor.g, newColor.b));

  let t1: f32 = newLum / (newLum - cMin);
  let t2: f32 = (1.0 - newLum) / (cMax - newLum);

  let finalColor = mix(vec3<f32>(newLum, newLum, newLum), newColor, select(select(1.0, t2, cMax > 1.0), t1, cMin < 0.0));

  return finalColor;
}

fn getSaturation(c: vec3<f32>) -> f32 {
  return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
}

// Set saturation if color components are sorted in ascending order.
fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32> {
  var result: vec3<f32>;
  if (cSorted.z > cSorted.x) {
    let newY = (((cSorted.y - cSorted.x) * s) / (cSorted.z - cSorted.x));
    result = vec3<f32>(0.0, newY, s);
  } else {
    result = vec3<f32>(0.0, 0.0, 0.0);
  }
  return vec3<f32>(result.x, result.y, result.z);
}

fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32> {
    var result: vec3<f32> = c;

    if (c.r <= c.g && c.r <= c.b) {
        if (c.g <= c.b) {
            result = setSaturationMinMidMax(result, s);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.r, result.b, result.g);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.r, temp.b, temp.g);
        }
    } else if (c.g <= c.r && c.g <= c.b) {
        if (c.r <= c.b) {
            var temp: vec3<f32> = vec3<f32>(result.g, result.r, result.b);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.g, temp.r, temp.b);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.g, result.b, result.r);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.g, temp.b, temp.r);
        }
    } else {
        if (c.r <= c.g) {
            var temp: vec3<f32> = vec3<f32>(result.b, result.r, result.g);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.b, temp.r, temp.g);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.b, result.g, result.r);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.b, temp.g, temp.r);
        }
    }

    return result;
}`;var hl=class gl{constructor(e){this._tick=()=>{this._destroyed||(this.timeout=setTimeout(this._processQueue,0))},this._processQueue=()=>{if(this._destroyed)return;let{queue:r}=this,o=0;for(;r.length&&o<gl.uploadsPerFrame;){let n=r.shift();this.uploadQueueItem(n),o++}r.length?Ve.system.addOnce(this._tick,this,vt.UTILITY):this._resolve()},this.renderer=e,this.queue=[],this.resolves=[]}getQueue(){return[...this.queue]}add(e){let r=Array.isArray(e)?e:[e];for(let o of r)o instanceof Z?this._addContainer(o):this.resolveQueueItem(o,this.queue);return this}_addContainer(e){this.resolveQueueItem(e,this.queue);for(let r of e.children)this._addContainer(r)}upload(e){return e&&this.add(e),new Promise(r=>{this.queue.length?(this.resolves.push(r),this.dedupeQueue(),Ve.system.addOnce(this._tick,this,vt.UTILITY)):r()})}dedupeQueue(){let e=Object.create(null),r=0;for(let o=0;o<this.queue.length;o++){let n=this.queue[o];e[n.uid]||(e[n.uid]=!0,this.queue[r++]=n)}this.queue.length=r}destroy(){this._destroyed=!0,clearTimeout(this.timeout)}_resolve(){let{resolves:e}=this,r=e.slice(0);e.length=0;for(let o of r)o()}};hl.uploadsPerFrame=4;var ea=hl;var xl=class bl extends Mt{constructor(...e){let r=e[0]??{};r instanceof Float32Array&&(U(X,"use new MeshGeometry({ positions, uvs, indices }) instead"),r={positions:r,uvs:e[1],indices:e[2]}),r={...bl.defaultOptions,...r};let o=r.positions||new Float32Array([0,0,1,0,1,1,0,1]),n=r.uvs;n||(r.positions?n=new Float32Array(o.length):n=new Float32Array([0,0,1,0,1,1,0,1]));let s=r.indices||new Uint32Array([0,1,2,0,2,3]),i=r.shrinkBuffersToFit,a=new Ct({data:o,label:"attribute-mesh-positions",shrinkToFit:i,usage:Ge.VERTEX|Ge.COPY_DST}),u=new Ct({data:n,label:"attribute-mesh-uvs",shrinkToFit:i,usage:Ge.VERTEX|Ge.COPY_DST}),l=new Ct({data:s,label:"index-mesh-buffer",shrinkToFit:i,usage:Ge.INDEX|Ge.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:8,offset:0},aUV:{buffer:u,format:"float32x2",stride:8,offset:0}},indexBuffer:l,topology:r.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};xl.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};var Ce=xl;var mt=class{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(e){this._topology=e}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(e){this.texture!==e&&(this.texture=e,this._textureMatrixUpdateId=-1)}get uvs(){let r=this.geometry.getBuffer("aUV"),o=r.data,n=o,s=this.texture.textureMatrix;return s.isSimple||(n=this._transformedUvs,(this._textureMatrixUpdateId!==s._updateID||this._uvUpdateId!==r._updateID)&&((!n||n.length<o.length)&&(n=this._transformedUvs=new Float32Array(o.length)),this._textureMatrixUpdateId=s._updateID,this._uvUpdateId=r._updateID,s.multiplyUvs(o,n))),n}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}};var Eo=class{destroy(){}},br=class{constructor(e,r){this.localUniforms=new se({uTransformMatrix:{value:new Y,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),this.localUniformsBindGroup=new Ts({0:this.localUniforms}),this.renderer=e,this._adaptor=r,this._adaptor.init()}validateRenderable(e){let r=this._getMeshData(e),o=r.batched,n=e.batched;if(r.batched=n,o!==n)return!0;if(n){let s=e._geometry;if(s.indices.length!==r.indexSize||s.positions.length!==r.vertexSize)return r.indexSize=s.indices.length,r.vertexSize=s.positions.length,!0;let i=this._getBatchableMesh(e);return i.texture.uid!==e._texture.uid&&(i._textureMatrixUpdateId=-1),!i._batcher.checkAndUpdateTexture(i,e._texture)}return!1}addRenderable(e,r){let o=this.renderer.renderPipes.batch,n=this._getMeshData(e);if(e.didViewUpdate&&(n.indexSize=e._geometry.indices?.length,n.vertexSize=e._geometry.positions?.length),n.batched){let s=this._getBatchableMesh(e);s.setTexture(e._texture),s.geometry=e._geometry,o.addToBatch(s,r)}else o.break(r),r.add(e)}updateRenderable(e){if(e.batched){let r=this._getBatchableMesh(e);r.setTexture(e._texture),r.geometry=e._geometry,r._batcher.updateElement(r)}}execute(e){if(!e.isRenderable)return;e.state.blend&&(e.state.blendMode=Ot(e.groupBlendMode,e.texture._source));let r=this.localUniforms;r.uniforms.uTransformMatrix=e.groupTransform,r.uniforms.uRound=this.renderer._roundPixels|e._roundPixels,r.update(),Gt(e.groupColorAlpha,r.uniforms.uColor,0),this._adaptor.execute(this,e)}_getMeshData(e){var r,o;return(r=e._gpuData)[o=this.renderer.uid]||(r[o]=new Eo),e._gpuData[this.renderer.uid].meshData||this._initMeshData(e)}_initMeshData(e){return e._gpuData[this.renderer.uid].meshData={batched:e.batched,indexSize:0,vertexSize:0},e._gpuData[this.renderer.uid].meshData}_getBatchableMesh(e){var r,o;return(r=e._gpuData)[o=this.renderer.uid]||(r[o]=new Eo),e._gpuData[this.renderer.uid].batchableMesh||this._initBatchableMesh(e)}_initBatchableMesh(e){let r=new mt;return r.renderable=e,r.setTexture(e._texture),r.transform=e.groupTransform,r.roundPixels=this.renderer._roundPixels|e._roundPixels,e._gpuData[this.renderer.uid].batchableMesh=r,r}destroy(){this.localUniforms=null,this.localUniformsBindGroup=null,this._adaptor.destroy(),this._adaptor=null,this.renderer=null}};br.extension={type:[m.WebGLPipes,m.WebGPUPipes],name:"mesh"};G.add(br);var Ne=class extends Me{constructor(...e){let r=e[0];r instanceof Mt&&(U(X,"Mesh: use new Mesh({ geometry, shader }) instead"),r={geometry:r,shader:e[1]},e[3]&&(U(X,"Mesh: drawMode argument has been removed, use geometry.topology instead"),r.geometry.topology=e[3]));let{geometry:o,shader:n,texture:s,roundPixels:i,state:a,...u}=r;super({label:"Mesh",...u}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=n??null,this.texture=s??n?.texture??M.WHITE,this.state=a??Tt.for2d(),this._geometry=o,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=i??!1}get material(){return U(X,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(e){this._shader!==e&&(this._shader=e,this.onViewUpdate())}get shader(){return this._shader}set geometry(e){this._geometry!==e&&(this._geometry?.off("update",this.onViewUpdate,this),e.on("update",this.onViewUpdate,this),this._geometry=e,this.onViewUpdate())}get geometry(){return this._geometry}set texture(e){e||(e=M.EMPTY);let r=this._texture;r!==e&&(r&&r.dynamic&&r.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=e),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||(this.state.data&12)!==0?!1:this._geometry instanceof Ce?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(e){let{x:r,y:o}=e;if(!this.bounds.containsPoint(r,o))return!1;let n=this.geometry.getBuffer("aPosition").data,s=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){let i=this.geometry.getIndex().data,a=i.length;for(let u=0;u+2<a;u+=s){let l=i[u]*2,c=i[u+1]*2,f=i[u+2]*2;if(Yn(r,o,n[l],n[l+1],n[c],n[c+1],n[f],n[f+1]))return!0}}else{let i=n.length/2;for(let a=0;a+2<i;a+=s){let u=a*2,l=(a+1)*2,c=(a+2)*2;if(Yn(r,o,n[u],n[u+1],n[l],n[l+1],n[c],n[c+1]))return!0}}return!1}destroy(e){if(super.destroy(e),typeof e=="boolean"?e:e?.texture){let o=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(o)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}};var wo=class t extends ot{constructor(...e){let r=e[0];Array.isArray(e[0])&&(r={textures:e[0],autoUpdate:e[1]});let{animationSpeed:o=1,autoPlay:n=!1,autoUpdate:s=!0,loop:i=!0,onComplete:a=null,onFrameChange:u=null,onLoop:l=null,textures:c,updateAnchor:f=!1,...p}=r,[d]=c;super({...p,texture:d instanceof M?d:d.texture}),this._textures=null,this._durations=null,this._autoUpdate=s,this._isConnectedToTicker=!1,this.animationSpeed=o,this.loop=i,this.updateAnchor=f,this.onComplete=a,this.onFrameChange=u,this.onLoop=l,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=c,n&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Ve.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Ve.shared.add(this.update,this,vt.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(e){this.stop(),this.currentFrame=e}gotoAndPlay(e){this.currentFrame=e,this.play()}update(e){if(!this._playing)return;let r=e.deltaTime,o=this.animationSpeed*r,n=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=o/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];let i=Math.sign(this.animationSpeed*r);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*i,this._currentTime+=i;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=o;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):n!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<n||this.animationSpeed<0&&this.currentFrame>n)&&this.onLoop(),this._updateTexture())}_updateTexture(){let e=this.currentFrame;this._previousFrame!==e&&(this._previousFrame=e,this.texture=this._textures[e],this.updateAnchor&&this.texture.defaultAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(e=!1){if(typeof e=="boolean"?e:e?.texture){let o=typeof e=="boolean"?e:e?.textureSource;this._textures.forEach(n=>{this.texture!==n&&n.destroy(o)})}this._textures=[],this._durations=null,this.stop(),super.destroy(e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(e){let r=[];for(let o=0;o<e.length;++o)r.push(M.from(e[o]));return new t(r)}static fromImages(e){let r=[];for(let o=0;o<e.length;++o)r.push(M.from(e[o]));return new t(r)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(e){if(e[0]instanceof M)this._textures=e,this._durations=null;else{this._textures=[],this._durations=[];for(let r=0;r<e.length;r++)this._textures.push(e[r].texture),this._durations.push(e[r].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let e=Math.floor(this._currentTime)%this._textures.length;return e<0&&(e+=this._textures.length),e}set currentFrame(e){if(e<0||e>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`);let r=this.currentFrame;this._currentTime=e,r!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Ve.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Ve.shared.add(this.update,this),this._isConnectedToTicker=!0))}};var Bo=class{constructor({matrix:e,observer:r}={}){this.dirty=!0,this._matrix=e??new Y,this.observer=r,this.position=new ke(this,0,0),this.scale=new ke(this,1,1),this.pivot=new ke(this,0,0),this.skew=new ke(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){let e=this._matrix;return this.dirty&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this.dirty=!1),e}_onUpdate(e){this.dirty=!0,e===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(e){e.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this.skew))}};var es=new Y,ht=new Y,Ke=[new _t,new _t,new _t,new _t],_r=class{constructor(e){this._renderer=e}validateRenderable(e){return!1}addRenderable(e,r){this._renderer.renderPipes.batch.break(r),r.add(e)}updateRenderable(e){}execute(e){let r=this._renderer,o=r.canvasContext,n=o.activeContext;n.save(),o.setBlendMode(e.groupBlendMode);let s=r.globalUniforms.globalUniformData?.worldColor??4294967295,i=e.groupColorAlpha,a=(s>>>24&255)/255,u=(i>>>24&255)/255,l=r.filter?.alphaMultiplier??1,c=a*u*l;if(c<=0){n.restore();return}n.globalAlpha=c;let f=s&16777215,p=i&16777215,d=Pt(Rt(p,f)),x=e.texture,g=St.getTintedPattern(x,d),h=e.width,v=e.height,_=e.groupTransform,b=x.source._resolution??x.source.resolution??1;ht.copyFrom(e._tileTransform.matrix),e.applyAnchorToTexture||ht.translate(-e.anchor.x*h,-e.anchor.y*v);let y=ht.tx,S=ht.ty;ht.scale(1/b,1/b),ht.tx=y,ht.ty=S,es.identity(),es.prepend(ht),es.prepend(_);let C=r._roundPixels|e._roundPixels;o.setContextTransform(es,C===1),n.fillStyle=g;let T=e.anchor.x*-h,P=e.anchor.y*-v;Ke[0].set(T,P),Ke[1].set(T+h,P),Ke[2].set(T+h,P+v),Ke[3].set(T,P+v);for(let A=0;A<4;A++)ht.applyInverse(Ke[A],Ke[A]);n.beginPath(),n.moveTo(Ke[0].x,Ke[0].y);for(let A=1;A<4;A++)n.lineTo(Ke[A].x,Ke[A].y);n.closePath(),n.fill(),n.restore()}destroy(){this._renderer=null}};_r.extension={type:[m.CanvasPipes],name:"tilingSprite"};var ta={name:"tiling-bit",vertex:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `},fragment:{header:`
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,main:`

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            }

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `}},ra={name:"tiling-bit",vertex:{header:`
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;

        `,main:`
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `},fragment:{header:`
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,main:`

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0

        `}};var oa,na,Do=class extends Ut{constructor(){oa??(oa=Xr({name:"tiling-sprite-shader",bits:[Ds,ta,zr]})),na??(na=Wr({name:"tiling-sprite-shader",bits:[Rs,ra,$r]}));let e=new se({uMapCoord:{value:new Y,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new Y,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:"vec4<f32>"}});super({glProgram:na,gpuProgram:oa,resources:{localUniforms:new se({uTransformMatrix:{value:new Y,type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),tilingUniforms:e,uTexture:M.EMPTY.source,uSampler:M.EMPTY.source.style}})}updateUniforms(e,r,o,n,s,i){let a=this.resources.tilingUniforms,u=i.width,l=i.height,c=i.textureMatrix,f=a.uniforms.uTextureTransform;f.set(o.a*u/e,o.b*u/r,o.c*l/e,o.d*l/r,o.tx/e,o.ty/r),f.invert(),a.uniforms.uMapCoord=c.mapCoord,a.uniforms.uClampFrame=c.uClampFrame,a.uniforms.uClampOffset=c.uClampOffset,a.uniforms.uTextureTransform=f,a.uniforms.uSizeAnchor[0]=e,a.uniforms.uSizeAnchor[1]=r,a.uniforms.uSizeAnchor[2]=n,a.uniforms.uSizeAnchor[3]=s,i&&(this.resources.uTexture=i.source,this.resources.uSampler=i.source.style)}};var Ro=class extends Ce{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}};function sa(t,e){let r=t.anchor.x,o=t.anchor.y;e[0]=-r*t.width,e[1]=-o*t.height,e[2]=(1-r)*t.width,e[3]=-o*t.height,e[4]=(1-r)*t.width,e[5]=(1-o)*t.height,e[6]=-r*t.width,e[7]=(1-o)*t.height}function ia(t,e,r,o){let n=0,s=t.length/(e||2),i=o.a,a=o.b,u=o.c,l=o.d,c=o.tx,f=o.ty;for(r*=e;n<s;){let p=t[r],d=t[r+1];t[r]=i*p+u*d+c,t[r+1]=a*p+l*d+f,r+=e,n++}}function aa(t,e){let r=t.texture,o=r.frame.width,n=r.frame.height,s=0,i=0;t.applyAnchorToTexture&&(s=t.anchor.x,i=t.anchor.y),e[0]=e[6]=-s,e[2]=e[4]=1-s,e[1]=e[3]=-i,e[5]=e[7]=1-i;let a=t._tileTransform.matrix,u=Y.shared;u.set(a.a*o/t.width,a.b*o/t.height,a.c*n/t.width,a.d*n/t.height,a.tx/t.width,a.ty/t.height),u.invert(),ia(e,2,0,u)}var ts=new Ro,rs=class{constructor(){this.canBatch=!0,this.geometry=new Ce({indices:ts.indices.slice(),positions:ts.positions.slice(),uvs:ts.uvs.slice()})}destroy(){this.geometry.destroy(),this.shader?.destroy()}},vr=class{constructor(e){this._state=Tt.default2d,this._renderer=e,this._managedTilingSprites=new Ie({renderer:e,type:"renderable",name:"tilingSprite"})}validateRenderable(e){let r=this._getTilingSpriteData(e),o=r.canBatch;this._updateCanBatch(e);let n=r.canBatch;if(n&&n===o){let{batchableMesh:s}=r;return!s._batcher.checkAndUpdateTexture(s,e.texture)}return o!==n}addRenderable(e,r){let o=this._renderer.renderPipes.batch;this._updateCanBatch(e);let n=this._getTilingSpriteData(e),{geometry:s,canBatch:i}=n;if(i){n.batchableMesh||(n.batchableMesh=new mt);let a=n.batchableMesh;e.didViewUpdate&&(this._updateBatchableMesh(e),a.geometry=s,a.renderable=e,a.transform=e.groupTransform,a.setTexture(e._texture)),a.roundPixels=this._renderer._roundPixels|e._roundPixels,o.addToBatch(a,r)}else o.break(r),n.shader||(n.shader=new Do),this.updateRenderable(e),r.add(e)}execute(e){let r=this._renderer,{shader:o}=this._getTilingSpriteData(e);o.groups[0]=r.globalUniforms.bindGroup;let n=o.resources.localUniforms.uniforms;n.uTransformMatrix=e.groupTransform,n.uRound=r._roundPixels|e._roundPixels,Gt(e.groupColorAlpha,n.uColor,0),this._state.blendMode=Ot(e.groupBlendMode,e.texture._source),r.encoder.draw({geometry:ts,shader:o,state:this._state})}updateRenderable(e){let r=this._getTilingSpriteData(e),{canBatch:o}=r;if(o){let{batchableMesh:n}=r;e.didViewUpdate&&this._updateBatchableMesh(e),n._batcher.updateElement(n)}else if(e.didViewUpdate){let{shader:n}=r;n.updateUniforms(e.width,e.height,e._tileTransform.matrix,e.anchor.x,e.anchor.y,e.texture)}}_getTilingSpriteData(e){return e._gpuData[this._renderer.uid]||this._initTilingSpriteData(e)}_initTilingSpriteData(e){let r=new rs;return r.renderable=e,e._gpuData[this._renderer.uid]=r,this._managedTilingSprites.add(e),r}_updateBatchableMesh(e){let r=this._getTilingSpriteData(e),{geometry:o}=r,n=e.texture.source.style;n.addressMode!=="repeat"&&(n.addressMode="repeat",n.update()),aa(e,o.uvs),sa(e,o.positions)}destroy(){this._managedTilingSprites.destroy(),this._renderer=null}_updateCanBatch(e){let r=this._getTilingSpriteData(e),o=e.texture,n=!0;return this._renderer.type===Ee.WEBGL&&(n=this._renderer.context.supports.nonPowOf2wrapping),r.canBatch=o.textureMatrix.isSimple&&(n||o.source.isPowerOfTwo),r.canBatch}};vr.extension={type:[m.WebGLPipes,m.WebGPUPipes],name:"tilingSprite"};G.add(_r);G.add(vr);var _l=class os extends Me{constructor(...e){let r=e[0]||{};r instanceof M&&(r={texture:r}),e.length>1&&(U(X,"use new TilingSprite({ texture, width:100, height:100 }) instead"),r.width=e[1],r.height=e[2]),r={...os.defaultOptions,...r};let{texture:o,anchor:n,tilePosition:s,tileScale:i,tileRotation:a,width:u,height:l,applyAnchorToTexture:c,roundPixels:f,...p}=r??{};super({label:"TilingSprite",...p}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new ke({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=c,this.texture=o,this._width=u??o.width,this._height=l??o.height,this._tileTransform=new Bo({observer:{_onUpdate:()=>this.onViewUpdate()}}),n&&(this.anchor=n),this.tilePosition=s,this.tileScale=i,this.tileRotation=a,this.roundPixels=f??!1}static from(e,r={}){return typeof e=="string"?new os({texture:z.get(e),...r}):new os({texture:e,...r})}get uvRespectAnchor(){return U(X,"uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(e){U(X,"uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=e}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(e){this._texture.textureMatrix.clampMargin=e}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get tilePosition(){return this._tileTransform.position}set tilePosition(e){this._tileTransform.position.copyFrom(e)}get tileScale(){return this._tileTransform.scale}set tileScale(e){typeof e=="number"?this._tileTransform.scale.set(e):this._tileTransform.scale.copyFrom(e)}set tileRotation(e){this._tileTransform.rotation=e}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(e){e||(e=M.EMPTY);let r=this._texture;r!==e&&(r&&r.dynamic&&r.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get texture(){return this._texture}set width(e){this._width=e,this.onViewUpdate()}get width(){return this._width}set height(e){this._height=e,this.onViewUpdate()}get height(){return this._height}setSize(e,r){typeof e=="object"&&(r=e.height??e.width,e=e.width),this._width=e,this._height=r??e,this.onViewUpdate()}getSize(e){return e||(e={}),e.width=this._width,e.height=this._height,e}updateBounds(){let e=this._bounds,r=this._anchor,o=this._width,n=this._height;e.minX=-r._x*o,e.maxX=e.minX+o,e.minY=-r._y*n,e.maxY=e.minY+n}containsPoint(e){let r=this._width,o=this._height,n=-r*this._anchor._x,s=0;return e.x>=n&&e.x<=n+r&&(s=-o*this._anchor._y,e.y>=s&&e.y<=s+o)}destroy(e=!1){if(super.destroy(e),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof e=="boolean"?e:e?.texture){let o=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(o)}this._texture=null}};_l.defaultOptions={texture:M.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};var ua=_l;var gt=class extends Me{constructor(e,r){let{text:o,resolution:n,style:s,anchor:i,width:a,height:u,roundPixels:l,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=r,this.text=o??"",this.style=s,this.resolution=n??null,this.allowChildren=!1,this._anchor=new ke({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=l??!1,a!==void 0&&(this.width=a),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){e||(e={}),this._style?.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,r){typeof e=="object"?(r=e.height??e.width,e=e.width):r??(r=e),e!==void 0&&this._setWidth(e,this.bounds.width),r!==void 0&&this._setHeight(r,this.bounds.height)}containsPoint(e){let r=this.bounds.width,o=this.bounds.height,n=-r*this.anchor.x,s=0;return e.x>=n&&e.x<=n+r&&(s=-o*this.anchor.y,e.y>=s&&e.y<=s+o)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}destroy(e=!1){this._style?.off("update",this.onViewUpdate,this),super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e?.style)&&this._style.destroy(e),this._style=null,this._text=null}get styleKey(){return`${this._text}:${this._style.styleKey}:${this._resolution}`}};function Ht(t,e){let r=t[0]??{};return(typeof r=="string"||t[1])&&(U(X,`use new ${e}({ text: "hi!", style }) instead`),r={text:r,style:t[1]}),r}var Vt=null,xt=null;function np(t,e){Vt||(Vt=I.get().createCanvas(256,128),xt=Vt.getContext("2d",{willReadFrequently:!0}),xt.globalCompositeOperation="copy",xt.globalAlpha=1),(Vt.width<t||Vt.height<e)&&(Vt.width=Yo(t),Vt.height=Yo(e))}function vl(t,e,r){for(let o=0,n=4*r*e;o<e;++o,n+=4)if(t[n+3]!==0)return!1;return!0}function yl(t,e,r,o,n){let s=4*e;for(let i=o,a=o*s+4*r;i<=n;++i,a+=s)if(t[a+3]!==0)return!1;return!0}function la(...t){let e=t[0];e.canvas||(e={canvas:t[0],resolution:t[1]});let{canvas:r}=e,o=Math.min(e.resolution??1,1),n=e.width??r.width,s=e.height??r.height,i=e.output;if(np(n,s),!xt)throw new TypeError("Failed to get canvas 2D context");xt.drawImage(r,0,0,n,s,0,0,n*o,s*o);let u=xt.getImageData(0,0,n,s).data,l=0,c=0,f=n-1,p=s-1;for(;c<s&&vl(u,n,c);)++c;if(c===s)return qe.EMPTY;for(;vl(u,n,p);)--p;for(;yl(u,n,l,c,p);)++l;for(;yl(u,n,f,c,p);)--f;return++f,++p,xt.globalCompositeOperation="source-over",xt.strokeRect(l,c,f-l,p-c),xt.globalCompositeOperation="copy",i??(i=new qe),i.set(l/o,c/o,(f-l)/o,(p-c)/o),i}var Sl=new qe;function yr(t){let e=0;for(let r=0;r<t.length;r++)t.charCodeAt(r)===32&&e++;return e}var ca=class{getCanvasAndContext(e){let{text:r,style:o,resolution:n=1}=e,s=o._getFinalPadding(),i=K.measureText(r||" ",o),a=Math.ceil(Math.ceil(Math.max(1,i.width)+s*2)*n),u=Math.ceil(Math.ceil(Math.max(1,i.height)+s*2)*n),l=At.getOptimalCanvasAndContext(a,u);this._renderTextToCanvas(o,s,n,l,i);let c=o.trim?la({canvas:l.canvas,width:a,height:u,resolution:1,output:Sl}):Sl.set(0,0,a,u);return{canvasAndContext:l,frame:c}}returnCanvasAndContext(e){At.returnCanvasAndContext(e)}_renderTextToCanvas(e,r,o,n,s){if(s.runsByLine&&s.runsByLine.length>0){this._renderTaggedTextToCanvas(s,e,r,o,n);return}let{canvas:i,context:a}=n,u=Ko(e),l=s.lines,c=s.lineHeight,f=s.lineWidths,p=s.maxLineWidth,d=s.fontProperties,x=i.height;if(a.resetTransform(),a.scale(o,o),a.textBaseline=e.textBaseline,e._stroke?.width){let S=e._stroke;a.lineWidth=S.width,a.miterLimit=S.miterLimit,a.lineJoin=S.join,a.lineCap=S.cap}a.font=u;let g,h,v=e.dropShadow?2:1,b=(e._stroke?.width??0)/2,y=(c-d.fontSize)/2;c-d.fontSize<0&&(y=0);for(let S=0;S<v;++S){let C=e.dropShadow&&S===0,T=C?Math.ceil(Math.max(1,x)+r*2):0,P=T*o;if(C)this._setupDropShadow(a,e,o,P);else{let A=e._gradientBounds,k=e._gradientOffset;if(A){let B={width:A.width,height:A.height,lineHeight:A.height,lines:s.lines};this._setFillAndStrokeStyles(a,e,B,r,b,k?.x??0,k?.y??0)}else k?this._setFillAndStrokeStyles(a,e,s,r,b,k.x,k.y):this._setFillAndStrokeStyles(a,e,s,r,b);a.shadowColor="rgba(0,0,0,0)"}for(let A=0;A<l.length;A++){g=b,h=b+A*c+d.ascent+y,g+=this._getAlignmentOffset(f[A],p,e.align);let k=0;if(e.align==="justify"&&e.wordWrap&&A<l.length-1){let B=yr(l[A]);B>0&&(k=(p-f[A])/B)}e._stroke?.width&&this._drawLetterSpacing(l[A],e,n,g+r,h+r-T,!0,k),e._fill!==void 0&&this._drawLetterSpacing(l[A],e,n,g+r,h+r-T,!1,k)}}}_renderTaggedTextToCanvas(e,r,o,n,s){let{canvas:i,context:a}=s,{runsByLine:u,lineWidths:l,maxLineWidth:c,lineAscents:f,lineHeights:p,hasDropShadow:d}=e,x=i.height;a.resetTransform(),a.scale(n,n),a.textBaseline=r.textBaseline;let g=d?2:1,h=r._stroke?.width??0;for(let b of u)for(let y of b){let S=y.style._stroke?.width??0;S>h&&(h=S)}let v=h/2,_=[];for(let b=0;b<u.length;b++){let y=u[b],S=[];for(let C of y){let T=Ko(C.style);a.font=T,S.push({width:K._measureText(C.text,C.style.letterSpacing,a),font:T})}_.push(S)}for(let b=0;b<g;++b){let y=d&&b===0,S=y?Math.ceil(Math.max(1,x)+o*2):0,C=S*n;y||(a.shadowColor="rgba(0,0,0,0)");let T=v;for(let P=0;P<u.length;P++){let A=u[P],k=l[P],B=f[P],re=p[P],ge=_[P],j=v;j+=this._getAlignmentOffset(k,c,r.align);let H=0;if(r.align==="justify"&&r.wordWrap&&P<u.length-1){let V=0;for(let L of A)V+=yr(L.text);V>0&&(H=(c-k)/V)}let E=T+B,F=j+o;for(let V=0;V<A.length;V++){let L=A[V],{width:Q,font:me}=ge[V];if(a.font=me,a.textBaseline=L.style.textBaseline,L.style._stroke?.width){let O=L.style._stroke;if(a.lineWidth=O.width,a.miterLimit=O.miterLimit,a.lineJoin=O.join,a.lineCap=O.cap,y)if(L.style.dropShadow)this._setupDropShadow(a,L.style,n,C);else{let W=yr(L.text);F+=Q+W*H;continue}else{let W=K.measureFont(me),ae=L.style.lineHeight||W.fontSize,ue={width:Q,height:ae,lineHeight:ae,lines:[L.text]};a.strokeStyle=er(O,a,ue,o*2,F-o,T)}this._drawLetterSpacing(L.text,L.style,s,F,E+o-S,!0,H)}let ne=yr(L.text);F+=Q+ne*H}F=j+o;for(let V=0;V<A.length;V++){let L=A[V],{width:Q,font:me}=ge[V];if(a.font=me,a.textBaseline=L.style.textBaseline,L.style._fill!==void 0){if(y)if(L.style.dropShadow)this._setupDropShadow(a,L.style,n,C);else{let O=yr(L.text);F+=Q+O*H;continue}else{let O=K.measureFont(me),W=L.style.lineHeight||O.fontSize,ae={width:Q,height:W,lineHeight:W,lines:[L.text]};a.fillStyle=er(L.style._fill,a,ae,o*2,F-o,T)}this._drawLetterSpacing(L.text,L.style,s,F,E+o-S,!1,H)}let ne=yr(L.text);F+=Q+ne*H}T+=re}}}_setFillAndStrokeStyles(e,r,o,n,s,i=0,a=0){if(e.fillStyle=r._fill?er(r._fill,e,o,n*2,i,a):null,r._stroke?.width){let u=s+n*2;e.strokeStyle=er(r._stroke,e,o,u,i,a)}}_setupDropShadow(e,r,o,n){e.fillStyle="black",e.strokeStyle="black";let s=r.dropShadow,i=s.color,a=s.alpha;e.shadowColor=te.shared.setValue(i).setAlpha(a).toRgbaString();let u=s.blur*o,l=s.distance*o;e.shadowBlur=u,e.shadowOffsetX=Math.cos(s.angle)*l,e.shadowOffsetY=Math.sin(s.angle)*l+n}_getAlignmentOffset(e,r,o){return o==="right"?r-e:o==="center"?(r-e)/2:0}_drawLetterSpacing(e,r,o,n,s,i=!1,a=0){let{context:u}=o,l=r.letterSpacing,c=!1;if(K.experimentalLetterSpacingSupported&&(K.experimentalLetterSpacing?(u.letterSpacing=`${l}px`,u.textLetterSpacing=`${l}px`,c=!0):(u.letterSpacing="0px",u.textLetterSpacing="0px")),(l===0||c)&&a===0){i?u.strokeText(e,n,s):u.fillText(e,n,s);return}if(a!==0&&(l===0||c)){let g=e.split(" "),h=n,v=u.measureText(" ").width;for(let _=0;_<g.length;_++)i?u.strokeText(g[_],h,s):u.fillText(g[_],h,s),h+=u.measureText(g[_]).width+v+a;return}let f=n,p=K.graphemeSegmenter(e),d=u.measureText(e).width,x=0;for(let g=0;g<p.length;++g){let h=p[g];i?u.strokeText(h,f,s):u.fillText(h,f,s);let v="";for(let _=g+1;_<p.length;++_)v+=p[_];x=u.measureText(v).width,f+=d-x+l,h===" "&&(f+=a),d=x}}},Pe=new ca;function Sr(t,e){let{texture:r,bounds:o}=t,n=e._style._getFinalPadding();vs(o,e._anchor,r);let s=e._anchor._x*n*2,i=e._anchor._y*n*2;o.minX-=n-s,o.minY-=n-i,o.maxX-=n-s,o.maxY-=n-i}var Po=class extends qr{};var Ar=class{constructor(e){this._renderer=e,e.runners.resolutionChange.add(this),this._managedTexts=new Ie({renderer:e,type:"renderable",onUnload:this.onTextUnload.bind(this),name:"canvasText"})}resolutionChange(){for(let e in this._managedTexts.items){let r=this._managedTexts.items[e];r?._autoResolution&&r.onViewUpdate()}}validateRenderable(e){let r=this._getGpuText(e),o=e.styleKey;return r.currentKey!==o?!0:e._didTextUpdate}addRenderable(e,r){let o=this._getGpuText(e);if(e._didTextUpdate){let n=e._autoResolution?this._renderer.resolution:e.resolution;(o.currentKey!==e.styleKey||e._resolution!==n)&&this._updateGpuText(e),e._didTextUpdate=!1,Sr(o,e)}this._renderer.renderPipes.batch.addToBatch(o,r)}updateRenderable(e){let r=this._getGpuText(e);r._batcher.updateElement(r)}_updateGpuText(e){let r=this._getGpuText(e);r.texture&&this._renderer.canvasText.decreaseReferenceCount(r.currentKey),e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,r.texture=this._renderer.canvasText.getManagedTexture(e),r.currentKey=e.styleKey}_getGpuText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){let r=new Po;return r.currentKey="--",r.renderable=e,r.transform=e.groupTransform,r.bounds={minX:0,maxX:1,minY:0,maxY:0},r.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=r,this._managedTexts.add(e),r}onTextUnload(e){let r=e._gpuData[this._renderer.uid];if(!r)return;let{canvasText:o}=this._renderer;o.getReferenceCount(r.currentKey)>0?o.decreaseReferenceCount(r.currentKey):r.texture&&o.returnTexture(r.texture)}destroy(){this._managedTexts.destroy(),this._renderer=null}};Ar.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"text"};var Xt=class{constructor(e,r){this._activeTextures={},this._renderer=e,this._retainCanvasContext=r}getTexture(e,r,o,n){typeof e=="string"&&(U("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),e={text:e,style:o,resolution:r}),e.style instanceof ie||(e.style=new ie(e.style)),e.textureStyle instanceof He||(e.textureStyle=new He(e.textureStyle)),typeof e.text!="string"&&(e.text=e.text.toString());let{text:s,style:i,textureStyle:a,autoGenerateMipmaps:u}=e,l=e.resolution??this._renderer.resolution,{frame:c,canvasAndContext:f}=Pe.getCanvasAndContext({text:s,style:i,resolution:l}),p=Hr(f.canvas,c.width,c.height,l,u);if(a&&(p.source.style=a),i.trim&&(c.pad(i.padding),p.frame.copyFrom(c),p.frame.scale(1/l),p.updateUvs()),i.filters){let d=this._applyFilters(p,i.filters);return this.returnTexture(p),Pe.returnCanvasAndContext(f),d}return this._renderer.texture.initSource(p._source),this._retainCanvasContext||Pe.returnCanvasAndContext(f),p}returnTexture(e){let r=e.source,o=r.resource;if(this._retainCanvasContext&&o?.getContext){let n=o.getContext("2d");n&&Pe.returnCanvasAndContext({canvas:o,context:n})}r.resource=null,r.uploadMethodId="unknown",r.alphaMode="no-premultiply-alpha",Fe.returnTexture(e,!0)}renderTextToCanvas(){U("8.10.0","CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead")}getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;let r=e.styleKey;if(this._activeTextures[r])return this._increaseReferenceCount(r),this._activeTextures[r].texture;let o=this.getTexture({text:e.text,style:e.style,resolution:e._resolution,textureStyle:e.textureStyle,autoGenerateMipmaps:e.autoGenerateMipmaps});return this._activeTextures[r]={texture:o,usageCount:1},o}decreaseReferenceCount(e){let r=this._activeTextures[e];r&&(r.usageCount--,r.usageCount===0&&(this.returnTexture(r.texture),this._activeTextures[e]=null))}getReferenceCount(e){return this._activeTextures[e]?.usageCount??0}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}_applyFilters(e,r){let o=this._renderer.renderTarget.renderTarget,n=this._renderer.filter.generateFilteredTexture({texture:e,filters:r});return this._renderer.renderTarget.bind({target:o,clear:!1}),n}destroy(){this._renderer=null;for(let e in this._activeTextures)this._activeTextures[e]&&this.returnTexture(this._activeTextures[e].texture);this._activeTextures=null}};var Tr=class extends Xt{constructor(e){super(e,!0)}};Tr.extension={type:[m.CanvasSystem],name:"canvasText"};var Cr=class extends Xt{constructor(e){super(e,!1)}};Cr.extension={type:[m.WebGLSystem,m.WebGPUSystem],name:"canvasText"};G.add(Tr);G.add(Cr);G.add(Ar);var Qe=class extends gt{constructor(...e){let r=Ht(e,"Text");super(r,ie),this.renderPipeId="text",r.textureStyle&&(this.textureStyle=r.textureStyle instanceof He?r.textureStyle:new He(r.textureStyle)),this.autoGenerateMipmaps=r.autoGenerateMipmaps??xe.defaultOptions.autoGenerateMipmaps}updateBounds(){let e=this._bounds,r=this._anchor,o=0,n=0;if(this._style.trim){let{frame:s,canvasAndContext:i}=Pe.getCanvasAndContext({text:this.text,style:this._style,resolution:1});Pe.returnCanvasAndContext(i),o=s.width,n=s.height}else{let s=K.measureText(this._text,this._style);o=s.width,n=s.height}e.minX=-r._x*o,e.maxX=e.minX+o,e.minY=-r._y*n,e.maxY=e.minY+n}};var Uo=class extends ea{resolveQueueItem(e,r){return e instanceof Z?this.resolveContainerQueueItem(e,r):e instanceof xe||e instanceof M?r.push(e.source):e instanceof nt&&r.push(e),null}resolveContainerQueueItem(e,r){e instanceof ot||e instanceof ua||e instanceof Ne?r.push(e.texture.source):e instanceof Qe?r.push(e):e instanceof Yr?r.push(e.context):e instanceof wo&&e.textures.forEach(o=>{o.source?r.push(o.source):r.push(o.texture.source)})}resolveGraphicsContextQueueItem(e){this.renderer.graphicsContext.getGpuContext(e);let{instructions:r}=e;for(let o of r)if(o.action==="texture"){let{image:n}=o.data;return n.source}else if(o.action==="fill"){let{texture:n}=o.data.style;return n.source}return null}};var ns=class extends Yr{destroy(){this.context.customShader&&this.context.customShader.destroy(),super.destroy()}},Wt=class{constructor(e){this._renderer=e,this._managedBitmapTexts=new Ie({renderer:e,type:"renderable",priority:-2,name:"bitmapText"})}validateRenderable(e){let r=this._getGpuBitmapText(e);return this._renderer.renderPipes.graphics.validateRenderable(r)}addRenderable(e,r){let o=this._getGpuBitmapText(e);Al(e,o),e._didTextUpdate&&(e._didTextUpdate=!1,this._updateContext(e,o)),this._renderer.renderPipes.graphics.addRenderable(o,r),o.context.customShader&&this._updateDistanceField(e)}updateRenderable(e){let r=this._getGpuBitmapText(e);Al(e,r),this._renderer.renderPipes.graphics.updateRenderable(r),r.context.customShader&&this._updateDistanceField(e)}_updateContext(e,r){let{context:o}=r,n=It.getFont(e.text,e._style);if(o.clear(),n.distanceField.type!=="none"){let v=this.getSdfShader();v&&(o.customShader||(o.customShader=v))}let s=K.graphemeSegmenter(e.text),i=e._style,a=n.baseLineOffset,u=jr(s,i,n,!0),l=i.padding,c=u.scale,f=u.width,p=u.height+u.offsetY;i._stroke&&(f+=i._stroke.width/c,p+=i._stroke.width/c),o.translate(-e._anchor._x*f-l,-e._anchor._y*p-l).scale(c,c);let d=n.applyFillAsTint?i._fill.color:16777215,x=n.fontMetrics.fontSize,g=n.lineHeight;i.lineHeight&&(x=i.fontSize/c,g=i.lineHeight/c);let h=(g-x)/2;h-n.baseLineOffset<0&&(h=0);for(let v=0;v<u.lines.length;v++){let _=u.lines[v];for(let b=0;b<_.charPositions.length;b++){let y=_.chars[b],S=n.chars[y];if(S?.texture){let C=S.texture;o.texture(C,d,Math.round(_.charPositions[b]+S.xOffset),Math.round(a+S.yOffset+h),C.orig.width,C.orig.height)}}a+=g}}_getGpuBitmapText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){let r=new ns;return e._gpuData[this._renderer.uid]=r,this._updateContext(e,r),this._managedBitmapTexts.add(e),r}_updateDistanceField(e){let r=this._getGpuBitmapText(e).context,o=e._style.fontFamily,n=z.get(`${o}-bitmap`),{a:s,b:i,c:a,d:u}=e.groupTransform,l=Math.sqrt(s*s+i*i),c=Math.sqrt(a*a+u*u),f=(Math.abs(l)+Math.abs(c))/2,p=n.baseRenderedFontSize/e._style.fontSize,d=f*n.distanceField.range*(1/p);r.customShader.resources.localUniforms.uniforms.uDistance=d}destroy(){this._managedBitmapTexts.destroy(),this._renderer=null,this._managedBitmapTexts=null}};function Al(t,e){e.groupTransform=t.groupTransform,e.groupColorAlpha=t.groupColorAlpha,e.groupColor=t.groupColor,e.groupBlendMode=t.groupBlendMode,e.globalDisplayStatus=t.globalDisplayStatus,e.groupTransform=t.groupTransform,e.localDisplayStatus=t.localDisplayStatus,e.groupAlpha=t.groupAlpha,e._roundPixels=t._roundPixels}var Er=class extends Wt{getSdfShader(){return null}};Er.extension={type:[m.CanvasPipes],name:"bitmapText"};var fa={name:"local-uniform-msdf-bit",vertex:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `},fragment:{header:`
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,main:`
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, vColor, localUniforms.uDistance));
        `}},pa={name:"local-uniform-msdf-bit",vertex:{header:`
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `},fragment:{header:`
            uniform float uDistance;
         `,main:`
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        `}};var da={name:"msdf-bit",fragment:{header:`
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {

                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;

            }
        `}},ma={name:"msdf-bit",fragment:{header:`
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {

                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);

                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);

                return coverage;
            }
        `}};var ha,ga,Fo=class extends Ut{constructor(e){let r=new se({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new Y,type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}});ha??(ha=Xr({name:"sdf-shader",bits:[Cs,ws(e),fa,da,zr]})),ga??(ga=Wr({name:"sdf-shader",bits:[Es,Bs(e),pa,ma,$r]})),super({glProgram:ga,gpuProgram:ha,resources:{localUniforms:r,batchSamplers:Us(e)}})}};var wr=class extends Wt{getSdfShader(){return new Fo(this._renderer.limits.maxBatchableTextures)}};wr.extension={type:[m.WebGLPipes,m.WebGPUPipes],name:"bitmapText"};G.add(Er);G.add(wr);var zt=class extends gt{constructor(...e){var r;let o=Ht(e,"BitmapText");o.style??(o.style=o.style||{}),(r=o.style).fill??(r.fill=16777215),super(o,ie),this.renderPipeId="bitmapText"}_onTouch(e){this._gcLastUsed=e;for(let r in this._gpuData)this._gpuData[r]?._onTouch(e)}updateBounds(){let e=this._bounds,r=this._anchor,o=It.measureText(this.text,this._style),n=o.scale,s=o.offsetY*n,i=o.width*n,a=o.height*n,u=this._style._stroke;u&&(i+=u.width,a+=u.width),e.minX=-r._x*i,e.maxX=e.minX+i,e.minY=-r._y*(a+s),e.maxY=e.minY+a}set resolution(e){e!==null&&q("[BitmapText] dynamically updating the resolution is not supported. Resolution should be managed by the BitmapFont.")}get resolution(){return this._resolution}};function ba(t){let e=t._stroke,r=t._fill,s=[`div { ${[`color: ${te.shared.setValue(r.color).setAlpha(r.alpha??1).toHexa()}`,`font-size: ${t.fontSize}px`,`font-family: ${t.fontFamily}`,`font-weight: ${t.fontWeight}`,`font-style: ${t.fontStyle}`,`font-variant: ${t.fontVariant}`,`letter-spacing: ${t.letterSpacing}px`,`text-align: ${t.align}`,`padding: ${t.padding}px`,`white-space: ${t.whiteSpace==="pre"&&t.wordWrap?"pre-wrap":t.whiteSpace}`,...t.lineHeight?[`line-height: ${t.lineHeight}px`]:[],...t.wordWrap?[`word-break: ${t.breakWords?"break-word":"normal"}`,`max-width: ${t.wordWrapWidth}px`]:[],...e?[El(e)]:[],...t.dropShadow?[xa(t.dropShadow)]:[],...t.cssOverrides].join(";")} }`];return sp(t.tagStyles,s),s.join(" ")}function xa(t){let e={...t},r=te.shared.setValue(e.color).setAlpha(e.alpha??1).toHexa(),o=Math.round(Math.cos(e.angle)*e.distance),n=Math.round(Math.sin(e.angle)*e.distance),s=`${o}px ${n}px`;return e.blur>0?`text-shadow: ${s} ${e.blur}px ${r}`:`text-shadow: ${s} ${r}`}function El(t){let e=te.shared.setValue(t.color).setAlpha(t.alpha??1).toHexa();return[`-webkit-text-stroke-width: ${t.width}px`,`-webkit-text-stroke-color: ${e}`,`text-stroke-width: ${t.width}px`,`text-stroke-color: ${e}`,"paint-order: stroke"].join(";")}var Tl={fontSize:"font-size: {{VALUE}}px",fontFamily:"font-family: {{VALUE}}",fontWeight:"font-weight: {{VALUE}}",fontStyle:"font-style: {{VALUE}}",fontVariant:"font-variant: {{VALUE}}",letterSpacing:"letter-spacing: {{VALUE}}px",align:"text-align: {{VALUE}}",padding:"padding: {{VALUE}}px",whiteSpace:"white-space: {{VALUE}}",lineHeight:"line-height: {{VALUE}}px",wordWrapWidth:"max-width: {{VALUE}}px"},Cl={fill:t=>`color: ${te.shared.setValue(t).toHexa()}`,breakWords:t=>`word-break: ${t?"break-all":"normal"}`,stroke:El,dropShadow:t=>t===!0?xa(ie.defaultDropShadow):t&&typeof t=="object"?xa({...ie.defaultDropShadow,...t}):""};function sp(t,e){for(let r in t){let o=t[r],n=[];for(let s in o)Cl[s]?n.push(Cl[s](o[s])):Tl[s]&&n.push(Tl[s].replace("{{VALUE}}",o[s]));e.push(`${r} { ${n.join(";")} }`)}}var Mo=class t extends ie{constructor(e={}){super(e),this._cssOverrides=[],this.cssOverrides=e.cssOverrides??[],this.tagStyles=e.tagStyles??{}}get tagStyles(){return this._tagStyles}set tagStyles(e){this._tagStyles!==e&&(this._tagStyles=e??{},this.update())}set cssOverrides(e){this._cssOverrides=e instanceof Array?e:[e],this.update()}get cssOverrides(){return this._cssOverrides}update(){this._cssStyle=null,super.update()}clone(){return new t({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow?{...this.dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,cssOverrides:this.cssOverrides,tagStyles:{...this.tagStyles}})}get cssStyle(){return this._cssStyle||(this._cssStyle=ba(this)),this._cssStyle}addOverride(...e){let r=e.filter(o=>!this.cssOverrides.includes(o));r.length>0&&(this.cssOverrides.push(...r),this.update())}removeOverride(...e){let r=e.filter(o=>this.cssOverrides.includes(o));r.length>0&&(this.cssOverrides=this.cssOverrides.filter(o=>!r.includes(o)),this.update())}set fill(e){typeof e!="string"&&typeof e!="number"&&q("[HTMLTextStyle] only color fill is not supported by HTMLText"),super.fill=e}set stroke(e){e&&typeof e!="string"&&typeof e!="number"&&q("[HTMLTextStyle] only color stroke is not supported by HTMLText"),super.stroke=e}};var wl="http://www.w3.org/2000/svg",Bl="http://www.w3.org/1999/xhtml",$t=class{constructor(){this.svgRoot=document.createElementNS(wl,"svg"),this.foreignObject=document.createElementNS(wl,"foreignObject"),this.domElement=document.createElementNS(Bl,"div"),this.styleElement=document.createElementNS(Bl,"style");let{foreignObject:e,svgRoot:r,styleElement:o,domElement:n}=this;e.setAttribute("width","10000"),e.setAttribute("height","10000"),e.style.overflow="hidden",r.appendChild(e),e.appendChild(o),e.appendChild(n),this.image=I.get().createImage()}destroy(){this.svgRoot.remove(),this.foreignObject.remove(),this.styleElement.remove(),this.domElement.remove(),this.image.src="",this.image.remove(),this.svgRoot=null,this.foreignObject=null,this.styleElement=null,this.domElement=null,this.image=null,this.canvasAndContext=null}};var Dl;function Oo(t,e,r,o){o||(o=Dl||(Dl=new $t));let{domElement:n,styleElement:s,svgRoot:i}=o;n.innerHTML=`<style>${e.cssStyle};</style><div style='padding:0'>${t}</div>`,n.setAttribute("style","transform-origin: top left; display: inline-block"),r&&(s.textContent=r),document.body.appendChild(i);let a=n.scrollWidth,u=n.scrollHeight;if(i.remove(),e.dropShadow){let{distance:c,angle:f,blur:p}=e.dropShadow,d=Math.abs(Math.round(Math.cos(f)*c)),x=Math.abs(Math.round(Math.sin(f)*c));a+=d+p,u+=x+p}let l=e.padding*2;return{width:a-l,height:u-l}}var Go=class extends qr{constructor(){super(...arguments),this.generatingTexture=!1,this.currentKey="--"}destroy(){this.texturePromise=null,this.generatingTexture=!1,this.currentKey="--",super.destroy()}};var Br=class{constructor(e){this._renderer=e,e.runners.resolutionChange.add(this),this._managedTexts=new Ie({renderer:e,type:"renderable",onUnload:this.onTextUnload.bind(this),name:"htmlText"})}resolutionChange(){for(let e in this._managedTexts.items){let r=this._managedTexts.items[e];r?._autoResolution&&r.onViewUpdate()}}validateRenderable(e){let r=this._getGpuText(e),o=e.styleKey;return r.currentKey!==o}addRenderable(e,r){let o=this._getGpuText(e);if(e._didTextUpdate){let n=e._autoResolution?this._renderer.resolution:e.resolution;(o.currentKey!==e.styleKey||e.resolution!==n)&&this._updateGpuText(e).catch(s=>{console.error(s)}),e._didTextUpdate=!1,Sr(o,e)}this._renderer.renderPipes.batch.addToBatch(o,r)}updateRenderable(e){let r=this._getGpuText(e);r._batcher.updateElement(r)}async _updateGpuText(e){e._didTextUpdate=!1;let r=this._getGpuText(e);if(r.generatingTexture)return;let o=r.texturePromise;r.texturePromise=null,r.generatingTexture=!0,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;let n=this._renderer.htmlText.getTexturePromise(e);o&&(n=n.finally(()=>{this._renderer.htmlText.decreaseReferenceCount(r.currentKey),this._renderer.htmlText.returnTexturePromise(o)})),r.texturePromise=n,r.currentKey=e.styleKey,r.texture=await n;let s=e.renderGroup||e.parentRenderGroup;s&&(s.structureDidChange=!0),r.generatingTexture=!1,Sr(r,e)}_getGpuText(e){return e._gpuData[this._renderer.uid]||this.initGpuText(e)}initGpuText(e){let r=new Go;return r.renderable=e,r.transform=e.groupTransform,r.texture=M.EMPTY,r.bounds={minX:0,maxX:1,minY:0,maxY:0},r.roundPixels=this._renderer._roundPixels|e._roundPixels,e._resolution=e._autoResolution?this._renderer.resolution:e.resolution,e._gpuData[this._renderer.uid]=r,this._managedTexts.add(e),r}onTextUnload(e){let r=e._gpuData[this._renderer.uid];if(!r)return;let{htmlText:o}=this._renderer;o.getReferenceCount(r.currentKey)===null?o.returnTexturePromise(r.texturePromise):o.decreaseReferenceCount(r.currentKey)}destroy(){this._managedTexts.destroy(),this._renderer=null}};Br.extension={type:[m.WebGLPipes,m.WebGPUPipes,m.CanvasPipes],name:"htmlText"};function _a(t,e){let r=e.fontFamily,o=[],n={},s=/font-family:([^;"\s]+)/g,i=t.match(s);function a(u){n[u]||(o.push(u),n[u]=!0)}if(Array.isArray(r))for(let u=0;u<r.length;u++)a(r[u]);else a(r);i&&i.forEach(u=>{let l=u.split(":")[1].trim();a(l)});for(let u in e.tagStyles){let l=e.tagStyles[u].fontFamily;a(l)}return o}async function va(t){let r=await(await I.get().fetch(t)).blob(),o=new FileReader;return await new Promise((s,i)=>{o.onloadend=()=>s(o.result),o.onerror=i,o.readAsDataURL(r)})}async function ya(t,e){let r=await va(e);return`@font-face {
        font-family: "${t.fontFamily}";
        font-weight: ${t.fontWeight};
        font-style: ${t.fontStyle};
        src: url('${r}');
    }`}var ss=new Map;async function Sa(t){let e=t.filter(r=>z.has(`${r}-and-url`)).map(r=>{if(!ss.has(r)){let{entries:o}=z.get(`${r}-and-url`),n=[];o.forEach(s=>{let i=s.url,u=s.faces.map(l=>({weight:l.weight,style:l.style}));n.push(...u.map(l=>ya({fontWeight:l.weight,fontStyle:l.style,fontFamily:r},i)))}),ss.set(r,Promise.all(n).then(s=>s.join(`
`)))}return ss.get(r)});return(await Promise.all(e)).join(`
`)}function Aa(t,e,r,o,n){let{domElement:s,styleElement:i,svgRoot:a}=n;s.innerHTML=`<style>${e.cssStyle}</style><div style='padding:0;'>${t}</div>`,s.setAttribute("style",`transform: scale(${r});transform-origin: top left; display: inline-block`),i.textContent=o;let{width:u,height:l}=n.image;return a.setAttribute("width",u.toString()),a.setAttribute("height",l.toString()),new XMLSerializer().serializeToString(a)}function Ta(t,e){let r=At.getOptimalCanvasAndContext(t.width,t.height,e),{context:o}=r;return o.clearRect(0,0,t.width,t.height),o.drawImage(t,0,0),r}function Ca(t,e,r){return new Promise(async o=>{r&&await new Promise(n=>setTimeout(n,100)),t.onload=()=>{o()},t.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`,t.crossOrigin="anonymous"})}var Dr=class{constructor(e){this._activeTextures={},this._renderer=e,this._createCanvas=e.type===Ee.WEBGPU}getTexture(e){return this.getTexturePromise(e)}getManagedTexture(e){let r=e.styleKey;if(this._activeTextures[r])return this._increaseReferenceCount(r),this._activeTextures[r].promise;let o=this._buildTexturePromise(e).then(n=>(this._activeTextures[r].texture=n,n));return this._activeTextures[r]={texture:null,promise:o,usageCount:1},o}getReferenceCount(e){return this._activeTextures[e]?.usageCount??null}_increaseReferenceCount(e){this._activeTextures[e].usageCount++}decreaseReferenceCount(e){let r=this._activeTextures[e];r&&(r.usageCount--,r.usageCount===0&&(r.texture?this._cleanUp(r.texture):r.promise.then(o=>{r.texture=o,this._cleanUp(r.texture)}).catch(()=>{q("HTMLTextSystem: Failed to clean texture")}),this._activeTextures[e]=null))}getTexturePromise(e){return this._buildTexturePromise(e)}async _buildTexturePromise(e){let{text:r,style:o,resolution:n,textureStyle:s,autoGenerateMipmaps:i}=e,a=qo.get($t),u=_a(r,o),l=await Sa(u),c=Oo(r,o,l,a),f=Math.ceil(Math.ceil(Math.max(1,c.width)+o.padding*2)*n),p=Math.ceil(Math.ceil(Math.max(1,c.height)+o.padding*2)*n),d=a.image,x=2;d.width=(f|0)+x,d.height=(p|0)+x;let g=Aa(r,o,n,l,a);await Ca(d,g,Os()&&u.length>0);let h=d,v;this._createCanvas&&(v=Ta(d,n));let _=Hr(v?v.canvas:h,d.width-x,d.height-x,n,i);return s&&(_.source.style=s),this._createCanvas&&(this._renderer.texture.initSource(_.source),At.returnCanvasAndContext(v)),qo.return(a),_}returnTexturePromise(e){e.then(r=>{this._cleanUp(r)}).catch(()=>{q("HTMLTextSystem: Failed to clean texture")})}_cleanUp(e){Fe.returnTexture(e,!0),e.source.resource=null,e.source.uploadMethodId="unknown"}destroy(){this._renderer=null;for(let e in this._activeTextures)this._activeTextures[e]&&this.returnTexturePromise(this._activeTextures[e].promise);this._activeTextures=null}};Dr.extension={type:[m.WebGLSystem,m.WebGPUSystem,m.CanvasSystem],name:"htmlText"};G.add(Dr);G.add(Br);var Io=class extends gt{constructor(...e){let r=Ht(e,"HtmlText");super(r,Mo),this.renderPipeId="htmlText",r.textureStyle&&(this.textureStyle=r.textureStyle instanceof He?r.textureStyle:new He(r.textureStyle)),this.autoGenerateMipmaps=r.autoGenerateMipmaps??xe.defaultOptions.autoGenerateMipmaps}updateBounds(){let e=this._bounds,r=this._anchor,o=Oo(this.text,this._style),{width:n,height:s}=o;e.minX=-r._x*n,e.maxX=e.minX+n,e.minY=-r._y*s,e.maxY=e.minY+s}get text(){return this._text}set text(e){let r=this._sanitiseText(e.toString());super.text=r}_sanitiseText(e){return this._removeInvalidHtmlTags(e.replace(/<br>/gi,"<br/>").replace(/<hr>/gi,"<hr/>").replace(/&nbsp;/gi,"&#160;"))}_removeInvalidHtmlTags(e){let r=/<[^>]*?(?=<|$)/g;return e.replace(r,"")}};var Lo=class extends Uo{uploadQueueItem(e){e instanceof xe?this.uploadTextureSource(e):e instanceof Qe?this.uploadText(e):e instanceof Io?this.uploadHTMLText(e):e instanceof zt?this.uploadBitmapText(e):e instanceof nt&&this.uploadGraphicsContext(e)}uploadTextureSource(e){this.renderer.texture.initSource(e)}uploadText(e){this.renderer.renderPipes.text.initGpuText(e)}uploadBitmapText(e){this.renderer.renderPipes.bitmapText.initGpuText(e)}uploadHTMLText(e){this.renderer.renderPipes.htmlText.initGpuText(e)}uploadGraphicsContext(e){this.renderer.graphicsContext.getGpuContext(e);let{instructions:r}=e;for(let o of r)if(o.action==="texture"){let{image:n}=o.data;this.uploadTextureSource(n.source)}else if(o.action==="fill"){let{texture:n}=o.data.style;this.uploadTextureSource(n.source)}return null}};var is=class extends Lo{destroy(){super.destroy(),clearTimeout(this.timeout),this.renderer=null,this.queue=null,this.resolves=null}};is.extension={type:[m.WebGLSystem,m.WebGPUSystem],name:"prepare"};function ip(t){let e=[],r=0;for(let o=0;o<t;o++)e[r]={texture:{sampleType:"float",viewDimension:"2d",multisampled:!1},binding:r,visibility:GPUShaderStage.FRAGMENT},r++,e[r]={sampler:{type:"filtering"},binding:r,visibility:GPUShaderStage.FRAGMENT},r++;return e}function ap(t){let e={},r=0;for(let o=0;o<t;o++)e[`textureSource${o+1}`]=r++,e[`textureSampler${o+1}`]=r++;return e}function up(t){let e=t.split(/([\n{}])/g).map(n=>n.trim()).filter(n=>n.length),r="";return e.map(n=>{let s=r+n;return n==="{"?r+="    ":n==="}"&&(r=r.substr(0,r.length-4),s=r+n),s}).join(`
`)}var Ea=class{constructor(e){this.priority=0,this.pipe="scissorMask",this.mask=e,this.mask.renderable=!1,this.mask.measurable=!1}addBounds(e,r){ys(this.mask,e,r)}addLocalBounds(e,r){Ss(this.mask,e,r)}containsPoint(e,r){let o=this.mask;return r(o,e)}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask=null)}destroy(){this.reset()}};function lp(t){return t=t.replaceAll("texture2D","texture").replaceAll("gl_FragColor","finalColor").replaceAll("varying","in"),t=`
        out vec4 finalColor;
    ${t}
    `,t}var cp={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function fp(t){return cp[t]}var Rl={POINTS:"point-list",LINES:"line-list",LINE_STRIP:"line-strip",TRIANGLES:"triangle-list",TRIANGLE_STRIP:"triangle-strip"},pp=new Proxy(Rl,{get(t,e){return U(X,`DRAW_MODES.${e} is deprecated, use '${Rl[e]}' instead`),t[e]}});var as=(t=>(t.CLAMP="clamp-to-edge",t.REPEAT="repeat",t.MIRRORED_REPEAT="mirror-repeat",t))(as||{}),dp=new Proxy(as,{get(t,e){return U(X,`DRAW_MODES.${e} is deprecated, use '${as[e]}' instead`),t[e]}}),us=(t=>(t.NEAREST="nearest",t.LINEAR="linear",t))(us||{}),mp=new Proxy(us,{get(t,e){return U(X,`DRAW_MODES.${e} is deprecated, use '${us[e]}' instead`),t[e]}});var Rr=class t extends xe{constructor(e){let{faces:r,...o}=e;t._validateFaces(r);let n=r.right,s=n.resolution,i=n.format,a=n.alphaMode,u=["resolution","format","alphaMode","dimensions","viewDimension"].filter(l=>o[l]!==void 0);u.length&&q(`[CubeTextureSource] Ignoring option(s) [${u.join(", ")}]; these are derived from face sources.`),super({...o,resource:r,width:n.width,height:n.height,dimensions:"2d",viewDimension:"cube",arrayLayerCount:6,resolution:s,format:i,alphaMode:a}),this.uploadMethodId="cube",this.faces=r;for(let l of Object.keys(r)){let c=r[l];c.on("update",this._onFaceUpdate,this),c.on("resize",this._onFaceResize,this),c.on("unload",this._onFaceUpdate,this)}}destroy(){let e=this.faces;if(e)for(let r of Object.keys(e)){let o=e[r];o.off("update",this._onFaceUpdate,this),o.off("resize",this._onFaceResize,this),o.off("unload",this._onFaceUpdate,this)}super.destroy()}_onFaceUpdate(){this.emit("update",this)}_onFaceResize(e){t._validateFaces(this.faces),this.resize(e.width,e.height,e.resolution)}static _validateFaces(e){if(!e.right||!e.left||!e.top||!e.bottom||!e.front||!e.back)throw new Error("[CubeTextureSource] Requires { left, right, top, bottom, front, back } faces.");let r=e.right,o=r.pixelWidth,n=r.pixelHeight,s=r.format,i=r.alphaMode,a=r.resolution;for(let u of Object.keys(e)){let l=e[u];if(l.pixelWidth!==o||l.pixelHeight!==n)throw new Error(`[CubeTextureSource] Face '${String(u)}' has a different size. All faces must match.`);if(l.format!==s)throw new Error(`[CubeTextureSource] Face '${String(u)}' has a different format. All faces must match.`);if(l.alphaMode!==i)throw new Error(`[CubeTextureSource] Face '${String(u)}' has a different alphaMode. All faces must match.`);if(l.resolution!==a)throw new Error(`[CubeTextureSource] Face '${String(u)}' has a different resolution. All faces must match.`)}}};var wa=["left","right","top","bottom","front","back"];function hp(t,e){let r=e?{...e}:{};delete r.label;let o=Object.keys(r).sort(),n=o.length?`|${o.map(i=>`${i}=${String(r[i])}`).join("&")}`:"";return`cube:${wa.map(i=>t[i]).join(",")}${n}`}var Ba=class t extends xs{constructor(e){super(),this.uid=Gr("cubeTexture"),this.destroyed=!1;let{label:r,source:o}=e;this.label=r,this.source=o,this.source.label=this.label??this.source.label}static from(e,r=!1){if(e instanceof Rr)return new t({source:e});let{faces:o,...n}=e,s=null,i=wa.every(c=>typeof o[c]=="string");if(!r&&i&&(s=hp(o,n),z.has(s)))return z.get(s);let a=c=>c.isTexture?c:M.from(c),u={};for(let c of wa)u[c]=a(o[c]).source;let l=new t({source:new Rr({...n,faces:u}),label:n.label});return s&&(z.set(s,l),l.once("destroy",()=>{z.has(s)&&z.remove(s)})),l}destroy(e=!1){this.destroyed||(this.destroyed=!0,e&&this.source.destroy(),this.emit("destroy",this),this.removeAllListeners())}};var Da=Object.create(null),Ra=Object.create(null);function gp(t){var e;if(t.type===Ee.WEBGPU)return Ra[e=t.uid]||(Ra[e]=t.gpu.device.createTexture({label:"ExternalSource placeholder",size:{width:1,height:1},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST})),Ra[t.uid];if(!Da[t.uid]){let r=t.gl,o=r.createTexture();r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,null),Da[t.uid]=o}return Da[t.uid]}var Pa=class extends xe{constructor({resource:e,renderer:r,label:o,width:n,height:s}){e||(e=gp(r)),n||(n=n??e?.width??1),s||(s=s??e?.height??1),super({resource:e,width:n,height:s,label:o,autoGarbageCollect:!1}),this._renderer=r,this._initGpuData(e)}static test(e){return globalThis.GPUTexture&&e instanceof GPUTexture||globalThis.WebGLTexture&&e instanceof WebGLTexture}_validateTexture(e){let r=this._renderer,o=!!r.gpu,n=globalThis.GPUTexture&&e instanceof GPUTexture,s=globalThis.WebGLTexture&&e instanceof WebGLTexture;if(o&&s)throw new Error("Cannot use WebGLTexture with a WebGPU renderer");if(!o&&n)throw new Error("Cannot use GPUTexture with a WebGL renderer");if(!o){let i=r.gl;if(i&&!i.isTexture(e))throw new Error("WebGLTexture does not belong to this renderer's WebGL context")}}_initGpuData(e){let r=this._renderer;this._validateTexture(e),r.gpu?this._gpuData[r.uid]=new Fs(e):this._gpuData[r.uid]=new Ms(e)}updateGPUTexture(e,r,o){let n=this._renderer,s=this._gpuData[n.uid];if(this.resource=e,n.gpu){this._validateTexture(e);let i=s;i.gpuTexture!==e&&(i.gpuTexture=e,i.textureView=null,i.textureViews=Object.create(null),this._resourceId=Gr("resource"),this.emit("change",this));let a=r??e.width,u=o??e.height;this.resize(a,u)}else{this._validateTexture(e);let i=s;i.texture=e,r!==void 0&&o!==void 0&&this.resize(r,o)}this.emit("update",this)}destroy(){let e=this._renderer;delete this._gpuData[e.uid],super.destroy()}};var Ua=class{constructor(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}set(e,r,o){let n=r.width,s=r.height;if(o){let i=e.width/2/n,a=e.height/2/s,u=e.x/n+i,l=e.y/s+a;o=be.add(o,be.NW),this.x0=u+i*be.uX(o),this.y0=l+a*be.uY(o),o=be.add(o,2),this.x1=u+i*be.uX(o),this.y1=l+a*be.uY(o),o=be.add(o,2),this.x2=u+i*be.uX(o),this.y2=l+a*be.uY(o),o=be.add(o,2),this.x3=u+i*be.uX(o),this.y3=l+a*be.uY(o)}else this.x0=e.x/n,this.y0=e.y/s,this.x1=(e.x+e.width)/n,this.y1=e.y/s,this.x2=(e.x+e.width)/n,this.y2=(e.y+e.height)/s,this.x3=e.x/n,this.y3=(e.y+e.height)/s;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3}toString(){return`[pixi.js/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`}};function xp(t){let e=t.toString(),r=e.indexOf("{"),o=e.lastIndexOf("}");if(r===-1||o===-1)throw new Error("getFunctionBody: No body found in function definition");return e.slice(r+1,o).trim()}function bp(t,e){return U("8.7.0","Use container.getFastGlobalBounds() instead"),t.getFastGlobalBounds(!0,e)}var Fa=class extends Me{constructor(e){typeof e=="function"&&(e={render:e});let{render:r,...o}=e;super({label:"RenderContainer",...o}),this.renderPipeId="customRender",this.batched=!1,r&&(this.render=r),this.containsPoint=e.containsPoint??(()=>!1),this.addBounds=e.addBounds??(()=>!1)}updateBounds(){this._bounds.clear(),this.addBounds(this._bounds)}render(e){}};function _p(t,e,r){U("8.7.0","Please use container.collectRenderables instead.");let o=r.renderPipes?r:r.batch.renderer;return t.collectRenderables(e,o,null)}function vp(t,e){let r=e._scale,o=e._pivot,n=e._position,s=r._x,i=r._y,a=o._x,u=o._y;t.a=e._cx*s,t.b=e._sx*s,t.c=e._cy*i,t.d=e._sy*i,t.tx=n._x-(a*t.a+u*t.c),t.ty=n._y-(a*t.b+u*t.d)}function yp(t,e,r){let o=t.a,n=t.b,s=t.c,i=t.d,a=t.tx,u=t.ty,l=e.a,c=e.b,f=e.c,p=e.d;r.a=o*l+n*f,r.b=o*c+n*p,r.c=s*l+i*f,r.d=s*c+i*p,r.tx=a*l+u*f+e.tx,r.ty=a*c+u*p+e.ty}var No=class{constructor(){this._gradients=[],this._nextId=0}addStyle(e){if(!(e.fill instanceof Et))return null;let r=`pixi-grad-${this._nextId++}`;return this._gradients.push({id:r,gradient:e.fill,textureSpace:e.textureSpace??"local"}),`url(#${r})`}build(){if(this._gradients.length===0)return"";let e=["<defs>"];for(let{id:r,gradient:o,textureSpace:n}of this._gradients){let s=n==="global"?"userSpaceOnUse":"objectBoundingBox",i=Sp(o.colorStops);if(o.type==="radial"){let a=o.outerCenter?.x??.5,u=o.outerCenter?.y??.5,l=o.outerRadius??.5,c=o.center?.x??a,f=o.center?.y??u;e.push(`<radialGradient id="${r}" gradientUnits="${s}" cx="${a}" cy="${u}" r="${l}" fx="${c}" fy="${f}">`,i,"</radialGradient>")}else{let a=o.start?.x??0,u=o.start?.y??0,l=o.end?.x??1,c=o.end?.y??0;e.push(`<linearGradient id="${r}" gradientUnits="${s}" x1="${a}" y1="${u}" x2="${l}" y2="${c}">`,i,"</linearGradient>")}}return e.push("</defs>"),e.join("")}};function Sp(t){return t.map(e=>{let r=te.shared.setValue(e.color).toHex();return`<stop offset="${e.offset}" stop-color="${r}"/>`}).join("")}var qt=Math.PI*2,Ap=new Set(["regularPoly","roundPoly","roundShape","filletRect","chamferRect","arcTo"]);function bt(t,e=2,r=!1){if(t.instructions.some(s=>Ap.has(s.action)))return wp(t,e,r);let o=[],n=!1;for(let s=0;s<t.instructions.length;s++){let i=t.instructions[s],a=i.data;switch(i.action){case"moveTo":o.push(`M${de(a[0],a[1],null,e)}`),n=!0;break;case"lineTo":o.push(`L${de(a[0],a[1],null,e)}`),n=!0;break;case"quadraticCurveTo":o.push(`Q${de(a[0],a[1],null,e)} ${de(a[2],a[3],null,e)}`),n=!0;break;case"bezierCurveTo":o.push(`C${de(a[0],a[1],null,e)} ${de(a[2],a[3],null,e)} ${de(a[4],a[5],null,e)}`),n=!0;break;case"arcToSvg":o.push(`A${w(a[0],e)} ${w(a[1],e)} ${w(a[2],e)} ${a[3]} ${a[4]} ${de(a[5],a[6],null,e)}`),n=!0;break;case"closePath":o.push("Z"),n=!1;break;case"arc":o.push(Cp(a[0],a[1],a[2],a[3],a[4],!!a[5],n,e,r)),n=!Tp(a[3],a[4],!!a[5]);break;case"rect":o.push(Ma(a[0],a[1],a[2],a[3],a[4],e)),n=!1;break;case"circle":o.push(ko(a[0],a[1],a[2],a[2],a[3],e,r)),n=!1;break;case"ellipse":o.push(ko(a[0],a[1],a[2],a[3],a[4],e,r)),n=!1;break;case"roundRect":o.push(Pl(a[0],a[1],a[2],a[3],a[4]??0,a[5],e,r)),n=!1;break;case"poly":o.push(Ul(a[0],a[1]??!0,a[2],e)),n=!(a[1]??!0);break;case"addPath":o.push(Ep(a[0],a[1],e,r)),n=!0;break}}return o.join("")}function Tp(t,e,r){let o=e-t;return r?o>0&&(o-=qt):o<0&&(o+=qt),Math.abs(o)>=qt-1e-6}function w(t,e){return parseFloat(t.toFixed(e)).toString()}function de(t,e,r,o){if(r&&!r.isIdentity()){let n=r.a*t+r.c*e+r.tx,s=r.b*t+r.d*e+r.ty;return`${w(n,o)} ${w(s,o)}`}return`${w(t,o)} ${w(e,o)}`}function Cp(t,e,r,o,n,s,i,a,u=!1){let l=n-o;if(s?l>0&&(l-=qt):l<0&&(l+=qt),Math.abs(l)>=qt-1e-6)return ko(t,e,r,r,null,a,u);if(u){let _=[];for(let b=0;b<=32;b++){let y=o+b/32*l,S=t+r*Math.cos(y),C=e+r*Math.sin(y),T=b===0?i?"L":"M":"L";_.push(`${T}${w(S,a)} ${w(C,a)}`)}return _.join("")}let c=t+r*Math.cos(o),f=e+r*Math.sin(o),p=t+r*Math.cos(n),d=e+r*Math.sin(n),x=Math.abs(l)>Math.PI?1:0,g=s?0:1;return`${i?"L":"M"}${w(c,a)} ${w(f,a)}A${w(r,a)} ${w(r,a)} 0 ${x} ${g} ${w(p,a)} ${w(d,a)}`}function ko(t,e,r,o,n,s,i=!1){let a=n&&!n.isIdentity()?n:null;if(!a&&!i)return`M${w(t-r,s)} ${w(e,s)}A${w(r,s)} ${w(o,s)} 0 1 1 ${w(t+r,s)} ${w(e,s)}A${w(r,s)} ${w(o,s)} 0 1 1 ${w(t-r,s)} ${w(e,s)}Z`;let u=64,l=[];for(let c=0;c<u;c++){let f=c/u*qt,p=t+r*Math.cos(f),d=e+o*Math.sin(f);l.push(`${c===0?"M":"L"}${de(p,d,a,s)}`)}return l.push("Z"),l.join("")}function Ma(t,e,r,o,n,s){return`M${de(t,e,n,s)}L${de(t+r,e,n,s)}L${de(t+r,e+o,n,s)}L${de(t,e+o,n,s)}Z`}function Pl(t,e,r,o,n,s,i,a=!1){let u=s&&!s.isIdentity()?s:null;if(n<=0)return Ma(t,e,r,o,u,i);if(n=Math.min(n,Math.min(r,o)/2),u||a){let l=[],f=[[t+r-n,e+n,-Math.PI/2],[t+r-n,e+o-n,0],[t+n,e+o-n,Math.PI/2],[t+n,e+n,Math.PI]],p=!0;for(let d=0;d<f.length;d++){let[x,g,h]=f[d];for(let v=0;v<=8;v++){let _=h+v/8*(Math.PI/2),b=x+n*Math.cos(_),y=g+n*Math.sin(_);l.push(`${p?"M":"L"}${de(b,y,u,i)}`),p=!1}}return l.push("Z"),l.join("")}return`M${w(t+n,i)} ${w(e,i)}L${w(t+r-n,i)} ${w(e,i)}A${w(n,i)} ${w(n,i)} 0 0 1 ${w(t+r,i)} ${w(e+n,i)}L${w(t+r,i)} ${w(e+o-n,i)}A${w(n,i)} ${w(n,i)} 0 0 1 ${w(t+r-n,i)} ${w(e+o,i)}L${w(t+n,i)} ${w(e+o,i)}A${w(n,i)} ${w(n,i)} 0 0 1 ${w(t,i)} ${w(e+o-n,i)}L${w(t,i)} ${w(e+n,i)}A${w(n,i)} ${w(n,i)} 0 0 1 ${w(t+n,i)} ${w(e,i)}Z`}function Ul(t,e,r,o){if(t.length===0)return"";let n=[];if(typeof t[0]=="number"){let i=t;n.push(`M${de(i[0],i[1],r,o)}`);for(let a=2;a<i.length;a+=2)n.push(`L${de(i[a],i[a+1],r,o)}`)}else{let i=t;n.push(`M${de(i[0].x,i[0].y,r,o)}`);for(let a=1;a<i.length;a++)n.push(`L${de(i[a].x,i[a].y,r,o)}`)}return e&&n.push("Z"),n.join("")}function Ep(t,e,r,o){return!e||e.isIdentity()?bt(t,r,o):bt(t.clone(!0).transform(e),r,o)}function wp(t,e,r){let o=t.shapePath.shapePrimitives,n=[];for(let s of o){let i=s.shape,a=s.transform;switch(i.type){case"polygon":{let u=i;n.push(Ul(u.points,u.closePath,a,e));break}case"circle":{let u=i;n.push(ko(u.x,u.y,u.radius,u.radius,a,e,r));break}case"ellipse":{let u=i;n.push(ko(u.x,u.y,u.halfWidth,u.halfHeight,a,e,r));break}case"rectangle":{let u=i;n.push(Ma(u.x,u.y,u.width,u.height,a,e));break}case"roundedRectangle":{let u=i;n.push(Pl(u.x,u.y,u.width,u.height,u.radius,a,e,r));break}}}return n.join("")}function Oa(t,e){let r=e.addStyle(t),o=[];return r?o.push(`fill="${r}"`):o.push(`fill="${te.shared.setValue(t.color).toHex()}"`),t.alpha<1&&o.push(`fill-opacity="${t.alpha}"`),o.join(" ")}function Ga(t,e){let r=e.addStyle(t),o=[];return o.push('fill="none"'),r?o.push(`stroke="${r}"`):o.push(`stroke="${te.shared.setValue(t.color).toHex()}"`),o.push(`stroke-width="${t.width}"`),t.cap!=="butt"&&o.push(`stroke-linecap="${t.cap}"`),t.join!=="miter"?o.push(`stroke-linejoin="${t.join}"`):t.miterLimit!==10&&o.push(`stroke-miterlimit="${t.miterLimit}"`),t.alpha<1&&o.push(`stroke-opacity="${t.alpha}"`),o.join(" ")}function Bp(t,e=2){let r=t instanceof nt?t:t.context,o=new No,n=[],s=r.instructions,i=0;for(;i<s.length;){let x=s[i];switch(x.action){case"fill":{let g=x,h=!!g.data.hole,v=h?bt(g.data.path,e)+bt(g.data.hole,e,!0):bt(g.data.path,e),_=Oa(g.data.style,o),b=h?' fill-rule="evenodd"':"";n.push(`<path d="${v}" ${_}${b}/>`);break}case"stroke":{let g=x,h=bt(g.data.path,e);g.data.hole&&(h+=bt(g.data.hole,e,!0));let v=Ga(g.data.style,o);n.push(`<path d="${h}" ${v}/>`);break}case"texture":break}i++}let a=r.bounds,u=parseFloat(a.minX.toFixed(e)),l=parseFloat(a.minY.toFixed(e)),c=parseFloat((a.maxX-a.minX).toFixed(e)),f=parseFloat((a.maxY-a.minY).toFixed(e)),p=o.build(),d=n.join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${c}" height="${f}" viewBox="${u} ${l} ${c} ${f}">${p}${d}</svg>`}function Dp(t){t instanceof ks&&(t={path:t,textureMatrix:null,out:null});let e=[],r=[],o=[],n=t.path.shapePath,s=t.textureMatrix;n.shapePrimitives.forEach(({shape:u,transform:l})=>{let c=o.length,f=e.length/2,p=[],d=Ns[u.type];d.build(u,p),l&&Ls(p,l),d.triangulate(p,e,2,f,o,c);let x=r.length/2;s?(l&&s.append(l.clone().invert()),Gs(e,2,f,r,x,2,e.length/2-f,s)):Is(r,x,2,e.length/2-f)});let i=t.out;return i?(i.positions=new Float32Array(e),i.uvs=new Float32Array(r),i.indices=new Uint32Array(o),i):new Ce({positions:new Float32Array(e),uvs:new Float32Array(r),indices:new Uint32Array(o)})}var Fl=class Ml extends Z{constructor(e={}){e={...Ml.defaultOptions,...e},super(),this.renderLayerChildren=[],this.sortableChildren=e.sortableChildren,this.sortFunction=e.sortFunction}attach(...e){for(let r=0;r<e.length;r++){let o=e[r];if(o.parentRenderLayer){if(o.parentRenderLayer===this)continue;o.parentRenderLayer.detach(o)}this.renderLayerChildren.push(o),o.parentRenderLayer=this;let n=this.renderGroup||this.parentRenderGroup;n&&(n.structureDidChange=!0)}return e[0]}detach(...e){for(let r=0;r<e.length;r++){let o=e[r],n=this.renderLayerChildren.indexOf(o);n!==-1&&this.renderLayerChildren.splice(n,1),o.parentRenderLayer=null;let s=this.renderGroup||this.parentRenderGroup;s&&(s.structureDidChange=!0)}return e[0]}detachAll(){let e=this.renderLayerChildren;for(let r=0;r<e.length;r++)e[r].parentRenderLayer=null;this.renderLayerChildren.length=0}collectRenderables(e,r,o){let n=this.renderLayerChildren,s=n.length;this.sortableChildren&&this.sortRenderLayerChildren();for(let i=0;i<s;i++)n[i].parent||q("Container must be added to both layer and scene graph. Layers only handle render order - the scene graph is required for transforms (addChild)",n[i]),n[i].collectRenderables(e,r,this)}sortRenderLayerChildren(){this.renderLayerChildren.sort(this.sortFunction)}_getGlobalBoundsRecursive(e,r,o){if(!e)return;let n=this.renderLayerChildren;for(let s=0;s<n.length;s++)n[s]._getGlobalBoundsRecursive(!0,r,this)}getFastGlobalBounds(e,r){return super.getFastGlobalBounds(e,r)}addChild(...e){throw new Error("RenderLayer.addChild() is not available. Please use RenderLayer.attach()")}removeChild(...e){throw new Error("RenderLayer.removeChild() is not available. Please use RenderLayer.detach()")}removeChildren(e,r){throw new Error("RenderLayer.removeChildren() is not available. Please use RenderLayer.detach()")}removeChildAt(e){throw new Error("RenderLayer.removeChildAt() is not available")}getChildAt(e){throw new Error("RenderLayer.getChildAt() is not available")}setChildIndex(e,r){throw new Error("RenderLayer.setChildIndex() is not available")}getChildIndex(e){throw new Error("RenderLayer.getChildIndex() is not available")}addChildAt(e,r){throw new Error("RenderLayer.addChildAt() is not available")}swapChildren(e,r){throw new Error("RenderLayer.swapChildren() is not available")}reparentChild(...e){throw new Error("RenderLayer.reparentChild() is not available with the render layer")}reparentChildAt(e,r){throw new Error("RenderLayer.reparentChildAt() is not available with the render layer")}};Fl.defaultOptions={sortableChildren:!1,sortFunction:(t,e)=>t.zIndex-e.zIndex};var Rp=Fl;var Ol=class Gl extends Ce{constructor(...e){super({});let r=e[0]??{};typeof r=="number"&&(U(X,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),r={width:r,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(r)}build(e){e={...Gl.defaultOptions,...e},this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;let r=this.verticesX*this.verticesY,o=[],n=[],s=[],i=this.verticesX-1,a=this.verticesY-1,u=this.width/i,l=this.height/a;for(let f=0;f<r;f++){let p=f%this.verticesX,d=f/this.verticesX|0;o.push(p*u,d*l),n.push(p/i,d/a)}let c=i*a;for(let f=0;f<c;f++){let p=f%i,d=f/i|0,x=d*this.verticesX+p,g=d*this.verticesX+p+1,h=(d+1)*this.verticesX+p,v=(d+1)*this.verticesX+p+1;s.push(x,g,h,g,v,h)}this.buffers[0].data=new Float32Array(o),this.buffers[1].data=new Float32Array(n),this.indexBuffer.data=new Uint32Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};Ol.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};var Yt=Ol;function Ia(t,e,r,o){let n=r.buffers[0],s=n.data,{verticesX:i,verticesY:a}=r,u=t/(i-1),l=e/(a-1),c=0,f=o[0],p=o[1],d=o[2],x=o[3],g=o[4],h=o[5],v=o[6],_=o[7],b=o[8];for(let y=0;y<s.length;y+=2){let S=c%i*u,C=(c/i|0)*l,T=f*S+p*C+d,P=x*S+g*C+h,A=v*S+_*C+b;s[y]=T/A,s[y+1]=P/A,c++}n.update()}function Ll(t,e){let r=e[0],o=e[1],n=e[2],s=e[3],i=e[4],a=e[5],u=e[6],l=e[7],c=e[8];return t[0]=i*c-a*l,t[1]=n*l-o*c,t[2]=o*a-n*i,t[3]=a*u-s*c,t[4]=r*c-n*u,t[5]=n*s-r*a,t[6]=s*l-i*u,t[7]=o*u-r*l,t[8]=r*i-o*s,t}function Nl(t,e,r){let o=e[0],n=e[1],s=e[2],i=e[3],a=e[4],u=e[5],l=e[6],c=e[7],f=e[8],p=r[0],d=r[1],x=r[2],g=r[3],h=r[4],v=r[5],_=r[6],b=r[7],y=r[8];return t[0]=p*o+d*i+x*l,t[1]=p*n+d*a+x*c,t[2]=p*s+d*u+x*f,t[3]=g*o+h*i+v*l,t[4]=g*n+h*a+v*c,t[5]=g*s+h*u+v*f,t[6]=_*o+b*i+y*l,t[7]=_*n+b*a+y*c,t[8]=_*s+b*u+y*f,t}function Pp(t,e,r){let o=r[0],n=r[1],s=r[2];return t[0]=e[0]*o+e[1]*n+e[2]*s,t[1]=e[3]*o+e[4]*n+e[5]*s,t[2]=e[6]*o+e[7]*n+e[8]*s,t}var Up=[0,0,0,0,0,0,0,0,0],Fp=[0,0,0],ls=[0,0,0];function Il(t,e,r,o,n,s,i,a,u){let l=Up;l[0]=e,l[1]=o,l[2]=s,l[3]=r,l[4]=n,l[5]=i,l[6]=1,l[7]=1,l[8]=1;let c=Ll(t,l);ls[0]=a,ls[1]=u,ls[2]=1;let f=Pp(Fp,c,ls),p=t;return t[0]=f[0],t[1]=0,t[2]=0,t[3]=0,t[4]=f[1],t[5]=0,t[6]=0,t[7]=0,t[8]=f[2],Nl(t,p,l)}var Mp=[0,0,0,0,0,0,0,0,0],Op=[0,0,0,0,0,0,0,0,0];function La(t,e,r,o,n,s,i,a,u,l,c,f,p,d,x,g,h){let v=Il(Mp,e,r,s,i,l,c,d,x),_=Il(Op,o,n,a,u,f,p,g,h);return Nl(t,Ll(v,v),_)}var Ho=class extends Yt{constructor(e){super(e),this._projectionMatrix=[0,0,0,0,0,0,0,0,0];let{width:r,height:o}=e;this.corners=[0,0,r,0,r,o,0,o]}setCorners(e,r,o,n,s,i,a,u){let l=this.corners;l[0]=e,l[1]=r,l[2]=o,l[3]=n,l[4]=s,l[5]=i,l[6]=a,l[7]=u,this.updateProjection()}updateProjection(){let{width:e,height:r}=this,o=this.corners,n=La(this._projectionMatrix,0,0,o[0],o[1],e,0,o[2],o[3],e,r,o[4],o[5],0,r,o[6],o[7]);Ia(e,r,this,n)}};var kl=class Hl extends Ne{constructor(e){e={...Hl.defaultOptions,...e};let{texture:r,verticesX:o,verticesY:n,...s}=e,i=new Ho(Ue({width:r.width,height:r.height,verticesX:o,verticesY:n}));super(Ue({...s,geometry:i})),this._texture=r,this.geometry.setCorners(e.x0,e.y0,e.x1,e.y1,e.x2,e.y2,e.x3,e.y3)}textureUpdated(){let e=this.geometry;if(!e)return;let{width:r,height:o}=this.texture;(e.width!==r||e.height!==o)&&(e.width=r,e.height=o,e.updateProjection())}set texture(e){this._texture!==e&&(super.texture=e,this.textureUpdated())}get texture(){return this._texture}setCorners(e,r,o,n,s,i,a,u){this.geometry.setCorners(e,r,o,n,s,i,a,u)}};kl.defaultOptions={texture:M.WHITE,verticesX:10,verticesY:10,x0:0,y0:0,x1:100,y1:0,x2:100,y2:100,x3:0,y3:100};var Gp=kl;var Na=class extends Ne{constructor(e){let{texture:r,verticesX:o,verticesY:n,...s}=e,i=new Yt(Ue({width:r.width,height:r.height,verticesX:o,verticesY:n}));super(Ue({...s,geometry:i,texture:r})),this.texture=r,this.autoResize=!0}textureUpdated(){let e=this.geometry,{width:r,height:o}=this.texture;this.autoResize&&(e.width!==r||e.height!==o)&&(e.width=r,e.height=o,e.build({}))}set texture(e){this._texture?.off("update",this.textureUpdated,this),super.texture=e,e.on("update",this.textureUpdated,this),this.textureUpdated()}get texture(){return this._texture}destroy(e){this.texture.off("update",this.textureUpdated,this),super.destroy(e)}};var Vl=class Xl extends Ce{constructor(e){let{width:r,points:o,textureScale:n}={...Xl.defaultOptions,...e};super({positions:new Float32Array(o.length*4),uvs:new Float32Array(o.length*4),indices:new Uint32Array((o.length-1)*6)}),this.points=o,this._width=r,this.textureScale=n,this._build()}get width(){return this._width}_build(){let e=this.points;if(!e)return;let r=this.getBuffer("aPosition"),o=this.getBuffer("aUV"),n=this.getIndex();if(e.length<1)return;r.data.length/4!==e.length&&(r.data=new Float32Array(e.length*4),o.data=new Float32Array(e.length*4),n.data=new Uint16Array((e.length-1)*6));let s=o.data,i=n.data;s[0]=0,s[1]=0,s[2]=0,s[3]=1;let a=0,u=e[0],l=this._width*this.textureScale,c=e.length;for(let p=0;p<c;p++){let d=p*4;if(this.textureScale>0){let x=u.x-e[p].x,g=u.y-e[p].y,h=Math.sqrt(x*x+g*g);u=e[p],a+=h/l}else a=p/(c-1);s[d]=a,s[d+1]=0,s[d+2]=a,s[d+3]=1}let f=0;for(let p=0;p<c-1;p++){let d=p*2;i[f++]=d,i[f++]=d+1,i[f++]=d+2,i[f++]=d+2,i[f++]=d+1,i[f++]=d+3}o.update(),n.update(),this.updateVertices()}updateVertices(){let e=this.points;if(e.length<1)return;let r=e[0],o,n=0,s=0,i=this.buffers[0].data,a=e.length,u=this.textureScale>0?this.textureScale*this._width/2:this._width/2;for(let l=0;l<a;l++){let c=e[l],f=l*4;l<e.length-1?o=e[l+1]:o=c,s=-(o.x-r.x),n=o.y-r.y;let p=(1-l/(a-1))*10;p>1&&(p=1);let d=Math.sqrt(n*n+s*s);d<1e-6?(n=0,s=0):(n/=d,s/=d,n*=u,s*=u),i[f]=c.x+n,i[f+1]=c.y+s,i[f+2]=c.x-n,i[f+3]=c.y-s,r=c}this.buffers[0].update()}update(){this.textureScale>0?this._build():this.updateVertices()}};Vl.defaultOptions={width:200,points:[],textureScale:0};var ka=Vl;var Wl=class zl extends Ne{constructor(e){let{width:r,texture:o,points:n,textureScale:s,...i}={...zl.defaultOptions,...e},a=new ka(Ue({width:r??o.height,points:n,textureScale:s}));s>0&&(o.source.style.addressMode="repeat"),super(Ue({...i,texture:o,geometry:a})),this.autoUpdate=!0,this.onRender=this._render}_render(){let e=this.geometry;(this.autoUpdate||e._width!==this.texture.height)&&(e._width=this.texture.height,e.update())}};Wl.defaultOptions={textureScale:0};var Ip=Wl;var Ha=class extends Ne{constructor(e){let{texture:r,vertices:o,uvs:n,indices:s,topology:i,...a}=e,u=new Ce(Ue({positions:o,uvs:n,indices:s,topology:i}));super(Ue({...a,texture:r,geometry:u})),this.autoUpdate=!0,this.onRender=this._render}get vertices(){return this.geometry.getBuffer("aPosition").data}set vertices(e){this.geometry.getBuffer("aPosition").data=e}_render(){this.autoUpdate&&this.geometry.getBuffer("aPosition").update()}};function Lp(t,e){let{width:r,height:o}=t.frame;return e.scale(1/r,1/o),e}var Vo=class{execute(e,r){let o=e.renderer,n=o.canvasContext.activeContext,s=r.particleChildren,i=r.texture;n.save(),o.canvasContext.setContextTransform(r.worldTransform,r.roundPixels),o.canvasContext.setBlendMode(r.groupBlendMode);let a=r.groupColorAlpha,u=o.filter?.alphaMultiplier??1,l=(a>>>24&255)/255*u;for(let c=0;c<s.length;c++){let f=s[c],p=f.texture||i;if(!p?.source?.resource)continue;let d=f.color,x=(d>>>24&255)/255*l;if(x<=0)continue;let g=d&16777215,h=((g&255)<<16)+(g&65280)+(g>>16&255),v=p.source.resource;h!==16777215&&(v=St.getTintedCanvas({texture:p},h));let _=p.frame,b=p.source.resolution,y=_.x*b,S=_.y*b,C=_.width*b,T=_.height*b;n.globalAlpha=x;let P=-f.anchorX*_.width,A=-f.anchorY*_.height;f.rotation!==0||f.scaleX!==1||f.scaleY!==1?(n.save(),n.translate(f.x,f.y),n.rotate(f.rotation),n.scale(f.scaleX,f.scaleY),n.drawImage(v,y,S,C,T,P,A,_.width,_.height),n.restore()):n.drawImage(v,y,S,C,T,f.x+P,f.y+A,_.width,_.height)}n.restore()}};function cs(t,e=null){let r=t*6;if(r>65535?e||(e=new Uint32Array(r)):e||(e=new Uint16Array(r)),e.length!==r)throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${r}`);for(let o=0,n=0;o<r;o+=6,n+=4)e[o+0]=n+0,e[o+1]=n+1,e[o+2]=n+2,e[o+3]=n+0,e[o+4]=n+2,e[o+5]=n+3;return e}function Va(t){return{dynamicUpdate:$l(t,!0),staticUpdate:$l(t,!1)}}function $l(t,e){let r=[];r.push(`

        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);let o=0;for(let s in t){let i=t[s];if(e!==i.dynamic)continue;r.push(`offset = index + ${o}`),r.push(i.code);let a=Zt(i.format);o+=a.stride/4}r.push(`
            index += stride * 4;
        }
    `),r.unshift(`
        var stride = ${o};
    `);let n=r.join(`
`);return new Function("ps","f32v","u32v",n)}var Xo=class{constructor(e){this._size=0,this._generateParticleUpdateCache={};let r=this._size=e.size??1e3,o=e.properties,n=0,s=0;for(let c in o){let f=o[c],p=Zt(f.format);f.dynamic?s+=p.stride:n+=p.stride}this._dynamicStride=s/4,this._staticStride=n/4,this.staticAttributeBuffer=new Jt(r*4*n),this.dynamicAttributeBuffer=new Jt(r*4*s),this.indexBuffer=cs(r);let i=new Mt,a=0,u=0;this._staticBuffer=new Ct({data:new Float32Array(1),label:"static-particle-buffer",shrinkToFit:!1,usage:Ge.VERTEX|Ge.COPY_DST}),this._dynamicBuffer=new Ct({data:new Float32Array(1),label:"dynamic-particle-buffer",shrinkToFit:!1,usage:Ge.VERTEX|Ge.COPY_DST});for(let c in o){let f=o[c],p=Zt(f.format);f.dynamic?(i.addAttribute(f.attributeName,{buffer:this._dynamicBuffer,stride:this._dynamicStride*4,offset:a*4,format:f.format}),a+=p.size):(i.addAttribute(f.attributeName,{buffer:this._staticBuffer,stride:this._staticStride*4,offset:u*4,format:f.format}),u+=p.size)}i.addIndex(this.indexBuffer);let l=this.getParticleUpdate(o);this._dynamicUpload=l.dynamicUpdate,this._staticUpload=l.staticUpdate,this.geometry=i}getParticleUpdate(e){let r=Np(e);return this._generateParticleUpdateCache[r]?this._generateParticleUpdateCache[r]:(this._generateParticleUpdateCache[r]=this.generateParticleUpdate(e),this._generateParticleUpdateCache[r])}generateParticleUpdate(e){return Va(e)}update(e,r){e.length>this._size&&(r=!0,this._size=Math.max(e.length,this._size*1.5|0),this.staticAttributeBuffer=new Jt(this._size*this._staticStride*4*4),this.dynamicAttributeBuffer=new Jt(this._size*this._dynamicStride*4*4),this.indexBuffer=cs(this._size),this.geometry.indexBuffer.setDataWithSize(this.indexBuffer,this.indexBuffer.byteLength,!0));let o=this.dynamicAttributeBuffer;if(this._dynamicUpload(e,o.float32View,o.uint32View),this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View,e.length*this._dynamicStride*4,!0),r){let n=this.staticAttributeBuffer;this._staticUpload(e,n.float32View,n.uint32View),this._staticBuffer.setDataWithSize(n.float32View,e.length*this._staticStride*4,!0)}}destroy(){this._staticBuffer.destroy(),this._dynamicBuffer.destroy(),this.geometry.destroy()}};function Np(t){let e=[];for(let r in t){let o=t[r];e.push(r,o.code,o.dynamic?"d":"s")}return e.join("_")}var Xa=`varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
    vec4 color = texture2D(uTexture, vUV) * vColor;
    gl_FragColor = color;
}`;var Wa=`attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
    float cosRotation = cos(aRotation);
    float sinRotation = sin(aRotation);
    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

    vec2 v = vec2(x, y);
    v = v + aPosition;

    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    if(uRound == 1.0)
    {
        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
    }

    vUV = aUV;
    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`;var fs=`
struct ParticleUniforms {
  uTranslationMatrix:mat3x3<f32>,
  uColor:vec4<f32>,
  uRound:f32,
  uResolution:vec2<f32>,
};

fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
{
  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };
@vertex
fn mainVertex(
  @location(0) aVertex: vec2<f32>,
  @location(1) aPosition: vec2<f32>,
  @location(2) aUV: vec2<f32>,
  @location(3) aColor: vec4<f32>,
  @location(4) aRotation: f32,
) -> VSOutput {
  
   let v = vec2(
       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
   ) + aPosition;

   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

   if(uniforms.uRound == 1.0) {
       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);
   }

    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

  return VSOutput(
   position,
   aUV,
   vColor,
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color: vec4<f32>,
  @builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

    var sample = textureSample(uTexture, uSampler, uv) * color;
   
    return sample;
}`;var Wo=class extends Ut{constructor(){let e=_e.from({vertex:Wa,fragment:Xa}),r=ve.from({fragment:{source:fs,entryPoint:"mainFragment"},vertex:{source:fs,entryPoint:"mainVertex"}});super({glProgram:e,gpuProgram:r,resources:{uTexture:M.WHITE.source,uSampler:new He({}),uniforms:{uTranslationMatrix:{value:new Y,type:"mat3x3<f32>"},uColor:{value:new te(16777215),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}}})}};var Ze=class{constructor(e,r){this.state=Tt.for2d(),this.localUniforms=new se({uTranslationMatrix:{value:new Y,type:"mat3x3<f32>"},uColor:{value:new Float32Array(4),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}),this.renderer=e,this.adaptor=r,this.defaultShader=new Wo,this.state=Tt.for2d(),this._managedContainers=new Ie({renderer:e,type:"renderable",name:"particleContainer"})}validateRenderable(e){return!1}addRenderable(e,r){this.renderer.renderPipes.batch.break(r),r.add(e)}getBuffers(e){return e._gpuData[this.renderer.uid]||this._initBuffer(e)}_initBuffer(e){return e._gpuData[this.renderer.uid]=new Xo({size:e.particleChildren.length,properties:e._properties}),this._managedContainers.add(e),e._gpuData[this.renderer.uid]}updateRenderable(e){}execute(e){let r=e.particleChildren;if(r.length===0)return;let o=this.renderer,n=this.getBuffers(e);e.texture||(e.texture=r[0].texture);let s=this.state;n.update(r,e._childrenDirty),e._childrenDirty=!1,s.blendMode=Ot(e.groupBlendMode,e.texture._source);let i=this.localUniforms.uniforms,a=i.uTranslationMatrix;e.worldTransform.copyTo(a);let u=o.globalUniforms.globalUniformData;a.tx-=u.offset.x,a.ty-=u.offset.y,a.prepend(u.projectionMatrix),i.uResolution=u.resolution,i.uRound=o._roundPixels|e._roundPixels;let l=e.groupColorAlpha,c=u.worldColor,f=(l>>>24)*(c>>>24)/255|0,p=Rt(l&16777215,c&16777215);Gt((f<<24|p)>>>0,i.uColor,0),this.adaptor.execute(this,e)}destroy(){this._managedContainers.destroy(),this.renderer=null,this.defaultShader&&(this.defaultShader.destroy(),this.defaultShader=null)}};Ze.extension={type:[m.CanvasPipes],name:"particle"};var Pr=class extends Ze{constructor(e){super(e,new Vo)}};Pr.extension={type:[m.CanvasPipes],name:"particle"};var zo=class{execute(e,r){let o=e.state,n=e.renderer,s=r.shader||e.defaultShader;s.resources.uTexture=r.texture._source,s.resources.uniforms=e.localUniforms;let i=n.gl,a=e.getBuffers(r);n.shader.bind(s),n.state.set(o),n.geometry.bind(a.geometry,s.glProgram);let l=a.geometry.indexBuffer.data.BYTES_PER_ELEMENT===2?i.UNSIGNED_SHORT:i.UNSIGNED_INT;i.drawElements(i.TRIANGLES,r.particleChildren.length*6,l,0)}};var Ur=class extends Ze{constructor(e){super(e,new zo)}};Ur.extension={type:[m.WebGLPipes],name:"particle"};var $o=class{execute(e,r){let o=e.renderer,n=r.shader||e.defaultShader;n.groups[0]=o.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms,!0),n.groups[1]=o.texture.getTextureBindGroup(r.texture);let s=e.state,i=e.getBuffers(r);o.encoder.draw({geometry:i.geometry,shader:r.shader||e.defaultShader,state:s,size:r.particleChildren.length*6})}};var Fr=class extends Ze{constructor(e){super(e,new $o)}};Fr.extension={type:[m.WebGPUPipes],name:"particle"};var ql=class za{constructor(e){if(e instanceof M)this.texture=e,jo(this,za.defaultOptions,{});else{let r={...za.defaultOptions,...e};jo(this,r,{})}}get alpha(){return this._alpha}set alpha(e){this._alpha=Math.min(Math.max(e,0),1),this._updateColor()}get tint(){return Pt(this._tint)}set tint(e){this._tint=te.shared.setValue(e??16777215).toBgrNumber(),this._updateColor()}_updateColor(){this.color=this._tint+((this._alpha*255|0)<<24)}};ql.defaultOptions={anchorX:0,anchorY:0,x:0,y:0,scaleX:1,scaleY:1,rotation:0,tint:16777215,alpha:1};var kp=ql;var ps={vertex:{attributeName:"aVertex",format:"float32x2",code:`
            const texture = p.texture;
            const sx = p.scaleX;
            const sy = p.scaleY;
            const ax = p.anchorX;
            const ay = p.anchorY;
            const trim = texture.trim;
            const orig = texture.orig;

            if (trim)
            {
                w1 = trim.x - (ax * orig.width);
                w0 = w1 + trim.width;

                h1 = trim.y - (ay * orig.height);
                h0 = h1 + trim.height;
            }
            else
            {
                w1 = -ax * (orig.width);
                w0 = w1 + orig.width;

                h1 = -ay * (orig.height);
                h0 = h1 + orig.height;
            }

            f32v[offset] = w1 * sx;
            f32v[offset + 1] = h1 * sy;

            f32v[offset + stride] = w0 * sx;
            f32v[offset + stride + 1] = h1 * sy;

            f32v[offset + (stride * 2)] = w0 * sx;
            f32v[offset + (stride * 2) + 1] = h0 * sy;

            f32v[offset + (stride * 3)] = w1 * sx;
            f32v[offset + (stride * 3) + 1] = h0 * sy;
        `,dynamic:!1},position:{attributeName:"aPosition",format:"float32x2",code:`
            var x = p.x;
            var y = p.y;

            f32v[offset] = x;
            f32v[offset + 1] = y;

            f32v[offset + stride] = x;
            f32v[offset + stride + 1] = y;

            f32v[offset + (stride * 2)] = x;
            f32v[offset + (stride * 2) + 1] = y;

            f32v[offset + (stride * 3)] = x;
            f32v[offset + (stride * 3) + 1] = y;
        `,dynamic:!0},rotation:{attributeName:"aRotation",format:"float32",code:`
            var rotation = p.rotation;

            f32v[offset] = rotation;
            f32v[offset + stride] = rotation;
            f32v[offset + (stride * 2)] = rotation;
            f32v[offset + (stride * 3)] = rotation;
        `,dynamic:!1},uvs:{attributeName:"aUV",format:"float32x2",code:`
            var uvs = p.texture.uvs;

            f32v[offset] = uvs.x0;
            f32v[offset + 1] = uvs.y0;

            f32v[offset + stride] = uvs.x1;
            f32v[offset + stride + 1] = uvs.y1;

            f32v[offset + (stride * 2)] = uvs.x2;
            f32v[offset + (stride * 2) + 1] = uvs.y2;

            f32v[offset + (stride * 3)] = uvs.x3;
            f32v[offset + (stride * 3) + 1] = uvs.y3;
        `,dynamic:!1},color:{attributeName:"aColor",format:"unorm8x4",code:`
            const c = p.color;

            u32v[offset] = c;
            u32v[offset + stride] = c;
            u32v[offset + (stride * 2)] = c;
            u32v[offset + (stride * 3)] = c;
        `,dynamic:!1}};G.add(Ur);G.add(Fr);G.add(Pr);var Hp=new Ir(0,0,0,0),Yl=class $a extends Me{constructor(e={}){e={...$a.defaultOptions,...e,dynamicProperties:{...$a.defaultOptions.dynamicProperties,...e?.dynamicProperties}};let{dynamicProperties:r,shader:o,roundPixels:n,texture:s,particles:i,...a}=e;super({label:"ParticleContainer",...a}),this.renderPipeId="particle",this.batched=!1,this._childrenDirty=!1,this.texture=s||null,this.shader=o,this._properties={};for(let u in ps){let l=ps[u],c=r[u];this._properties[u]={...l,dynamic:c}}this.allowChildren=!0,this.roundPixels=n??!1,this.particleChildren=i??[]}addParticle(...e){for(let r=0;r<e.length;r++)this.particleChildren.push(e[r]);return this.onViewUpdate(),e[0]}removeParticle(...e){let r=!1;for(let o=0;o<e.length;o++){let n=this.particleChildren.indexOf(e[o]);n>-1&&(this.particleChildren.splice(n,1),r=!0)}return r&&this.onViewUpdate(),e[0]}update(){this._childrenDirty=!0}onViewUpdate(){this._childrenDirty=!0,super.onViewUpdate()}get bounds(){return Hp}updateBounds(){}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e?.texture){let o=typeof e=="boolean"?e:e?.textureSource,n=this.texture??this.particleChildren[0]?.texture;n&&n.destroy(o)}this.texture=null,this.shader?.destroy()}removeParticles(e,r){e??(e=0),r??(r=this.particleChildren.length);let o=this.particleChildren.splice(e,r-e);return this.onViewUpdate(),o}removeParticleAt(e){let r=this.particleChildren.splice(e,1);return this.onViewUpdate(),r[0]}addParticleAt(e,r){return this.particleChildren.splice(r,0,e),this.onViewUpdate(),e}addChild(...e){throw new Error("ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()")}removeChild(...e){throw new Error("ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()")}removeChildren(e,r){throw new Error("ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()")}removeChildAt(e){throw new Error("ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()")}getChildAt(e){throw new Error("ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()")}setChildIndex(e,r){throw new Error("ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()")}getChildIndex(e){throw new Error("ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()")}addChildAt(e,r){throw new Error("ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()")}swapChildren(e,r){throw new Error("ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()")}reparentChild(...e){throw new Error("ParticleContainer.reparentChild() is not available with the particle container")}reparentChildAt(e,r){throw new Error("ParticleContainer.reparentChildAt() is not available with the particle container")}};Yl.defaultOptions={dynamicProperties:{vertex:!1,position:!0,rotation:!1,uvs:!1,color:!1},roundPixels:!1};var Vp=Yl;var Mr=class{constructor(e){this._renderer=e}validateRenderable(e){return!1}addRenderable(e,r){this._renderer.renderPipes.batch.break(r),r.add(e)}updateRenderable(e){}execute(e){let r=this._renderer,o=r.canvasContext,n=o.activeContext;n.save();let s=e.groupTransform,i=r._roundPixels|e._roundPixels;o.setContextTransform(s,i===1),o.setBlendMode(e.groupBlendMode);let a=r.globalUniforms.globalUniformData?.worldColor??4294967295,u=e.groupColorAlpha,l=(a>>>24&255)/255,c=(u>>>24&255)/255,f=r.filter?.alphaMultiplier??1,p=l*c*f;if(p<=0){n.restore();return}n.globalAlpha=p;let d=a&16777215,x=u&16777215,g=Pt(Rt(x,d)),h=e.texture,v=St.getCanvasSource(h);if(!v){n.restore();return}let _=o.smoothProperty,b=h.source.style.scaleMode!=="nearest";n[_]!==b&&(n[_]=b);let y=g!==16777215||h.rotate!==0,S=y?St.getTintedCanvas({texture:h},g):v,{leftWidth:C,topHeight:T,rightWidth:P,bottomHeight:A,width:k,height:B}=e,re=C+P,ge=T+A,j=Math.min(re>k?k/re:1,ge>B?B/ge:1,1),H=C*j,E=P*j,F=T*j,V=A*j,L=Math.max(0,k-H-E),Q=Math.max(0,B-F-V),me=e.anchor,ne=h.source._resolution??h.source.resolution??1,O=h.frame.x*ne,W=h.frame.y*ne,ae=-me.x*k,ue=-me.y*B,le=C*ne,et=T*ne,tt=P*ne,rt=A*ne,Bt=h.frame.width*ne,Dt=h.frame.height*ne;y&&(O=0,W=0,Bt=S.width,Dt=S.height),n.drawImage(S,O,W,le,et,ae,ue,H,F),n.drawImage(S,O+le,W,Bt-le-tt,et,ae+H,ue,L,F),n.drawImage(S,O+Bt-tt,W,tt,et,ae+k-E,ue,E,F),n.drawImage(S,O,W+et,le,Dt-et-rt,ae,ue+F,H,Q),n.drawImage(S,O+le,W+et,Bt-le-tt,Dt-et-rt,ae+H,ue+F,L,Q),n.drawImage(S,O+Bt-tt,W+et,tt,Dt-et-rt,ae+k-E,ue+F,E,Q),n.drawImage(S,O,W+Dt-rt,le,rt,ae,ue+B-V,H,V),n.drawImage(S,O+le,W+Dt-rt,Bt-le-tt,rt,ae+H,ue+B-V,L,V),n.drawImage(S,O+Bt-tt,W+Dt-rt,tt,rt,ae+k-E,ue+B-V,E,V),n.restore()}destroy(){this._renderer=null}};Mr.extension={type:[m.CanvasPipes],name:"nineSliceSprite"};var jl=class ds extends Yt{constructor(e={}){e={...ds.defaultOptions,...e},super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this._trimX=0,this._trimY=0,this._trimWidth=e.originalWidth??ds.defaultOptions.originalWidth,this._trimHeight=e.originalHeight??ds.defaultOptions.originalHeight,this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this._anchorX=e.anchor?.x,this._anchorY=e.anchor?.y,e.trim!==void 0?(this._trimX=e.trim?.x??0,this._trimY=e.trim?.y??0,this._trimWidth=e.trim?.width??this._originalWidth,this._trimHeight=e.trim?.height??this._originalHeight):(this._trimWidth=this._originalWidth,this._trimHeight=this._originalHeight),this.updateUvs(),this.updatePositions()}updatePositions(){let e=this.positions,{width:r,height:o,_leftWidth:n,_rightWidth:s,_topHeight:i,_bottomHeight:a,_anchorX:u,_anchorY:l}=this,c=n+s,f=r>c?1:r/c,p=i+a,d=o>p?1:o/p,x=Math.min(f,d),g=u*r,h=l*o;e[0]=e[8]=e[16]=e[24]=-g,e[2]=e[10]=e[18]=e[26]=n*x-g,e[4]=e[12]=e[20]=e[28]=r-s*x-g,e[6]=e[14]=e[22]=e[30]=r-g,e[1]=e[3]=e[5]=e[7]=-h,e[9]=e[11]=e[13]=e[15]=i*x-h,e[17]=e[19]=e[21]=e[23]=o-a*x-h,e[25]=e[27]=e[29]=e[31]=o-h,this.getBuffer("aPosition").update()}updateUvs(){let e=this.uvs,r=this._originalWidth,o=this._originalHeight,n=this._trimX/r,s=this._trimY/o,i=(this._trimX+this._trimWidth)/r,a=(this._trimY+this._trimHeight)/o;e[0]=e[8]=e[16]=e[24]=n,e[1]=e[3]=e[5]=e[7]=s,e[6]=e[14]=e[22]=e[30]=i,e[25]=e[27]=e[29]=e[31]=a;let u=1/r,l=1/o;e[2]=e[10]=e[18]=e[26]=n+u*this._leftWidth,e[9]=e[11]=e[13]=e[15]=s+l*this._topHeight,e[4]=e[12]=e[20]=e[28]=i-u*this._rightWidth,e[17]=e[19]=e[21]=e[23]=a-l*this._bottomHeight,this.getBuffer("aUV").update()}};jl.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};var Je=jl;var ms=class extends mt{constructor(){super(),this.geometry=new Je}destroy(){this.geometry.destroy()}},Or=class{constructor(e){this._renderer=e,this._managedSprites=new Ie({renderer:e,type:"renderable",name:"nineSliceSprite"})}addRenderable(e,r){let o=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,o),this._renderer.renderPipes.batch.addToBatch(o,r)}updateRenderable(e){let r=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,r),r._batcher.updateElement(r)}validateRenderable(e){let r=this._getGpuSprite(e);return!r._batcher.checkAndUpdateTexture(r,e._texture)}_updateBatchableSprite(e,r){r.geometry.update(e),r.setTexture(e._texture)}_getGpuSprite(e){return e._gpuData[this._renderer.uid]||this._initGPUSprite(e)}_initGPUSprite(e){let r=e._gpuData[this._renderer.uid]=new ms,o=r;return o.renderable=e,o.transform=e.groupTransform,o.texture=e._texture,o.roundPixels=this._renderer._roundPixels|e._roundPixels,this._managedSprites.add(e),e.didViewUpdate||this._updateBatchableSprite(e,o),r}destroy(){this._managedSprites.destroy(),this._renderer=null}};Or.extension={type:[m.WebGLPipes,m.WebGPUPipes],name:"nineSliceSprite"};G.add(Mr);G.add(Or);var Kl=class Ql extends Me{constructor(e){e instanceof M&&(e={texture:e});let{width:r,height:o,anchor:n,leftWidth:s,rightWidth:i,topHeight:a,bottomHeight:u,texture:l,roundPixels:c,...f}=e;super({label:"NineSliceSprite",...f}),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=s??l?.defaultBorders?.left??Je.defaultOptions.leftWidth,this._topHeight=a??l?.defaultBorders?.top??Je.defaultOptions.topHeight,this._rightWidth=i??l?.defaultBorders?.right??Je.defaultOptions.rightWidth,this._bottomHeight=u??l?.defaultBorders?.bottom??Je.defaultOptions.bottomHeight,this._width=r??l.width??Je.defaultOptions.width,this._height=o??l.height??Je.defaultOptions.height,this.allowChildren=!1,this.texture=l??Ql.defaultOptions.texture,this.roundPixels=c??!1,this._anchor=new ke({_onUpdate:()=>{this.onViewUpdate()}}),n?this.anchor=n:this.texture.defaultAnchor&&(this.anchor=this.texture.defaultAnchor)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get width(){return this._width}set width(e){this._width=e,this.onViewUpdate()}get height(){return this._height}set height(e){this._height=e,this.onViewUpdate()}setSize(e,r){typeof e=="object"&&(r=e.height??e.width,e=e.width),this._width=e,this._height=r??e,this.onViewUpdate()}getSize(e){return e||(e={}),e.width=this._width,e.height=this._height,e}get leftWidth(){return this._leftWidth}set leftWidth(e){this._leftWidth=e,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(e){this._topHeight=e,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(e){this._rightWidth=e,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(e){this._bottomHeight=e,this.onViewUpdate()}get texture(){return this._texture}set texture(e){e||(e=M.EMPTY);let r=this._texture;r!==e&&(r&&r.dynamic&&r.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}get trim(){return this._texture.trim??null}destroy(e){if(super.destroy(e),typeof e=="boolean"?e:e?.texture){let o=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(o)}this._texture=null}updateBounds(){let e=this._bounds,r=this._anchor,o=this._width,n=this._height;e.minX=-r._x*o,e.maxX=e.minX+o,e.minY=-r._y*n,e.maxY=e.minY+n}};Kl.defaultOptions={texture:M.EMPTY};var Zl=Kl,qa=class extends Zl{constructor(...e){let r=e[0];r instanceof M&&(U(X,"NineSlicePlane now uses the options object {texture, leftWidth, rightWidth, topHeight, bottomHeight}"),r={texture:r,leftWidth:e[1],topHeight:e[2],rightWidth:e[3],bottomHeight:e[4]}),U(X,"NineSlicePlane is deprecated. Use NineSliceSprite instead."),super(r)}};function Ya(t){let{text:e,style:r,chars:o}=t,n=r,s=It.getFont(e,n),i=K.graphemeSegmenter(e),a=jr(i,n,s,!0),u=a.scale,l=[],c=[],f=[],p=r.lineHeight?r.lineHeight:s.lineHeight*u,d=0;for(let x of a.lines){if(x.chars.length===0)continue;let g=new Z({label:"line"});g.y=d,f.push(g);let h=new Z({label:"word"}),v=0;for(let _=0;_<x.chars.length;_++){let b=x.chars[_];if(!b||!s.chars[b])continue;let S=b===" ",C=_===x.chars.length-1,T;o.length>0?(T=o.shift(),T.text=b,T.style=n,T.label=`char-${b}`,T.x=x.charPositions[_]*u-x.charPositions[v]*u):T=new zt({text:b,style:n,label:`char-${b}`,x:x.charPositions[_]*u-x.charPositions[v]*u}),S||(l.push(T),h.addChild(T)),(S||C)&&h.children.length>0&&(h.x=x.charPositions[v]*u,c.push(h),g.addChild(h),h=new Z({label:"word"}),v=_+1)}d+=p}return{chars:l,lines:f,words:c}}var jt=class extends Z{constructor(e){let{text:r,style:o,autoSplit:n,lineAnchor:s,wordAnchor:i,charAnchor:a,...u}=e;super(u),this._dirty=!1,this._canReuseChars=!1,this.chars=[],this.words=[],this.lines=[],this._originalText=r,this._autoSplit=n,this._lineAnchor=s,this._wordAnchor=i,this._charAnchor=a,this.style=o}split(){let e=this.splitFn();this.chars=e.chars,this.words=e.words,this.lines=e.lines,this.addChild(...this.lines),this.charAnchor=this._charAnchor,this.wordAnchor=this._wordAnchor,this.lineAnchor=this._lineAnchor,this._dirty=!1,this._canReuseChars=!0}get text(){return this._originalText}set text(e){this._originalText=e,this.lines.forEach(r=>r.destroy({children:!0})),this.lines.length=0,this.words.length=0,this.chars.length=0,this._canReuseChars=!1,this.onTextUpdate()}_setOrigin(e,r,o){let n;typeof e=="number"?n={x:e,y:e}:n={x:e.x,y:e.y},r.forEach(s=>{let i=s.getLocalBounds(),a=i.minX+i.width*n.x,u=i.minY+i.height*n.y;s.origin.set(a,u)}),this[o]=e}get lineAnchor(){return this._lineAnchor}set lineAnchor(e){this._setOrigin(e,this.lines,"_lineAnchor")}get wordAnchor(){return this._wordAnchor}set wordAnchor(e){this._setOrigin(e,this.words,"_wordAnchor")}get charAnchor(){return this._charAnchor}set charAnchor(e){this._setOrigin(e,this.chars,"_charAnchor")}get style(){return this._style}set style(e){e||(e={}),this._style=new ie(e),this.styleChanged()}styleChanged(){this.words.forEach(e=>e.destroy()),this.words.length=0,this.lines.forEach(e=>e.destroy()),this.lines.length=0,this._canReuseChars=!0,this.onTextUpdate()}onTextUpdate(){this._dirty=!0,this._autoSplit&&this.split()}destroy(e){super.destroy(e),this.chars=[],this.words=[],this.lines=[],(typeof e=="boolean"?e:e?.style)&&this._style.destroy(e),this._style=null,this._originalText=""}};var Jl=class hs extends jt{constructor(e){var r;let o={...hs.defaultOptions,...e};o.style??(o.style={}),(r=o.style).fill??(r.fill=16777215),super(o)}static from(e,r){let o={...hs.defaultOptions,...r,text:e.text,style:new ie(e.style)};e.style.tagStyles&&(q("[SplitBitmapText] Tag styles are not supported for SplitBitmapText. They will be ignored."),e.style._tagStyles=void 0);let n=new hs({...o}),s=e.anchor;return(s.x!==0||s.y!==0)&&n.pivot.set(n.width*s.x,n.height*s.y),n}splitFn(){return Ya({text:this._originalText,style:this._style,chars:this._canReuseChars?this.chars:[]})}};Jl.defaultOptions={autoSplit:!0,lineAnchor:0,wordAnchor:0,charAnchor:0};var Xp=Jl;function ec(t,e,r){switch(t){case"center":return(r-e)/2;case"right":return r-e;default:return 0}}function ja(t){return t==="\r"||t===`
`||t===`\r
`}var Wp=/^\s*$/;function zp(t,e){let r=[],o=e.lines[0],n="",s=[],i=0;return t.forEach(a=>{let u=Wp.test(a),l=ja(a),c=n.length===0&&u;u&&!l&&c&&(!o||!o.startsWith(a))||(l||(n+=a),s.push(a),n.length>=o.length&&(r.push({line:n,chars:s}),s=[],n="",i++,o=e.lines[i]))}),r}function Ka(t){let{text:e,style:r,chars:o}=t,n=r,s=K.measureText(e,n);if(s.runsByLine&&s.runsByLine.length>0)return $p(s,n,o,e);let i=K.graphemeSegmenter(e),a=zp(i,s),u=n.align,l=s.lineWidths.reduce((B,re)=>Math.max(B,re),0),c=n._fill?.fill,f=n._stroke?.fill,p=c instanceof Et,d=f instanceof Et,x=p||d,g=p&&c.textureSpace==="local"||d&&f.textureSpace==="local",h=s.width,v=s.height,_=n.clone();_.align="left";let b=0,y=0;if(_.trim){let{frame:B,canvasAndContext:re}=Pe.getCanvasAndContext({text:e,style:n,resolution:1});Pe.returnCanvasAndContext(re),b=-B.x,y=-B.y,_.trim=!1}let S=[],C=[],T=[],P=0,A=0,k=g?{width:h,height:v}:null;return a.forEach((B,re)=>{let ge=new Z({label:`line-${re}`});ge.y=P+y,C.push(ge);let j=s.lineWidths[re],H=ec(u,j,l),E=new Z({label:"word"});E.x=H+b;let F=K._context;F.font=_._fontString,K.experimentalLetterSpacingSupported&&(F.letterSpacing="0px",F.textLetterSpacing="0px");let V=B.line,L=F.measureText(V).width;if(B.chars.forEach(Q=>{if(ja(Q))return;V=V.slice(Q.length);let me=V.length>0?F.measureText(V).width:0,ne=L-me;if(L=me,ne!==0)if(Q===" ")E.children.length>0&&(T.push(E),ge.addChild(E)),H+=ne+n.letterSpacing,E=new Z({label:"word"}),E.x=H+b;else{let O=_;x&&(O=_.clone(),O._gradientOffset={x:-H,y:-P},k&&(O._gradientBounds=k));let W;A<o.length?(W=o[A++],W.text=Q,W.style=O,W.setFromMatrix(Y.IDENTITY),W.x=H-E.x+b):W=new Qe({text:Q,style:O,x:H-E.x+b}),S.push(W),E.addChild(W),H+=ne+n.letterSpacing}}),E.children.length>0&&(T.push(E),ge.addChild(E)),u==="justify"&&n.wordWrap&&re<a.length-1){let Q=ge.children,me=Q.length-1;if(me>0){let ne=(l-j)/me;for(let O=1;O<Q.length;O++)Q[O].x+=O*ne}}P+=s.lineHeight}),{chars:S,lines:C,words:T}}function $p(t,e,r,o){let{runsByLine:n}=t,s=e.align,i=t.lineWidths.reduce((x,g)=>Math.max(x,g),0),a=0,u=0;if(e.trim){let{frame:x,canvasAndContext:g}=Pe.getCanvasAndContext({text:o,style:e,resolution:1});Pe.returnCanvasAndContext(g),a=-x.x,u=-x.y}let l=[],c=[],f=[],p=0,d=0;return n.forEach((x,g)=>{let h=new Z({label:`line-${g}`});h.y=p+u,c.push(h);let v=t.lineWidths[g],_=ec(s,v,i),b=new Z({label:"word"});b.x=_+a;for(let S of x){let C=S.style,T=C._fill?.fill,P=C._stroke?.fill,A=T instanceof Et,k=P instanceof Et,B=A||k,re=A&&T.textureSpace==="local"||k&&P.textureSpace==="local",ge=K.graphemeSegmenter(S.text),j=C.clone();j.align="left",j.wordWrap=!1,j.trim&&(j.trim=!1),j.tagStyles=void 0,j._lineHeight=0;let H=K._context;H.font=j._fontString,K.experimentalLetterSpacingSupported&&(H.letterSpacing="0px",H.textLetterSpacing="0px");let E=S.text,F=H.measureText(E).width,V=_,L=F,Q=K.measureFont(j._fontString),me=C.lineHeight||Q.fontSize,ne=re?{width:L,height:me}:null;for(let O of ge){E=E.slice(O.length);let W=E.length>0?H.measureText(E).width:0,ae=F-W;if(F=W,!ja(O)&&ae!==0)if(O===" ")b.children.length>0&&(f.push(b),h.addChild(b)),_+=ae+C.letterSpacing,b=new Z({label:"word"}),b.x=_+a;else{let ue=j;B&&(ue=j.clone(),re?(ue._gradientOffset={x:-(_-V),y:0},ue._gradientBounds=ne):ue._gradientOffset={x:-(_-V),y:0});let le;d<r.length?(le=r[d++],le.text=O,le.style=ue,le.setFromMatrix(Y.IDENTITY),le.x=_-b.x+a):le=new Qe({text:O,style:ue,x:_-b.x+a}),l.push(le),b.addChild(le),_+=ae+C.letterSpacing}}}if(b.children.length>0&&(f.push(b),h.addChild(b)),s==="justify"&&e.wordWrap&&g<n.length-1){let S=h.children,C=S.length-1;if(C>0){let T=(i-v)/C;for(let P=1;P<S.length;P++)S[P].x+=P*T}}let y=t.lineHeights?.[g]??t.lineHeight;p+=y}),{chars:l,lines:c,words:f}}var tc=class gs extends jt{constructor(e){let r={...gs.defaultOptions,...e};super(r)}static from(e,r){let o={...gs.defaultOptions,...r,text:e.text,style:new ie(e.style)},n=new gs({...o}),s=e.anchor;return(s.x!==0||s.y!==0)&&n.pivot.set(n.width*s.x,n.height*s.y),n}splitFn(){return Ka({text:this._originalText,style:this._style,chars:this._canReuseChars?this.chars:[]})}};tc.defaultOptions={autoSplit:!0,lineAnchor:0,wordAnchor:0,charAnchor:0};var qp=tc;var rc=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function Yp(t){let e=[],r=0;for(let o=0;o<rc.length;o++){let n=`_${rc[o]}`;e[r++]=t[n]}return r=oc(t._fill,e,r),r=Kp(t._stroke,e,r),r=Qp(t.dropShadow,e,r),r=jp(t.filters,e,r),e.join("-")}function jp(t,e,r){if(!t)return r;for(let o of t)e[r++]=o.uid;return r}function oc(t,e,r){return t&&(e[r++]=t.color,e[r++]=t.alpha,e[r++]=t.fill?.styleKey),r}function Kp(t,e,r){return t&&(r=oc(t,e,r),e[r++]=t.width,e[r++]=t.alignment,e[r++]=t.cap,e[r++]=t.join,e[r++]=t.miterLimit),r}function Qp(t,e,r){return t&&(e[r++]=t.alpha,e[r++]=t.angle,e[r++]=t.blur,e[r++]=t.distance,e[r++]=te.shared.setValue(t.color).toNumber()),r}async function Zp(t,e,r=200){let o=await e.extract.base64(t);e.type!==Ee.CANVAS&&await e.encoder.commandFinished;let n=r;console.log(`logging texture ${t.source.width}px ${t.source.height}px`);let s=["font-size: 1px;",`padding: ${n}px 300px;`,`background: url(${o}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",s)}var Jp=["#000080","#228B22","#8B0000","#4169E1","#008080","#800000","#9400D3","#FF8C00","#556B2F","#8B008B"],ed=0;function nc(t,e=0,r={color:"#000000"}){t.renderGroup&&(r.color=Jp[ed++]);let o="";for(let i=0;i<e;i++)o+="    ";let n=t.label;!n&&t instanceof ot&&(n=`sprite:${t.texture.label}`);let s=`%c ${o}|- ${n} (worldX:${t.worldTransform.tx}, relativeRenderX:${t.relativeGroupTransform.tx}, renderX:${t.groupTransform.tx}, localX:${t.x})`;t.renderGroup&&(s+=" (RenderGroup)"),t.filters&&(s+="(*filters)"),console.log(s,`color:${r.color}; font-weight:bold;`),e++;for(let i=0;i<t.children.length;i++){let a=t.children[i];nc(a,e,{...r})}}function sc(t,e=0,r={index:0,color:"#000000"}){let o="";for(let s=0;s<e;s++)o+="    ";let n=`%c ${o}- ${r.index}: ${t.root.label} worldX:${t.worldTransform.tx}`;console.log(n,`color:${r.color}; font-weight:bold;`),e++;for(let s=0;s<t.renderGroupChildren.length;s++){let i=t.renderGroupChildren[s];sc(i,e,{...r,index:s})}}G.add(Qa,Za);export{Yn as a,Hi as b,Qa as c,Za as d,Hs as e,Vs as f,Xs as g,R as h,Lt as i,Nt as j,Qo as k,Zo as l,Jo as m,en as n,tn as o,rn as p,on as q,nn as r,sn as s,an as t,un as u,ln as v,cn as w,fn as x,pn as y,dn as z,mn as A,hn as B,gn as C,xn as D,bn as E,st as F,it as G,Ws as H,tr as I,rr as J,ru as K,Kr as L,yn as M,Sn as N,$s as O,qs as P,Qr as Q,Ys as R,Zr as S,js as T,Ks as U,at as V,Qs as W,Zs as X,Js as Y,ei as Z,ti as _,Le as $,J as aa,ri as ba,oi as ca,su as da,ni as ea,Se as fa,Ae as ga,si as ha,Tn as ia,au as ja,eo as ka,uu as la,lu as ma,cu as na,ci as oa,to as pa,fi as qa,Cn as ra,ro as sa,Dc as ta,ze as ua,wn as va,Dn as wa,oo as xa,pu as ya,ut as za,so as Aa,Pc as Ba,pi as Ca,Fc as Da,Mc as Ea,Gc as Fa,di as Ga,mi as Ha,we as Ia,Un as Ja,Te as Ka,D as La,hi as Ma,gi as Na,Xc as Oa,mu as Pa,ee as Qa,xi as Ra,of as Sa,uo as Ta,sf as Ua,bi as Va,uf as Wa,lf as Xa,cf as Ya,vi as Za,yi as _a,df as $a,hf as ab,co as bb,gf as cb,xf as db,Ai as eb,Mn as fb,Zf as gb,Vi as hb,jn as ib,Jf as jb,To as kb,Xi as lb,Wi as mb,zi as nb,$i as ob,qi as pb,Co as qb,Kn as rb,Yi as sb,Qn as tb,ji as ub,Ki as vb,Qi as wb,Zn as xb,Zi as yb,Ji as zb,Jn as Ab,rp as Bb,op as Cb,ea as Db,Ce as Eb,mt as Fb,Eo as Gb,br as Hb,Ne as Ib,wo as Jb,Bo as Kb,_r as Lb,ta as Mb,ra as Nb,Do as Ob,Ro as Pb,sa as Qb,ia as Rb,aa as Sb,rs as Tb,vr as Ub,ua as Vb,gt as Wb,Ht as Xb,la as Yb,Pe as Zb,Sr as _b,Po as $b,Ar as ac,Xt as bc,Tr as cc,Cr as dc,Qe as ec,Uo as fc,ns as gc,Wt as hc,Er as ic,fa as jc,pa as kc,da as lc,ma as mc,Fo as nc,wr as oc,zt as pc,ba as qc,Mo as rc,$t as sc,Oo as tc,Go as uc,Br as vc,_a as wc,va as xc,ya as yc,ss as zc,Sa as Ac,Aa as Bc,Ta as Cc,Ca as Dc,Dr as Ec,Io as Fc,Lo as Gc,is as Hc,ip as Ic,ap as Jc,up as Kc,Ea as Lc,lp as Mc,fp as Nc,pp as Oc,as as Pc,dp as Qc,us as Rc,mp as Sc,Rr as Tc,Ba as Uc,Pa as Vc,Ua as Wc,xp as Xc,bp as Yc,Fa as Zc,_p as _c,vp as $c,yp as ad,No as bd,bt as cd,Oa as dd,Ga as ed,Bp as fd,Dp as gd,Rp as hd,Yt as id,Ia as jd,La as kd,Ho as ld,Gp as md,Na as nd,ka as od,Ip as pd,Ha as qd,Lp as rd,Vo as sd,cs as td,Va as ud,Xo as vd,Xa as wd,Wa as xd,fs as yd,Wo as zd,Ze as Ad,Pr as Bd,zo as Cd,Ur as Dd,$o as Ed,Fr as Fd,kp as Gd,ps as Hd,Vp as Id,Mr as Jd,Je as Kd,ms as Ld,Or as Md,Zl as Nd,qa as Od,Ya as Pd,jt as Qd,Xp as Rd,Ka as Sd,qp as Td,Yp as Ud,Zp as Vd,nc as Wd,sc as Xd};
