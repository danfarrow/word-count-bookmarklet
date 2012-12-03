// javascript:(function%20(){%20var%20sel%20=%20window.getSelection().toString();%20var%20arr%20=%20sel.split('%20');%20var%20cnt%20=%20arr.length;%20alert("Wordcount:%20"%20+%20cnt);%20})();

/**
 * Count words in currently selected text and display alert
 *
 * @todo Doesn't work well with iframes
 */
(function (){
	var sel = window.getSelection().toString();
	var arr = sel.split('%20');
	var cnt = arr.length;
	alert("Wordcount: " + cnt);
})();