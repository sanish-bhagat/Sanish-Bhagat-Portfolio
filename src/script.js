const PROJECTS=[
  {id:1,category:'healthcare',title:'Health Sathi — Multimodal AI Health Assistant',desc:'Built a multimodal healthcare assistant with PDF/image/voice input, Firebase Auth with role-based access (Patient & Doctor), Firestore-backed Base64 storage, and a doctor triage dashboard with human-in-the-loop verification. Integrated Gemini 3 Flash + TTS for multilingual health guidance (10+ Indian languages), RAG-based clinical grounding across 4 medical domains, and jsPDF health report generation.',icon:'fa-solid fa-hospital',stack:['React','TypeScript','Firebase','RAG','Gemini','TTS'],year:'2024',liveLink:'#',githubLink:'https://github.com/sanishbhagat/Health-Sathi'},
  {id:2,category:'healthcare',title:'Derma AI — AI Dermatology Assistant',desc:'Built an AI dermatology assistant with MobileNet-based CNN for skin disease classification and confidence scoring; RAG pipeline via LangChain, Pinecone, and Groq LLaMA-3 for contextual medical Q&A. Deployed full-stack system using Vercel frontend and Docker-based backend on HuggingFace Spaces.',icon:'fa-solid fa-microscope',stack:['Python','Flask','TensorFlow','React','LangChain','Pinecone','Groq'],year:'2024',liveLink:'#',githubLink:'https://github.com/sanishbhagat/Derma-AI'},
  {id:3,category:'ai',title:'Code Analyzer Agent — RAG-based LLM Agent',desc:'Built a LangGraph-orchestrated LLM agent that performs AST-based static analysis, extracting functions, classes, imports, dependency graphs, complexity metrics, and heuristic risk scores across entire codebases. Implemented a RAG pipeline with FAISS/Chroma vector store and sentence-transformer embeddings; agent uses tool-based reasoning to answer grounded, explainable code questions.',icon:'fa-solid fa-robot',stack:['Python','LangGraph','LangChain','FAISS','AST'],year:'2024',liveLink:null,githubLink:'https://github.com/sanishbhagat/Code-Analyzer-Agent'},
  {id:4,category:'ai',title:'InsightStream — Conversational BI Engine',desc:'Built a natural language BI dashboard that converts plain-English questions into optimized SQL via Gemini, executes them in-browser using AlaSQL, and auto-selects the best chart type (Bar, Line, Pie, Scatter) via Recharts. Supports CSV upload, AI-generated business insights per query, and an interactive schema diagram.',icon:'fa-solid fa-chart-simple',stack:['React','TypeScript','Gemini','AlaSQL','Recharts'],year:'2024',liveLink:null,githubLink:'https://github.com/sanishbhagat/InsightStream'},
  {id:5,category:'ai',title:'General RAG Assistant — Full-Stack RAG Chatbot',desc:'Developed a full-stack document Q&A chatbot with React frontend and Flask backend, uses PyPDFLoader, RecursiveCharacterTextSplitter, and local FAISS for fast, privacy-preserving document retrieval. Powered by Google Gemini 1.5 Pro with HuggingFace sentence-transformer embeddings for accurate, context-grounded responses.',icon:'fa-solid fa-comments',stack:['React','Flask','LangChain','FAISS','Gemini'],year:'2024',liveLink:null,githubLink:'https://github.com/sanishbhagat/General-RAG-Assistant'},
  {id:6,category:'vision',title:'AgroGuard — Plant Disease Detection',desc:'Tomato leaf disease classifier using CNNs and image preprocessing. Flask API for real-time disease prediction with treatment recommendations. Helps farmers identify crop diseases early to reduce yield loss.',icon:'fa-solid fa-seedling',stack:['Python','CNN','Flask','TensorFlow','OpenCV'],year:'2023',liveLink:null,githubLink:'https://github.com/sanishbhagat/AgroGuard'},
];
const CERTS=[
  {icon:'fa-brands fa-python',issuer:'IBM / Coursera',name:'Machine Learning using Python',badge:'Verified',year:'2024',link:'https://drive.google.com/file/d/1si91ZeIFBuPYkELYNLPDZdziWg0bBFY2/view?usp=sharing'},
  {icon:'fa-solid fa-chart-line',issuer:'NPTEL',name:'Principles of Management',badge:'NPTEL Verified',year:'2024',link:'https://drive.google.com/file/d/1wmTOtHfSRF-SeW74Tc8QszuAJy7wFaLG/view?usp=drive_link'},
  {icon:'fa-brands fa-java',issuer:'NPTEL — IIT Kharagpur',name:'Programming in Java',badge:'NPTEL Verified',year:'2024',link:'#'},
  {icon:'fa-brands fa-aws',issuer:'Amazon Web Services',name:'AWS AI-ML — AWS Machine Learning',badge:'AWS Certified',year:'2024',link:'#'},
  {icon:'fa-solid fa-microchip',issuer:'Amazon Web Services',name:'AWS Generative AI Foundations',badge:'AWS Certified',year:'2024',link:'#'},
];

// LOADER
window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('hidden'),2500));

// CURSOR
const cursor=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
(function a(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a);})();
document.querySelectorAll('a,button,.project-card,.cert-card,.tag,.skill-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.classList.add('hovered');ring.classList.add('hovered');});
  el.addEventListener('mouseleave',()=>{cursor.classList.remove('hovered');ring.classList.remove('hovered');});
});

// PROGRESS
window.addEventListener('scroll',()=>{
  document.getElementById('progress-bar').style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100+'%';
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>20);
  document.getElementById('back-top').classList.toggle('visible',window.scrollY>500);
  let active='';
  document.querySelectorAll('section[id]').forEach(s=>{if(window.scrollY>=s.offsetTop-130)active=s.id;});
  document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+active));
});

// HAMBURGER
const hb=document.getElementById('hamburger'),mm=document.getElementById('mobileMenu');
hb.addEventListener('click',()=>{hb.classList.toggle('open');mm.classList.toggle('open');document.body.style.overflow=mm.classList.contains('open')?'hidden':'';});
document.querySelectorAll('.mob-link').forEach(a=>a.addEventListener('click',()=>{hb.classList.remove('open');mm.classList.remove('open');document.body.style.overflow='';}));

// THEME
const tt=document.getElementById('themeToggle');
let dark=localStorage.getItem('theme')!=='light';
function applyTheme(){document.documentElement.setAttribute('data-theme',dark?'dark':'light');tt.innerHTML=dark?'<i class="fa-solid fa-moon"></i>':'<i class="fa-solid fa-sun"></i>';localStorage.setItem('theme',dark?'dark':'light');}
applyTheme();tt.addEventListener('click',()=>{dark=!dark;applyTheme();});

// TYPED TEXT
const words=['AI/ML Developer','Gen-AI Engineer','RAG Specialist','Healthcare AI Builder','Deep Learning Dev'];
let wi=0,ci=0,del=false;
const te=document.getElementById('typed-text');
function type(){const w=words[wi];te.textContent=del?w.slice(0,--ci):w.slice(0,++ci);if(!del&&ci===w.length){del=true;setTimeout(type,1800);return;}if(del&&ci===0){del=false;wi=(wi+1)%words.length;setTimeout(type,300);return;}setTimeout(type,del?55:85);}
setTimeout(type,1500);

// COUNT-UP
function countUp(el,t){let c=0;const s=Math.ceil(t/50),i=setInterval(()=>{c=Math.min(c+s,t);el.textContent=c+(t<=10?'':'+');if(c>=t)clearInterval(i);},28);}
const hs=document.querySelector('.hero-stats');
if(hs)new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('[data-count]').forEach(el=>countUp(el,parseInt(el.dataset.count)));});},{threshold:.5}).observe(hs);

// PARTICLES
const cv=document.getElementById('particles'),cx=cv.getContext('2d');
function rc(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;}
rc();window.addEventListener('resize',rc);
const pts=Array.from({length:55},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,dx:(Math.random()-.5)*.3,dy:(Math.random()-.5)*.3,r:Math.random()*1.2+.4,a:Math.random()*.4+.1}));
function dp(){
  cx.clearRect(0,0,cv.width,cv.height);
  pts.forEach(p=>{cx.beginPath();cx.arc(p.x,p.y,p.r,0,Math.PI*2);cx.fillStyle=`rgba(0,212,255,${p.a})`;cx.fill();p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>cv.width)p.dx*=-1;if(p.y<0||p.y>cv.height)p.dy*=-1;});
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<110){cx.beginPath();cx.moveTo(pts[i].x,pts[i].y);cx.lineTo(pts[j].x,pts[j].y);cx.strokeStyle=`rgba(0,212,255,${.07*(1-d/110)})`;cx.lineWidth=.5;cx.stroke();}}
  requestAnimationFrame(dp);
}
dp();

// REVEAL
const ro=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// RENDER PROJECTS
function renderProjects(f='all'){
  const g=document.getElementById('projects-grid');g.innerHTML='';
  (f==='all'?PROJECTS:PROJECTS.filter(p=>p.category===f)).forEach((p,i)=>{
    const c=document.createElement('div');c.className='project-card reveal'+(i>0?` reveal-delay-${Math.min(i,3)}`:'');
    c.innerHTML=`<div class="project-thumb"><div class="project-thumb-bg"><i class="${p.icon}"></i></div><div class="project-overlay">${p.liveLink?`<a href="${p.liveLink}" class="overlay-btn overlay-btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>`:''} ${p.githubLink?`<a href="${p.githubLink}" class="overlay-btn overlay-btn-secondary"><i class="fa-brands fa-github"></i> Code</a>`:''}</div></div><div class="project-info"><div class="project-meta"><span class="project-category">${p.category}</span><span class="project-year">${p.year}</span></div><div class="project-title">${p.title}</div><p class="project-desc">${p.desc}</p><div class="project-links">${p.liveLink?`<a href="${p.liveLink}" class="proj-link"><i class="fa-solid fa-globe"></i> Live Demo</a>`:''} ${p.githubLink?`<a href="${p.githubLink}" class="proj-link"><i class="fa-brands fa-github"></i> GitHub</a>`:''}</div><div class="project-stack">${p.stack.map(s=>`<span class="stack-tag">${s}</span>`).join('')}</div></div>`;
    g.appendChild(c);g.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
  });
}
renderProjects();
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProjects(b.dataset.filter);}));

// RENDER CERTS
(function(){
  const g=document.getElementById('cert-grid');
  CERTS.forEach((c,i)=>{
    const el=document.createElement('div');el.className=`cert-card reveal${i>0?` reveal-delay-${Math.min(i,3)}`:''}`;
    const linkHtml = c.link && c.link !== '#' ? `<a href="${c.link}" target="_blank" class="cert-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Certificate</a>` : '';
    el.innerHTML=`<div class="cert-header"><div class="cert-logo"><i class="${c.icon}"></i></div><div><div class="cert-issuer">${c.issuer}</div><div class="cert-name">${c.name}</div></div></div><div class="cert-divider"></div><div class="cert-footer"><div class="cert-badge"><i class="fa-solid fa-certificate"></i> ${c.badge}</div><div class="cert-year">${c.year}</div></div>${linkHtml}`;
    g.appendChild(el);ro.observe(el);
  });
})();

// FORM
const form=document.getElementById('contactForm');
const EMAILJS_CONFIG={
  serviceId:'service_ebw3ix7',
  templateId:'template_6uslnwq',
  publicKey:'F7-jL5eKVsrNY9lZT',
};
function val(id,chk){const e=document.getElementById(id),err=document.getElementById(id+'-error'),ok=chk(e.value.trim());e.classList.toggle('error',!ok);e.classList.toggle('success',ok);err.classList.toggle('visible',!ok);return ok;}
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const ok=val('fname',v=>v.length>0)&val('lname',v=>v.length>0)&val('email',v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))&val('subject',v=>v.length>0)&val('message',v=>v.length>=20);
  if(!ok)return;
  const fname=document.getElementById('fname').value.trim();
  const lname=document.getElementById('lname').value.trim();
  const email=document.getElementById('email').value.trim();
  const subject=document.getElementById('subject').value.trim();
  const message=document.getElementById('message').value.trim();

  const b=document.getElementById('submitBtn'),bt=document.getElementById('btn-text');
  b.disabled=true;
  bt.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> &nbsp;Sending...';
  const successEl=document.getElementById('successMsg');

  try{
    const cfgReady=Object.values(EMAILJS_CONFIG).every(v=>v&&!v.startsWith('YOUR_EMAILJS_'));
    if(!cfgReady)throw new Error('emailjs_not_configured');

    const payload={
      service_id:EMAILJS_CONFIG.serviceId,
      template_id:EMAILJS_CONFIG.templateId,
      user_id:EMAILJS_CONFIG.publicKey,
      template_params:{
        from_name:`${fname} ${lname}`,
        from_email:email,
        subject,
        message,
        to_name:'Sanish Bhagat',
        reply_to:email,
      },
    };

    const res=await fetch('https://api.emailjs.com/api/v1.0/email/send',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload),
    });
    if(!res.ok)throw new Error('email_send_failed');

    successEl.innerHTML='<i class="fa-solid fa-circle-check"></i> Message sent successfully. I will reply soon.';
    successEl.classList.add('visible');
    form.reset();
    form.querySelectorAll('.form-input,.form-textarea').forEach(el=>el.classList.remove('success','error'));
  }catch(err){
    const to='sanishbhagat3@gmail.com';
    const mailSubject=`Portfolio Contact: ${subject}`;
    const mailBody=`Name: ${fname} ${lname}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href=`mailto:${to}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    successEl.innerHTML='<i class="fa-solid fa-circle-check"></i> Mail app opened as fallback. Configure EmailJS keys in src/script.js for direct send.';
    successEl.classList.add('visible');
  }finally{
    b.disabled=false;
    bt.innerHTML='<i class="fa-solid fa-paper-plane"></i>&nbsp; Send Message';
    setTimeout(()=>successEl.classList.remove('visible'),5500);
  }
});
['fname','lname','subject'].forEach(id=>document.getElementById(id).addEventListener('blur',()=>val(id,v=>v.length>0)));
document.getElementById('email').addEventListener('blur',()=>val('email',v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)));
document.getElementById('message').addEventListener('blur',()=>val('message',v=>v.length>=20));

// PROFILE CARD TILT
const pc=document.querySelector('.profile-card');
if(pc){
  pc.addEventListener('mousemove',e=>{
    const r=pc.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    const px=(x/r.width-.5)*10,py=(y/r.height-.5)*-10;
    pc.style.transform=`perspective(1000px) rotateX(${py}deg) rotateY(${px}deg) scale(1.02)`;
  });
  pc.addEventListener('mouseleave',()=>{pc.style.transform='';});
}

document.getElementById('back-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.getElementById('year').textContent=new Date().getFullYear();
