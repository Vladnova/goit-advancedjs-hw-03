import{a as d,S as m,i as u}from"./assets/vendor-226ca135.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="https://api.thecatapi.com/v1",h="live_q73VBaRHKVF6SZN99amO4B1AerhylDDwvZesq98yVMEWg4sIjUpNZSPWmATT4yNu";d.defaults.headers.common["x-api-key"]=h;async function y(){return(await d.get(`${f}/breeds`)).data}async function g(t){return(await d.get(`${f}/images/search?breed_ids=${t}`)).data}const o={select:document.querySelector(".breed-select"),div:document.querySelector(".cat-info"),loader:document.querySelector(".loader")},l=new m({select:o.select,settings:{placeholderText:"Search cat"}}),p={title:"Error",message:"Oops! Something went wrong! Try reloading the page!",position:"topRight"};function a(t){t.classList.toggle("hidden")}async function v(t){a(o.loader),a(o.div),l.disable();try{const n=await g(t.target.value);S(n)}catch{u.error(p),o.div.innerHTML=""}finally{a(o.loader),a(o.div),l.enable()}}function b(t){const n=t.map(({id:i,name:s})=>{const e=document.createElement("option");return e.value=i,e.text=s,e});l.setData([{placeholder:!0,text:""},...n])}function S(t){const{url:n,breeds:i}=t[0],s=i.map(({name:e,description:r,temperament:c})=>`
    <img class='imgCat' src=${n} alt=${e} width='600'>
    <div class ='wrap-content'>
      <h2 class='title'>${e}</h2>
      <p class='text'>${r}</p>
      <p class='text'>
        <b>Temperament:</b>
        ${c}
      </p>
    </div>
    `).join();o.div.innerHTML=s}async function w(){l.disable();try{const t=await y();b(t),o.select.addEventListener("change",v)}catch{u.error(p)}finally{a(o.loader),a(o.select),l.enable()}}w();
//# sourceMappingURL=commonHelpers.js.map
