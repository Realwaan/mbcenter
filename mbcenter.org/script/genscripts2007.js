// JavaScript Document
function mOvr1(src)
	{ if (!src.contains(event.fromElement)) { src.style.cursor = 'pointer'; src.bgColor = '#ffeeb5'; window.status=src.children.tags('a')[0].href; src.children.tags('A')[0].style.color = '#cc0000';}}

function mOut1(src) 
	{ if (!src.contains(event.toElement)) { src.style.cursor = 'default'; src.bgColor = '#BDC9BA'; window.status=''; src.children.tags('a')[0].style.color = '#333333';}}

function mClk(src) 
	{ if(event.srcElement.tagName=='TD'){src.children.tags('A')[0].click();} }//7879049