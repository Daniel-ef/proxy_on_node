(function(){function a(h,g){for(var f=0;f<g.length;f++){if(h==g[f]){return true}}return false}function e(k){function h(A,j){var i=(A<<j)|(A>>>(32-j));return i}function y(C){var B="",A,j;for(A=7;A>=0;A--){j=(C>>>(A*4))&15;B+=j.toString(16)}return B}function x(j){j=j.replace(/\r\n/g,"\n");var i="",B,A;for(B=0;B<j.length;B++){A=j.charCodeAt(B);if(A<128){i+=String.fromCharCode(A)}else{if((A>127)&&(A<2048)){i+=String.fromCharCode((A>>6)|192);i+=String.fromCharCode((A&63)|128)}else{i+=String.fromCharCode((A>>12)|224);i+=String.fromCharCode(((A>>6)&63)|128);i+=String.fromCharCode((A&63)|128)}}}return i}k=x(k);var n,F,z,g=[],r=1732584193,p=4023233417,o=2562383102,m=271733878,l=3285377520,w,v,u,t,s,G,f=k.length,q=[];for(F=0;F<f-3;F+=4){z=k.charCodeAt(F)<<24|k.charCodeAt(F+1)<<16|k.charCodeAt(F+2)<<8|k.charCodeAt(F+3);q.push(z)}switch(f%4){case 0:F=2147483648;break;case 1:F=k.charCodeAt(f-1)<<24|8388608;break;case 2:F=k.charCodeAt(f-2)<<24|k.charCodeAt(f-1)<<16|32768;break;case 3:F=k.charCodeAt(f-3)<<24|k.charCodeAt(f-2)<<16|k.charCodeAt(f-1)<<8|128;break}q.push(F);while((q.length%16)!=14){q.push(0)}q.push(f>>>29);q.push((f<<3)&4294967295);for(n=0;n<q.length;n+=16){for(F=0;F<16;F++){g[F]=q[n+F]}for(F=16;F<=79;F++){g[F]=h(g[F-3]^g[F-8]^g[F-14]^g[F-16],1)}w=r;v=p;u=o;t=m;s=l;for(F=0;F<=19;F++){G=(h(w,5)+((v&u)|(~v&t))+s+g[F]+1518500249)&4294967295;s=t;t=u;u=h(v,30);v=w;w=G}for(F=20;F<=39;F++){G=(h(w,5)+(v^u^t)+s+g[F]+1859775393)&4294967295;s=t;t=u;u=h(v,30);v=w;w=G}for(F=40;F<=59;F++){G=(h(w,5)+((v&u)|(v&t)|(u&t))+s+g[F]+2400959708)&4294967295;s=t;t=u;u=h(v,30);v=w;w=G}for(F=60;F<=79;F++){G=(h(w,5)+(v^u^t)+s+g[F]+3395469782)&4294967295;s=t;t=u;u=h(v,30);v=w;w=G}r=(r+w)&4294967295;p=(p+v)&4294967295;o=(o+u)&4294967295;m=(m+t)&4294967295;l=(l+s)&4294967295}G=y(r)+y(p)+y(o)+y(m)+y(l);return G.toLowerCase()}function d(){var l=[],j=["plugins"],i=["vendor","vendorSub","onLine","geolocation","registerContentHandler","registerProtocolHandler","mozIsLocallyAvailable"],p,m,q,f,g,h,k,n;for(p in navigator){m=navigator[p];if(a(p,i)===false){if(p=="plugins"){continue}if(p=="mimeTypes"){p="plugins"}if(p=="javaEnabled"){l[l.length]=p+"="+navigator.javaEnabled()}else{if(p=="taintEnabled"){l[l.length]=p+"="+navigator.taintEnabled()}else{if(a(p,j)===true){q=m;f=[];if(p=="plugins"){if(q.length!==0){for(g in q){h=q[g];if(h.enabledPlugin){k=h.enabledPlugin;n=k.filename+"_"+k.version;if(a(n,f)===false){f[f.length]=n}}}}}l[l.length]=p+"="+f.join(";")}else{l[l.length]=p+"="+m}}}}}i=["top","left","availTop","availLeft"];for(p in screen){m=screen[p];if(a(p,i)===false){l[l.length]=p+"="+m}}return e(l.join("#"))}function c(i,h){try{var j=document.createElement("div");if(h&&document.getElementById(h)){j=document.getElementById(h)}var f=document.createElement("iframe");f.style.width="0";f.style.height="0";f.style.display="block";f.style.border="none";f.setAttribute("frameborder","0");document.body.appendChild(j);j.appendChild(f);f.contentWindow.document.open();f.contentWindow.document.write("<head></head><body>"+b(i)+"</body>");f.contentWindow.document.close();if(window.location.search.indexOf("pz_debug")!=-1){window.pz_debug=i}}catch(g){}}function b(k){var g=d(),h,j,f="pixelzirkus.gameforge.com";if(k.pz_debug_url){f=k.pz_debug_url;delete k.pz_debug_url}var i='<form id="gf_pz_form" action="http://'+f+'/Simple" method="POST" accept-charset="UTF-8">';if(window.location.protocol=="https:"){i='<form id="gf_pz_form" action="https://'+f+'/Simple" method="POST" accept-charset="UTF-8">'}i+='<input type="hidden" name="fingerprint" value="'+g+'" />';for(h in k){j=k[h];j=j+"";j=j.replace(/"/g,"");i+='<input type="hidden" name="'+h+'" value="'+j+'" />'}if(!k.page){i+='<input type="hidden" name="page" value="'+window.location+'" />'}if(!k.referrer){i+='<input type="hidden" name="referrer" value="'+document.referrer+'" />'}i+="</form>";i+='<script>document.getElementById("gf_pz_form").submit()<\/script>';return i}window.setPixel=c})();