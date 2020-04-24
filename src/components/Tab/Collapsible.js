function collapse(showContent, hideContent1) {
	var showCollapse = document.getElementsByClassName(showContent)[0];
	var showCollapseChildren = showCollapse.children;
    var showSmartContentdiv = showCollapseChildren[2];	
    var showSignDiv = showCollapseChildren[1].lastElementChild;	//lastElementChild of childern[0](label) is p#sign
    
    if(showSmartContentdiv.style.display === 'block') {
    	if(showSignDiv.innerHTML === '-') {
			showSignDiv.innerHTML = '+';
		}
		showSmartContentdiv.style.display = 'none';
		return;
	}	

	showSmartContentdiv.style.display = 'block';
	if(showSignDiv.innerHTML === '+') {
		showSignDiv.innerHTML = '-';
	}
	
	var hideCollapse = document.getElementsByClassName(hideContent1)[0];
	var hideCollapseChildren = hideCollapse.children;
    var hideSmartContentdiv = hideCollapseChildren[2];
    var hideSignDiv = hideCollapseChildren[1].lastElementChild;

    hideSmartContentdiv.style.display = 'none';
    hideSignDiv.innerHTML = '+';
}
