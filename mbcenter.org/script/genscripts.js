// JavaScript Document
function mOvr1(src)
	{ if (!src.contains(event.fromElement)) { src.style.cursor = 'pointer'; src.bgColor = '#ffeeb5'; window.status=src.children.tags('A')[0].href;}} //src.children.tags('A')[0].style.color = '#ffffff';}}

function mOut1(src) 
	{ if (!src.contains(event.toElement)) { src.style.cursor = 'default'; src.bgColor = '#ffffff'; window.status='';}} // src.children.tags('A')[0].style.color = '#ffffff';}}

function mClk(src) 
	{ if(event.srcElement.tagName=='TD'){src.children.tags('A')[0].click();} }//7879049