!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=e=>({id:Date.now().toString(),name:e,todos:[{name:"Test",date:"01/21/2020",notes:"",priority:"high",complete:!1}],todoCount:0});const a=document.querySelector("[data-projects]"),r=document.querySelector("[data-new-project-form]"),d=document.querySelector("[data-new-project-input]"),l=document.querySelector("[data-delete-list-button]"),i=(document.querySelector("[data-list-head]"),document.querySelector("[data-list-title]")),c=document.querySelector("[data-list-items]"),u=document.getElementById("item-template");let s=JSON.parse(localStorage.getItem("todo.projects"))||[{id:1,name:"General",todos:[],todoCount:0,default:!0},{id:2,name:"Today",todos:[],todoCount:0,default:!0},{id:3,name:"Important",todos:[],todoCount:0,default:!0}],m=JSON.parse(localStorage.getItem("todo.selectedProjectId"))||1;function p(){localStorage.setItem("todo.projects",JSON.stringify(s)),localStorage.setItem("todo.selectedProjectId",JSON.stringify(m))}function f(){y(a),s.forEach(e=>{const t=document.createElement("li"),n=document.createElement("ion-icon"),o=document.createElement("span"),r=document.createElement("span");switch(t.classList.add("nav-item"),t.dataset.projectId=e.id,n.classList.add("nav-icon"),o.classList.add("nav-title"),o.innerText=e.name,r.classList.add("nav-count"),e.id==m&&setTimeout(()=>{t.classList.add("active-project")},1),e.id){case 1:n.name="albums-outline";break;case 2:n.name="calendar-outline";break;case 3:n.name="star-outline";break;default:n.name="clipboard-outline"}t.appendChild(n),t.appendChild(o),t.appendChild(r),a.appendChild(t)}),function(){null==m&&(m=1);const e=s.find(e=>e.id==m);i.innerText=e.name,e.default?l.style.display="none":l.style.display="";y(c),e.todos.forEach(e=>{const t=document.importNode(u.content,!0);t.querySelector("[data-item-name]"),t.querySelector("[data-item-date]")})}()}function y(e){for(;e.firstChild;)e.removeChild(e.firstChild)}a.addEventListener("click",e=>{"li"===e.target.tagName.toLowerCase()?m=e.target.dataset.projectId:"li"===e.target.parentElement.tagName.toLowerCase()&&(m=e.target.parentElement.dataset.projectId),p(),f()}),r.addEventListener("submit",e=>{e.preventDefault();const t=d.value;if(null==t||""===t)return;const n=o(t);d.value=null,s.push(n),p(),f()}),l.addEventListener("click",e=>{s=s.filter(e=>e.id!==m),m=1,f(),p()}),f()}]);