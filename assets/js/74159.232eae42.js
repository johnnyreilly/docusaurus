"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["74159"],{49390:function(t,e,a){a.d(e,{diagram:function(){return m}});var r=a(34422),i=a(84890),n=a(28923),d=a(11141),o=a(44387),l=a(62145),s=0,p=(0,n.eW)(function(t,e,a,r,o){let l,p,g,c,h,f;let x=(0,n.eW)(function(t){switch(t){case o.db.relationType.AGGREGATION:return"aggregation";case o.db.relationType.EXTENSION:return"extension";case o.db.relationType.COMPOSITION:return"composition";case o.db.relationType.DEPENDENCY:return"dependency";case o.db.relationType.LOLLIPOP:return"lollipop"}},"getRelationType");e.points=e.points.filter(t=>!Number.isNaN(t.y));let u=e.points,y=(0,d.jvg)().x(function(t){return t.x}).y(function(t){return t.y}).curve(d.$0Z),w=t.append("path").attr("d",y(u)).attr("id","edge"+s).attr("class","relation"),b="";r.arrowMarkerAbsolute&&(b=(b=(b=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),1==a.relation.lineType&&w.attr("class","relation dashed-line"),10==a.relation.lineType&&w.attr("class","relation dotted-line"),"none"!==a.relation.type1&&w.attr("marker-start","url("+b+"#"+x(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&w.attr("marker-end","url("+b+"#"+x(a.relation.type2)+"End)");let m=e.points.length,k=i.w8.calcLabelPosition(e.points);if(l=k.x,p=k.y,m%2!=0&&m>1){let t=i.w8.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=i.w8.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[m-1]);n.cM.debug("cardinality_1_point "+JSON.stringify(t)),n.cM.debug("cardinality_2_point "+JSON.stringify(r)),g=t.x,c=t.y,h=r.x,f=r.y}if(void 0!==a.title){let e=t.append("g").attr("class","classLabel"),i=e.append("text").attr("class","label").attr("x",l).attr("y",p).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=i;let n=i.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",n.x-r.padding/2).attr("y",n.y-r.padding/2).attr("width",n.width+r.padding).attr("height",n.height+r.padding)}n.cM.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1&&t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",g).attr("y",c).attr("fill","black").attr("font-size","6").text(a.relationTitle1),void 0!==a.relationTitle2&&"none"!==a.relationTitle2&&t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",h).attr("y",f).attr("fill","black").attr("font-size","6").text(a.relationTitle2),s++},"drawEdge"),g=(0,n.eW)(function(t,e,a,r){let i,d,o,l;n.cM.debug("Rendering class ",e,a);let s=e.id,p={id:s,label:e.id,width:0,height:0},g=t.append("g").attr("id",r.db.lookUpDomId(s)).attr("class","classGroup");i=e.link?g.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):g.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let h=!0;e.annotations.forEach(function(t){let e=i.append("tspan").text("\xab"+t+"\xbb");h||e.attr("dy",a.textHeight),h=!1});let x=c(e),u=i.append("tspan").text(x).attr("class","title");h||u.attr("dy",a.textHeight);let y=i.node().getBBox().height;if(e.members.length>0){d=g.append("line").attr("x1",0).attr("y1",a.padding+y+a.dividerMargin/2).attr("y2",a.padding+y+a.dividerMargin/2);let t=g.append("text").attr("x",a.padding).attr("y",y+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");h=!0,e.members.forEach(function(e){f(t,e,h,a),h=!1}),o=t.node().getBBox()}if(e.methods.length>0){l=g.append("line").attr("x1",0).attr("y1",a.padding+y+a.dividerMargin+o.height).attr("y2",a.padding+y+a.dividerMargin+o.height);let t=g.append("text").attr("x",a.padding).attr("y",y+2*a.dividerMargin+o.height+a.textHeight).attr("fill","white").attr("class","classText");h=!0,e.methods.forEach(function(e){f(t,e,h,a),h=!1})}let w=g.node().getBBox();var b=" ";e.cssClasses.length>0&&(b+=e.cssClasses.join(" "));let m=g.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*a.padding).attr("height",w.height+a.padding+.5*a.dividerMargin).attr("class",b).node().getBBox().width;return i.node().childNodes.forEach(function(t){t.setAttribute("x",(m-t.getBBox().width)/2)}),e.tooltip&&i.insert("title").text(e.tooltip),d&&d.attr("x2",m),l&&l.attr("x2",m),p.width=m,p.height=w.height+a.padding+.5*a.dividerMargin,p},"drawClass"),c=(0,n.eW)(function(t){let e=t.id;return t.type&&(e+="<"+(0,n.UO)(t.type)+">"),e},"getClassTitleString"),h=(0,n.eW)(function(t,e,a,r){n.cM.debug("Rendering note ",e,a);let i=e.id,d={id:i,text:e.text,width:0,height:0},o=t.append("g").attr("id",i).attr("class","classGroup"),l=o.append("text").attr("y",a.textHeight+a.padding).attr("x",0),s=JSON.parse(`"${e.text}"`).split("\n");s.forEach(function(t){n.cM.debug(`Adding line: ${t}`),l.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)});let p=o.node().getBBox(),g=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin).node().getBBox().width;return l.node().childNodes.forEach(function(t){t.setAttribute("x",(g-t.getBBox().width)/2)}),d.width=g,d.height=p.height+s.length*a.textHeight+a.padding+.5*a.dividerMargin,d},"drawNote"),f=(0,n.eW)(function(t,e,a,r){let{displayText:i,cssStyle:n}=e.getDisplayDetails(),d=t.append("tspan").attr("x",r.padding).text(i);""!==n&&d.attr("style",e.cssStyle),a||d.attr("dy",r.textHeight)},"addTspan"),x={drawClass:g,drawEdge:p,drawNote:h},u={},y=(0,n.eW)(function(t){let e=Object.entries(u).find(e=>e[1].label===t);if(e)return e[0]},"getGraphId"),w=(0,n.eW)(function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),b=(0,n.eW)(function(t,e,a,r){let i;let s=(0,n.nV)().class;u={},n.cM.info("Rendering diagram "+t);let p=(0,n.nV)().securityLevel;"sandbox"===p&&(i=(0,d.Ys)("#i"+e));let g="sandbox"===p?(0,d.Ys)(i.nodes()[0].contentDocument.body):(0,d.Ys)("body"),c=g.select(`[id='${e}']`);w(c);let h=new l.k({multigraph:!0});h.setGraph({isMultiGraph:!0}),h.setDefaultEdgeLabel(function(){return{}});let f=r.db.getClasses();for(let t of[...f.keys()]){let e=f.get(t),a=x.drawClass(c,e,s,r);u[a.id]=a,h.setNode(a.id,a),n.cM.info("Org height: "+a.height)}r.db.getRelations().forEach(function(t){n.cM.info("tjoho"+y(t.id1)+y(t.id2)+JSON.stringify(t)),h.setEdge(y(t.id1),y(t.id2),{relation:t},t.title||"DEFAULT")}),r.db.getNotes().forEach(function(t){n.cM.debug(`Adding note: ${JSON.stringify(t)}`);let e=x.drawNote(c,t,s,r);u[e.id]=e,h.setNode(e.id,e),t.class&&f.has(t.class)&&h.setEdge(t.id,y(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,o.bK)(h),h.nodes().forEach(function(t){void 0!==t&&void 0!==h.node(t)&&(n.cM.debug("Node "+t+": "+JSON.stringify(h.node(t))),g.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(h.node(t).x-h.node(t).width/2)+","+(h.node(t).y-h.node(t).height/2)+" )"))}),h.edges().forEach(function(t){void 0!==t&&void 0!==h.edge(t)&&(n.cM.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(h.edge(t))),x.drawEdge(c,h.edge(t),h.edge(t).relation,s,r))});let b=c.node().getBBox(),m=b.width+40,k=b.height+40;(0,n.v2)(c,k,m,s.useMaxWidth);let M=`${b.x-20} ${b.y-20} ${m} ${k}`;n.cM.debug(`viewBox ${M}`),c.attr("viewBox",M)},"draw"),m={parser:r.P0,db:r.pl,renderer:{draw:b},styles:r.Ee,init:(0,n.eW)(t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.pl.clear()},"init")}}}]);