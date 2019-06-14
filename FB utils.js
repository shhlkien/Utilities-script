// ==UserScript==
// @name     FB utils
// @description night theme, preventing "up next" video
// @version  1.1.0
// @author Phạm Trung Kiên
// @match https://*.facebook.com/*
// @grant    none
// ==/UserScript==
/* change theme */
(function changeTheme() {
   let s = document.createElement('style');
   s.innerText = 'REPLACE_CSS';
   document.getElementsByTagName('head')[0].appendChild(s);
})(); 
/** remove fb reference */
document.addEventListener('mouseover', function (e) {
   if (e.target.tagName === 'A' || e.target.closest('a')) {
      const a = e.target.closest('a');
      a.href = a.href.replace(a.search, '');
   }
});
/** stop up next */
let stop, oldURL;
document.addEventListener('click', function () {
   if (location.pathname.indexOf('video') >= 0 && location.pathname !== oldURL) stopThisFuckingFeature();
});
/** change :v, :3 icon */
document.querySelectorAll('._mh6').forEach(el => el.addEventListener('keyup', pacmanAndCute));
document.querySelectorAll('._3-8x._3oh-').forEach(el => el.addEventListener('keyup', pacmanAndCute));

function pacmanAndCute() {
   document.querySelectorAll('._5yl5').forEach(el => changeIcon(el));
   document.querySelectorAll('._3oh-._58nk').forEach(el => changeIcon(el));
}

function changeIcon(el) {
   el.innerHTML = el.innerHTML.replace(/:3/g, '<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/eb4/1/16/FACE_WITH_COLON_THREE.png">');
   el.innerHTML = el.innerHTML.replace(/:v/g, '<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/e31/1/16/PACMAN.png">');
}

function stopThisFuckingFeature() {
   stop = setInterval(function () {
      oldURL = location.pathname;
      document.querySelector('._64gk a').click();
      document.querySelector('._64gk a') && clearInterval(stop);
   }, 1000);
}
/** SCSS **
body,._2s1x ._2s1y,._4sp8{background:linear-gradient(90deg, #0c192a, #290c12) !important;border:none;color:#d7c6a5 !important}.noGrip{background:linear-gradient(#290c12, #0c192a) !important}a,._6m6 a{color:#c23c3c}#contentCol,._4-u8,._3w53,._6qw3,._129h,._5vsj,.UFIRow,.UFICommentActorAndBody,._fmi,.fbChatSidebar,._1n9k,._3dlg + ._3dli,._3m75 .sideNavItem ._5afe::after,._1g5v + ._4arz,._ipo,._10lo,._517h,._57d8,._3ubp,._sg1,._1pek,._1pek ._1sex:hover,._6864,._69g3,._1lha{background:transparent !important;color:#d7c6a5 !important}._3ekx._29_4,._6ce9 ._4mq3 .fbNubButton,.titlebarLabel,._55ln,._55ob,._3ct8 ._58al,._225b,.fbChatTypeahead ._4p-s,._m_1,._2yau:after,._437j,._4ly8,._6859,._6ajm,._4ly9,.UFIList,._1rh0 ._1rg_ .UFIRow,.uiScrollableAreaContent,._4d3w._u77 ._3t09,._77bp,._6iiv,._6ijr{background:#1d111c !important;color:#d4d4d4 !important;&:hover{background:#251d25 !important}a,.count,._364g,._3q34,._2aha{color:#d4d4d4 !important}}._1ht6,._1lj0,._3szq,._55lr,.linkWrap,._19s- a,._2yau,._2yav,._370r,._4ly5,._364g,.__6m,.__6l,._3eus,._1htf,._497p,._3eur._6ybk a,._58al._7tpc{color:#d4d4d4 !important}.UFICommentReactionsBling ._3emk,._1lg-{background:none !important;border-color:transparent !important}._552h{color:#000}.uiScrollableAreaContent,._4gd0{background:transparent !important}#Fill-1{fill:#d4d4d4}
**/
