import{a as f,i,S as p}from"./assets/vendor-SnYWMg9o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="45785559-b0577f06fb94f4ced9a4d3280",g="https://pixabay.com/api/";function b(s){return s=s.replace(/\s+/g,"+"),f.get(`${g}`,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r).catch(r=>{i.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"})})}function v(s){return s.map(({webformatURL:r,largeImageURL:n,tags:l,likes:e,views:t,comments:o,downloads:m})=>`<li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${r}" alt="${l}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${o}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${m}</p>
        </div>
      </div>
    </li>`).join("")}const u=document.querySelector(".js-form"),d=document.querySelector(".js-gallery"),a=document.querySelector(".loader");let c="",y;a.style.display="none";u.addEventListener("submit",S);function S(s){if(s.preventDefault(),d.innerHTML="",a.style.display="block",c=s.target.elements.query.value.trim(),c==="")return i.info({title:"Hello",message:"Please enter search text!"}),a.style.display="none",u.reset();b(c).then(r=>{if(d.insertAdjacentHTML("beforeend",v(r.data.hits)),!r.data.hits.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none";return}a.style.display="none",y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),y.refresh()}).catch(r=>{a.style.display="none",i.error({title:"Error",message:"Something went wrong. Please try again later!"})}),u.reset()}
//# sourceMappingURL=index.js.map
