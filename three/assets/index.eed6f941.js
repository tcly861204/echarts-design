import{r as p,j as C}from"./index.7442dff7.js";import{W as T,S as A,C as E,F as L,P as W,A as j,M as u,a as F,b as h,T as O,I as g,c as x,G as k,V as H}from"./three.module.c85d35f8.js";import{O as V}from"./OrbitControls.a97767ed.js";const B=()=>{const w=p.exports.useRef(null);return p.exports.useEffect(()=>{const t={width:window.innerWidth,height:window.innerHeight},o=new T;o.setSize(t.width,t.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.current.appendChild(o.domElement);const e=new A;e.background=new E(1710618),e.fog=new L(1710618,1,1e3);const i=new W(40,t.width/t.height);e.add(i),i.position.set(20,100,450);const m=new V(i,o.domElement);m.enableDamping=!0;const y=new j(14609919,1.5);e.add(y);const P=new u({color:245820,wireframe:!0}),f=new F(80,32,32),c=new h(f,P);e.add(c);const I=new O(150,8,2,120),z=new u({color:4237823,wireframe:!0}),s=new h(I,z);s.rotation.x=Math.PI/2,s.rotation.y=-.1*(Math.PI/2),e.add(s);const G=new g(16,0),b=new x({color:16776192}),n=new h(G,b);e.add(n);const d=new k;for(let r=0;r<500;r++){const S=new g(Math.random()*2,0),R=new x({color:15658734}),a=new h(S,R);a.position.x=(Math.random()-.5)*700,a.position.y=(Math.random()-.5)*700,a.position.z=(Math.random()-.5)*700,a.rotation.x=Math.random()*2*Math.PI,a.rotation.y=Math.random()*2*Math.PI,a.rotation.z=Math.random()*2*Math.PI,d.add(a)}e.add(d),window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,o.setSize(t.width,t.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.aspect=t.width/t.height,i.updateProjectionMatrix()});let l=0;const v=new H(0,0,1),M=()=>{o.render(e,i),l+=Math.random()*.8;const r=l*Math.PI/180;c&&(c.rotation.y+=.005),s&&s.rotateOnAxis(v,Math.PI/400),n.position.x=250*Math.sin(r),n.position.y=100*Math.cos(r),n.position.z=-100*Math.cos(r),n.rotation.x+=.005,n.rotation.y+=.005,n.rotation.z-=.005,d.rotation.y+=9e-4,d.rotation.z-=3e-4,m.update(),window.requestAnimationFrame(M)};M()},[]),C("div",{ref:w,style:{width:"100vw",height:"100vh"}})};export{B as default};