import{r as e,j as t}from"./c7c14c1e.js";import{v as o,w as s,L as a,x as i,y as r}from"./39317677.js";import{i as l,a as c}from"./6d31a050.js";import{i as h}from"./cd46225a.js";o([l,i,c,h,r]);const f=({width:o,height:i=500})=>{const r=e.exports.useRef(null);return e.exports.useEffect((()=>{const e=s(r.current),t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[{name:"系列二",textStyle:{color:"#999"}},{name:"系列一",textStyle:{color:"#999"}}]},xAxis:[{type:"value",splitLine:{show:!1}}],yAxis:[{type:"category",axisTick:{show:!1},data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],series:[{name:"系列一",type:"bar",stack:"Total",barWidth:"30%",label:{show:!1},itemStyle:{color:new a(1,0,0,0,[{offset:0,color:"#1890fe"},{offset:.5,color:"#1b6ebd"},{offset:1,color:"#1f4974"}])},emphasis:{focus:"series"},data:[320,302,341,374,390,450,420]},{name:"系列二",type:"bar",stack:"Total",barWidth:"30%",label:{show:!1},itemStyle:{color:new a(0,0,1,0,[{offset:0,color:"#1ee6e7"},{offset:.5,color:"#20a8ac"},{offset:1,color:"#226b71"}])},emphasis:{focus:"series"},data:[-120,-132,-101,-134,-190,-230,-210]}]};e.setOption(t)}),[]),t("section",{style:{width:o,height:i},children:t("div",{ref:r,style:{height:"100%"}})})},n=()=>t("section",{style:{width:560,height:380,position:"absolute",top:0,left:0,right:0,bottom:0,margin:"auto"},children:t(f,{width:560,height:380})});export{n as default};