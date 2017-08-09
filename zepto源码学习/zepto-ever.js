/******************************************zepto-first********************************************************************/
//定义了$对象，$对象返回4个方法，返回了4个方法
//dom:以数组形式返回选择器
//anim:未定义
//css：指定css样式
//html:指定html内容

/*Array.prototype.slice.apply(arguments)：将arguments转换为一个数组
直接调用arguments.slice（）将返回一个"Object doesn't support this property or method"的错误，
因为arguments不是一个真正意义上的数组*/

var $ = function(selector){
  return { dom: Array.prototype.slice.apply(document.querySelectorAll(selector)), 
    anim: $.anim, css: $.css, html: $.html };
}

$.html = function(html){
  this.dom.forEach(function(el){ el.innerHTML = html }); return this;
}

$.css = function(style){
  this.dom.forEach(function(el){ el.style.cssText += ';'+style }); return this;
}

/*For now:
$('some css selector').html('set contents').css('set styles');*/

/******************************************zepto-first********************************************************************/
