(this.webpackJsonpdeeprandomgalactic=this.webpackJsonpdeeprandomgalactic||[]).push([[0],{110:function(e,a,r){},111:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(11),c=r.n(o),i=r(65),l=r.n(i),s=r(141),d=r(44),m=r(143),u=r(139),b=r(138),j=r(66),h=r(135),p=r(132),g=r(133),v=r(142),x=r(136),O=r(134),y=r(63),S=r.n(y),C=r(62),k=r.n(C),f=r(137),w=r(45),M=[{name:"Driller",color:"#dfda3a",primaries:[{name:"CRSPR Flamethrower",overclocks:["Lighter Tanks","Sticky Additive","Compact Feed Valves","Fuel Stream Diffuser","Face Melter","Sticky Fuel"]},{name:"Cryo Cannon",overclocks:["Improved Thermal Efficiency","Perfectly Tuned Cooler","Flow Rate Expansion","Ice Spear","Ice Storm","Snowball"]}],secondaries:[{name:"Subata 120",overclocks:["Chain Hit","Homebrew Powder","Oversized Magazine","Automatic Fire","Explosive Reload","Tranquilizer Rounds"]},{name:"Experimental Plasma Charger",overclocks:["Energy Rerouting","Magnetic Cooling Unit","Heat Pipe","Heavy Hitter","Overcharger","Persistent Plasma"]}],grenades:["Impact Axe","HE Grenade","Neurotoxin Grenade"]},{name:"Engineer",color:"#Fb1a17",primaries:[{name:'"Warthog" Auto 210',overclocks:["Stunner","Light-Weight Magazines","Magnetic Pellet Alignment","Cycle Overload","Mini Shells"]},{name:'"Stubby" Voltaic SMG',overclocks:["Super-Slim Rounds","Well Oiled Machine","EM Refire Booster","Light-Weight Rounds","Turret Arc","Turret EM Discharge"]}],secondaries:[{name:"Deepcore 40mm PGL",overclocks:["Clean Sweep","Pack Rat","Compact Rounds","RJ250 Compound","Fat Boy","Hyper Propellant"]},{name:"Breach Cutter",overclocks:["Light-Weight Cases","Roll Control","Stronger Plasma Current","Return to Sender","High Voltage Crossover","Spinning Death","Inferno"]}],grenades:["L.U.R.E.","Plasma Burster","Proximity Mine"]},{name:"Gunner",color:"#3a6b33",primaries:[{name:'"Lead Storm" Powered Minigun',overclocks:["A Little More Oomph!","Thinned Drum Walls","Burning Hell","Compact Feed Mechanism","Exhaust Vectoring","Bullet Hell","Lead Storm"]},{name:'"Thunderhead" Heavy Autocannon',overclocks:["Composite Drums","Splintering Shells","Carpet Bomber","Combat Mobility","Big Bertha","Neurotoxin Payload"]}],secondaries:[{name:'"Bulldog" Heavy Revolver',overclocks:["Homebrew Powder","Chain Hit","Volatile Bullets","Six Shooter","Elephant Rounds","Magic Bullets"]},{name:"BRT7 Burst Fire Gun",overclocks:["Composite Casings","Full Chamber Seal","Compact Mags","Experimental Rounds","Electro Minelets","Micro Flechettes","Lead Spray"]}],grenades:["Sticky Grenade","Incendiary Grenade","Cluster Grenade"]},{name:"Scout",color:"#235bf4",primaries:[{name:"Deepcore GK2",overclocks:["Compact Ammo","Gas Rerouting","Homebrew Powder","Overclocked Firing Mechanism","Bullets of Mercy","AI Stability Engine","Electrifying Reload"]},{name:"M1000 Classic",overclocks:["Hoverclock","Minimal Clips","Active Stability System","Hipster","Electrocuting Focus Shots","Supercooling Chamber"]}],secondaries:[{name:"Jury-Rigged Boomstick",overclocks:["Compact Shells","Double Barrel","Special Powder","Stuffed Shells","Shaped Shells","Jumbo Shells"]},{name:"Zhukov NUK17",overclocks:["Minimal Magazines","Custom Casings","Cryo Minelets","Embedded Detonators","Gas Recycling"]}],grenades:["IFG","Cryo Grenade","Pherimone Canister"]}],R=r(2);var B=Object(v.a)({subheading:{marginTop:16,width:"100%"}}),P=function(e){var a=e.className,r=e.label,t=e.value,n=e.dense,o=e.valueStyle,c=B(),i=(a||"")+(n?"":" "+c.subheading);return Object(R.jsxs)("div",{className:i,children:[Object(R.jsx)(w.a,{variant:"subtitle1",color:"textSecondary",component:"div",children:r}),Object(R.jsx)(w.a,{variant:"body2",component:"div",style:o,children:t})]})};var N=!0,E=["One","Two","Three","Four"],F=function(e,a){var r=e.length,t=Math.floor(Math.random()*r%r),n=e[t];return a&&e.splice(t,1),n},G=Object(v.a)({card:{margin:16,maxWidth:400},content:{marginTop:-16,marginBottom:-16},divider:{margin:"16px -16px 8px -16px"},row:{display:"flex",flexDirection:"row"}}),H=function(){var e=G(),a=Object(t.useState)(null),r=Object(d.a)(a,2),o=r[0],c=r[1],i=Object(t.useCallback)((function(){c(null)}),[]),l=Object(t.useCallback)((function(){var e=Object(j.a)(M),a=E.map((function(a){var r=F(e,N);return{name:a,color:r.color,dwarf:r.name,primary:F(r.primaries).name,secondary:F(r.secondaries).name,grenade:F(r.grenades)}}));c(a)}),[]);return Object(R.jsxs)(p.a,{className:e.card,children:[Object(R.jsx)(g.a,{title:"Randomizer"}),Object(R.jsxs)(O.a,{className:e.content,children:[!o&&Object(R.jsx)(w.a,{children:"Click Randomize to begin."}),o&&o.map((function(a,r){return Object(R.jsxs)(n.a.Fragment,{children:[Object(R.jsxs)("div",{className:e.row,children:[Object(R.jsx)(P,{label:"Player",value:a.name}),Object(R.jsx)(P,{label:"Dwarf",value:a.dwarf,valueStyle:{color:a.color}})]}),Object(R.jsxs)("div",{className:e.row,children:[Object(R.jsx)(P,{label:"Primary",value:a.primary}),Object(R.jsx)(P,{label:"Secondary",value:a.secondary})]}),Object(R.jsx)("div",{className:e.row,children:Object(R.jsx)(P,{label:"Grenade",value:a.grenade})}),r<E.length-1&&Object(R.jsx)(h.a,{className:e.divider})]},r)}))]}),Object(R.jsxs)(x.a,{children:[Object(R.jsx)(f.a,{color:"secondary",onClick:i,children:Object(R.jsx)(k.a,{})}),Object(R.jsx)(f.a,{color:"secondary",onClick:l,children:Object(R.jsx)(S.a,{})})]})]})};var D=Object(v.a)({card:{margin:16,maxWidth:400}}),L=function(){var e=D();return Object(R.jsxs)(p.a,{className:e.card,children:[Object(R.jsx)(g.a,{title:"Setup"}),Object(R.jsxs)(O.a,{children:[Object(R.jsx)(P,{label:"Players",value:"todo"}),Object(R.jsx)(P,{label:"Guns",value:"todo"}),Object(R.jsx)(P,{label:"Grenades",value:"todo"}),Object(R.jsx)(P,{label:"Overclocks",value:"todo"})]})]})};var T=Object(v.a)((function(e){return{appBar:{backgroundColor:e.palette.background.paper},tab:{backgroundColor:e.palette.background.paper,minWidth:125},invisible:{display:"none"}}})),A=function(){var e=T(),a=Object(t.useState)(0),r=Object(d.a)(a,2),o=r[0],c=r[1];return Object(R.jsxs)(n.a.Fragment,{children:[Object(R.jsx)(b.a,{position:"static",elevation:0,className:e.appBar,children:Object(R.jsxs)(m.a,{value:o,onChange:function(e,a){return c(a)},children:[Object(R.jsx)(u.a,{label:"Randomizer",className:e.tab}),Object(R.jsx)(u.a,{label:"Setup",className:e.tab})]})}),Object(R.jsx)("div",{className:0!==o?e.invisible:"",children:Object(R.jsx)(H,{})}),Object(R.jsx)("div",{className:1!==o?e.invisible:"",children:Object(R.jsx)(L,{})})]})},W=r(144),I=r(140),z=r.p+"static/media/github.abfa92f7.svg";var J=Object(v.a)((function(e){return{appBar:{backgroundColor:e.palette.background.paper},drawerPaper:{width:225},toolbar:{paddingLeft:8,paddingRight:8},title:{paddingLeft:12,flex:1},nested:{paddingLeft:e.spacing(4)},link:{textDecoration:"none",color:"inherit"}}})),V=function(){var e=J();return Object(R.jsx)(n.a.Fragment,{children:Object(R.jsx)(b.a,{position:"static",elevation:0,className:e.appBar,children:Object(R.jsxs)(I.a,{className:e.toolbar,children:[Object(R.jsx)(w.a,{variant:"h6",className:e.title,children:"Deep Random Galactic"}),Object(R.jsx)(W.a,{title:"Contribute on GitHub!",children:Object(R.jsx)(f.a,{target:"_blank",href:"https://github.com/NiXXeD/deeprandomgalactic",children:Object(R.jsx)("img",{alt:"github link",width:"24",height:"24",src:z})})})]})})})},U=l()({palette:{type:"dark"}});var K,X=function(){return Object(R.jsx)(s.a,{theme:U,children:Object(R.jsxs)("div",{children:[Object(R.jsx)(V,{}),Object(R.jsx)(A,{})]})})};r(110),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(R.jsx)(X,{}),document.getElementById("root")),K=X,c.a.render(Object(R.jsx)(K,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){return e.unregister()}))}},[[111,1,2]]]);
//# sourceMappingURL=main.b3a265f2.chunk.js.map