/******************************************zepto-1********************************************************************/
//定义了$对象，$对象返回4个方法，返回了4个方法
//dom:以数组形式返回选择器
//anim:未定义
//css：指定css样式
//html:指定html内容

/*Array.prototype.slice.apply(arguments)：将arguments转换为一个数组
直接调用arguments.slice（）将返回一个"Object doesn't support this property or method"的错误，
因为arguments不是一个真正意义上的数组*/

// var $ = function(selector){
//   return { dom: Array.prototype.slice.apply(document.querySelectorAll(selector)), 
//     anim: $.anim, css: $.css, html: $.html };
// }

// $.html = function(html){
//   this.dom.forEach(function(el){ el.innerHTML = html }); return this;
// }

// $.css = function(style){
//   this.dom.forEach(function(el){ el.style.cssText += ';'+style }); return this;
// }

/*For now:
$('some css selector').html('set contents').css('set styles');*/

/******************************************zepto-1********************************************************************/

/******************************************zepto-2********************************************************************/
// var $ = function(selector){
//   $.dom = [].slice.apply(document.querySelectorAll(selector)); return $;
// }

// insertAdjacentHTML() 将指定的文本解析为HTML或XML，并将结果节点插入到DOM树中的指定位置。
// insertAdjacentHTML() 方法详见https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
// $.append = function(html){
//   $.dom.forEach(function(el){ el.insertAdjacentHTML('beforeEnd',html) }); return $;
// }

// $.prepend = function(html){
// 	$.dom.forEach(function(el){ el.insertAdjacentHTML('afterBegin',html)}) return $;
// }

// $.html = function(html){
//   $.dom.forEach(function(el){ el.innerHTML = html }); return $;
// }

// $.css = function(style){
//   $.dom.forEach(function(el){ el.style.cssText += ';'+style }); return $;
// }

/*******************************************/
// var $ = function(_){
//   if(typeof _ == 'function') $.dom.forEach(_)
//   else $.dom = [].slice.apply(document.querySelectorAll(_));
//   return $;
// }

// $.html = function(html){
//   return $(function(el){ el.innerHTML = html });
// }

// $.append = function(html){
//   return $(function(el){ el.insertAdjacentHTML('beforeEnd',html) });
// }

// $.prepend = function(html){
//   return $(function(el){ el.insertAdjacentHTML('afterBegin',html) });
// }

// $.css = function(style){
//   return $(function(el){ el.style.cssText += ';'+style });
// }
/******************************************zepto-2********************************************************************/

/******************************************zepto-3********************************************************************/
// function $(_){
//   if(typeof _ == 'function') $.dom.forEach(_)
//     else $.dom = [].slice.apply(document.querySelectorAll(_));
//   return $.fn;
// }

// $.fn = {
//   get: function(idx){ return idx === undefined ? $.dom : $.dom[idx] },
//   html: function(html){
//     return $(function(el){ el.innerHTML = html });
//   },
//   append: function(html){
//     return $(function(el){ el.insertAdjacentHTML('beforeEnd',html) });
//   },
//   prepend: function(html){
//     return $(function(el){ el.insertAdjacentHTML('afterBegin',html) });
//   },
//   css: function(style){
//     return $(function(el){ el.style.cssText += ';'+style });
//   }
// };

// (function(){
//   function ajax(method, url, success){
//     var r = new XMLHttpRequest();
//     r.onreadystatechange = function(){
//       if(r.readyState==4 && r.status==200) 
//         success(r.responseText);
//     };
//     r.open(method,url,true);
//     r.send(null);
//   }
  
//   $.get = function(url, success){ ajax('GET', url, success); };
//   $.post = function(url, success){ ajax('POST', url, success); };
//   $.getJSON = function(url, success){ 
//     $.get(url, function(json){ success(JSON.parse(json)) });
//   };
// })();


/******************************************zepto-3********************************************************************/

/******************************************zepto-4********************************************************************/
// var $ = (function(){
// 	var slice = [].slice,k,
// 		ADJ_OPS = {append:'beforeEnd',prepend:'afterBegin',before:'beforeBegin',after:'afterEnd'};
// function $(_){
//   if(typeof _ == 'function') $.dom.forEach(_)
//     else { 
//       $._   = _;
//       $.dom = slice.call(document.querySelectorAll(_));
//     }
//   return $.fn;
// }

// 	$.fn = {
// 	  get: function(idx){ return idx === undefined ? $.dom : $.dom[idx] },
// 	  html: function(html){
// 	    return $(function(el){ el.innerHTML = html });
// 	  },
// 	  css: function(style){
// 	    return $(function(el){ el.style.cssText += ';'+style });
// 	  },
// 	  anim: function(transform, opacity, dur){
// 	    return $.fn.css('-webkit-transition:all '+(dur||0.5)+'s;'+
// 	      '-webkit-transform:'+transform+';opacity:'+(opacity===0?0:opacity||1));
// 	  },
// 	  live: function(event, callback){
// 	    var selector = $._;
// 	    document.body.addEventListener(event, function(event){
// 	      var target = event.target, nodes = slice.call(document.querySelectorAll(selector));
// 	      while(target && nodes.indexOf(target)<0) target = target.parentNode;
// 	      if(target && !(target===document)) callback.call(target, event);
// 	    }, false);
// 	    return $.fn;
// 	  }
// 	};


//   function ajax(method, url, success){
//     var r = new XMLHttpRequest();
//     r.onreadystatechange = function(){
//       if(r.readyState==4 && r.status==200) 
//         success(r.responseText);
//     };
//     r.open(method,url,true);
//     r.send(null);
//   }
  
//   $.get = function(url, success){ ajax('GET', url, success); };
//   $.post = function(url, success){ ajax('POST', url, success); };
//   $.getJSON = function(url, success){ 
//     $.get(url, function(json){ success(JSON.parse(json)) });
//   };
//   return $
// })();
/******************************************zepto-4********************************************************************/
/******************************************zepto-5********************************************************************/

// var $ = (function(d){
// 	var slice = [].slice,k,
// 		ADJ_OPS = {append:'beforeEnd',prepend:'afterBegin',before:'beforeBegin',after:'afterEnd'};
	
	
// 	function $(_){
// 		function fn(_){
// 			return arguments.callee.dom.forEach(_),arguments.callee;
// 		}
// 		// fn.dom = slice.call(document.querySelectorAll(fn.selector=_));
// 		fn.dom = _ instanceof Element?[_]:slice.call(d.querySelectorAll(fn.selector=_))
// 		for(k in $.fn) {
// 			fn[k] = $.fn[k]
// 		}
// 		return fn
// 	}

// 	function classRE(name) {return new RegExp("(^|\\s)"+name+"(\\s|$)")}

// 	$.fn = {
// 	  get: function(idx){ 
// 	  	return idx === void 0 ? $.dom : $.dom[idx] 
// 	  },
// 	  html: function(html){
// 	  	if(html=== void 0) return this.dom[0].innerHTML || void 0;
// 	    return this(function(el){ el.innerHTML = html });
// 	  },
// 	  attr:function(name,value){
// 	  		if(value== void 0) return this.dom[0].getAttribute(name) || void 0;
// 	  		return this(function(el){el.setAttribute(name,value)});
// 	  },
// 	  css: function(style){
// 	    return this(function(el){ el.style.cssText += ';'+style });
// 	  },
// 	  index:function(target){
// 	  	return [].inexOf.call(this.dom,$(target).get(0))
// 	  },
// 	  anim: function(transform, opacity, dur){
// 	    return this.css('-webkit-transition:all '+(dur||0.5)+'s;'+
// 	      '-webkit-transform:'+transform+';opacity:'+(opacity===0?0:opacity||1));
// 	  },
// 	  // live: function(event, callback){
// 	  //   var selector = this.selector;
// 	  //   document.body.addEventListener(event, function(event){
// 	  //     var target = event.target, nodes = slice.call(document.querySelectorAll(selector));
// 	  //     while(target && nodes.indexOf(target)<0) target = target.parentNode;
// 	  //     if(target && !(target===document)) callback.call(target, event);
// 	  //   }, false);
// 	  //   return this;
// 	  // },
// 	  delegate:function(selector,event,callback){
// 	  	return this(function(el){
// 	  		el.addEventListener(event,function(event){
// 	  			var target = event.target,node = slice.call(el.querySelectorAll(selector));
// 	  			while(target && nodes.indexOf(target)<0) target = target.parentNode;
// 	  			if(target && !(target===el)) callback.call(target,event);
// 	  		},false)
// 	  	})
// 	  },
// 	  addClass:function(name){
// 	  	return this(function(el){
// 	  		!classRE(name).test(el.className) && (el.className += (el.className?' ':'')+name);
// 	  	})
// 	  },
// 	  removeClass:function(name){
// 	  	return this(function(el){
// 	  		el.className = el.className.replace(classRE(name),' ').replace(/^\s+|\s+$/,'');
// 	  	})
// 	  },
// 	};

// 	for(k in ADJ_OPS)
//     $.fn[k] = (function(op){ 
//       return function(html){ return this(function(el){ el.insertAdjacentHTML(op,html) }) };
//     })(ADJ_OPS[k]);

//   function ajax(method, url, success){
//     var r = new XMLHttpRequest();
//     r.onreadystatechange = function(){
//       if(r.readyState==4 && (r.status==200 || r.status==0))
//         success(r.responseText);
//     };
//     r.open(method,url,true);
//     r.send(null);
//   }
  
//   $.get = function(url, success){ ajax('GET', url, success); };
//   $.post = function(url, success){ ajax('POST', url, success); };
//   $.getJSON = function(url, success){ 
//     $.get(url, function(json){ success(JSON.parse(json)) });
//   };
//   return $
// })(document);
/******************************************zepto-5********************************************************************/
/******************************************zepto-5********************************************************************/

var $ = (function(d){
	var slice = [].slice,k,
		CN = 'className',AEL = 'addEventListener',PN = 'parentNode',
		ADJ_OPS = {append:'beforeEnd',prepend:'afterBegin',before:'beforeBegin',after:'afterEnd'};
	
	
	function $(_,context){
		if(context !== void 0) return $(context).find(_);
		function fn(_){
			return fn.dom.forEach(_),fn;
		}
		fn.dom = (typeof _ =='function'&& 'dom' in _)?_.dom:(_ instanceof Array?_:(_ instanceof Element?[_]:slice.call(d.querySelectorAll(fn.selector=_))));
		for(k in $.fn) {
			fn[k] = $.fn[k]
		}
		return fn
	}

	function classRE(name) {return new RegExp("(^|\\s)"+name+"(\\s|$)")}
	function elSelect(el,selector){return slice.call(el.querySelectorAll(selector))}

	$.fn = {
	  get: function(idx){ 
	  	return idx === void 0 ? $.dom : $.dom[idx] 
	  },
	  remove:function(){
	  	return this(function(el){el.PN.removeChild(el)})
	  },
	  each:function(callback){
	  	return this(function(e){callback(e)})
	  },
	  find:function(selector){
	  	return $(this.dom.map(function(el){return elSelect(el,selector)}).reduce(function(a,b){return a.concat(b)},[]))
	  },
	  closest:function(selector){
	  	 var el=this.dom[0].PN,nodes = elSelect(d,selector);
	  	 while(el && nodes.indexOf(el)<0) el=el.PN;
	  	 return $(el && !(el===d)?el:[]);
	  },
	  html: function(html){
	  	return html === void 0 ?(this.dom.length>0?this.dom[0].innerHTML:null) : this(function(el){el.innerHTML = html})
	  },
	  attr: function(name,value){
	      return (typeof name == 'string' && value === void 0) ? (this.dom.length>0 ? this.dom[0].getAttribute(name) || undefined : null) :
	        this(function(el){ 
	          if (typeof name == 'object') for(k in name) el.setAttribute(k, name[k])
	          else el.setAttribute(name,value);
	        });
      },
      offset:function(){
      	var obj = this.dom[0].getBoundingClientRect();
      	return { left: obj.left+d.body.scrollLeft, top: obj.top+d.body.scrollTop, width: obj.width, height: obj.height };
      },
	  css: function(style){
	    return this(function(el){ el.style.cssText += ';'+style }); 
	  },
	  index:function(target){
	  	return this.dom.indexOf($(target).get(0));
	  },
	  anim: function(transform, opacity, dur){
	    return this.css('-webkit-transition:all '+(dur||0.5)+'s;'+
	      '-webkit-transform:'+transform+';opacity:'+(opacity===0?0:opacity||1));
	  },
	  bind:function(event,callback){
	  	return this(function(el){
	  		event.splite(/\s/).forEach(function(event){el[AEL](event,callback,false)});
	  	})
	  },
	  delegate:function(selector,event,callback){
	  	return this(function(el){
	  		el[AEL](event,function(event){
	  			var target = event.target,node = elSelect(el,selector);
	  			while(target && nodes.indexOf(target)<0) target = target.parentNode;
	  			if(target && !(target===el)) callback.call(target,event);
	  		},false)
	  	})
	  },
	  addClass:function(name){
	  	return this(function(el){
	  		!classRE(name).test(el[CN]) && (el[CN] += (el[CN]?' ':'')+name);
	  	})
	  },
	  removeClass:function(name){
	  	return this(function(el){
	  		el[CN] = el[CN].replace(classRE(name),' ').replace(/^\s+|\s+$/,'');
	  	})
	  }
	};

	['width','height'].forEach(function(m){$.fn[m] = function(){return this.offset()[m]}});  
	for(k in ADJ_OPS)
    $.fn[k] = (function(op){ 
      return function(html){ return this(function(el){ 
      	el['insertAdjacent' + (html instanceof Element ? 'Element' : 'HTML')](op,html)
      }) };
    })(ADJ_OPS[k]);

    ['swipeLeft', 'swipeRight', 'doubleTap', 'tap'].forEach(function(m){
    	$.fn[m] = function(callback){ return this.bind(m, callback) }
  	});

	  function dispatch(event, target) {
	    var e = document.createEvent('Events');
	    e.initEvent(event, true, false);
	    target.dispatchEvent(e);
	  }

	  d.ontouchstart = function(e) {
	    var now = Date.now(), t = e.touches[0].target, delta = now - (t.last || now);
	    t.x1 = e.touches[0].pageX;
	    if (delta > 0 && delta <= 800) {
	      dispatch('doubleTap', t);
	      t.last = 0;
	    } else t.last = now;
	  }

	  d.ontouchmove = function(e) {
	    e.touches[0].target.x2 = e.touches[0].pageX;
	  }

	  d.ontouchend = function(e) {
	    var t = e.target;
	    if (t.x2 > 0) {
	      t.x1 - t.x2 > 30 && dispatch('swipeLeft', t);
	      t.x1 - t.x2 < -30 && dispatch('swipeRight', t);
	      t.x1 = t.x2 = t.last = 0;
	    } else if (t.last != 0) {
	      dispatch('tap', t);
	    }
	  }

  function ajax(method, url, success){
    var r = new XMLHttpRequest();
    r.onreadystatechange = function(){
      if(r.readyState==4 && (r.status==200 || r.status==0))
        success(r.responseText);
    };
    r.open(method,url,true);
    r.setRequestHeader('X-Requested-Width','XMLHttpRequest');
    r.send(null);
  }
  
  $.get = function(url, success){ ajax('GET', url, success); };
  $.post = function(url, success){ ajax('POST', url, success); };
  $.getJSON = function(url, success){ 
    $.get(url, function(json){ success(JSON.parse(json)) });
  };
  return $;

})(document);

/******************************************zepto-5********************************************************************/