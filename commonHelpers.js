import{a as d,S as m,i as u}from"./assets/vendor-226ca135.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const f="https://api.thecatapi.com/v1",h="live_q73VBaRHKVF6SZN99amO4B1AerhylDDwvZesq98yVMEWg4sIjUpNZSPWmATT4yNu";d.defaults.headers.common["x-api-key"]=h;async function y(){return(await d.get(`${f}/breeds`)).data}async function g(t){return(await d.get(`${f}/images/search?breed_ids=${t}`)).data}const n={select:document.querySelector(".breed-select"),div:document.querySelector(".cat-info"),loader:document.querySelector(".loader")},l=new m({select:n.select,settings:{placeholderText:"Search cat"}}),p={title:"Error",message:"Oops! Something went wrong! Try reloading the page!",position:"topRight"};function a(t){t.classList.toggle("hidden")}async function b(t){a(n.loader),a(n.div),l.disable();try{const o=await g(t.target.value);S(o)}catch{u.error(p)}finally{a(n.loader),a(n.div),l.enable()}}function v(t){const o=t.map(({id:c,name:s})=>{const e=document.createElement("option");return e.value=c,e.text=s,e});l.setData([{placeholder:!0,text:""},...o])}function S(t){const{url:o,breeds:c}=t[0],s=c.map(({name:e,description:r,temperament:i})=>`
    <img class='imgCat' src=${o} alt=${e} width='600'>
    <div class ='wrap-content'>
      <h2 class='title'>${e}</h2>
      <p class='text'>${r}</p>
      <p class='text'>
        <b>Temperament:</b>
        ${i}
      </p>
    </div>
    `).join();n.div.innerHTML=s}async function w(){l.disable();try{const t=await y();v(t),n.select.addEventListener("change",b)}catch{u.error(p)}finally{a(n.loader),a(n.select),l.enable()}}w();
//# sourceMappingURL=commonHelpers.js.map
