!function(){for(var z=document.getElementsByClassName("spmp-container"),E=0;E<z.length;E++)!function(){var e="spmp-container"+E;z[E].id=e;for(var i=function(p){return document.querySelector("#"+e+" #"+p)},p=[],s=0,o=!1,n=0,r=0,a=!1,l=0,t=window.addEventListener.bind(window),d=z[E],m=(getComputedStyle(d).color,0);m<d.childNodes.length;m++){var c=d.childNodes[m];"A"==c.nodeName&&p.push([c.innerHTML,c.href])}d.innerHTML='<div id="spmp-playpause" class="spmp-button"></div><div id="spmp-stop" class="spmp-button"></div><div id="spmp-prev" class="spmp-button"></div><div id="spmp-next" class="spmp-button"></div><div id="spmp-prog"><div id="spmp-prog-bar"><div id="spmp-prog-buffer"></div><div id="spmp-prog-fill"></div></div></div><div id="spmp-drop" class="spmp-button spmp-right"></div><div id="spmp-vol" class="spmp-right"><div id="spmp-vol-bar"><div id="spmp-vol-fill"></div></div><div id="spmp-mute" class="spmp-button"></div></div><div id="spmp-playlist"><div id="spmp-playlist-container"></div></div><audio id="spmp-audio"></audio>';for(m=0;m<p.length;m++)i("spmp-playlist-container").insertAdjacentHTML("beforeend",'<div class="spmp-track" id="spmp-track'+m+'"><div class="spmp-indicator"></div>'+p[m][0]+"</div>"),i("spmp-track"+m).addEventListener("click",b);var u=i("spmp-audio"),v=i("spmp-vol-fill");function h(p){if(a){var t=(140-Math.round(p.clientY-l))/140;1<t&&(t=1),t<0&&(t=0),u.volume=t,v.style.height=Math.round(100*t)+"%"}if(o){var e=(p.clientX-n)/r;1<e&&(e=1),e<0&&(e=0),u.currentTime=u.duration*e}}function f(){o=a=!1}function g(){if(s<p.length-1)s++;else{if(!x(e,"loop"))return;s=0}u.src=p[s][1],u.play()}function b(){s=parseInt(this.id.split("spmp-track")[1]),u.src=p[s][1],u.play()}function x(p,t){return p==e?document.getElementById(e).classList.contains(t):i(p).classList.contains(t)}function w(p,t){p==e?document.getElementById(e).classList.add(t):i(p).classList.add(t)}function y(p,t){p==e?document.getElementById(e).classList.remove(t):i(p).classList.remove(t)}i("spmp-playpause").addEventListener("click",function(){u.paused?u.play():u.pause()}),i("spmp-prev").addEventListener("click",function(){if(0<s)s--;else{if(!x(e,"loop"))return;s=p.length-1}u.src=p[s][1],u.play()}),i("spmp-next").addEventListener("click",g),i("spmp-stop").addEventListener("click",function(){u.pause(),u.currentTime=0}),i("spmp-drop").addEventListener("click",function(){(x(e,"spmp-open")?y:w)(e,"spmp-open")}),i("spmp-mute").addEventListener("click",function(){(u.muted?y:w)(e,"spmp-muted"),u.muted=!u.muted}),i("spmp-vol-bar").addEventListener("mousedown",function(p){l=i("spmp-vol-bar").getBoundingClientRect().y,a=!0,h(p)}),i("spmp-prog-bar").addEventListener("mousedown",function(p){var t=i("spmp-prog-bar").getBoundingClientRect();n=t.x,r=t.width,o=!0,h(p)}),u.addEventListener("play",function(){w(e,"spmp-playing"),function(){for(var p=document.querySelectorAll("#"+e+" .spmp-track"),t=0;t<p.length;t++)y(p[t].id,"spmp-track-playing");w(p[s].id,"spmp-track-playing")}()}),u.addEventListener("pause",function(){y(e,"spmp-playing")}),u.addEventListener("timeupdate",function(){i("spmp-prog-fill").style.width=u.currentTime/u.duration*100+"%"}),u.addEventListener("ended",g),u.addEventListener("progress",function(){var p=u.duration;if(0<p)for(var t=0;t<u.buffered.length;t++)if(u.buffered.start(u.buffered.length-1-t)<u.currentTime){i("spmp-prog-buffer").style.width=u.buffered.end(u.buffered.length-1-t)/p*100+"%";break}}),t("mouseenter",f),t("mouseup",f),t("mousemove",h),t("touchstart",function p(){w(e,"spmp-touch"),window.removeEventListener("touchstart",p,!1)}),v.style.height=100*u.volume+"%",x(e,"autoplay")&&(u.autoplay=!0),0<p.length&&0<p[0].length&&(u.src=p[s][1]);var k=document.createElement("link");k.setAttribute("rel","stylesheet"),k.setAttribute("type","text/css"),k.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(".spmp-container:not(.spmp-custom){color:#000}.spmp-container:not(.spmp-custom) #spmp-prog-fill,.spmp-container:not(.spmp-custom) #spmp-vol-fill{background-color:#000}.spmp-container:not(.spmp-custom) #spmp-prog-bar,.spmp-container:not(.spmp-custom) #spmp-vol-bar,.spmp-container:not(.spmp-custom) .spmp-button:hover,.spmp-container:not(.spmp-custom) .spmp-track:hover{background-color:#f8ffff}.spmp-container:not(.spmp-custom) #spmp-prog-buffer{background-color:#eee}.spmp-container:not(.spmp-custom) #spmp-playlist,.spmp-container:not(.spmp-custom) #spmp-prog,.spmp-container:not(.spmp-custom) #spmp-vol,.spmp-container:not(.spmp-custom) .spmp-button{background-color:#d0ffff}"+".spmp-container{isolation:isolate;height:24px;position:relative;font-family:sans-serif;font-size:16px}.spmp-container:hover{z-index:99}#spmp-audio{visibility:hidden}.spmp-button{height:100%;width:30px;float:left;cursor:pointer;text-align:center}.spmp-container .spmp-right{float:right}#spmp-prog{height:100%;width:calc(100% - (30px * 6));float:left;position:relative}#spmp-prog-bar{position:relative;height:16px;width:100%;border-radius:10px 10px 10px 10px;top:calc(50% - 8px);overflow:hidden;cursor:pointer}#spmp-prog-buffer,#spmp-prog-fill{position:absolute;width:0%;height:100%}.spmp-container .spmp-button:first-child{border-radius:10px 0 0 10px}.spmp-container.spmp-loaded .spmp-button:first-child{transition:border-radius .1s cubic-bezier(.645,.045,.355,1) .4s}.spmp-container.spmp-open .spmp-button:first-child{border-radius:10px 0 0 0;transition:border-radius .1s cubic-bezier(.645,.045,.355,1) 0s}.spmp-container>.spmp-right{border-radius:0 10px 10px 0}.spmp-container.spmp-loaded>.spmp-right{transition:border-radius .1s cubic-bezier(.645,.045,.355,1) .4s}.spmp-container.spmp-open>.spmp-right{border-radius:0 10px 0 0;transition:border-radius .1s cubic-bezier(.645,.045,.355,1) 0s}.spmp-container>.spmp-right~.spmp-right{border-radius:0;transition:initial}#spmp-playlist{position:absolute;width:100%;height:0;top:24px;border-radius:0 0 10px 10px;transition:height .5s cubic-bezier(.645,.045,.355,1);z-index:99;overflow:hidden}.spmp-container.spmp-open #spmp-playlist{height:145px}.spmp-container.spmp-open{z-index:99}#spmp-playlist-container{width:calc(100% - 5px);height:100%;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:#000 transparent;margin-left:1px}#spmp-playlist-container::-webkit-scrollbar{width:6px;background-color:transparent}#spmp-playlist-container::-webkit-scrollbar-thumb{background-color:#000}.spmp-track{position:relative;width:calc(100% - 12px);padding-left:5px;cursor:pointer;overflow:hidden;height:18px;white-space:nowrap}.spmp-track:hover{border-radius:10px 10px 10px 10px}.spmp-indicator{width:18px;height:18px;float:left;margin:-3px}.spmp-indicator:before{position:relative;top:2px}#spmp-vol{height:24px;width:30px;text-align:center;position:absolute;z-index:100;overflow:hidden;float:right;right:30px}#spmp-mute{height:24px}.spmp-container #spmp-vol:hover{height:169px;border-radius:0 0 10px 10px}.spmp-container.spmp-touch #spmp-vol:hover{height:24px;border-radius:0}#spmp-vol-bar{position:absolute;top:24px;height:140px;width:16px;border-radius:10px 10px 10px 10px;overflow:hidden;margin-left:7px;display:flex;flex-flow:wrap-reverse;cursor:pointer}#spmp-vol-fill{width:100%;height:0%}.spmp-button:before{top:3px;left:0;position:relative;display:inline-block}#spmp-drop:before,#spmp-playpause:before,.spmp-container.spmp-playing .spmp-track-playing .spmp-indicator:before{content:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%fill' width='12' height='12' viewBox='0 0 24 24'><path d='M2 24v-24l20 12-20 12z'/></svg>\")}.spmp-container.spmp-playing #spmp-playpause:before,.spmp-track-playing .spmp-indicator:before{content:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%fill' width='12' height='12' viewBox='0 0 24 24'><path d='M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z'/></svg>\")}#spmp-stop:before{content:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%fill' width='12' height='12' viewBox='0 0 24 24'><path d='M0 0h24v24h-24z'/></svg>\")}#spmp-next:before,#spmp-prev:before{content:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%fill' width='12' height='12' viewBox='0 0 24 24'><path d='M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z'/></svg>\")}#spmp-next:before{transform:rotate(180deg)}#spmp-mute:before{content:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%fill' width='12' height='12' viewBox='0 0 24 24'><path d='M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z'/></svg>\")}.spmp-container.spmp-muted #spmp-mute:before{content:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%fill' width='12' height='12' viewBox='0 0 24 24'><path d='M19 7.358v15.642l-8-5v-.785l8-9.857zm3-6.094l-1.548-1.264-3.446 4.247-6.006 3.753v3.646l-2 2.464v-6.11h-4v10h.843l-3.843 4.736 1.548 1.264 18.452-22.736z'/></svg>\")}#spmp-drop:before{transform:rotate(90deg)}.spmp-container.spmp-open #spmp-drop:before{transform:rotate(-90deg)}".split("%fill").join("black")));var L=document.getElementById(e);L.parentNode.insertBefore(k,L),setTimeout(function(){w(e,"spmp-loaded")},50)}()}();