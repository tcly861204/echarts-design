import{j as i,b as u,d as c,r as l,g as e,i as a}from"./f0c39482.js";const t="_container_14qfd_1",$="_title_14qfd_6",r="_group_14qfd_22",p="_card_167pb_1",g="_btn_1hupr_1",d=({children:u,onClick:c,style:l})=>i("button",{onClick:c,className:g,style:l,children:u}),o=({img:l,url:e,onClick:a})=>u("div",{className:p,children:[i("div",{className:"img",style:{backgroundImage:`url(${l})`}}),u("div",{className:"view",children:[i(d,{onClick:()=>{c(`${window.origin}${e}`)},children:"查看"}),i(d,{style:{background:"#ff0266",color:"#fff"},onClick:()=>a(e),children:"预览"})]})]}),m=({data:c,title:a,onClick:p})=>{const g=l.exports.useRef(e("user"));return u("section",{className:t,children:[i("h2",{className:$,children:a}),i("div",{className:r,children:c.map(((u,c)=>{if(u.auth.includes(g.current))return i(o,{img:u.img,url:u.url,onClick:p},c)}))})]})},n=i=>{const u="/echarts-design/",c=a&&window.location.href.includes("echarts-design")?"/echarts-design":"",e="components/#";return{data:l.exports.useMemo((()=>{const l=["admin","cobill"],a={components:[{img:`${u}public/code/02.jpg`,url:`${c}/${e}/pendant`,auth:l},{img:`${u}public/code/03.jpg`,url:`${c}/${e}/light`,auth:l},{img:`${u}public/code/05.jpg`,url:`${c}/${e}/iampstand`,auth:l},{img:`${u}public/code/06.jpg`,url:`${c}/${e}/iampstand1`,auth:l},{img:`${u}public/code/07.jpg`,url:`${c}/${e}/iampstand2`,auth:l},{img:`${u}public/code/08.jpg`,url:`${c}/${e}/iampstand3`,auth:l},{img:`${u}public/code/09.jpg`,url:`${c}/${e}/iampstand4`,auth:l},{img:`${u}public/code/10.jpg`,url:`${c}/${e}/iampstand5`,auth:l},{img:`${u}public/code/11.jpg`,url:`${c}/${e}/iampstand6`,auth:l},{img:`${u}public/code/13.jpg`,url:`${c}/${e}/iampstand7`,auth:l},{img:`${u}public/code/12.jpg`,url:`${c}/${e}/text`,auth:l},{img:`${u}public/code/14.jpg`,url:`${c}/${e}/histogram`,auth:l},{img:`${u}public/code/15.jpg`,url:`${c}/${e}/histogram1`,auth:l},{img:`${u}public/code/16.jpg`,url:`${c}/${e}/histogram2`,auth:l},{img:`${u}public/code/18.jpg`,url:`${c}/${e}/histogram3`,auth:l},{img:`${u}public/code/20.jpg`,url:`${c}/${e}/line`,auth:l},{img:`${u}public/code/17.jpg`,url:`${c}/${e}/ornament`,auth:l},{img:`${u}public/code/21.jpg`,url:`${c}/v${e}/title`,auth:l},{img:`${u}public/code/22.jpg`,url:`${c}/v${e}/title2`,auth:l},{img:`${u}public/code/23.jpg`,url:`${c}/v${e}/title3`,auth:l},{img:`${u}public/code/24.jpg`,url:`${c}/v${e}/widget`,auth:l},{img:`${u}public/code/25.jpg`,url:`${c}/${e}/loading1`,auth:l},{img:`${u}public/code/28.jpg`,url:`${c}/${e}/bar3`,auth:l},{img:`${u}public/code/29.jpg`,url:`${c}/${e}/timeline`,auth:l}],example:[{img:`${u}public/code/01.jpg`,url:`${c}/app`,auth:l},{img:`${u}public/code/04.jpg`,url:`${c}/scene`,auth:l},{img:`${u}public/code/19.jpg`,url:`${c}/three/#/car`,auth:["admin"]},{img:`${u}public/code/27.jpg`,url:`${c}/three/#/sichuan`,auth:l},{img:`${u}public/code/26.jpg`,url:`${c}/cesium/#/air`,auth:l}]};return i?a[i]:a}),[])}};export{m as G,n as u};