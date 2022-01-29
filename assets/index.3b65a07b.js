import{p as e,a as t,o as s,c as l,b as a,r as o,t as n,d as c,e as r,f as i,g as d,h as m,F as g,i as h,j as p,w as u,k as x,l as b,m as f,n as v,q as w}from"./vendor.d21bb6ad.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,o)=>{const n=new URL(e,l);if(self[t].moduleMap[n])return s(self[t].moduleMap[n]);const c=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){o(new Error(`Failed to import: ${e}`)),a(r)},onload(){s(self[t].moduleMap[n]),a(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("https:/jmrrgncpz.github.io/assets/");var y="https://jmrrgncpz.github.io/assets/agile-values-principles.527c8c6c.png",k="https://jmrrgncpz.github.io/assets/covid19-observer2.39f0f26d.png",j="https://jmrrgncpz.github.io/assets/under-the-shelves2.c060e979.png";e("data-v-008a4b99");const S={class:"w-4/12 md:w-5/12"},I={class:"font-bold text-xs md:text-lg"};t();const C={expose:[],props:["name"],setup:e=>(t,c)=>(s(),l("div",{class:"shortcut font-display flex flex-col items-center rounded-md \n    hover:bg-white hover:shadow-md hover:text-primary-500 p-2",onClick:c[1]||(c[1]=e=>t.$emit("shortcut-clicked"))},[a("div",S,[o(t.$slots,"default",{},void 0,!0)]),a("div",null,[a("span",I,n(e.name),1)])])),__scopeId:"data-v-008a4b99"};const P={data:()=>({agileValuesPrincipleImg:y,covid19ObserverImg:k,underTheShelves:j,shortcuts:[{name:"About",link:"about",icon:c},{name:"Blog",link:"blog",icon:r},{name:"Projects",link:"projects",icon:i},{name:"Contact",link:"contact-me",icon:d}]}),components:{UserIcon:c,TemplateIcon:r,CodeIcon:i,PhoneIcon:d,Shortcut:C}},T=u();e("data-v-6e085a8e");const L={id:"hero",class:"\n      p-4\n      md:p-7\n      flex flex-col\n      font-display\n      min-h-screen\n      w-screen\n      overflow-hidden\n      text-black\n    "},z=a("div",{id:"header"},[a("h4",{id:"brand",class:"font-header text-xl md:text-3xl"},"paz")],-1),R={id:"main",class:"\n        flex flex-1 flex-col\n        md:flex-row md:mx-20 lg:mx-40\n        h-4/5\n        p-10\n        md:p-0\n        items-center\n        md:justify-between\n      "},A=x('<div class="flex items-center flex-1" data-v-6e085a8e><div class="flex flex-col" data-v-6e085a8e><div class="font-header text-7xl lg:text-8xl" data-v-6e085a8e><span data-v-6e085a8e>Jesmer</span><br data-v-6e085a8e><span data-v-6e085a8e>Paz</span></div><div class="mb-8" data-v-6e085a8e><span class="font-display text-primary-500 text-2xl lg:text-3xl mb-1" data-v-6e085a8e>Full-stack web developer</span></div><div class="flex justify-center md:justify-start" data-v-6e085a8e><button class="\n                bg-primary-500\n                text-white text-sm\n                md:text-md\n                w-full\n                md:w-auto\n                p-2\n                rounded\n                self-center\n              " data-v-6e085a8e> Create something amazing with me </button></div></div></div>',1),_={id:"shortcuts-section",class:"flex flex-1 w-full items-center justify-center md:justify-end"},M={id:"hero-right",class:"flex flex-col"},N={id:"project-showcase",class:"mb-6 flex"},O={id:"shortcut-container",class:"w-full flex flex-row flex-1"};t();const U=T(((e,t,o,n,c,r)=>{const i=m("Shortcut");return s(),l("div",L,[z,a("div",R,[A,a("div",_,[a("section",M,[a("article",N,[a("img",{class:"project-image w-3/4 shadow-2xl",src:c.covid19ObserverImg},null,8,["src"]),a("img",{class:"project-image w-3/4 shadow-2xl transform -translate-x-3/4 -translate-y-6",src:c.agileValuesPrincipleImg},null,8,["src"]),a("img",{class:"project-image w-3/4 shadow-2xl transform -translate-x-2/4 -translate-y-12",src:c.underTheShelves},null,8,["src"])]),a("nav",O,[(s(!0),l(g,null,h(c.shortcuts,((t,a)=>(s(),l(i,{key:`shortcut-${a}`,name:t.name,class:"flex-1",onShortcutClicked:s=>e.$emit("shortcut-clicked",t.link)},{default:T((()=>[(s(),l(p(t.icon)))])),_:2},1032,["name","onShortcutClicked"])))),128))])])])])])}));P.render=U,P.__scopeId="data-v-6e085a8e";const $={props:["label","imgSrc"],computed:{customClass(){return[this.imgSrc?"p-1 pr-3":"p-3"]}}};$.render=function(e,t,a,o,c,r){return s(),l("span",{class:["text-xs md:text-sm tag bg-primary-500 text-white mr-2 mb-2 rounded-3xl flex-shrink-0 capitalize",r.customClass]},[a.imgSrc?(s(),l("img",{key:0,src:a.imgSrc,class:"rounded-full w-8 mr-2 shadow-lg inline"},null,8,["src"])):b("",!0),f(" "+n(a.label),1)],2)};const V={components:{Tag:$},props:{title:String,imagePath:String,technologies:Array,url:String},mounted(){this.technologies.forEach((e=>this.getTechnologyLogo(e)))},data:()=>({technologyLogos:[]}),methods:{getTechnologyLogo(e){const t="object"==typeof e;if(!t||!e.imgSrc)return fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${t?e.logoName:e}`).then((async s=>{var l;const a=(null==(l=(await s.json())[0])?void 0:l.logo)||s.url.replace("https://autocomplete.clearbit.com/v1/companies/suggest?query=","https://logo.clearbit.com/");this.technologyLogos.push({imgSrc:a,label:t?e.name:e})}));this.technologyLogos.push({imgSrc:e.imgSrc,label:e.name})}}},q={class:"project-card"},E=a("h6",{class:"mt-2 mb-1 text-xs"},"Technologies",-1),J={class:"logo-container flex flex-wrap"};V.render=function(e,t,o,c,r,i){const d=m("Tag");return s(),l("div",q,[a("a",{href:o.url,target:"_blank",class:"text-xl md:text-2xl md:hover:underline text-primary-500 font-semibold"},n(o.title),9,["href"]),a("img",{class:"shadow-lg bg-white rounded-md mt-2 object-cover",src:o.imagePath},null,8,["src"]),E,a("div",J,[(s(!0),l(g,null,h(r.technologyLogos,((e,t)=>(s(),l(d,{key:t,label:e.label,imgSrc:e.imgSrc},null,8,["label","imgSrc"])))),128))])])};const F={data:()=>({linkedIn:"",github:"",projects:[{title:"[Ongoing] Under the Shelves",imagePath:j,technologies:["React","tailwind Css","Strapi",{logoName:"https://nextjs.org/",name:"Next JS"},{imgSrc:"https://www.drupal.org/files/issues/2019-12-27/heroku_logo.png",name:"heroku"}],url:"https://undertheshelves.vercel.app"},{title:"Agile Values and Principles",imagePath:y,technologies:["vuejs","vuetify",{logoName:"https://firebase.com",name:"firebase"},"jest"],url:"https://jmrrgncpz.github.io/agile-values-principles"},{title:"Covid-19 Observer",imagePath:k,technologies:["vuejs","node",{imgSrc:"https://www.drupal.org/files/issues/2019-12-27/heroku_logo.png",name:"heroku"},"postgresql"],url:"https://jmrrgncpz.github.io/COVID19Observer"}],blogs:[]}),mounted(){fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=linkedin",{method:"get"}).then((e=>e.json())).then((e=>{this.linkedIn=e[0].logo})),fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=github",{method:"get"}).then((e=>e.json())).then((e=>{this.github=e[0].logo}))},components:{Hero:P,MailIcon:v,PhoneIcon:d,Tag:$,Project:V},methods:{scrollToElement(e){document.querySelector("#"+e).scrollIntoView({block:"start",inline:"nearest"})}}},B={id:"about",class:"p-10 md:mx-20 text-black flex flex-col"},D=x('<div id="about-me" class="lg:min-h-screen mb-12 lg:w-3/6 md:p-5"><h1 class="font-header text-4xl md:text-5xl mb-6 tracking-wider"> About </h1><p class="text-lg md:text-2xl mb-4 tracking-wide"> A full-stack developer approaching <span class="text-primary-500 font-semibold">4 years of experience</span> working with <span class="text-primary-500 font-semibold">web technologies.</span></p><p class="text-lg md:text-2xl mb-12 tracking-wide"> I pride myself as someone who&#39;s <span class="text-primary-500 font-semibold">passionate on web development / software engineering</span>. Learned and practiced a lot since I was a student. </p><p class="text-2xl md:text-4xl font-bold text-primary-500 tracking-widest mb-6"> Challenges excite me. </p><span class="text-2xl md:text-4xl font-medium">If you need a solution for your business, I might be able to help.</span></div>',1),H={class:"lg:w-3/6 md:self-end md:p-5 lg:min-h-screen"},Q={id:"key-technologies",class:"mb-10"},K=a("h1",{class:"font-header text-4xl md:text-5xl"},"Key Technologies",-1),W=a("p",{class:"mb-6 text-lg"},"The tech I have worked a lot with",-1),G={id:"technologies"},X=a("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Technologies",-1),Y={class:"tech-subsection mb-8"},Z=a("p",{class:"mb-2 text-lg"},"Most recent technology stack",-1),ee={class:"flex flex-wrap"},te={class:"tech-subsection"},se=a("p",{class:"mb-2 text-lg"}," Languages, frameworks, libraries, and tools I have used ",-1),le={class:"flex flex-wrap"},ae={id:"projects",class:"p-10 md:mx-20 text-black"},oe=a("h1",{class:"font-header text-4xl md:text-5xl mb-6"}," Projects / Sample Works ",-1),ne={id:"projects-container",class:"grid gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3"},ce={key:0,id:"blog",class:"p-10 md:mx-20 text-black"},re=a("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Blog",-1),ie={id:"contact-me",class:"p-10 md:mx-20 bg-blue-900 text-white md:flex flex-wrap"},de={id:"contact-me-section",class:"mb-6 md:mb-0 flex-1"},me=a("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Contact me",-1),ge={class:"flex"},he=f(" +63 977-461-9089 "),pe={class:"flex"},ue=f(" paz.jesr@gmail.com "),xe=a("br",null,null,-1),be={id:"social",class:"flex-1 mb-12 md:mb-0"},fe=a("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Social",-1),ve={class:"flex"},we={href:"https://www.linkedin.com/in/jesmer-paz-24363b159/",class:"w-12 mr-2"},ye={href:"https://github.com/jmrrgncpz",class:"w-12"},ke=a("div",{class:"text-center md:text-left w-full"}," © 2021, Jesmer Regencia Paz ",-1);F.render=function(e,t,o,n,c,r){const i=m("Hero"),d=m("Tag"),p=m("Project"),u=m("PhoneIcon"),x=m("MailIcon");return s(),l(g,null,[a(i,{onShortcutClicked:t[1]||(t[1]=e=>r.scrollToElement(e))}),a("div",B,[D,a("div",H,[a("div",Q,[K,W,a(d,{label:"Javascript"}),a(d,{label:"C#"}),a(d,{label:"T-SQL"})]),a("div",G,[X,a("div",Y,[Z,a("div",ee,[a(d,{label:"React"}),a(d,{label:"Jest & React Testing Library"}),a(d,{label:"Material UI w/ styled components"}),a(d,{label:"Tailwind CSS"}),a(d,{label:"React Redux Toolkit w/ RTK Query"})])]),a("div",te,[se,a("div",le,[a(d,{label:"HTML / CSS / SAAS"}),a(d,{label:"Next JS"}),a(d,{label:"Vue / Aurelia / Angular"}),a(d,{label:"Vuex / Vue Router"}),a(d,{label:"C# / .Net 4.6^ / .Net Core 5"}),a(d,{label:"Bulma CSS / Buefy"}),a(d,{label:"T-SQL / Entity Framework 6 / Entity Framework Core"}),a(d,{label:"Git / Azure Devops CI CD"}),a(d,{label:"AJAX / Axios"}),a(d,{label:"Node / NPM / Webpack / Parcel"}),a(d,{label:"Strapi"})])])])])]),a("div",ae,[oe,a("div",ne,[(s(!0),l(g,null,h(c.projects,((e,t)=>(s(),l(p,{key:t,title:e.title,imagePath:e.imagePath,technologies:e.technologies,url:e.url},null,8,["title","imagePath","technologies","url"])))),128))])]),c.blogs.length?(s(),l("div",ce,[re])):b("",!0),a("div",ie,[a("div",de,[me,a("div",ge,[a(u,{class:"w-5 mr-4"}),he]),a("div",pe,[a(x,{class:"w-5 mr-4"}),ue]),xe]),a("div",be,[fe,a("div",ve,[a("a",we,[a("img",{src:c.linkedIn,class:"rounded-full"},null,8,["src"])]),a("a",ye,[a("img",{src:c.github,class:"rounded-full"},null,8,["src"])])])]),ke])],64)};w(F).mount("#app");
