!function(e){var c={};function n(t){if(c[t])return c[t].exports;var l=c[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=c,n.d=function(e,c,t){n.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,c){if(1&c&&(e=n(e)),8&c)return e;if(4&c&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var l in e)n.d(t,l,function(c){return e[c]}.bind(null,l));return t},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,"a",c),c},n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\nconsole.log(`I\'ve checked the code and `);\nconsole.log(`there is no error but`);\nconsole.log(`---------------------------`);\nconsole.log(`nice that you are here...`);\n\nconst list = document.querySelector(\'.project-list--js\')\n\nfetch(\'https://api.github.com/users/druszkiewicz/repos?sort=updated&direction=desc\')\n.then(resp => resp.json())\n.then(resp => {\n  const repos = resp;\n  for (const repo of repos ) {\n    const {description, homepage, html_url, name} = repo;\n    list.innerHTML += `\n\n    <li class="project">\n          <div class="project__container">\n            <img class="project__logo" src="assets/img/github.svg" alt="">\n            <h3 class="project__title">${name}</h3>\n            ${\n              description ? `<p class="project__description">${description}</p>` : \'No Description...🙁\'\n            }\n            \n          </div>\n          <div class="project__footer">\n            ${\n              homepage ? `<a class="project__link project__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="DEMO: ${name}">DEMO</a>` : \'\'\n            }\n   \n            <a class="project__link project__link--code" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}">GitHub</a>\n          </div>\n        </li>\n    `;\n  }\n})\n.catch(err => {\n  console.log(err);\n})\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNDQUFzQztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsS0FBSztBQUM5QztBQUNBLCtEQUErRCxZQUFZO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxTQUFTLDJEQUEyRCxLQUFLO0FBQ3hKOztBQUVBLGlFQUFpRSxTQUFTLGtFQUFrRSxLQUFLO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc29sZS5sb2coYEkndmUgY2hlY2tlZCB0aGUgY29kZSBhbmQgYCk7XG5jb25zb2xlLmxvZyhgdGhlcmUgaXMgbm8gZXJyb3IgYnV0YCk7XG5jb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tYCk7XG5jb25zb2xlLmxvZyhgbmljZSB0aGF0IHlvdSBhcmUgaGVyZS4uLmApO1xuXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC0tanMnKVxuXG5mZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9kcnVzemtpZXdpY3ovcmVwb3M/c29ydD11cGRhdGVkJmRpcmVjdGlvbj1kZXNjJylcbi50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4udGhlbihyZXNwID0+IHtcbiAgY29uc3QgcmVwb3MgPSByZXNwO1xuICBmb3IgKGNvbnN0IHJlcG8gb2YgcmVwb3MgKSB7XG4gICAgY29uc3Qge2Rlc2NyaXB0aW9uLCBob21lcGFnZSwgaHRtbF91cmwsIG5hbWV9ID0gcmVwbztcbiAgICBsaXN0LmlubmVySFRNTCArPSBgXG5cbiAgICA8bGkgY2xhc3M9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInByb2plY3RfX2xvZ29cIiBzcmM9XCJhc3NldHMvaW1nL2dpdGh1Yi5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2plY3RfX3RpdGxlXCI+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA/IGA8cCBjbGFzcz1cInByb2plY3RfX2Rlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+YCA6ICdObyBEZXNjcmlwdGlvbi4uLvCfmYEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdF9fZm9vdGVyXCI+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBob21lcGFnZSA/IGA8YSBjbGFzcz1cInByb2plY3RfX2xpbmsgcHJvamVjdF9fbGluay0tZGVtb1wiIGhyZWY9XCIke2hvbWVwYWdlfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vcmVmZXJyZXJcIiB0aXRsZT1cIkRFTU86ICR7bmFtZX1cIj5ERU1PPC9hPmAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgXG4gICAgICAgICAgICA8YSBjbGFzcz1cInByb2plY3RfX2xpbmsgcHJvamVjdF9fbGluay0tY29kZVwiIGhyZWY9XCIke2h0bWxfdXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vcmVmZXJyZXJcIiB0aXRsZT1cIlNvdXJjZSBjb2RlOiAke25hbWV9XCI+R2l0SHViPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgIGA7XG4gIH1cbn0pXG4uY2F0Y2goZXJyID0+IHtcbiAgY29uc29sZS5sb2coZXJyKTtcbn0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);