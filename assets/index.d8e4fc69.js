import{p as e,a as t,o as l,c as s,b as a,r as o,t as n,F as c,d as i,e as r,f as d,g as m,h as p,i as u,j as h,w as x,k as f,l as g,m as b}from"./vendor.ef200a2f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,o)=>{const n=new URL(e,s);if(self[t].moduleMap[n])return l(self[t].moduleMap[n]);const c=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){o(new Error(`Failed to import: ${e}`)),a(i)},onload(){l(self[t].moduleMap[n]),a(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("https:/jmrrgncpz.github.io/assets/");e("data-v-32fef4c6");const v={class:"w-4/12 md:w-5/12"},w={class:"font-bold text-lg"};t();const y={expose:[],props:["name"],setup:e=>(t,c)=>(l(),s("div",{class:"shortcut font-display flex flex-col items-center rounded-md \n    hover:bg-white hover:shadow-md hover:text-primary-500 p-2",onClick:c[1]||(c[1]=e=>t.$emit("shortcut-clicked"))},[a("div",v,[o(t.$slots,"default",{},void 0,!0)]),a("div",null,[a("span",w,n(e.name),1)])])),__scopeId:"data-v-32fef4c6"},j={props:{title:String,imagePath:String,technologyNames:Array,url:String},mounted(){const e=this.technologyNames.map((e=>this.getTechnologyLogo(e)));Promise.all(e).then((e=>{e.forEach((async e=>{const t=await e.json();this.technologyLogos.push(t[0].logo)}))}))},data:()=>({technologyLogos:[]}),methods:{getTechnologyLogo:e=>fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${e}`)}},k={class:"project-card"},I={class:"text-xl md:text-2xl mb-4"},C={class:"logo-container mb-4 flex"};j.render=function(e,t,o,r,d,m){return l(),s("div",k,[a("a",{href:o.url,target:"_blank"},[a("h2",I,n(o.title),1)],8,["href"]),a("div",C,[(l(!0),s(c,null,i(d.technologyLogos,((e,t)=>(l(),s("img",{key:t,src:e,class:"rounded-full w-12 mr-2"},null,8,["src"])))),128))]),a("img",{class:"shadow-lg bg-white rounded-md",src:o.imagePath},null,8,["src"])])};const S={props:["label"]},P={class:"text-xs md:text-sm tag p-3 bg-primary-500 text-white mr-2 mb-2 rounded-3xl flex-shrink-0"};S.render=function(e,t,a,o,c,i){return l(),s("span",P,n(a.label),1)};const T={data:()=>({linkedIn:"",github:"",projects:[{title:"Agile Values and Principles",imagePath:"https://jmrrgncpz.github.io/assets/agile-values-principles.527c8c6c.png",technologyNames:["vuejs","vuetify","firebase.events"],url:"https://jmrrgncpz.github.io/agile-values-principles"}]}),mounted(){fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=linkedin",{method:"get"}).then((e=>e.json())).then((e=>{this.linkedIn=e[0].logo})),fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=github",{method:"get"}).then((e=>e.json())).then((e=>{this.github=e[0].logo}))},components:{UserIcon:r,TemplateIcon:d,CodeIcon:m,PhoneIcon:p,MailIcon:u,Shortcut:y,Tag:S,Project:j},methods:{scrollToElement(e){document.querySelector("#"+e).scrollIntoView({block:"start",inline:"nearest"})}}},L={id:"hero",class:"p-4 md:p-7 flex flex-col font-display h-screen w-screen overflow-hidden text-black"},A=a("div",{id:"header"},[a("h4",{id:"brand",class:"font-header text-xl md:text-3xl"},"paz")],-1),z={id:"main",class:"flex flex-1 flex-col md:flex-row md:mx-40 h-4/5 p-10 md:p-0 items-center md:justify-between"},M=f('<div class="flex items-center flex-1"><div class="flex flex-col"><div class="font-header text-7xl md:text-8xl"><span>Jesmer</span><br><span>Paz</span></div><div class="mb-8"><span class="font-display text-primary-500 text-2xl md:text-3xl mb-1">Full-stack web developer</span></div><div class="flex justify-center md:justify-start"><button class="bg-primary-500 text-white text-sm md:text-md w-full md:w-auto p-2 rounded self-center"> Create something amazing with me </button></div></div></div>',1),_={id:"shortcuts-section",class:"flex flex-1 w-full items-center justify-center md:justify-end"},E={id:"shortcut-container",class:"w-full md:w-6/12 grid gap-2 grid-cols-2"},N={id:"about",class:"p-10 md:mx-40 text-black flex flex-col"},R=f('<div id="about-me" class="mb-12 md:w-3/6 md:p-5"><h1 class="font-header text-4xl md:text-5xl mb-6">About</h1><p class="text-lg md:text-2xl mb-4"> A full-stack developer with around <span class="text-primary-500 font-semibold">3 years of experience</span> working with <span class="text-primary-500 font-semibold">web technologies.</span></p><p class="text-lg md:text-2xl mb-12"> I pride myself as someone who&#39;s <span class="text-primary-500 font-semibold">passionate on web development / software engineering</span>. Learned and practiced a lot since I was a student. </p><p class="text-2xl md:text-4xl font-bold"><span class="text-primary-500">Challenges excite me.</span> <br><span class="font-medium">If you need a solution for your business, I might be able to help</span>. </p></div>',1),U={class:"md:w-3/6 md:self-end md:p-5"},$={id:"key-technologies",class:"mb-10"},F=a("h1",{class:"font-header text-4xl md:text-5xl"},"Key Technologies",-1),B=a("p",{class:"mb-6 text-lg"},"The tech I worked a lot with",-1),V={id:"technologies"},q=a("h1",{class:"font-header text-4xl md:text-5xl"},"Technologies",-1),J=a("p",{class:"mb-6 text-lg"}," Languages, frameworks, libraries, and tools I have used ",-1),O={class:"flex flex-wrap"},D={id:"projects",class:"p-10 md:mx-40 text-black"},Q=a("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Projects",-1),G={id:"projects-container",class:"grid grid-cols-2 gap-3"},H=a("div",{id:"blog",class:"p-10 md:mx-40 text-black"},[a("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Blog")],-1),K={id:"contact-me",class:"p-10 md:mx-40 bg-blue-900 text-white md:flex flex-wrap"},W={id:"contact-me-section",class:"mb-6 md:mb-0 flex-1"},X=a("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Contact me",-1),Y={class:"flex"},Z=g(" +63 977-461-9089 "),ee={class:"flex"},te=g(" paz.jesr@gmail.com "),le=a("br",null,null,-1),se={id:"social",class:"flex-1 mb-12 md:mb-0"},ae=a("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Social",-1),oe={class:"flex"},ne={href:"https://www.linkedin.com/in/jesmer-paz-24363b159/",class:"w-12 mr-2"},ce={href:"https://github.com/jmrrgncpz",class:"w-12"},ie=a("div",{class:"text-center md:text-left w-full"}," © 2021, Jesmer Regencia Paz ",-1);T.render=function(e,t,o,n,r,d){const m=h("UserIcon"),p=h("Shortcut"),u=h("TemplateIcon"),f=h("CodeIcon"),g=h("PhoneIcon"),b=h("Tag"),v=h("Project"),w=h("MailIcon");return l(),s(c,null,[a("div",L,[A,a("div",z,[M,a("div",_,[a("div",E,[a(p,{name:"About",onShortcutClicked:t[1]||(t[1]=e=>d.scrollToElement("about"))},{default:x((()=>[a(m)])),_:1}),a(p,{name:"Blog",onShortcutClicked:t[2]||(t[2]=e=>d.scrollToElement("blog"))},{default:x((()=>[a(u)])),_:1}),a(p,{name:"Projects",onShortcutClicked:t[3]||(t[3]=e=>d.scrollToElement("projects"))},{default:x((()=>[a(f)])),_:1}),a(p,{name:"Contact Me",onShortcutClicked:t[4]||(t[4]=e=>d.scrollToElement("contact-me"))},{default:x((()=>[a(g)])),_:1})])])])]),a("div",N,[R,a("div",U,[a("div",$,[F,B,a(b,{label:"Javascript"}),a(b,{label:"C#"}),a(b,{label:"T-SQL"})]),a("div",V,[q,J,a("div",O,[a(b,{label:"HTML / CSS / SAAS"}),a(b,{label:"Vue / React / Aurelia / Angular"}),a(b,{label:"Vuex / Vue Router"}),a(b,{label:"C# / .Net 4.6^ / .Net Core 5"}),a(b,{label:"Bulma CSS / Buefy / Material UI / Tailwind CSS"}),a(b,{label:"T-SQL / Entity Framework 6 / Entity Framework Core"}),a(b,{label:"Git / Azure Devops CI CD"}),a(b,{label:"AJAX / Axios"}),a(b,{label:"Node / NPM / Webpack / Parcel"})])])])]),a("div",D,[Q,a("div",G,[(l(!0),s(c,null,i(r.projects,((e,t)=>(l(),s(v,{key:t,title:e.title,imagePath:e.imagePath,technologyNames:e.technologyNames,url:e.url},null,8,["title","imagePath","technologyNames","url"])))),128))])]),H,a("div",K,[a("div",W,[X,a("div",Y,[a(g,{class:"w-5 mr-4"}),Z]),a("div",ee,[a(w,{class:"w-5 mr-4"}),te]),le]),a("div",se,[ae,a("div",oe,[a("a",ne,[a("img",{src:r.linkedIn,class:"rounded-full"},null,8,["src"])]),a("a",ce,[a("img",{src:r.github,class:"rounded-full"},null,8,["src"])])])]),ie])],64)};b(T).mount("#app");
