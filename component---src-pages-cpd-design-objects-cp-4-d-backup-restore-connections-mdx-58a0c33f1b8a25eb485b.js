(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),c=a.n(i),l=a("Wbzz"),r=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),p=a.n(u),m=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},f=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,c=o.subDirectory,r=i+"/edit/"+o.branch+c+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:r},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),g=a("I8xM"),_=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===o,r=new RegExp(o+"/?(#.*)?$"),b=n.replace(r,a);return Object(m.b)("li",{key:e,className:d()((t={},t[g.selectedItem]=i,t),g.listItem)},Object(m.b)(l.Link,{className:g.link,to:""+b},e))}));return Object(m.b)("div",{className:g.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:g.list},i))))))},t}(o.a.Component),T=a("MjG9"),k=a("CzIb"),w=a("Asxa"),N=a("OIbQ"),v=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:v.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,p=s.tabs,f=s.title,h=s.theme,g=s.description,w=s.keywords,N=s.date,v=Object(k.a)().interiorTheme,y=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=y?n.pathname.replace(y,""):n.pathname,I=p?C.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",z=h||v;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:z,pageTitle:f,pageDescription:g,pageKeywords:w,titleType:u},Object(m.b)(x,{title:o?Object(m.b)(o,null):f,label:"label",tabs:p,theme:z}),p&&Object(m.b)(_,{title:f,slug:C,tabs:p,currentTab:I}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d}),Object(m.b)(P,{date:N})),Object(m.b)(O.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:I}),Object(m.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dU30:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),["components"]),r={},b={_frontmatter:r},s=c.a;function d(e){var t=e.components,a=Object(o.a)(e,l);return Object(i.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"cp4d_connection")," the Cloud Pak Deployer can be used to create Global Platform connections. The ",Object(i.b)("inlineCode",{parentName:"p"},"cp4d_backup_restore_connections")," can be used to backup all current configured Global Platform connections, which are either created by the Cloud Pak Deployer or added manually. "),Object(i.b)("p",null,"The backup is stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"status"),"/cp4d/exports folder as a json file. "),Object(i.b)("p",null,"A backup file can be used to restore global platform connections. A flag can be used to indicate whether if a Global Platform connection with the same name already exists, the restore is skipped."),Object(i.b)("p",null,"Using the Cloud Pak Deployer cp4d_backup_restore_connections capability implements the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Connect to the IBM Cloud Pak for Data instance specified using ",Object(i.b)("inlineCode",{parentName:"li"},"cp4d_instance")," and ",Object(i.b)("inlineCode",{parentName:"li"},"openshift_cluster_name")),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"connections_backup_file")," is specified export all Global Platform connections to the specified file in the ",Object(i.b)("inlineCode",{parentName:"li"},"status"),"/cp4d/export/connections folder"),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"connections_restore_file")," is specified, load the file and restore the Global Platform connections"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"connections_restore_overwrite")," (true/false) indicates whether if a Global Platform Connection with the same already exists, it will be replaced.")),Object(i.b)("p",null,"File: config/cp4d_backup_restore_connections.yaml"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"---\ncp4d_backup_restore_connections:\n- cp4d_instance: zen-40\n  openshift_cluster_name: {{ env_id }}\n  connections_backup_file: {{ env_id }}_zen-40_connections.json\n  connections_restore_file: {{ env_id }}_zen-40_connection.json\n  connections_restore_overwrite: false\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-objects-cp-4-d-backup-restore-connections-mdx-58a0c33f1b8a25eb485b.js.map