/* ==========================================================
 * bootstrap-twipsy.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#twipsy
 * Adapted from the original jQuery.tipsy by Jason Frame
 * ==========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */!function(e){"use strict";function r(e,t,n){return typeof e=="function"?e.apply(t,n):e}var t;e(document).ready(function(){e.support.transition=function(){var e=document.body||document.documentElement,t=e.style,n=t.transition!==undefined||t.WebkitTransition!==undefined||t.MozTransition!==undefined||t.MsTransition!==undefined||t.OTransition!==undefined;return n}();if(e.support.transition){t="TransitionEnd";e.browser.webkit?t="webkitTransitionEnd":e.browser.mozilla?t="transitionend":e.browser.opera&&(t="oTransitionEnd")}});var n=function(t,n){this.$element=e(t);this.options=n;this.enabled=!0;this.fixTitle()};n.prototype={show:function(){var t,n,i,s,o,u;if(this.hasContent()&&this.enabled){o=this.tip();this.setContent();this.options.animate&&o.addClass("fade");o.remove().css({top:0,left:0,display:"block"}).prependTo(document.body);t=e.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});n=o[0].offsetWidth;i=o[0].offsetHeight;s=r(this.options.placement,this,[o[0],this.$element[0]]);switch(s){case"below":u={top:t.top+t.height+this.options.offset,left:t.left+t.width/2-n/2};break;case"above":u={top:t.top-i-this.options.offset,left:t.left+t.width/2-n/2};break;case"left":u={top:t.top+t.height/2-i/2,left:t.left-n-this.options.offset};break;case"right":u={top:t.top+t.height/2-i/2,left:t.left+t.width+this.options.offset}}o.css(u).addClass(s).addClass("in")}},setContent:function(){var e=this.tip();e.find(".twipsy-inner")[this.options.html?"html":"text"](this.getTitle());e[0].className="twipsy"},hide:function(){function i(){r.remove()}var n=this,r=this.tip();r.removeClass("in");e.support.transition&&this.$tip.hasClass("fade")?r.bind(t,i):i()},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getTitle:function(){var e,t=this.$element,n=this.options;this.fixTitle();typeof n.title=="string"?e=t.attr(n.title=="title"?"data-original-title":n.title):typeof n.title=="function"&&(e=n.title.call(t[0]));e=(""+e).replace(/(^\s*|\s*$)/,"");return e||n.fallback},tip:function(){return this.$tip=this.$tip||e('<div class="twipsy" />').html(this.options.template)},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}};e.fn.twipsy=function(t){e.fn.twipsy.initWith.call(this,t,n,"twipsy");return this};e.fn.twipsy.initWith=function(t,n,r){function a(i){var s=e.data(i,r);if(!s){s=new n(i,e.fn.twipsy.elementOptions(i,t));e.data(i,r,s)}return s}function f(){var e=a(this);e.hoverState="in";if(t.delayIn==0)e.show();else{e.fixTitle();setTimeout(function(){e.hoverState=="in"&&e.show()},t.delayIn)}}function l(){var e=a(this);e.hoverState="out";t.delayOut==0?e.hide():setTimeout(function(){e.hoverState=="out"&&e.hide()},t.delayOut)}var i,s,o,u;if(t===!0)return this.data(r);if(typeof t=="string"){i=this.data(r);i&&i[t]();return this}t=e.extend({},e.fn[r].defaults,t);t.live||this.each(function(){a(this)});if(t.trigger!="manual"){s=t.live?"live":"bind";o=t.trigger=="hover"?"mouseenter":"focus";u=t.trigger=="hover"?"mouseleave":"blur";this[s](o,f)[s](u,l)}return this};e.fn.twipsy.Twipsy=n;e.fn.twipsy.defaults={animate:!0,delayIn:0,delayOut:0,fallback:"",placement:"above",html:!1,live:!1,offset:0,title:"title",trigger:"hover",template:'<div class="twipsy-arrow"></div><div class="twipsy-inner"></div>'};e.fn.twipsy.rejectAttrOptions=["title"];e.fn.twipsy.elementOptions=function(t,n){var r=e(t).data(),i=e.fn.twipsy.rejectAttrOptions,s=i.length;while(s--)delete r[i[s]];return e.extend({},n,r)}}(window.jQuery||window.ender);