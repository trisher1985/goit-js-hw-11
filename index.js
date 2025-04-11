import{a as h,i as y,S as g}from"./assets/vendor-B-D547pe.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const b="49618464-a19ac1b17166537848db4f1c0",S="https://pixabay.com/api/";function v(e){return e=e.replace(/\s+/g,"+"),h.get(`${S}`,{params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o).catch(o=>{y.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"})})}let l;function L(e){const o=document.querySelector(".gallery"),s=e.map(({webformatURL:n,largeImageURL:r,tags:t,likes:a,views:m,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${n}" alt="${t}">
          <div class="thumb-block">
            <div class="block">
              <h2 class="title">Likes</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="title">Views</h2>
              <p class="amount">${m}</p>
            </div>
            <div class="block">
              <h2 class="title">Comments</h2>
              <p class="amount">${f}</p>
            </div>
            <div class="block">
              <h2 class="title">Downloads</h2>
              <p class="amount">${p}</p>
            </div>
          </div>
        </a>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),l?l.refresh():l=new g(".gallery a",{captionsData:"alt",captionDelay:250})}function q(){const e=document.querySelector(".gallery");e.innerHTML="",l&&(l.destroy(),l=null)}function w(){const e=document.querySelector(".loader");e.style.display="block"}function d(){const e=document.querySelector(".loader");e.style.display="none"}const i=document.querySelector(".js-form");document.querySelector(".js-gallery");document.querySelector(".loader");let c="";d();i.addEventListener("submit",async e=>{if(e.preventDefault(),q(),w(),c=e.target.elements.query.value.trim(),!c){u("Please enter search text!"),d(),i.reset();return}try{const s=(await v(c)).data.hits;if(!s.length){u("Sorry, no images found. Try another query!");return}L(s)}catch(o){u("Something went wrong. Please try again later!"),console.error("Search error:",o)}finally{d(),i.reset()}});function u(e){y.error({title:"Error",message:e,position:"topRight"})}
//# sourceMappingURL=index.js.map
