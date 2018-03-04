// ==UserScript==
// @name     Youtube Dark Theme
// @version  1
// @grant    none
// @author Phạm Trung Kiên
// @include https://www.youtube.com/*
// ==/UserScript==
function changeColor(el, bgc, color = '#ccc') {
	document.querySelectorAll(el).forEach(function(el) {
		el.style.setProperty('background-color', bgc, 'important');
		el.style.setProperty('color', color, 'important');
	});
}
var black23 = ['#yt-masthead-container', '#footer-container', '#creator-page-sidebar', '#vm-pagination', '.vm-video-item-content', '#non-appbar-vm-video-actions-bar', '#masthead-appbar', '#creator-subheader', '#vm-bulk-actions-selection'],
grey12 = ['#body', '#masthead-search-term', '#vm-myvideos-search-box'];
black23.forEach(function(el) {
  if(el == '.vm-video-item-content') {
		setTimeout(function() {
			changeColor(el, '#232323');
      changeColor('.vm-video-title-content', '' , '#ccc');
			//changeColor('.yt-uix-form-input-checkbox', '#c3c3c3');
      changeColor('.vm-video-side-view-count a', '' , '#ccc');
		}, 2000);
  }
	changeColor(el, '#232323');
});
grey12.forEach(function(el) {
	changeColor(el, '#121212');
});
document.getElementById('logo-container').style.filter = 'brightness(300%)';
changeColor('#masthead-search-terms', '#121212', '#818181');
changeColor('.upload-widget', '#141414');
changeColor('.yt-uix-button', '#141414');
changeColor('#yt-masthead-notifications-button', '#ccc');
changeColor('#upload-btn', '#ccc');
document.getElementById('appbar-guide-button').addEventListener('click', function(e) {
	setTimeout(function(){
		changeColor('.display-name', '', '#888888');
		changeColor('#guide-container', '#1C1C1C');
	}, 500);
});
