
function getSelectedText() {
	var text = "";
	if (typeof window.getSelection != "undefined") {
    		text = window.getSelection().toString();
	} else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
    		text = document.selection.createRange().text;
	}
	return text;
}

function grabText() {
	var selectedText = getSelectedText();
	if (selectedText) {
    		alert("Got selected text " + selectedText);
	}
}

document.onmouseup = grabText;
document.onkeyup = grabText;
