import{C as i,a as e,j as m,k as u,R as p}from"./Viewer.b4a6b501.js";import{r as l,j as h}from"./index.ac6fbdb6.js";import{i as f,a as o,f as c}from"./init.5cf38b0f.js";const D=()=>{const t=l.exports.useRef(null);return l.exports.useEffect(()=>(f(t.current),o({name:"Blue box",position:i.fromDegrees(115,46,0),box:{dimensions:new i(4e5,3e5,5e5),material:e.BLUE}}),o({position:i.fromDegrees(108,46,15e4),name:"Green circle at height",ellipse:{semiMinorAxis:3e5,semiMajorAxis:3e5,height:2e5,material:e.GREEN}}),o({position:i.fromDegrees(100,45),name:"Red ellipse on surface with outline",ellipse:{semiMinorAxis:25e4,semiMajorAxis:4e5,material:e.RED.withAlpha(.5),outline:!0,outlineColor:e.RED}}),o({name:"Red cone",position:i.fromDegrees(92,40,2e5),cylinder:{length:4e5,topRadius:0,bottomRadius:2e5,material:e.RED}}),o({name:"Red polygon on surface",polygon:{hierarchy:i.fromDegreesArray([115,37,115,32,107,33,102,31,102,35]),material:e.RED}}),o({name:"Red line on the surface",polyline:{positions:i.fromDegreesArray([75,35,125,35]),width:5,material:e.RED}}),o({name:"Red tube with rounded corners",polylineVolume:{positions:i.fromDegreesArray([85,32,85,36,89,36]),shape:(a=>{const s=[];for(let r=0;r<360;r++){const n=m.toRadians(r);s.push(new u(a*Math.cos(n),a*Math.sin(n)))}return s})(6e4),material:e.RED}}),o({name:"Red translucent rectangle with outline",rectangle:{coordinates:p.fromDegrees(80,20,110,25),material:e.GREEN.withAlpha(.5),outline:!0,outlineColor:e.RED}}),o({name:"Red sphere with black outline",position:i.fromDegrees(100,50,3e5),ellipsoid:{radii:new i(3e5,3e5,3e5),material:e.RED.withAlpha(.5),outline:!0,outlineColor:e.BLACK}}),o({name:"Blue ellipsoid",position:i.fromDegrees(114,40,3e5),ellipsoid:{radii:new i(2e5,2e5,3e5),material:e.BLUE}}),o({name:"Green wall from surface with outline",wall:{positions:i.fromDegreesArrayHeights([107,43,1e5,97,43,1e5,97,40,1e5,107,40,1e5,107,43,1e5]),material:e.GREEN}}),c(),()=>{}),[]),h("section",{style:{height:"100vh"},ref:t})};export{D as default};
