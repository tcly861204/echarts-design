import{x as o,h as a,i as S}from"./Viewer.b4a6b501.js";import{r as g,j as m}from"./index.ac6fbdb6.js";import{i as p,v as c}from"./init.5cf38b0f.js";const n={S_PointSize:2,S_MaximumMemoryUsage:512,S_MaximumScreenSpaceError:8,S_PointCloudVisibleHeight:9600,S_Attenuation:!0,S_GeometricErrorScale:.4,S_MaximumAttenuation:4,S_EyeDomeLighting:!0,S_EyeDomeLightingStrength:.4,S_EyeDomeLightingRadius:1.4,S_DepthTestAgainstTerrain:!1,S_EnableLighting:!1,S_PreloadFlightDestinations:!0};class _{constructor(e){this.viewer=e,this.viewer.scene.globe.depthTestAgainstTerrain=n.S_DepthTestAgainstTerrain,this.viewer.scene.globe.enableLighting=n.S_EnableLighting,this._initPointCloudVisibleHeight()}setPointSize(e){e&&(n.S_PointSize=e);let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].style=new o({pointSize:e})}setMaximumMemoryUsage(e){e&&(n.S_MaximumMemoryUsage=e);let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].maximumMemoryUsage=e}setMaximumScreenSpaceError(e){e&&(n.S_MaximumScreenSpaceError=e);let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].maximumScreenSpaceError=e}setPointCloudVisibleHeight(e){e&&(n.S_PointCloudVisibleHeight=e)}setAttenuation(e){n.S_Attenuation=e;let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].pointCloudShading.attenuation=e}setGeometricErrorScale(e){e&&(n.S_GeometricErrorScale=e);let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].pointCloudShading.GeometricErrorScale=e}setMaximumAttenuation(e){e&&(n.S_MaximumAttenuation=e);let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].pointCloudShading.maximumAttenuation=e}setEyeDomeLighting(e){n.S_EyeDomeLighting=e;let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].pointCloudShading.eyeDomeLighting=e}setEyeDomeLightingStrength(e){e&&(n.S_EyeDomeLightingStrength=e);let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].pointCloudShading.eyeDomeLightingStrength=e}setEyeDomeLightingRadius(e){e&&(n.S_EyeDomeLightingRadius=e);let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].pointCloudShading.eyeDomeLightingRadius=e}setDepthTestAgainstTerrain(e){n.S_DepthTestAgainstTerrain=e,this.viewer.scene.globe.depthTestAgainstTerrain=e}setEnableLighting(e){n.S_EnableLighting=e,this.viewer.scene.globe.enableLighting=e}setPreloadFlightDestinations(e){n.S_PreloadFlightDestinations=e;let t=this.viewer.scene.primitives._primitives;for(let i=0;i<t.length;i++)t[i].preloadFlightDestinations=e}_initPointCloudVisibleHeight(){let e=this.viewer.scene.primitives._primitives;this.viewer.scene.camera.moveEnd.addEventListener(()=>{let l=this.viewer.camera.positionCartographic.height;if(l>n.S_PointCloudVisibleHeight&&t){t=!1;for(let s=0;s<e.length;s++)e[s].style=new o({pointSize:n.S_PointSize,show:!1})}else if(l<n.S_PointCloudVisibleHeight&&!t){t=!0;for(let s=0;s<e.length;s++)e[s].style=new o({pointSize:n.S_PointSize,show:!0})}});let t=!1;new a(this.viewer.scene.canvas).setInputAction(l=>{let s=this.viewer.camera.positionCartographic.height;if(s>n.S_PointCloudVisibleHeight&&t){t=!1;for(let r=0;r<e.length;r++)e[r].style=new o({pointSize:n.S_PointSize,show:!1})}else if(s<n.S_PointCloudVisibleHeight&&!t){t=!0;for(let r=0;r<e.length;r++)e[r].style=new o({pointSize:n.S_PointSize,show:!0})}},S.WHEEL)}}const u=()=>{const h=g.exports.useRef(null);return g.exports.useEffect(()=>((async()=>(p(h.current),new _(c).setMaximumAttenuation(4)))(),()=>{}),[]),m("div",{children:m("section",{style:{height:"100vh"},ref:h})})};export{u as default};