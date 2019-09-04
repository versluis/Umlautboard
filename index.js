
	
		var st, char;

		function init()
		{
			message = document.getElementById('message');
		}

		function copyChar(el)
		{
		    var oldContentEditable = el.contentEditable,
		        oldReadOnly = el.readOnly,
		        range = document.createRange();
		
		    el.contentEditable = true;
		    el.readOnly = false;
		    range.selectNodeContents(el);
		
		    var s = window.getSelection();
		    s.removeAllRanges();
		    s.addRange(range);
		
		    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.
		
		    el.contentEditable = oldContentEditable;
		    el.readOnly = oldReadOnly;
		
			document.execCommand('copy');
			window.scrollTo(0, 0);
			
			clearTimeout(st);
			message.innerHTML = 'Copied ' + el.value + ' to pasteboard.';
			st = setTimeout('clearMessage()', 2500);			
		}
		
		function clearMessage()
		{
			message.innerHTML = '';
		}
		
	

