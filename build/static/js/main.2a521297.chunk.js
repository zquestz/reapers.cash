(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{247:function(e,t){},256:function(e,t){},274:function(e,t){},276:function(e,t){},295:function(e,t){},296:function(e,t){},359:function(e,t){},361:function(e,t){},394:function(e,t){},396:function(e,t){},397:function(e,t){},402:function(e,t){},404:function(e,t){},410:function(e,t){},412:function(e,t){},425:function(e,t){},437:function(e,t){},440:function(e,t){},445:function(e,t){},453:function(e,t){},462:function(e,t){},464:function(e,t){},534:function(e,t,n){},535:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,u,d,j,b,p,x,h,g,O,f=n(1),m=n(86),C=n.n(m),v=n(17),y=n.n(v),A=n(44),w=n(70),E=n(15),S=n(59),T=n(69),N=n.n(T),_=n(221),k=n.n(_),D=n(71),M=n(222),L=n(20),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},I),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},e),{},{account:t.payload.account});default:return e}},U={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},U),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},P=Object(D.b)({blockchain:R,data:K}),F=[M.a],H=Object(D.c)(D.a.apply(void 0,F)),W=Object(D.d)(P,H),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},B=function(){return function(){var e=Object(A.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,W.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},z=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var t=Object(A.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(B());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=n(16),Q=q.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),X=q.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=q.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),te=(q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ne=(q.a.div(j||(j=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(226)),ce=n(2),re=function(){return""},ae=q.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),oe=q.a.button(p||(p=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ie=q.a.div(x||(x=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),se=q.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n  margin-top: 1em;\n"]))),le=q.a.img(g||(g=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: none;\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),ue=q.a.a(O||(O=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var de=function(){var e,t,n=Object(S.b)(),c=Object(S.c)((function(e){return e.blockchain})),r=Object(S.c)((function(e){return e.data})),a=Object(f.useState)(!1),o=Object(w.a)(a,2),i=o[0],s=o[1],l=Object(f.useState)("Click BUY to summon your Reaper."),u=Object(w.a)(l,2),d=u[0],j=u[1],b=Object(f.useState)(1),p=Object(w.a)(b,2),x=p[0],h=p[1],g=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1,LAUNCH_DATE:""}),O=Object(w.a)(g,2),m=O[0],C=O[1],v=function(){""!==c.account&&null!==c.smartContract&&n(B(c.account))},E=function(){var e=Object(A.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,C(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){E()}),[]),Object(f.useEffect)((function(){v()}),[c.account]),Object(ce.jsx)(Q,{children:Object(ce.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ce.jsx)(se,{alt:"logo",src:"/config/images/logo.png"}),Object(ce.jsx)(J,{}),Object(ce.jsx)($,{jc:"center",ai:"center",style:{margin:"0",padding:"0",color:"#efefef"},children:Object(ce.jsxs)("div",{className:"social",children:[Object(ce.jsx)("a",{href:"https://github.com/zquestz/reapers.cash",target:"_blank",children:Object(ce.jsx)("img",{src:"/github-alt-brands.svg"})}),Object(ce.jsx)("a",{href:"https://t.me/ReapersNFT",target:"_blank",children:Object(ce.jsx)("img",{src:"/telegram-plane-brands.svg"})}),Object(ce.jsx)("a",{href:"https://twitter.com/ReapersNFT",target:"_blank",children:Object(ce.jsx)("img",{src:"/twitter-brands.svg"})})]})}),Object(ce.jsxs)(ie,{flex:1,style:{padding:24},test:!0,children:[Object(ce.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ce.jsx)(le,{alt:"example",src:"/config/images/example.webp"})}),Object(ce.jsx)(Z,{}),Object(ce.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"none",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ce.jsxs)(ee,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",m.MAX_SUPPLY]}),Object(ce.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ce.jsx)(ue,{target:"_blank",href:m.SCAN_LINK,children:(e=m.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(ce.jsx)(J,{}),Number(r.totalSupply)>=m.MAX_SUPPLY?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ce.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(ce.jsx)(J,{}),Object(ce.jsx)(ue,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(ce.jsx)(X,{}),Object(ce.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(ce.jsx)(J,{}),""===c.account||null===c.smartContract?Object(ce.jsxs)($,{ai:"center",jc:"center",children:[Object(ce.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",m.NETWORK.NAME," network"]}),Object(ce.jsx)(J,{}),Object(ce.jsx)(ae,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(A.a)(y.a.mark((function e(t){var n,c,r,a,o,i,s,l,u;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){e.next=33;break}return N.a.setProvider(i),s=new k.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(u=new N.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(e){t(G(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(z("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(z("Something went wrong."));case 31:e.next=34;break;case 33:t(z("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(J,{}),Object(ce.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(ce.jsxs)(ce.Fragment,{children:[new Date>new Date(m.LAUNCH_DATE)?Object(ce.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}):null,Object(ce.jsx)(V,{}),new Date>new Date(m.LAUNCH_DATE)?Object(ce.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(ce.jsx)(oe,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=x-1;e<1&&(e=1),h(e)}()},children:"-"}),Object(ce.jsx)(V,{}),Object(ce.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:x}),Object(ce.jsx)(V,{}),Object(ce.jsx)(oe,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=x+1;e>10&&(e=10),h(e)}()},children:"+"})]}):null,Object(ce.jsx)(J,{}),new Date>new Date(m.LAUNCH_DATE)?Object(ce.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(ce.jsx)(ae,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=m.WEI_COST,t=m.GAS_LIMIT,r=String(e*x),a=String(t*x);console.log("Cost: ",r),console.log("Gas limit: ",a),j("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(x).send({gasLimit:String(a),to:m.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(e){console.log(e),j("Sorry, something went wrong please try again later."),s(!1)})).then((function(e){console.log(e),j("WOW, the ".concat(m.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(B(c.account))}))}(),v()},children:i?"BUSY":"BUY"})}):Object(ce.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Summoning begins ",new Date(m.LAUNCH_DATE).toUTCString(),"."]}),Object(ce.jsx)("div",{className:"countdown",children:Object(ce.jsx)(ne.a,{date:new Date(m.LAUNCH_DATE),children:Object(ce.jsx)(re,{})})})]})]}),Object(ce.jsx)(V,{})]}),Object(ce.jsx)(Z,{}),Object(ce.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(ce.jsx)(le,{alt:"example",src:"/config/images/example.webp"})})]}),Object(ce.jsx)(V,{}),Object(ce.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ce.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",m.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(ce.jsx)(J,{}),Object(ce.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",m.GAS_LIMIT," for the contract to successfully summon your Reaper. We recommend that you don't lower the gas limit."]})]})]})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,539)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(534);C.a.render(Object(ce.jsx)(S.a,{store:W,children:Object(ce.jsx)(de,{})}),document.getElementById("root")),je()}},[[535,1,2]]]);
//# sourceMappingURL=main.2a521297.chunk.js.map