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
(function(slice){
	var $ = function(_){
	  if(typeof _ == 'function') $.dom.forEach(_)
	    else { 
	      $._   = _;
	      $.dom = slice.call(document.querySelectorAll(_));
	    }
	  return $.fn;
	}

	$.fn = {
	  get: function(idx){ return idx === undefined ? $.dom : $.dom[idx] },
	  html: function(html){
	    return $(function(el){ el.innerHTML = html });
	  },
	  append: function(html){
	    return $(function(el){ el.insertAdjacentHTML('beforeEnd',html) });
	  },
	  prepend: function(html){
	    return $(function(el){ el.insertAdjacentHTML('afterBegin',html) });
	  },
	  css: function(style){
	    return $(function(el){ el.style.cssText += ';'+style });
	  },
	  anim: function(transform, opacity, dur){
	    return $.fn.css('-webkit-transition:all '+(dur||0.5)+'s;'+
	      '-webkit-transform:'+transform+';opacity:'+(opacity===0?0:opacity||1));
	  },
	  live: function(event, callback){
	    var selector = $._;
	    document.body.addEventListener(event, function(event){
	      var target = event.target, nodes = slice.call(document.querySelectorAll(selector));
	      while(target && nodes.indexOf(target)<0) target = target.parentNode;
	      if(target && !(target===document)) callback.call(target, event);
	    }, false);
	    return $.fn;
	  }
	};


  function ajax(method, url, success){
    var r = new XMLHttpRequest();
    r.onreadystatechange = function(){
      if(r.readyState==4 && r.status==200) 
        success(r.responseText);
    };
    r.open(method,url,true);
    r.send(null);
  }
  
  $.get = function(url, success){ ajax('GET', url, success); };
  $.post = function(url, success){ ajax('POST', url, success); };
  $.getJSON = function(url, success){ 
    $.get(url, function(json){ success(JSON.parse(json)) });
  };
  this.$ = $;
})([].slice);
/******************************************zepto-4********************************************************************/