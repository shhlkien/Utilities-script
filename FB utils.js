// ==UserScript==
// @name     FB utils
// @description night theme, preventing "up next" video
// @version  1.1.1
// @author Phạm Trung Kiên
// @match https://*.facebook.com/*
// @grant    none
// ==/UserScript==
/* change theme */
(function changeTheme() {
   const s = document.createElement('style');

   switch (location.pathname.split('/')[1]) {
      case 'groups':
         s.innerText = 'body,._2s1x ._2s1y{background:linear-gradient(90deg, #0c192a, #290c12) !important}a,._5vb_ ._c51 a{color:#ff4d4d}._2s1x ._2s1y{color:#dddcdc;border:none}._2s1x ._2s1y ._2n_9,._2s1x ._2s1y ._2n_9.f_click,._2s1x ._2s1y ._59fc,._2s1x ._2s1y #pageLoginAnchor{filter:invert(100%)}.fbChatSidebar{background:transparent;box-shadow:none !important;border:none}.fbChatSidebar ._4oes,.fbChatSidebar ._58al,.fbChatSidebar .fbChatTypeahead ._4p-s{background:transparent !important}.fbChatSidebar ._58al{color:#969396}.fbChatSidebar ._55ln,.fbChatSidebar ._3q34,.fbChatSidebar ._364g{color:#dddcdc}.fbChatSidebar ._55ln:hover,.fbChatSidebar ._3q34:hover,.fbChatSidebar ._364g:hover{background:#2d2424}._2yap ._2yav,._2yaa ._2yau{color:#dddcdc}._2yap ._2yav::after,._2yaa ._2yau::after{background:transparent}._3_gi .uiSearchInput::after,._3o_h::after{background:transparent;border-color:#dddcdc}._3o_h,._3_gi .uiSearchInput input{color:#dddcdc}#contentCol,._3ubp,._sg1,._4-u8,._3w53,._6qw3,._129h,._1n9k,._3dlg+._3dli,._1pek,._6a8z,._2dck ._1-tt,._m_1,._5esx ._58ak,._5esl td._5esm:first-child,._5esl td._5esw,.uiBoxWhite,._59_m,._69g3,._3eqz,._7xn._7xn,._57d8{background:transparent !important}._sg1 ._5qtp,._4-u8,._6qw3,._6m6 a,._6m7._3bt9,._6m3 ._1t62,._3w8y ._4yxo,._129h,._2fj2,._3mvr,._5pco,.fcb,h1,h2,h3,h4,h5,h6,._2dck ._1-tt input,._5esx ._58ak input,.mtm._5pco p{color:#dddcdc !important}._1pek ._1sex:hover{background:#ffffff21}._m_1:hover{background:#e6e6e6 !important}';
         break;
      case 'messages':
         s.innerText = 'body,._2s1x ._2s1y{background:linear-gradient(90deg, #0c192a, #290c12) !important}a,._5vb_ ._c51 a{color:#ff4d4d}._2s1x ._2s1y{color:#dddcdc;border:none}._2s1x ._2s1y ._2n_9,._2s1x ._2s1y ._2n_9.f_click,._2s1x ._2s1y ._59fc,._2s1x ._2s1y #pageLoginAnchor{filter:invert(100%)}._4sp8,._58al._7tpc,._wu0,._5irm._7mkm,._hh7{background:transparent}body,._3eus,._1lj0,._3szq,._1ht6,._1ht3 ._1htf,._58al._7tpc,._364g,._3q34,._3q35._7s4c,._3eur._6ybk a,._3oh-,._36zg,._6-xo{color:#dddcdc !important}._30yy._4rv6._39bk{filter:invert(100%)}._33p7{border:1px solid #dddcdc}._33p7 input{color:#dddcdc}._hh7{border:1px solid #dddcdc}._40fu path{fill:#dddcdc}';
         break;
      default: 
         s.innerText = 'body,._2s1x ._2s1y{background:linear-gradient(90deg, #0c192a, #290c12) !important}a,._5vb_ ._c51 a{color:#ff4d4d}._2s1x ._2s1y{color:#dddcdc;border:none}._2s1x ._2s1y ._2n_9,._2s1x ._2s1y ._2n_9.f_click,._2s1x ._2s1y ._59fc,._2s1x ._2s1y #pageLoginAnchor{filter:invert(100%)}.fbChatSidebar{background:transparent;box-shadow:none !important;border:none}.fbChatSidebar ._4oes,.fbChatSidebar ._58al,.fbChatSidebar .fbChatTypeahead ._4p-s{background:transparent !important}.fbChatSidebar ._58al{color:#969396}.fbChatSidebar ._55ln,.fbChatSidebar ._3q34,.fbChatSidebar ._364g{color:#dddcdc}.fbChatSidebar ._55ln:hover,.fbChatSidebar ._3q34:hover,.fbChatSidebar ._364g:hover{background:#2d2424}._3m75 .selectedItem ._55yu>a{background-color:transparent !important;border-color:unset !important;color:transparent}._3m75 .selectedItem ._55yu>a:hover{border-color:unset}._bui ._5afe{color:#dddcdc}._bui ._5afe:after,._bui ._5afe:hover:after{background:transparent !important}.sideNavItem:hover .uiSideNavEditButton a{background-color:transparent !important;border-color:transparent !important}._2yap ._2yav,._2yaa ._2yau{color:#dddcdc}._2yap ._2yav::after,._2yaa ._2yau::after{background:transparent}._3_gi .uiSearchInput::after,._3o_h::after{background:transparent;border-color:#dddcdc}._3o_h,._3_gi .uiSearchInput input{color:#dddcdc}#contentCol,._3ubp,._sg1,._4-u8,._3w53,._6qw3,._129h,._1n9k,._3dlg+._3dli,._1pek,._6a8z,._2dck ._1-tt,._m_1,._5esx ._58ak,._5esl td._5esm:first-child,._5esl td._5esw,._59_m,._69g3,._3eqz{background:transparent !important}._sg1 ._5qtp,._4-u8,._6qw3,._6m6 a,._6m7._3bt9,._6m3 ._1t62,._3w8y ._4yxo,._129h,._2fj2,._3mvr,h1,h2,h3,h4,h5,h6,._2dck ._1-tt input,._5esx ._58ak input{color:#dddcdc !important}._1pek ._1sex:hover{background:#ffffff21}._m_1:hover{background:#e6e6e6 !important}';
         break;
   }
   
   document.getElementsByTagName('head')[0].appendChild(s);
})();

/** change :v, :3 icon */
// (() => {
//    const s = document.createElement('script');
//    s.innerHTML = `
// function pacmanAndCute() {
//    document.querySelectorAll('._5yl5').forEach(el => changeIcon(el));
//    document.querySelectorAll('._3oh-._58nk').forEach(el => changeIcon(el));
// }

// function changeIcon(el) {
//    el.innerHTML = el.innerHTML.replace(/:3/g, '<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/eb4/1/16/FACE_WITH_COLON_THREE.png">');
//    el.innerHTML = el.innerHTML.replace(/:v/g, '<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/e31/1/16/PACMAN.png">');
// }

// window.addEventListener('load', function(e) {
 
//    const open = XMLHttpRequest.prototype.open;

//    XMLHttpRequest.prototype.open = function () {

//       if (arguments[0] === 'POST' && (arguments[1] === '/api/graphqlbatch/' || arguments[1] === '/ajax/bz'))
//          setTimeout(pacmanAndCute, 300);

//       open.apply(this, arguments);
//    };
// });
// document.addEventListener('keyup', function(e) {

//    if (e.which === 13) {
//       const open = XMLHttpRequest.prototype.open;

//       XMLHttpRequest.prototype.open = function () {

//          if (arguments[0] === 'POST' && arguments[1] === '/messaging/send/')
//             setTimeout(pacmanAndCute, 300);

//          open.apply(this, arguments);
//       };
//    }
// });
// `;
//    document.body.appendChild(s);
// })();

/** remove fb reference */
document.addEventListener('mouseover', function (e) {
   if ( (e.target.tagName === 'A' || e.target.closest('a') ) && e.target.closest('a').href.indexOf('facebook.com') < 0) {
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
$grey: #969396;
$white:#dddcdc;

body,
._2s1x ._2s1y {
   background:linear-gradient(90deg, #0c192a, #290c12) !important;
}
a,
._5vb_ ._c51 a{
   color: #ff4d4d
}
._2s1x ._2s1y {
   color: $white;
   border: none;
   ._2n_9,
   ._2n_9.f_click,
   ._59fc,
   #pageLoginAnchor{
      filter: invert(100%);
   }
}

.fbChatSidebar {
   background: transparent;
   box-shadow: none !important;
   border: none;
   ._4oes,
   ._58al,
   .fbChatTypeahead ._4p-s    {
      background: transparent !important;
   }
   ._58al {
      color: $grey;
   }
   ._55ln,
   ._3q34,
   ._364g {
      color: $white;
      &:hover {
         background: #2d2424;
      }
   }
}
// left sidebar
._3m75 .selectedItem ._55yu > a {
   background-color: transparent !important;
   border-color: unset !important;
   color: transparent;
   &:hover {
      border-color: unset;
   }
}
._bui ._5afe {
   color: $white;
   &:after,
   &:hover:after {
      background: transparent !important
   }
}
.sideNavItem:hover .uiSideNavEditButton a {
   background-color: transparent !important;
   border-color: transparent !important;
}

// newsfeed
#contentCol,
._3ubp,
._sg1,
._4-u8,
._3w53,
._6qw3,
._129h,
._1n9k,
._3dlg + ._3dli,
._1pek,
._6a8z,
._2dck ._1-tt,
._m_1,
._5esx ._58ak,
._5esl td._5esm:first-child,
._5esl td._5esw,
._59_m,
._69g3,
._3eqz
{
   background: transparent !important;
}
._sg1 ._5qtp,
._4-u8,
._6qw3,
._6m6 a,
._6m7._3bt9,
._6m3 ._1t62,
._3w8y ._4yxo,
._129h,
._2fj2,
._3mvr,
h1, h2, h3, h4, h5, h6,
._2dck ._1-tt input,
._5esx ._58ak input {
   color: $white !important;
}
._1pek ._1sex:hover {
   background: #ffffff21;
}
._m_1:hover {
   background: #e6e6e6 !important;
}

//========================================================== GROUP
$grey: #969396;
$white:#dddcdc;

body,
._2s1x ._2s1y {
   background:linear-gradient(90deg, #0c192a, #290c12) !important;
}
a,
._5vb_ ._c51 a{
   color: #ff4d4d
}
._2s1x ._2s1y {
   color: $white;
   border: none;
   ._2n_9,
   ._2n_9.f_click,
   ._59fc,
   #pageLoginAnchor{
      filter: invert(100%);
   }
}

.fbChatSidebar {
   background: transparent;
   box-shadow: none !important;
   border: none;
   ._4oes,
   ._58al,
   .fbChatTypeahead ._4p-s    {
      background: transparent !important;
   }
   ._58al {
      color: $grey;
   }
   ._55ln,
   ._3q34,
   ._364g {
      color: $white;
      &:hover {
         background: #2d2424;
      }
   }
}
// left sidebar
._2yap ._2yav,
._2yaa ._2yau{
   color: $white;
   &::after {
      background: transparent;
   }
}
._3_gi .uiSearchInput::after,
._3o_h::after{
   background: transparent;
   border-color: $white;
}
._3o_h,
._3_gi .uiSearchInput input {
   color: $white;
}
// newsfeed
#contentCol,
._3ubp,
._sg1,
._4-u8,
._3w53,
._6qw3,
._129h,
._1n9k,
._3dlg + ._3dli,
._1pek,
._6a8z,
._2dck ._1-tt,
._m_1,
._5esx ._58ak,
._5esl td._5esm:first-child,
._5esl td._5esw,
.uiBoxWhite,
._59_m,
._69g3,
._3eqz,
._7xn._7xn,
._57d8
{
   background: transparent !important;
}
._sg1 ._5qtp,
._4-u8,
._6qw3,
._6m6 a,
._6m7._3bt9,
._6m3 ._1t62,
._3w8y ._4yxo,
._129h,
._2fj2,
._3mvr,
._5pco,
.fcb,
h1, h2, h3, h4, h5, h6,
._2dck ._1-tt input,
._5esx ._58ak input,
.mtm._5pco p{
   color: $white !important;
}
._1pek ._1sex:hover {
   background: #ffffff21;
}
._m_1:hover {
   background: #e6e6e6 !important;
}

//========================================================== MESS
$grey: #969396;
$white:#dddcdc;

body,
._2s1x ._2s1y {
   background:linear-gradient(90deg, #0c192a, #290c12) !important;
}
a,
._5vb_ ._c51 a{
   color: #ff4d4d
}
._2s1x ._2s1y {
   color: $white;
   border: none;
   ._2n_9,
   ._2n_9.f_click,
   ._59fc,
   #pageLoginAnchor{
      filter: invert(100%);
   }
}

._4sp8,
._58al._7tpc,
._wu0,
._5irm._7mkm,
._hh7 {
   background: transparent;
}
body,
._3eus,
._1lj0,
._3szq,
._1ht6,
._1ht3 ._1htf,
._58al._7tpc,
._364g,
._3q34,
._3q35._7s4c,
._3eur._6ybk a,
._3oh-,
._36zg,
._6-xo{
   color: $white !important;
}
._30yy._4rv6._39bk {
   filter: invert(100%)
}
._33p7 {
    // background: #000000bf;
    border: 1px solid $white;
   input {
      color: $white  
   }
}
._hh7 {
   border: 1px solid $white;
}
._40fu path {
   fill: $white;
}
**/
