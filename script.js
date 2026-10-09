const root=document.documentElement,btn=document.getElementById('theme');
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
btn.addEventListener('click',()=>{const dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
root.dataset.theme=dark?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}});
const f=document.getElementById('contact-form');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
location.href=`mailto:your.email@example.com?subject=${encodeURIComponent('Portfolio message from '+d.get('name'))}&body=${encodeURIComponent(d.get('message')+'\n\n'+d.get('email'))}`;});
