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
   const s = document.createElement('style');
   s.innerText = '';
   document.getElementsByTagName('head')[0].appendChild(s);
})();

/** change :v, :3 icon */
(() => {
   const s = document.createElement('script');
   s.innerHTML = `
function pacmanAndCute() {
   document.querySelectorAll('._5yl5').forEach(el => changeIcon(el));
   document.querySelectorAll('._3oh-._58nk').forEach(el => changeIcon(el));
}

function changeIcon(el) {
   el.innerHTML = el.innerHTML.replace(/:3/g, '<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/eb4/1/16/FACE_WITH_COLON_THREE.png">');
   el.innerHTML = el.innerHTML.replace(/:v/g, '<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/e31/1/16/PACMAN.png">');
}

window.addEventListener('load', function(e) {
 
   const open = XMLHttpRequest.prototype.open;

   XMLHttpRequest.prototype.open = function () {

      if (arguments[0] === 'POST' && (arguments[1] === '/api/graphqlbatch/' || arguments[1] === '/ajax/bz'))
         setTimeout(pacmanAndCute, 300);

      open.apply(this, arguments);
   };
});
document.addEventListener('keyup', function(e) {

   if (e.which === 13) {
      const open = XMLHttpRequest.prototype.open;

      XMLHttpRequest.prototype.open = function () {

         if (arguments[0] === 'POST' && arguments[1] === '/messaging/send/')
            setTimeout(pacmanAndCute, 300);

         open.apply(this, arguments);
      };
   }
});
`;
   document.body.appendChild(s);
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
/** CSS
body,._2s1x ._2s1y,._4sp8{background:linear-gradient(90deg, #0c192a, #290c12) !important;border:none;color:#d7c6a5 !important}.noGrip{background:linear-gradient(#290c12, #0c192a) !important}a,._6m6 a{color:#c23c3c}#contentCol,._4-u8,._3w53,._6qw3,._129h,._5vsj,.UFIRow,.UFICommentActorAndBody,._fmi,.fbChatSidebar,._1n9k,._3dlg + ._3dli,._3m75 .sideNavItem ._5afe::after,._1g5v + ._4arz,._ipo,._10lo,._517h,._57d8,._3ubp,._sg1,._1pek,._1pek ._1sex:hover,._6864,._69g3,._1lha{background:transparent !important;color:#d7c6a5 !important}._3ekx._29_4,._6ce9 ._4mq3 .fbNubButton,.titlebarLabel,._55ln,._55ob,._3ct8 ._58al,._225b,.fbChatTypeahead ._4p-s,._m_1,._2yau:after,._437j,._4ly8,._6859,._6ajm,._4ly9,.UFIList,._1rh0 ._1rg_ .UFIRow,.uiScrollableAreaContent,._4d3w._u77 ._3t09,._77bp,._6iiv,._6ijr{background:#1d111c !important;color:#d4d4d4 !important}._3ekx._29_4:hover,._6ce9 ._4mq3 .fbNubButton:hover,.titlebarLabel:hover,._55ln:hover,._55ob:hover,._3ct8 ._58al:hover,._225b:hover,.fbChatTypeahead ._4p-s:hover,._m_1:hover,._2yau:after:hover,._437j:hover,._4ly8:hover,._6859:hover,._6ajm:hover,._4ly9:hover,.UFIList:hover,._1rh0 ._1rg_ .UFIRow:hover,.uiScrollableAreaContent:hover,._4d3w._u77 ._3t09:hover,._77bp:hover,._6iiv:hover,._6ijr:hover{background:#251d25 !important}._3ekx._29_4 a,._3ekx._29_4 .count,._3ekx._29_4 ._364g,._3ekx._29_4 ._3q34,._3ekx._29_4 ._2aha,._6ce9 ._4mq3 .fbNubButton a,._6ce9 ._4mq3 .fbNubButton .count,._6ce9 ._4mq3 .fbNubButton ._364g,._6ce9 ._4mq3 .fbNubButton ._3q34,._6ce9 ._4mq3 .fbNubButton ._2aha,.titlebarLabel a,.titlebarLabel .count,.titlebarLabel ._364g,.titlebarLabel ._3q34,.titlebarLabel ._2aha,._55ln a,._55ln .count,._55ln ._364g,._55ln ._3q34,._55ln ._2aha,._55ob a,._55ob .count,._55ob ._364g,._55ob ._3q34,._55ob ._2aha,._3ct8 ._58al a,._3ct8 ._58al .count,._3ct8 ._58al ._364g,._3ct8 ._58al ._3q34,._3ct8 ._58al ._2aha,._225b a,._225b .count,._225b ._364g,._225b ._3q34,._225b ._2aha,.fbChatTypeahead ._4p-s a,.fbChatTypeahead ._4p-s .count,.fbChatTypeahead ._4p-s ._364g,.fbChatTypeahead ._4p-s ._3q34,.fbChatTypeahead ._4p-s ._2aha,._m_1 a,._m_1 .count,._m_1 ._364g,._m_1 ._3q34,._m_1 ._2aha,._2yau:after a,._2yau:after .count,._2yau:after ._364g,._2yau:after ._3q34,._2yau:after ._2aha,._437j a,._437j .count,._437j ._364g,._437j ._3q34,._437j ._2aha,._4ly8 a,._4ly8 .count,._4ly8 ._364g,._4ly8 ._3q34,._4ly8 ._2aha,._6859 a,._6859 .count,._6859 ._364g,._6859 ._3q34,._6859 ._2aha,._6ajm a,._6ajm .count,._6ajm ._364g,._6ajm ._3q34,._6ajm ._2aha,._4ly9 a,._4ly9 .count,._4ly9 ._364g,._4ly9 ._3q34,._4ly9 ._2aha,.UFIList a,.UFIList .count,.UFIList ._364g,.UFIList ._3q34,.UFIList ._2aha,._1rh0 ._1rg_ .UFIRow a,._1rh0 ._1rg_ .UFIRow .count,._1rh0 ._1rg_ .UFIRow ._364g,._1rh0 ._1rg_ .UFIRow ._3q34,._1rh0 ._1rg_ .UFIRow ._2aha,.uiScrollableAreaContent a,.uiScrollableAreaContent .count,.uiScrollableAreaContent ._364g,.uiScrollableAreaContent ._3q34,.uiScrollableAreaContent ._2aha,._4d3w._u77 ._3t09 a,._4d3w._u77 ._3t09 .count,._4d3w._u77 ._3t09 ._364g,._4d3w._u77 ._3t09 ._3q34,._4d3w._u77 ._3t09 ._2aha,._77bp a,._77bp .count,._77bp ._364g,._77bp ._3q34,._77bp ._2aha,._6iiv a,._6iiv .count,._6iiv ._364g,._6iiv ._3q34,._6iiv ._2aha,._6ijr a,._6ijr .count,._6ijr ._364g,._6ijr ._3q34,._6ijr ._2aha{color:#d4d4d4 !important}._1ht6,._1lj0,._3szq,._55lr,.linkWrap,._19s- a,._2yau,._2yav,._370r,._4ly5,._364g,.__6m,.__6l,._3eus,._1htf,._497p,._3eur._6ybk a,._58al._7tpc{color:#d4d4d4 !important}.UFICommentReactionsBling ._3emk,._1lg-{background:none !important;border-color:transparent !important}._552h{color:#000}.uiScrollableAreaContent,._4gd0{background:transparent !important}#Fill-1{fill:#d4d4d4}
**/
