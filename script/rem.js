(function (doc, win) {
	    var docEl = doc.documentElement,
	      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	      recalc = function () {
	        var clientWidth = docEl.clientWidth;
	        if (!clientWidth) return;
	        docEl.style.fontSize = 16 * (clientWidth / 375) + 'px';
	      };
	
	    if (!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
	    doc.addEventListener('DOMContentLoaded', recalc, false);
	  })(document, window);
 /*baseUrl*/
   var baseUrl = "http://192.168.20.160:8080/ope";