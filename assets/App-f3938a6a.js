import{r as i,u as z,M as V,s as it,j as l,F as N,a as x,C as ot,S as be,U as at,b as Me,B as st,R as I,c as J,L as ie,d as Ve,E as oe,e as Q,f as lt,m as ct,g as ut,h as dt,i as $,G as ae,k as De,l as ye,n as ft,o as pt,V as fe,p as mt,q as Z,t as ht,v as gt,O as vt}from"./index-7c44e058.js";import{Vector3 as _t,Vector2 as bt,UniformsUtils as Ie,UniformsLib as ke,ShaderMaterial as yt}from"//cdn.skypack.dev/three@0.130.1/build/three.module.js";import"//cdn.skypack.dev/three@0.130.1/examples/jsm/lines/LineSegmentsGeometry.js";function St(){const e=i.useRef(),t=z(u=>u.wiringStep);let{currentStepObject:n,setCurrentSVG:o}=i.useContext(V);return i.useEffect(()=>{t&&document.getElementById("myEmbed").addEventListener("load",function(){o(it(document.getElementById("myEmbed")))})},[t]),l(N,{children:t?l("div",{id:"svgContainer",style:{position:"absolute",width:"100%",height:"100%",bottom:"0px",left:"0px",padding:"10px"},children:l("embed",{style:{width:"100%",height:"100%",backgroundColor:"#e9e9e9"},ref:e,type:"image/svg+xml",src:`./${n.name}.svg`,id:"myEmbed"})}):null})}function xt(){let{setStepPosition:e,stepCount:t,stepList:n}=i.useContext(V);const o=()=>{t++,e(t)},u=()=>{t--,e(t)};return x(N,{children:[t>=1?l("button",{onClick:u,className:"btn",id:"nextStep",children:" ❮ Previous Step  "}):null,n&&t+1<=n.length-1?l("button",{onClick:o,className:"btn",id:"nextStep",children:"Next Step ❯ "}):null]})}function wt(){const{setModelInOut:e,selectedParts:t}=i.useContext(V),[n,o]=i.useState(!1),u=z(_=>_.wiringStep);return l(N,{children:u?null:l("button",{onClick:()=>{n==!1?(document.getElementById("partsOut").innerHTML="Assemble",o(!0),e(n)):n==!0&&(document.getElementById("partsOut").innerHTML="Explode",o(!1),e(n))},className:"btn",id:"partsOut",children:"Explode"})})}class Ct{constructor(t,n={}){this.enabled=!0;const o=n.defaultThickness!==void 0?n.defaultThickness:.003,u=new ot().fromArray(n.defaultColor!==void 0?n.defaultColor:[0,0,0]),d=n.defaultAlpha!==void 0?n.defaultAlpha:1,_=n.defaultKeepAlive!==void 0?n.defaultKeepAlive:!1,h={},p=60,v={},f={},M={outlineThickness:{value:o},outlineColor:{value:u},outlineAlpha:{value:d}},B=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),b=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <encodings_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function C(){return new be({type:"OutlineEffect",uniforms:at.merge([Me.fog,Me.displacementmap,M]),vertexShader:B,fragmentShader:b,side:st})}function T(r){let a=h[r.uuid];return a===void 0&&(a={material:C(),used:!0,keepAlive:_,count:0},h[r.uuid]=a),a.used=!0,a.material}function E(r){const a=T(r);return v[a.uuid]=r,D(a,r),a}function k(r){const a=r.geometry;let s=!1;return r.geometry!==void 0&&(a.isBufferGeometry?s=a.attributes.normal!==void 0:s=!0),r.isMesh===!0&&r.material!==void 0&&s===!0}function A(r){if(k(r)!==!1){if(Array.isArray(r.material))for(let a=0,s=r.material.length;a<s;a++)r.material[a]=E(r.material[a]);else r.material=E(r.material);f[r.uuid]=r.onBeforeRender,r.onBeforeRender=m}}function L(r){if(k(r)!==!1){if(Array.isArray(r.material))for(let a=0,s=r.material.length;a<s;a++)r.material[a]=v[r.material[a].uuid];else r.material=v[r.material.uuid];r.onBeforeRender=f[r.uuid]}}function m(r,a,s,y,w){const H=v[w.uuid];H!==void 0&&j(w,H)}function j(r,a){const s=a.userData.outlineParameters;r.uniforms.outlineAlpha.value=a.opacity,s!==void 0&&(s.thickness!==void 0&&(r.uniforms.outlineThickness.value=s.thickness),s.color!==void 0&&r.uniforms.outlineColor.value.fromArray(s.color),s.alpha!==void 0&&(r.uniforms.outlineAlpha.value=s.alpha)),a.displacementMap&&(r.uniforms.displacementMap.value=a.displacementMap,r.uniforms.displacementScale.value=a.displacementScale,r.uniforms.displacementBias.value=a.displacementBias)}function D(r,a){if(r.name==="invisible")return;const s=a.userData.outlineParameters;r.fog=a.fog,r.toneMapped=a.toneMapped,r.premultipliedAlpha=a.premultipliedAlpha,r.displacementMap=a.displacementMap,s!==void 0?(a.visible===!1?r.visible=!1:r.visible=s.visible!==void 0?s.visible:!0,r.transparent=s.alpha!==void 0&&s.alpha<1?!0:a.transparent,s.keepAlive!==void 0&&(h[a.uuid].keepAlive=s.keepAlive)):(r.transparent=a.transparent,r.visible=a.visible),(a.wireframe===!0||a.depthTest===!1)&&(r.visible=!1),a.clippingPlanes&&(r.clipping=!0,r.clippingPlanes=a.clippingPlanes,r.clipIntersection=a.clipIntersection,r.clipShadows=a.clipShadows),r.version=a.version}function F(){let r;r=Object.keys(v);for(let a=0,s=r.length;a<s;a++)v[r[a]]=void 0;r=Object.keys(f);for(let a=0,s=r.length;a<s;a++)f[r[a]]=void 0;r=Object.keys(h);for(let a=0,s=r.length;a<s;a++){const y=r[a];h[y].used===!1?(h[y].count++,h[y].keepAlive===!1&&h[y].count>p&&delete h[y]):(h[y].used=!1,h[y].count=0)}}this.render=function(r,a){if(this.enabled===!1){t.render(r,a);return}const s=t.autoClear;t.autoClear=this.autoClear,t.render(r,a),t.autoClear=s,this.renderOutline(r,a)},this.renderOutline=function(r,a){const s=t.autoClear,y=r.matrixWorldAutoUpdate,w=r.background,H=t.shadowMap.enabled;r.matrixWorldAutoUpdate=!1,r.background=null,t.autoClear=!1,t.shadowMap.enabled=!1,r.traverse(A),t.render(r,a),r.traverse(L),F(),r.matrixWorldAutoUpdate=y,r.background=w,t.autoClear=s,t.shadowMap.enabled=H},this.autoClear=t.autoClear,this.domElement=t.domElement,this.shadowMap=t.shadowMap,this.clear=function(r,a,s){t.clear(r,a,s)},this.getPixelRatio=function(){return t.getPixelRatio()},this.setPixelRatio=function(r){t.setPixelRatio(r)},this.getSize=function(r){return t.getSize(r)},this.setSize=function(r,a,s){t.setSize(r,a,s)},this.setViewport=function(r,a,s,y){t.setViewport(r,a,s,y)},this.setScissor=function(r,a,s,y){t.setScissor(r,a,s,y)},this.setScissorTest=function(r){t.setScissorTest(r)},this.setRenderTarget=function(r){t.setRenderTarget(r)}}}const Pt=i.createContext(null);function At(e){let{children:t,enabled:n=!0}=e;const[o,u]=i.useState([]),d=i.useMemo(()=>({selected:o,select:u,enabled:n}),[o,u,n]);return I.createElement(Pt.Provider,{value:d},t)}function Ot({modelInCopy:e}){const t=new J({color:15461355});var n=new ie({color:10921638,linewidth:10});const o=new be(Ve);return o.uniforms.diffuse.value.set(0),i.useEffect(()=>{const u=[];e.traverse(d=>{if(d.frustumCulled=!0,d.isMesh){d.material=t,d.frustumCulled=!1;var _=new oe(d.geometry,20),h=new Q(_,n);u.push(d.geometry);const p=new lt(ct(d.geometry)),v=new Q(p,o);d.add(h),d.add(v),_.dispose(),d.geometry.dispose(),t.dispose()}})},[]),l(N,{children:l("primitive",{object:e,scale:1})})}I.memo(Ot);new _t;const Et={linewidth:{value:1},resolution:{value:new bt(1,1)},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1},opacity:{value:1}},pe={uniforms:Ie.merge([ke.common,ke.fog,Et]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 control0;
		attribute vec3 control1;
		attribute vec3 direction;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

			// conditional logic
			// Transform the line segment ends and control points into camera clip space
			vec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );
			vec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );
			vec4 p0 = projectionMatrix * modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 p1 = projectionMatrix * modelViewMatrix * vec4( instanceStart + direction, 1.0 );

			c0 /= c0.w;
			c1 /= c1.w;
			p0 /= p0.w;
			p1 /= p1.w;

			// Get the direction of the segment and an orthogonal vector
			vec2 segDir = p1.xy - p0.xy;
			vec2 norm = vec2( - segDir.y, segDir.x );

			// Get control point directions from the line
			vec2 c0dir = c0.xy - p1.xy;
			vec2 c1dir = c1.xy - p1.xy;

			// If the vectors to the controls points are pointed in different directions away
			// from the line segment then the line should not be drawn.
			float d0 = dot( normalize( norm ), normalize( c0dir ) );
			float d1 = dot( normalize( norm ), normalize( c1dir ) );
			float discardFlag = float( sign( d0 ) != sign( d1 ) );
			gl_Position = discardFlag > 0.5 ? c0 : gl_Position;
			// end conditional line logic

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Mt extends yt{constructor(t){super({type:"ConditionalLineMaterial",uniforms:Ie.clone(pe.uniforms),vertexShader:pe.vertexShader,fragmentShader:pe.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}}}),this.setValues(t)}}Mt.prototype.isConditionalLineMaterial=!0;ut({OutlineEffect:Ct});const me=[],he=[];function kt({modelIn:e,modelOut:t,modelInCopy:n,modelInCopy2:o,modelOutCopy:u}){console.log("render count");const{gl:d,camera:_,scene:h}=dt(),p=i.useRef(),v=i.useRef();i.useRef(),i.useRef(),i.useRef(),d.setPixelRatio(Math.min(window.devicePixelRatio,2));let{stepCount:f,modelProperties:M,partsInOut:B,setVisibleModel:b,setCurrentStepObj:C,currentStepObject:T,selectedParts:E,setProperties:k,setCurrentObject:A,visibleObj:L}=i.useContext(V);const[m,j]=i.useState(!1),[D,F]=i.useState(!1),[r,a]=i.useState(o);i.useState();const[s,y]=i.useState(n);i.useState(o);const[w,H]=i.useState();i.useState(),i.useState();const[Se,K]=i.useState(),[O,G]=i.useState();i.useState();const te=new J({color:15461355}),ue=new J({color:16777215}),xe=new J({color:16711680,wireframe:!0}),we=new J({color:13754592});var Ce=new ie({color:4210752,linewidth:10}),Pe=new ie({color:6723993,linewidth:50}),We=new ie({color:10921638,linewidth:10});new be(Ve).uniforms.diffuse.value.set(0);const Ae=["011_Glue_-_Top_Panel","012_Glue_-_Bottom_&_Front_Panel","013_Glue_-_Separator_&_Side_Panels","014_Glue_-_Back_Panels_&_Head_Plates","015_Glue_Parts_-_Window"],de=[["03_Prepare_Bottom_Middle_Beam"],["061_Prepare_the_Bed"],["07_Prepare_Z_Motors"],["10_Prepare_Back_Separator_Panel"],["141_Prepare_Side_Electronic_Plate_1","142_Prepare_Side_Electronic_Plate_2"],["171_Prepare_Back_Electronic_Plate_1","172_Prepare_Back_Electronic_Plate_2"],["221_Prepare_Y_Axis_1","222_Prepare_Y_Axis_2"],["25_Prepare_Back_Inner_Panel"],["291_Prepare_Y_Left_Attacher","292_Attach_Belt_Tensioner"],["311_Prepare_X_axis_-_Linear_Guide"],["312_Prepare_X_axis_2_-_X_Head_Plate","313_Prepare_X_axis_3_-_Belt_Attacher","314_Prepare_X_axis_4_-_X_Carriage","315_Prepare_X_axis_5"],["32_Prepare_X_Motor_Plate"],["42_Prepare_Top_Panel"],["441_Prepare_CO2_Head","442_Fix_Dovetail_Pin_on_Cover","443_Fix_the_Head_Plate"],["451_Prepare_Diode_Head","452_Fix_the_Diode_Modules","453_Fix_the_Pin_Holder"],["52_Attach_Display","53_Install_Cameras","54_Frame","55_Pistons_and_HInges"]],qe=["471_Wiring_1","472_Wiring_2","473_Wiring_3","474_Wiring_4","475_Wiring_5","476_Wiring_6","477_Wiring_7"],Oe=[];let ne=[],X=[];i.useEffect(()=>{B===!0?(a(o),G(o.getObjectByName(m[f]))):B===!1&&(a(u),G(u.getObjectByName(m[f])))},[B]),i.useEffect(()=>{r.traverse(c=>{c.isObject3D&&!c.isMesh&&!c.isGroup&&(me.push(c.name),he.push(c.userData.name))},[]),me.sort(),j(me),he.sort(),F(he),s.traverse(c=>{if(c.isMesh){c.material=te,c.frustumCulled=!1;var P=new oe(c.geometry,20),g=new Q(P,We);c.add(g),c.geometry.dispose(),te.dispose()}}),C(n.getObjectByName(m[0])),G(r.getObjectByName(m[0])),Ee(),$()},[]),Ae.some(c=>c.includes(m[f]));const Ze=de.some(c=>c.includes(m[f]));z(c=>c.wiringStep);const Ke=z(c=>c.isWiringStep),Xe=z(c=>c.isNotWiringStep);qe.some(c=>c.includes(m[f]))?Ke():Xe(),i.useEffect(()=>{C(o.getObjectByName(m[f])),G(r.getObjectByName(m[f]))},[m,f]),i.useEffect(()=>{console.log(T),Ee()},[m,f,T]),i.useEffect(()=>{O&&(A(O.getObjectByName(m[f])),E!=[]&&et(),$())},[E,O]);const Ee=i.useCallback(()=>{let c=[],P=[];const g=[];if(T){for(let R=0;R<T.children.length;R++)T.children[R].traverse(W=>{W.isGroup&&W.userData.name!=null&&g.push(W.userData.name),c=[...new Set(g)],P=c.map(U=>[g.filter(rt=>rt===U).length,U])});const S=T.userData.name;k({partsNames:P,titleName:S})}}),Je=i.useCallback(()=>{for(let c=f-1;c>=0;c--)for(let P=X.length-1;P>=0;P--)if(m[c]===X[P]){let g=s.getObjectByName(`${m[c]}`,!0);if(ne.push(g),m[c+1]==="314_Prepare_X_axis_4_-_X_Carriage"){let S=s.getObjectByName("311_Prepare_X_axis_-_Linear_Guide",!0);ne.push(S)}if(m[c+1]==="27_Fix_Z_ball_screw_on_Z_front_plate"){let S=s.getObjectByName("25_Prepare_Z_ball_screw",!0);ne.push(S)}}}),Qe=i.useCallback(()=>{for(let g=0;g<de.length;g++){X=de[g];for(let S=0;S<X.length;S++)X.some(W=>W.includes(m[f]))&&Je()}let c=new ae,P=O.clone();c.add(P),ne.forEach(g=>{g.visible=!0;let S=g.clone();c.add(S)}),b(c)}),Ye=i.useCallback(()=>{m[f]==="29_Fix_middle_plate_on_X-axis"&&s.getObjectByName("25_Prepare_Z_ball_screw",!0);for(let S=f-1;S>=0;S--){let R=s.getObjectByName(`${m[S]}`,!0);Oe.push(R)}let c=[];m[f]==="29_Fix_middle_plate_on_X-axis"&&(c=["25_Prepare_Z_ball_screw","26_Prepare_Z_front_plate","27_Fix_Z_ball_screw_on_Z_front_plate"],s.getObjectByName("25_Prepare_Z_ball_screw",!0),console.log("exception"));let P=new ae;Oe.filter(S=>!Ae.some(R=>R.includes(S.name))&&!c.some(R=>R.includes(S.name))).forEach(S=>{S.visible=!0;let R=S.clone();P.add(R)});let g=O.clone();P.add(g),b(P)}),et=i.useCallback(()=>{if(O){const c=[];for(let P=0;P<O.children.length;P++)O.children[P].traverse(g=>{if(g.isMesh&&E.includes(O.children[P].userData.name)){g.frustumCulled=!1;const U=g.geometry.clone();c.push(U),g.material=we;var S=new oe(g.geometry,20),R=new Q(S,Pe);g.add(R),we.dispose(),S.dispose(),Pe.dispose()}else if(g.isMesh&&O.children[P].userData.name!="Curves"){g.frustumCulled=!1,g.material=ue;var S=new oe(g.geometry,20),W=new Q(S,Ce);g.add(W),S.dispose(),Ce.dispose()}else if(g.userData.name==="Curves"&&(g.material=xe,g.isGroup))for(let U=0;U<g.children.length;U++)g.children[U].isMesh&&(g.children[U].frustumCulled=!1,g.children[U].material=xe)});K(E)}});i.useCallback(()=>{w.traverse(c=>{c.name==="Botom_Panel"&&console.log(w.userData.name)})}),i.useCallback(c=>{c.stopPropagation(),console.log(c.object)});const tt=i.useCallback(()=>{if(O){O.clone();for(let c=0;c<r.children.length;c++)r.children[c].visible=!1;for(let c=0;c<s.children.length;c++)s.children[c].visible=!1;Ze?(console.log("preparing step"),O.visible=!0,Qe()):(console.log("main building step"),O.visible=!0,Ye())}},[O]);i.useEffect(()=>{tt()},[O]);const{setListOfStep:nt}=i.useContext(V);return nt(D),i.useState(null),l(N,{children:l(At,{children:m?x(N,{children:[l("primitive",{ref:p,object:r,scale:1.0001}),l("primitive",{ref:v,object:s,scale:1})]}):null})})}const Tt=I.memo(kt);function Nt(){let e=[],t=new ae;const{modelProperties:n,visibleObj:o,currentStepObject:u,setClickedParts:d,selectedParts:_,partsInOut:h,setCurrentPartsModel:p,currentObject:v,partBtnState:f,setPartButtonState:M}=i.useContext(V),[B,b]=i.useState(null);i.useState(!1);const[C,T]=i.useState(!1),E=z(m=>m.wiringStep),k=i.useCallback(()=>{if(t=new ae,e=[],B){console.log(B);for(let m=0;m<v.children.length;m++)if(v.children[m].userData.name===B){const j=v.children[m].clone();t.add(j),e.push(v.children[m].userData.name)}d(e),p(t)}});i.useEffect(()=>{e=[],d(e),k()},[u,B]),i.useEffect(()=>{M(!1),e=[],d(e),p(null)},[u]);const A=()=>{f===!0&&(M(!1),e=[],d(e),p(null)),f===!1&&(M(!0),k())},L=()=>{console.log("disable"),M(!1),e=[],d(e),p(null),b(null)};return l(N,{children:l("div",{children:l("ul",{children:n?n.partsNames.map(([m,j],D)=>l("li",{children:j===B?x("button",{id:`${j}`,style:{backgroundColor:"#669999",color:"#ffffff"},disabled:C,onClick:()=>{f===!0&&L()},className:"parts",children:[x("b",{children:[" ",m,"x"]}),"  ",j]}):E?x("p",{style:{paddingBottom:10},children:[x("b",{children:[" ",m,"x"]}),"  ",j]}):x("button",{id:`${j}`,disabled:C,onClick:()=>{b(j),A()},className:"parts",children:[x("b",{children:[" ",m,"x "]}),"  ",j]})},D)):null})})})}function Bt(){const{modelProperties:e}=i.useContext(V);return l(N,{children:l("div",{children:e?e.titleName:null})})}function Lt(){const{stepList:e,setStepPosition:t,stepCount:n,currentStepName:o,modelProperties:u}=i.useContext(V);i.useState("stepNaviBtn");const[d,_]=i.useState();return e&&[...Array(e.length)],l("div",{children:l("ul",{children:e?e.map((h,p)=>l("li",{children:u&&h===u.titleName?l("button",{id:`${h}`,style:{backgroundColor:"#000000",color:"#ffffff"},onClick:()=>{t(p)},className:"stepNaviBtn",children:h}):l("button",{id:`${h}`,style:{backgroundColor:d},onClick:()=>{t(p)},className:"stepNaviBtn",children:h})},p)):null})})}const jt=I.memo(Lt);function zt({cameraControlsRef:e}){let{visibleObj:t,modelProperties:n,selectedPartsModel:o,selectedParts:u,currentObject:d,setCamera:_,partBtnState:h,currentStepObject:p}=i.useContext(V);const v=De(),f=z(M=>M.cameraPositionTag);i.useEffect(()=>{t?(v.refresh(t).fit().clip(),$()):(v.refresh(p).fit().clip(),$())},[p,f]),i.useEffect(()=>{o?(v.refresh(o).fit(),$()):o||(v.refresh(t).fit(),$())},[o])}var He={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Te=I.createContext&&I.createContext(He),Rt=["attr","size","title"];function Vt(e,t){if(e==null)return{};var n=Dt(e,t),o,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(u=0;u<d.length;u++)o=d[u],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function Dt(e,t){if(e==null)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},se.apply(this,arguments)}function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,o)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ne(Object(n),!0).forEach(function(o){It(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function It(e,t,n){return t=Ht(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ht(e){var t=Ut(e,"string");return typeof t=="symbol"?t:t+""}function Ut(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ue(e){return e&&e.map((t,n)=>I.createElement(t.tag,le({key:n},t.attr),Ue(t.child)))}function ee(e){return t=>I.createElement(Ft,se({attr:le({},e.attr)},t),Ue(e.child))}function Ft(e){var t=n=>{var{attr:o,size:u,title:d}=e,_=Vt(e,Rt),h=u||n.size||"1em",p;return n.className&&(p=n.className),e.className&&(p=(p?p+" ":"")+e.className),I.createElement("svg",se({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,_,{className:p,style:le(le({color:e.color||n.color},n.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&I.createElement("title",null,d),e.children)};return Te!==void 0?I.createElement(Te.Consumer,null,n=>t(n)):t(He)}function $t(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(e)}let _e=1,Fe=new Array;new Array;let ge=new Array,re;ye.get("https://sheets.googleapis.com/v4/spreadsheets/1uVPhX1BG4BVODoJ8GnZFB_j1AieNfuZvqLwoo5ZS_9M/values/Workbook?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(e=>{let t=e.data.values,n=new Array;for(const o of t)_e>2&&o[1]!=""&&(Fe.push(n),n=new Array),n.push(o),++_e});function Gt(){let{stepCount:e,stepList:t}=i.useContext(V);return i.useEffect(()=>{re=new Array;for(const n of Fe[e+1])n[10]!=""&&n[10]!=null&&(ge=new Array,ge.push(n[10]),re.push(ge)),++_e},[e]),l(N,{children:re?x("div",{children:[x("div",{id:"RemarksTitle",style:{margin:"auto",display:"inline",alignContent:"baseline"},children:[x("h3",{children:[" ",l($t,{})," Remarks"]})," ",l("br",{})]}),l("ul",{children:re.map((n,o)=>x("li",{children:[" ",n]},o))})]}):null})}/**
  * react-collapsed v4.2.0
  *
  * Copyright (c) 2019-2024, Rogin Farrer
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */var Wt=class extends Error{constructor(e){super(`react-collapsed: ${e}`)}},ce=(...e)=>(e[0],`${e[1]}`,void 0);function $e(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useCallback((...n)=>{var o;return(o=t.current)==null?void 0:o.call(t,...n)},[])}function qt(e,t,n){const[o,u]=i.useState(t),d=i.useRef(typeof e<"u"),_=d.current?e:o,h=$e(n),p=i.useCallback(v=>{const M=typeof v=="function"?v(_):v;d.current||u(M),h==null||h(M)},[h,_]);return i.useEffect(()=>{ce(!(d.current&&e==null),"`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),ce(!(!d.current&&e!=null),"`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")},[e]),[_,p]}var Zt="(prefers-reduced-motion: reduce)";function Kt(){const[e,t]=i.useState(!1);return i.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const n=window.matchMedia(Zt);t(n.matches);const o=u=>{t(u.matches)};if(n.addEventListener)return n.addEventListener("change",o),()=>{n.removeEventListener("change",o)};if(n.addListener)return n.addListener(o),()=>{n.removeListener(o)}},[]),e}var Xt=ft["useId".toString()]||(()=>{});function Jt(){return Xt()??""}var Qt=typeof window<"u"?i.useLayoutEffect:i.useEffect,ve=!1,Yt=0,Be=()=>++Yt;function en(e){const t=e||(ve?Be():null),[n,o]=i.useState(t);return Qt(()=>{n===null&&o(Be())},[]),i.useEffect(()=>{ve===!1&&(ve=!0)},[]),n!=null?String(n):void 0}function tn(e){const t=Jt(),n=en(e);return typeof e=="string"?e:typeof t=="string"?t:n}function nn(e,t){const n=performance.now(),o={};function u(){o.id=requestAnimationFrame(d=>{d-n>t?e():u()})}return u(),o}function Le(e){e.id&&cancelAnimationFrame(e.id)}function je(e){return e!=null&&e.current?e.current.scrollHeight:(ce(!0,"Was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\nconst collapseProps = getCollapseProps({refKey: 'innerRef'})"),0)}function rn(e){if(!e||typeof e=="string")return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function on(e,t){if(e!=null)if(typeof e=="function")e(t);else try{e.current=t}catch{throw new Wt(`Cannot assign value "${t}" to ref "${e}"`)}}function ze(...e){return e.every(t=>t==null)?null:t=>{e.forEach(n=>{on(n,t)})}}function an(e){let t=n=>{};t=n=>{if(!(n!=null&&n.current))return;const{paddingTop:o,paddingBottom:u}=window.getComputedStyle(n.current);ce(!(o&&o!=="0px"||u&&u!=="0px"),`Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`)},i.useEffect(()=>{t(e)},[e])}var sn=typeof window>"u"?i.useEffect:i.useLayoutEffect;function ln({duration:e,easing:t="cubic-bezier(0.4, 0, 0.2, 1)",onTransitionStateChange:n=()=>{},isExpanded:o,defaultExpanded:u=!1,hasDisabledAnimation:d,id:_,...h}={}){const p=$e(n),v=tn(_?`${_}`:void 0),[f,M]=qt(o,u),B=i.useRef(f),[b,C]=i.useState(!1),T=Kt(),E=d??T,k=i.useRef(),A=i.useRef(),L=i.useRef(null),[m,j]=i.useState(null);an(L);const D=`${h.collapsedHeight||0}px`;function F(r){if(!L.current)return;const a=L.current;for(const s in r){const y=r[s];y?a.style[s]=y:a.style.removeProperty(s)}}return sn(()=>{if(!L.current||f===B.current)return;B.current=f;function a(w){return E?0:e??rn(w)}const s=w=>`height ${a(w)}ms ${t}`,y=w=>{function H(){f?(F({height:"",overflow:"",transition:"",display:""}),p("expandEnd")):(F({transition:""}),p("collapseEnd")),C(!1)}A.current&&Le(A.current),A.current=nn(H,w)};return C(!0),f?k.current=requestAnimationFrame(()=>{p("expandStart"),F({display:"block",overflow:"hidden",height:D}),k.current=requestAnimationFrame(()=>{p("expanding");const w=je(L);y(a(w)),L.current&&(L.current.style.transition=s(w),L.current.style.height=`${w}px`)})}):k.current=requestAnimationFrame(()=>{p("collapseStart");const w=je(L);y(a(w)),F({transition:s(w),height:`${w}px`}),k.current=requestAnimationFrame(()=>{p("collapsing"),F({height:D,overflow:"hidden"})})}),()=>{k.current&&cancelAnimationFrame(k.current),A.current&&Le(A.current)}},[f,D,E,e,t,p]),{isExpanded:f,setExpanded:M,getToggleProps(r){const{disabled:a,onClick:s,refKey:y,...w}={refKey:"ref",onClick(){},disabled:!1,...r},H=m?m.tagName==="BUTTON":void 0,Se=r==null?void 0:r[y||"ref"],K={id:`react-collapsed-toggle-${v}`,"aria-controls":`react-collapsed-panel-${v}`,"aria-expanded":f,onClick(te){a||(s==null||s(te),M(ue=>!ue))},[y||"ref"]:ze(Se,j)},O={type:"button",disabled:a?!0:void 0},G={"aria-disabled":a?!0:void 0,role:"button",tabIndex:a?-1:0};return H===!1?{...K,...G,...w}:H===!0?{...K,...O,...w}:{...K,...O,...G,...w}},getCollapseProps(r){const{style:a,refKey:s}={refKey:"ref",style:{},...r},y=r==null?void 0:r[s||"ref"];return{id:`react-collapsed-panel-${v}`,"aria-hidden":!f,"aria-labelledby":`react-collapsed-toggle-${v}`,role:"region",...r,[s||"ref"]:ze(L,y),style:{boxSizing:"border-box",...!b&&!f?{display:D==="0px"?"none":"block",height:D,overflow:"hidden"}:{},...a}}}}}function cn(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m18.25 7.6-5.5-3.18a1.49 1.49 0 0 0-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3zM7 14.96v-4.62l4 2.32v4.61l-4-2.31zm5-4.03L8 8.61l4-2.31 4 2.31-4 2.32zm1 6.34v-4.61l4-2.32v4.62l-4 2.31zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3V2zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3V2zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3v2zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3v2z"},child:[]}]})(e)}function un(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"},child:[]}]})(e)}function dn(e){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M24 24H0V0h24v24z",opacity:".87"},child:[]},{tag:"path",attr:{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},child:[]}]})(e)}function Re(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},child:[]},{tag:"path",attr:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"},child:[]}]})(e)}let Y=1,Ge=new Array,q=new Array;ye.get("https://sheets.googleapis.com/v4/spreadsheets/1uVPhX1BG4BVODoJ8GnZFB_j1AieNfuZvqLwoo5ZS_9M/values/Workbook?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(e=>{let t=e.data.values,n=new Array;for(const o of t)Y>2&&o[1]!=""&&(Ge.push(n),n=new Array),n.push(o),++Y});function fn(){const[e,t]=i.useState(),[n,o]=i.useState(),[u,d]=i.useState(),_=z(b=>b.isNotVisibleToggle),h=z(b=>b.isVisibleToggle);z(b=>b.isVisible);let{stepCount:p,howToData:v,setHowToWorkbook:f,setClickedPath:M,path:B}=i.useContext(V);return i.useEffect(()=>{let b=new Array;ye.get("https://sheets.googleapis.com/v4/spreadsheets/1grTucZ2sqLgZ4AtJq8EkyO__kLg-pazRVl3sbLNMaIY/values/Blad1?key=AIzaSyCqcO7MQv4dsj76ps3nNJnMwTT8Cvqv-eM").then(C=>{let T=C.data.values,E=new Array,k=[];for(const A of T)Y>0&&A[0]!=""?(E=new Array,E.push(A),b.push(E)):E.push(A),++Y;f(b);for(const A of b)A[0]!=""&&(q=new Array,q.push(A[0][0],A[0][1]),k.push(q));d(k)})},[]),i.useEffect(()=>{let b=new Array;for(const C of Ge[p+1])C[12]!=""&&C[12]!=null&&(q=new Array,q.push(C[12]),b.push(q)),++Y;t(b)},[p]),i.useEffect(()=>{let b=[];if(u!=null){for(const C of e)for(const T of u)T.includes(`${C}`)&&b.push(T);o(b),e.length===0?_():h()}},[u,e]),l(N,{children:l("div",{children:l("ul",{children:n?n.map((b,C)=>x("li",{children:[l(pt,{to:`/HowTo/${b[0]}`,target:"_blank",rel:"noopener noreferrer",children:x("button",{type:"button",className:"stepNaviBtn",children:[b[0],". ",b[1]]})})," "]},C)):null})})})}function pn(){const e=i.useRef(),[t,n]=i.useState(!1),{getCollapseProps:o,getToggleProps:u}=ln({isExpanded:t}),d=z(_=>_.isVisible);return x(N,{children:[l("button",{type:"button",...u({onClick:()=>n(_=>!_)}),className:t?"expanded":"btn",style:{position:"absolute",top:"20px",left:"20px",visibility:`${d}`},children:t?x(N,{children:[l(Re,{})," How To ",l(un,{})]}):x(N,{children:[l(Re,{})," How To ",l(dn,{})]})}),l("div",{ref:e,className:"howToBoxContent",...o(),children:l(fn,{})})]})}function mn(){let{visibleObj:e,selectedParts:t,stepSVG:n}=i.useContext(V);const o=z(f=>f.cameraPositionTag),u=z(f=>f.freeControls),d=z(f=>f.wiringStep),_=De(),[h]=i.useState(()=>new fe),[p]=i.useState(()=>new fe),v=new fe(4,1,8);return mt((f,M)=>{o==="initial"&&d===!1&&(h.lerp(v,.1),p.lerp([0,0,0],.1),f.camera.position.copy(h),f.camera.lookAt(p),u(),_.refresh(e).fit(),$()),o==="initial"&&d===!0&&(console.log(n),n.reset(),u(),$())}),l(N,{})}function yn(){const e=Z("./OLSK_Large_Laser_V2_All_In.glb"),t=Z("./OLSK_Large_Laser_V2_All_Out.glb"),n=i.useMemo(()=>e.scene.clone(),[e]),o=i.useMemo(()=>e.scene.clone(),[e]),u=i.useMemo(()=>t.scene.clone(),[t]);i.useState(!1),i.useRef(),i.useRef(),Z.clear("./OLSK_Large_Laser_V2_All_In.glb"),Z.clear("./OLSK_Large_Laser_V2_All_Out.glb");const d=z(_=>_.resetCamera);return l(N,{children:x(i.Fragment,{children:[l("aside",{className:"stepNavi",children:l(jt,{})}),x("section",{id:"currentStepArea",children:[x("nav",{className:"currentStepBar",children:[l("h2",{id:"stepTitleArea",children:l(Bt,{})}),x("div",{id:"stepControl",children:[l(xt,{}),"                        "]})]}),x("div",{className:"infoColumn",children:[l("div",{className:"stepPartsArea",children:l(Nt,{})}),l("div",{className:"stepRemarksArea",children:l(Gt,{})})]}),x("article",{className:"viewArea",id:"viewArea",children:[l(i.Suspense,{fallback:l("div",{children:"I am Loading"}),children:x(ht,{linear:!0,flat:!0,frameloop:"demand",camera:{fov:45,near:1,far:10,position:[4,1,8]},children:[l(hn,{}),l("color",{args:["#f5f5f5"],attach:"background"}),x(gt,{clip:!0,observe:!0,damping:2,margin:.85,children:[l(Tt,{modelIn:e,modelOut:t,modelInCopy:n,modelInCopy2:o,modelOutCopy:u}),l(zt,{})]}),l(mn,{})]})}),l(St,{}),x("button",{className:"btn",style:{position:"absolute",bottom:"20px",left:"20px"},onClick:d,children:[l(cn,{})," Reset Camera"]}),l(wt,{}),l(pn,{})]})]})]})})}Z.preload("./OLSK_Large_Laser_V2_All_In.glb");Z.preload("./OLSK_Large_Laser_V2_All_Out.glb");function hn(){const e=i.useRef();return l(N,{children:l(vt,{ref:e,makeDefault:!0,enableDamping:!1,enableRotate:!0,minAzimuthAngle:1/0,maxAzimuthAngle:1/0,minPolarAngle:0,maxPolarAngle:1/0})})}export{yn as default};
//# sourceMappingURL=App-f3938a6a.js.map
