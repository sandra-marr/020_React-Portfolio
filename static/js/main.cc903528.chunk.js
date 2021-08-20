(this["webpackJsonp020_react-portfolio"]=this["webpackJsonp020_react-portfolio"]||[]).push([[0],{30:function(e,a){},76:function(e,a){},77:function(e,a){},78:function(e,a){},79:function(e,a){},80:function(e,a){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(31),i=t.n(r),s=t(16),o=t(6),c=t(15),d=t.p+"static/media/Profile.56f11059.jpeg",l=t(3);var m=function(){return Object(l.jsxs)("header",{className:"w-100 d-flex justify-content-around align-items-center p-2",children:[Object(l.jsxs)("h1",{children:["SRM Web ",Object(l.jsx)("span",{id:"tagline",children:"Full-Stack Web Development"})]}),Object(l.jsx)("img",{id:"profile",className:"rounded-circle",src:d,alt:"Sandy Marr Profile"})]})};function u(e){return Object(l.jsx)("li",{className:"nav-item nav-btn autocollapse",children:Object(l.jsx)(s.b,{className:"nav-link",to:e.link,children:e.name})})}function p(e){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"footer-btn active rounded-pill p-2","aria-current":"page",href:e.link,target:"_blank",rel:"noreferrer",children:e.icon})})}var h=t(33),b=[{name:"About",link:"/",id:1},{name:"Skills",link:"/skills",id:2},{name:"Work",link:"/work",id:3},{name:"Contact",link:"/contact",id:4},{name:"Dog Days",link:"/dogdays",id:5}];var j=function(){return Object(l.jsx)("nav",{className:"navbar sticky-top navbar-expand-sm rounded-top",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("i",{className:"nav-btn-toggle",children:Object(l.jsx)(h.a,{})})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown","aria-expanded":"false",children:Object(l.jsx)("ul",{className:"navbar-nav",children:b.map((function(e){return Object(l.jsx)(u,{name:e.name,link:e.link},e.id)}))})})]})})},g=t(18),f=t(34),x=[{name:"LinkedIn",link:"http://www.linkedin.com/in/sandra-r-marr",icon:Object(l.jsx)(g.b,{}),id:1},{name:"GitHub",link:"https://github.com/sandra-marr",icon:Object(l.jsx)(g.a,{}),id:2},{name:"Contact",link:"mailto:srpeters44@gmail.com",icon:Object(l.jsx)(f.a,{}),id:3}];var O=function(){return Object(l.jsx)("footer",{className:"d-flex justify-content-center align-items-center fs-5",id:"contact",children:Object(l.jsx)("ul",{className:"nav",children:x.map((function(e){return Object(l.jsx)(p,{name:e.name,link:e.link,icon:e.icon},e.id)}))})})},y=t(13),v=t(25);function k(){var e=Object(n.useState)(null),a=Object(y.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(1),s=Object(y.a)(i,2),o=s[0],d=s[1];function m(e){d((function(a){return a+e}))}return Object(l.jsxs)(c.a,{className:"pdfContainer",children:[Object(l.jsx)(v.a,{className:"pdfDocument",file:"./SRMResume.pdf",onLoadSuccess:function(e){var a=e.numPages;r(a),d(1)},children:Object(l.jsx)(v.b,{pageNumber:o,className:"d-flex justify-content-center"})}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"pdfContainer",children:["Page ",o||(t?1:"--")," of ",t||"--"]}),Object(l.jsx)("button",{type:"button",disabled:o<=1,onClick:function(){m(-1)},children:"Previous"}),Object(l.jsx)("button",{type:"button",disabled:o>=t,onClick:function(){m(1)},children:"Next"})]})]})}function w(e){return Object(l.jsx)("div",{className:"card m-1 cardbackground",children:Object(l.jsx)("div",{className:"card-body",children:e.name})})}function N(e){var a=Object(n.useState)({}),t=Object(y.a)(a,2),r=t[0],i=t[1];return Object(l.jsxs)("div",{className:"card col-sm-4 p-2 mb-3",children:[Object(l.jsx)("img",{src:e.src,className:"card-img mx-auto",alt:e.name}),Object(l.jsxs)("div",{className:"card-img-overlay responsive-img d-flex flex-column justify-content-center align-items-center",style:r,children:[Object(l.jsx)("h5",{className:"card-title",children:e.name}),Object(l.jsx)("a",{href:e.deployed,target:"_blank",rel:"noreferrer",children:"Deployed Application"}),Object(l.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:"GitHub Repository"}),Object(l.jsx)("button",{type:"button",className:"preview pt-3",onMouseOver:function(e){i({background:"transparent",color:"transparent"})},onMouseOut:function(e){i({})},style:r,children:"Preview"})]})]})}function T(e){return Object(l.jsx)("div",{className:"col-sm-4 mb-3",children:Object(l.jsx)("img",{className:"rounded img-fluid responsive-img",src:e.src,alt:e.alt})})}var S=function(){var e=Object(n.useState)(""),a=Object(y.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(""),s=Object(y.a)(i,2),o=s[0],c=s[1],d=Object(n.useState)(""),m=Object(y.a)(d,2),u=m[0],p=m[1],h=Object(n.useState)(""),b=Object(y.a)(h,2),j=b[0],g=b[1],f=function(e){var a=e.target,t=a.name,n=a.value;"email"===t?r(n):"name"===t?c(n):"messageBody"===t&&p(n)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Please fill out the form below and we will reply back shortly."}),Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"input-group w-50",value:t,name:"email",onChange:f,type:"email",placeholder:"email"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"input-group w-50",value:o,name:"name",onChange:f,type:"text",placeholder:"name"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{className:"input-group",value:u,name:"messageBody",onChange:f,type:"text",placeholder:"message"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(t)&&o?(alert("Your message has been submitted."),c(""),p(""),r("")):g("Email or name is invalid")},children:"Submit"})]}),j&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:j})})]})},A=t.p+"static/media/Kids_Corner.603b02cc.png",C=t.p+"static/media/Weather_Dashboard.74627e2d.png",P=t.p+"static/media/Work_Day_Scheduler.d1b5df73.png",M=t.p+"static/media/Horiseon.b195d6a7.png",D=t.p+"static/media/password.aa25cbf8.png",_=t.p+"static/media/CodeQuiz.d07992f4.png",E=t.p+"static/media/ReadmeGeneratorDemo.00434625.gif",B=t.p+"static/media/TeamProfileGeneratorHTML.3be11dad.png",W=t.p+"static/media/Note-Taker.e9b74224.gif",G=t.p+"static/media/EmployeeTracker.5e65e277.gif",I=t.p+"static/media/E-Commerce_Back-end.afd1a8b4.gif",R=t.p+"static/media/TheTechBlog.ef153d03.gif",L=t.p+"static/media/AllAboutThatArt.e2f0485d.png",H=t.p+"static/media/dog1.09c7fd00.JPG",Q=t.p+"static/media/dog2.78649054.JPG",z=t.p+"static/media/dog3.a12041bc.JPG";function J(){return Object(l.jsxs)(c.a,{fluid:!0,className:"d-flex flex-column justify-content-center",children:[Object(l.jsx)("h2",{className:"accent pb-2 text-center",children:"About Me"}),Object(l.jsx)("p",{children:"Originally from Chicago, I moved across the country to Seattle in 2014 and have fallen in love with the Pacific Northwest. To date my professional experience has focused on Project Management, Structural Design Engineering, and Test Engineering, with some volunteer work peppered in as a treasurer for a non-profit. When faced with the challenges brought on by the pandemic, I stumbled upon an opportunity to learn about web development and discovered a new passion. I'm now enrolled as a student with University of Washington's Full-Stack Coding Bootcamp and am on a journey to a new career."}),Object(l.jsx)("p",{children:"Starting in March, I was just learning about HTML and CSS. Through out the program there have been many challenges and opportunities, but with those challenges, my skillset has grown substantially. Over the last 5 months I have refactored code, designed and developed front-end, back-end and full stack applications both on my own and through team collaboration. As I learn more about becoming a web developer, I'm hoping to bring my drive, passion, and prior knowledge into this new career."}),Object(l.jsx)("p",{children:"Outside of work, you can find me spending time outside with my husband and our dog. We love taking quick day hikes through Discovery Park in Seattle, and sailing out on the Puget Sound. Anything that gets us moving and in the sun is a plus! I'm also a big fan of Crossfit and have found a great community at the local box, Valkyrie Strength and Conditioning."})]})}var V=[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"},{id:4,name:"jQuery"},{id:5,name:"Node.js"},{id:6,name:"Moment.js"},{id:7,name:"Express.js"},{id:8,name:"Web-APIs"},{id:9,name:"Third Party APIs"},{id:10,name:"Server-Side APIs"},{id:11,name:"Model View Controller"},{id:12,name:"Object Oriented Programming"},{id:13,name:"Object Relational Mapping"},{id:14,name:"GitHub"},{id:15,name:"Heroku"},{id:16,name:"MySQL"},{id:17,name:"MySQL WorkBench"},{id:18,name:"MongoDB"},{id:19,name:"Robo 3T"},{id:20,name:"Insomnia"},{id:21,name:"Cloudinary"},{id:22,name:"Bootstrap"},{id:23,name:"React-Bootstrap"},{id:24,name:"UIKit"},{id:25,name:"Sequelize"},{id:26,name:"Nodemon"},{id:27,name:"Express-Sessions"},{id:28,name:"Inquirer"},{id:29,name:"Jest"},{id:30,name:"Multer"},{id:31,name:"Multer-storage-cloudinary"},{id:32,name:"Handlebars"},{id:33,name:"DotEnv"},{id:34,name:"ESLint"},{id:35,name:"Prettier"},{id:37,name:"Bcrypt"}];function K(){return Object(l.jsxs)(c.a,{fluid:!0,className:"d-flex flex-column",children:[Object(l.jsx)("h2",{className:"accent pb-2 text-center",children:"Languages, Skills, Applications:"}),Object(l.jsx)("div",{className:"d-flex masonry-with-columns scroller","data-bs-spy":"scroll",children:V.map((function(e){return Object(l.jsx)(w,{name:e.name},e.id)}))}),Object(l.jsxs)("div",{className:"pb-2 text-center",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["For more information about my professional experience, please refer to my ",Object(l.jsx)(s.b,{className:"text-reset",to:"/resume",children:"resume"}),"."]})]})]})}var q=[{id:1,name:"Kid's Corner",src:A,alt:"This is a preview of the Kid's Corner landing page.",github:"https://github.com/sandra-marr/Project-1",deployed:"https://sandra-marr.github.io/Project-1/"},{id:2,name:"Weather Dashboard",src:C,alt:"This is a preview of the Weather Dashboard App.",github:"https://github.com/sandra-marr/006_Weather-Dashboard/",deployed:"https://sandra-marr.github.io/006_Weather-Dashboard/"},{id:3,name:"Workday Scheduler",src:P,alt:"This is a preview of the Work Day Scheduler App.",github:"https://github.com/sandra-marr/005_Work-Day-Scheduler/",deployed:"https://sandra-marr.github.io/005_Work-Day-Scheduler/"},{id:4,name:"Horiseon",src:M,alt:"This is a preview of Horiseon's landing page.",github:"https://github.com/sandra-marr/001_Refactor/",deployed:"https://sandra-marr.github.io/001_Refactor/"},{id:5,name:"Password Generator",src:D,alt:"This is a preview of the Password Generator App.",github:"https://github.com/sandra-marr/003_Password-Generator/",deployed:"https://sandra-marr.github.io/003_Password-Generator/"},{id:6,name:"Code Quiz",src:_,alt:"This is a preview of the Code Quiz App.",github:"https://github.com/sandra-marr/004_Code-Quiz/",deployed:"https://sandra-marr.github.io/004_Code-Quiz/"},{id:7,name:"README Generator",src:E,alt:"This is a preview of the README Generator App.",github:"https://github.com/sandra-marr/009_Readme-Generator",deployed:"Command Line App"},{id:8,name:"Team Profile Generator",src:B,alt:"This is a preview of the Team Profile Generator App.",github:"https://github.com/sandra-marr/010_Team-Profile-Generator",deployed:"Command Line App"},{id:9,name:"Note Taker",src:W,alt:"This is a preview of the Note Note-Taker App.",github:"https://github.com/sandra-marr/011_Express.js-NoteTaker",deployed:"https://peaceful-basin-67305.herokuapp.com/"},{id:10,name:"Employee Tracker",src:G,alt:"This is a preview of the Employee Tracker App.",github:"https://github.com/sandra-marr/012_MySQL-Employee-Tracker",deployed:"Command Line App"},{id:11,name:"E-Commerce Backend",src:I,alt:"This is a preview of the E-Commerce Back-End App.",github:"https://github.com/sandra-marr/013_ORM-E-Commerce-Back-End",deployed:"Command Line App"},{id:12,name:"MVC Tech Blog",src:R,alt:"This is a preview of the MVC Tech Blog App.",github:"https://github.com/sandra-marr/014_MVC-Tech-Blog",deployed:"https://desolate-dusk-70425.herokuapp.com/"},{id:13,name:"All About That Art",src:L,alt:"This is a preview of the All About That Art Web App.",github:"https://github.com/sandra-marr/P2_All-About-That-Art",deployed:"https://stark-badlands-81359.herokuapp.com/"}];function F(){return Object(l.jsxs)(c.a,{fluid:!0,className:"d-flex flex-column justify-content-center",children:[Object(l.jsx)("h2",{className:"accent pb-2 text-center",children:"Work"}),Object(l.jsx)("div",{className:"row w-100 scroller","data-bs-spy":"scroll",children:Object(l.jsx)("div",{className:"row mb-3 px-0",children:q.map((function(e){return Object(l.jsx)(N,{name:e.name,src:e.src,alt:e.alt,github:e.github,deployed:e.deployed},e.id)}))})})]})}function U(){return Object(l.jsx)(S,{})}var Z=[{id:1,src:H,alt:"Bentley enjoys long walks through the neighborhood, but when he is tired and lays down, you are stuck until he is ready to keep going."},{id:2,src:Q,alt:"Bentley spent a lot of time at Ella Bailey Park in 2020, enjoying the views of the city and Mt. Rainier."},{id:3,src:z,alt:"Everyonce in a while, Bentley will take a dip in the sound. Here he is after a swim near Golden Gardens."}];function Y(){return Object(l.jsxs)(c.a,{fluid:!0,className:"d-flex flex-column justify-content-center",children:[Object(l.jsx)("h2",{className:"accent pb-2 text-center",children:"Dog Days"}),Object(l.jsx)("p",{children:"Meet Bentley! He is a flat-coated retriever, extremly friendly, and always up for an adventure. He is a huge part of my life, so I couldn't miss an opportunity to share the joy."}),Object(l.jsx)("div",{className:"container-fluid row",children:Z.map((function(e){return Object(l.jsx)(T,{src:e.src,alt:e.alt},e.id)}))})]})}function $(){return Object(n.useEffect)((function(){document.title="SRM Web"})),Object(l.jsxs)(c.a,{fluid:!0,className:"main-page scroll",children:[Object(l.jsx)(m,{}),Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"p-3 mb-3 mainbckgrnd rounded-bottom ",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:J}),Object(l.jsx)(o.a,{exact:!0,path:"/skills",component:K}),Object(l.jsx)(o.a,{exact:!0,path:"/work",component:F}),Object(l.jsx)(o.a,{exact:!0,path:"/contact",component:U}),Object(l.jsx)(o.a,{exact:!0,path:"/dogdays",component:Y}),Object(l.jsx)(o.a,{exact:!0,path:"/resume",component:k})]})}),Object(l.jsx)(O,{})]})}t(81),t(82);var X=t(37),ee=t.n(X);i.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)($,{})}),document.getElementById("root"),ee.a.load({google:{families:["Comfortaa"]}}))}},[[83,1,2]]]);
//# sourceMappingURL=main.cc903528.chunk.js.map