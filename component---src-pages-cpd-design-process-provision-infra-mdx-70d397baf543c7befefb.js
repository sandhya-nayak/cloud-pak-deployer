(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,r=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===r,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},f=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,r=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,i=n.subDirectory,l=o+"/edit/"+n.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),O=a("dI71"),j=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===n,l=new RegExp(n+"/?(#.*)?$"),c=r.replace(l,a);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(m.b)(s.Link,{className:j.link,to:""+c},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},o))))))},t}(n.a.Component),v=a("MjG9"),y=a("CzIb"),w=a("Asxa"),k=a("OIbQ"),P=a.n(k),N=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:P.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,p=b.tabs,f=b.title,O=b.theme,j=b.description,w=b.keywords,k=b.date,P=Object(y.a)().interiorTheme,I=Object(s.useStaticQuery)("2456312558").site.pathPrefix,C=I?r.pathname.replace(I,""):r.pathname,E=p?C.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",B=O||P;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:B,pageTitle:f,pageDescription:j,pageKeywords:w,titleType:u},Object(m.b)(h,{title:n?Object(m.b)(n,null):f,label:"label",tabs:p,theme:B}),p&&Object(m.b)(T,{title:f,slug:C,tabs:p,currentTab:E}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(x,{relativePagePath:d}),Object(m.b)(N,{date:k})),Object(m.b)(g.a,{pageContext:t,location:r,slug:C,tabs:p,currentTab:E}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VIPE:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),["components"]),l={},c={_frontmatter:l},b=i.a;function d(e){var t=e.components,a=Object(n.a)(e,s);return Object(o.b)(b,Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Provision infrastructure"),Object(o.b)("p",null,"This stage will provision the infrastructure that was defined in the input configuration files. Currently, this has only been implemented for IBM Cloud."),Object(o.b)("h2",null,"IBM Cloud"),Object(o.b)("p",null,"The IBM Cloud infrastructure provisioning runs Terraform to initially provision the infrastructure components such as VPC, VSIs, security groups, ROKS cluster and others. Also, if changes have been made in the configuration, Terraform will attempt to make the changes to reach the desired end-state."),Object(o.b)("p",null,"Based on the chosen action (apply or destroy), Terraform is instructed to provision or change the infrastructure components or to destroy everything."),Object(o.b)("p",null,"The Terraform state file (tfstate) is maintained in the vault and is critical to enable dynamic updates to the infrastructure. If the state file is lost or corrupted, updates to the infrastructure will have to be done manually. The Ansible tasks have been built in a way that the Terraform state file is always persisted into the vault, even if the apply or destroy process has failed."),Object(o.b)("p",null,"There are 3 main steps:"),Object(o.b)("h4",null,"Terraform init"),Object(o.b)("p",null,"This step initializes the Terraform provider (ibm) with the correct version. If needed, the Terraform modules for the provider are downloaded or updated."),Object(o.b)("h4",null,"Terraform plan"),Object(o.b)("p",null,"Applying changes to the infrastructure using Terraform based on the input configuration files may cause critical components to be replaced (destroyed and recreated). The plan step checks ",Object(o.b)("strong",{parentName:"p"},"what")," will be changed. If infrastructure components are destroyed and the ",Object(o.b)("inlineCode",{parentName:"p"},"--confirm-destroy")," parameter has not be specified for the deployer, the process is aborted."),Object(o.b)("h4",null,"Terraform apply or Terraform destroy"),Object(o.b)("p",null,"This is the execution of the plan and will provision new infrastructure (apply) or destroy everything (destroy)."),Object(o.b)("p",null,"While the Terraform apply or destroy process is running, a ",Object(o.b)("inlineCode",{parentName:"p"},".tfstate")," file is updated on disk. When the command completes, the deployer writes this as a secret to the vault so it can be used next time to update (or destroy) the infrastructure components."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-process-provision-infra-mdx-70d397baf543c7befefb.js.map