import{r as t,j as e}from"./c7c14c1e.js";import{v as a,w as o,L as i,x as r,y as n}from"./39317677.js";import{i as s,a as l}from"./6d31a050.js";import{i as d}from"./cd46225a.js";a([s,r,l,d,n]);const c=({width:a,height:r})=>{const n=t.exports.useRef(null);return t.exports.useEffect((()=>{const t=o(n.current),e=[[120,200,150,80,70,110],[160,240,80,80,70,130]],a={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[{name:"系列一",textStyle:{color:"#999"}},{name:"系列二",textStyle:{color:"#999"}}]},xAxis:{type:"value",animationDuration:300,animationDurationUpdate:300,splitLine:{show:!0,lineStyle:{type:"dashed",color:["#212121"]}}},yAxis:{type:"category",data:["一月","二月","三月","四月","五月","六月"]},series:[{name:"系列一",data:e[0],type:"bar",barWidth:"24%",label:!1,valueAnimation:!0,itemStyle:{color:new i(1,0,0,0,[{offset:0,color:"#1890fe"},{offset:.5,color:"#1b6ebd"},{offset:1,color:"#1f4974"}])}},{name:"系列二",data:e[1],type:"bar",barWidth:"24%",valueAnimation:!0,itemStyle:{color:new i(1,0,0,0,[{offset:0,color:"#1ee6e7"},{offset:.5,color:"#20a8ac"},{offset:1,color:"#226b71"}])}}],animationDuration:0,animationDurationUpdate:3e3,animationEasing:"linear",animationEasingUpdate:"linear"};function r(){for(var a=0;a<e[0].length;++a)e[0][a]+=Math.round(100*Math.random()),e[1][a]+=Math.round(120*Math.random());t.setOption({series:[{type:"bar",data:e[0]},{type:"bar",data:e[1]}]})}t.setOption(a);const s=setInterval(r,2e3);return r(),()=>{clearInterval(s)}}),[]),e("section",{style:{width:a,height:r},children:e("div",{ref:n,style:{height:"100%"}})})},h=()=>e("section",{style:{width:420,height:460,position:"absolute",top:0,left:0,right:0,bottom:0,margin:"auto"},children:e(c,{width:420,height:460})});export{h as default};