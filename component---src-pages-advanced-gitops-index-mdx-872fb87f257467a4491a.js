(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),s=a.n(o),r=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),p=a.n(d),b=a("QH2O"),h=a.n(b),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(u.b)("div",{className:p()(h.a.pageHeader,(t={},t[h.a.withTabs]=o.length,t[h.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,s=i.subDirectory,l=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},w=a("FCXl"),v=a("dI71"),y=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),o=a===i,l=new RegExp(i+"/?(#.*)?$"),c=n.replace(l,a);return Object(u.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(u.b)(r.Link,{className:y.link,to:""+c},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},o))))))},t}(i.a.Component),A=a("MjG9"),x=a("CzIb"),j=a("Asxa"),k=a("OIbQ"),C=a.n(k),N=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(j.c,{className:C.a.row},Object(u.b)(j.a,null,Object(u.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,d=void 0===o?{}:o,p=t.relativePagePath,b=t.titleType,h=d.tabs,g=d.title,v=d.theme,y=d.description,j=d.keywords,k=d.date,C=Object(x.a)().interiorTheme,T=Object(r.useStaticQuery)("2456312558").site.pathPrefix,P=T?n.pathname.replace(T,""):n.pathname,I=h?P.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"",E=v||C;return Object(u.b)(c.a,{tabs:h,homepage:!1,theme:E,pageTitle:g,pageDescription:y,pageKeywords:j,titleType:b},Object(u.b)(m,{title:i?Object(u.b)(i,null):g,label:"label",tabs:h,theme:E}),h&&Object(u.b)(O,{title:g,slug:P,tabs:h,currentTab:I}),Object(u.b)(A.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:p}),Object(u.b)(N,{date:k})),Object(u.b)(w.a,{pageContext:t,location:n,slug:P,tabs:h,currentTab:I}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},n9eX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),["components"]),l={},c={_frontmatter:l},d=s.a;function p(e){var t=e.components,a=Object(i.a)(e,r);return Object(o.b)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The process of supporting multiple products, releases and patch levels within a release has great similarity to the git-flow model, which has been really well-described by Vincent Driessen in his blog post: ",Object(o.b)("a",{parentName:"p",href:"https://nvie.com/posts/a-successful-git-branching-model/"},"https://nvie.com/posts/a-successful-git-branching-model/"),". This model has been and is still very popular with many software-development teams."),Object(o.b)("p",null,"Below is a description of how a git-flow could be implemented with the Cloud Pak Deployer. The following steps are covered:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Setting up the company’s Git and image registry for the Cloud Paks"),Object(o.b)("li",{parentName:"ul"},"The git-flow change process"),Object(o.b)("li",{parentName:"ul"},"Feeding Cloud Pak changes into the process"),Object(o.b)("li",{parentName:"ul"},"Deploying the Cloud Pak changes")),Object(o.b)("h2",null,"Environments, Git and registry"),Object(o.b)("p",null,Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAADLAAAAywAEoZFrbAAAC1ElEQVQoz02Qe0iTURjG3+/79m3f9m1ehm7NMp1C5rwg07IlzEuaihckvEs4MCH/8H5FMYkipsnSdGbOW6iZ1RZe6KIOpkZIhliUlP9UuhCkm90gg05na4IHHs7Led7nx/seAAAxOE5sxWMCi8ICdcMiR5moJUCpAvj6qRg+b7edQuM+5Y9i+xveJOQlyqcUat/zZan57z1h9F0TDK+3AEJ2jmQPkMSibcDY2nluTHYPeSIhDZJGhpbiRsdQm6ks+uaFMDTWffTGoHuBRn8wfWswsCI6rqbXmljV90vmANIOHhFeNEtmVN2ngUYQX2Khk7WrxMbqd8Bth7COPXVViBG9LwIB6Y0EjBfylcetuomkyMVJif2g3QkhpwsBlyeALuMOCVmIXK5PhORKM60uXiCAbbMB7cIBwnGTNjnqvb6d52IfDyAQQEPp8mKkY5meQcKiLU52/TwRrUPwUyojreHhVOq3H2CprmMHuvTavus9zRM6nXOk9S+sqyOpPxIJuQt0A4KkSQI0uKRXatSBHxuCkuFwO1euiKKdJAxFC0WUvzKUg3CgeWjY7+w903BZ51DXZL8hYNrQDobuawS/ehCIlpn/K/NdvYB18QBb4EgrosZr86FwDHHOGBERv7ACyQ+MMIW9umUjtLxcFuw3v8hSdd9K/3A7X/i8oxS2sccv1gNxZcHOYx0rE3yxnPEJSWFQI/4HuUroBTwqeNMqkm5uiGBuiYl+O+107lWJGBlw+50dOqP1i3NEz5oILk4w5OCaEPpfC20s2XGVighU+Idi5oHTYR5+I5qQAPwuDcnJdE2zWEayny2m/MZTdE6XFgw8qdLz4mXcSGWuqLdprrejYSZ3GXuC5pkY9tKkyQYUiNy8geXzWJ+oMio4IpeJlAIdnDPOSdA9JJNMd90zLGa+Rl8JnbPlrG68SCwBT/tqlyuN7h2NZvZk4VXgaacZbnWf7B+3Kg4TN7dljAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Governed Process with Continuous Adoption",title:"Governed Process Continuous Adoption",src:"/cloud-pak-deployer/static/a20f85fc0c17177372026a84de32e90f/3cbba/governed-process-ca.png",srcSet:["/cloud-pak-deployer/static/a20f85fc0c17177372026a84de32e90f/7fc1e/governed-process-ca.png 288w","/cloud-pak-deployer/static/a20f85fc0c17177372026a84de32e90f/a5df1/governed-process-ca.png 576w","/cloud-pak-deployer/static/a20f85fc0c17177372026a84de32e90f/3cbba/governed-process-ca.png 1152w","/cloud-pak-deployer/static/a20f85fc0c17177372026a84de32e90f/0b124/governed-process-ca.png 1728w","/cloud-pak-deployer/static/a20f85fc0c17177372026a84de32e90f/4ea69/governed-process-ca.png 2304w","/cloud-pak-deployer/static/a20f85fc0c17177372026a84de32e90f/6b3ad/governed-process-ca.png 4308w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"."),Object(o.b)("p",null,"There are 4 Cloud Pak environments within the company’s domain: Dev, UAT, Pre-prod and Prod. Each of these environments have a namespace in the company’s registry (or an isolated registry could be created per environment) and the Cloud Pak release installed is represented by manifests in a branch of the Git repository, respectively dev, uat, pp and prod."),Object(o.b)("p",null,"Organizing registries by namespace has the advantage that duplication of images can be avoided. Each of the namespaces can have their own set of images that have been approved for running in the associated environment. The image itself is referenced by digest (i.e., checksum) and organized on disk as such. If one tries to copy an image to a different namespace within the same registry, only a new entry is created, the image itself is not duplicated because it already exists."),Object(o.b)("p",null,"The manifests (CASE files) representing the Cloud Pak components are present in each of the branches of the Git repository, or there is a configuration file that references the location of the case file, including the exact version number."),Object(o.b)("p",null,"In the Cloud Pak Deployer, we have chosen to reference the CASE versions in the configuration, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cp4d:\n- project: zen-40\n  openshift_cluster_name: {{ env_id }}\n  cp4d_version: 4.0\n  openshift_storage_name: ocs-storage\n  use_case_files: True\n  olm_utils: False\n  cartridges:\n  - name: cpfs\n    case_version: 1.6.0\n  - name: cpd_platform\n    subscription_channel: v2.0\n    case_version: 2.0.5\n  - name: ws\n    version: 4.0.2\n    subscription_channel: v2.0\n    case_version: 2.0.2\n    state: installed\n  - name: wml\n    version: 4.0.2\n    subscription_channel: v1.1\n    case_version: 4.0.3\n    size: small\n    state: installed\n")),Object(o.b)("p",null,"In the above example Watson Studio (",Object(o.b)("inlineCode",{parentName:"p"},"ws"),") version ",Object(o.b)("inlineCode",{parentName:"p"},"4.0.2")," will be installed by the operator with version ",Object(o.b)("inlineCode",{parentName:"p"},"2.0.2"),". Cloud Pak for Data and the other Cloud Paks use the ",Object(o.b)("inlineCode",{parentName:"p"},"cloudctl case")," tool to define the package of images and manifests for ",Object(o.b)("inlineCode",{parentName:"p"},"CatalogSource")," and operators. Version ",Object(o.b)("inlineCode",{parentName:"p"},"2.0.2")," defines the Watson Studio operator which will be installed when the subscription is being created."),Object(o.b)("p",null,"If Cloud Pak for Data has been configured with a private registry in the deployer config, the deployer will mirror images from the IBM entitled registry to the private registry. In the above configuration, no private registry has been specified but ",Object(o.b)("inlineCode",{parentName:"p"},"use_case_files")," has been set to ",Object(o.b)("inlineCode",{parentName:"p"},"True"),", which means that the deployer will automatically download and use the CASE files to create the catalog sources."),Object(o.b)("h2",null,"Change process using git-flow"),Object(o.b)("p",null,"With the initial status in place, the continuous adoption process may commence, using the principles of git-flow."),Object(o.b)("p",null,"Git-flow addresses a couple of needs for continuous adoption:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Control and visibility over what software (version) runs in which environment; there is a central truth which describes the state of every environment managed"),Object(o.b)("li",{parentName:"ul"},"New features (in case of the deployer: new operator versions and custom resources) can be tested without affecting the pending releases or production implementation"),Object(o.b)("li",{parentName:"ul"},"While preparing for a new release, hot fixes can still be applied to the production environments")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"93.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAADLAAAAywAEoZFrbAAAFLklEQVQ4y01UC0xTVxj+29vb26dAK6jTgBU2Yd0cggoCBdpSWmToRCsiaINF0IpFHuUxEVjVzamoLJM5nNqJGB2IpTCmiFah2BTJpkOMgtMQNWRxm8lc5rLEnZ1z1cSbfLl/zuM7/+P7f9CWeuBNvPHNwBC/snkY0+YqoyBi3kKg+QxZC8KgXu3zMaZzuFwupJQMCDHgNV7eBeAKCgTkH6PJgE01n/PjUg2S0m1WWFexi93XpmVNwT8Oj0eDSCzlatOzpOxGSumACANeI2eTHlblp0Gv1zwzMDhcRrxACAFyIS57IVwFKy3PAK/R4gA5+IdqiQ2DT5BIs9xMCD0iTbEbkot6YbHpJORXLoXyvXngdGtjNOtscoDnvNLWptDVdaY4gA8lDoQ4G6oneWuz9wZjeokiJhfm224D+m8ChybigLZkQBSDiTRbr4KqwAkv3fBCYCYSB0dlw56OMig/dlS2q6dZDtGIk1w/wCxd90NQ7pLjSSGGUnFG+Y+MusrnP/egbwF5gHgoTLKcpzAxL97cRvg4hHLFdo88regy59ZdBP8+Q9RND6L6xhHMXn8a0nMvkzDZZKdaLnJVFf38yCOjoZtw6KAr99KqQpdCbb0UEm38Qsijman4HNN6YUXi1w4lt665D26OIh4m4OZtOQSZNd1gNLs4Z7oeSiLe14HpwB/wVs73+IEX9LlsJYDJgXiYMExd7J41P7NBzOMzRA5MZ3+qdk3dMT+Ifcrb2eHyy7JtnAUgoAHeAU2GA26gUSIVKix6Fay293OaLk5I2GyFxhfIcLh+muIr0ogUG8WluEQu9I5vd4fk7W6iSRRWx6Ew835LLPh/Jkw7fIdvNPUFZesak0AkYEniax+zKZCTJ2YvyvXDOQxNKfPOCI3L98fiDCPJ7XCnx+1rXkLtc/jIYbZW5hInGHdc48Sb+ph8+9jMj/b8KkyvHhGl1t0OePeAN5pthAz7A5HO5oOEDecgcvk+iktcFE2Bwp3tMvvhC9DlvQtnrowxJ3qHBb9gdzukIfAXjqAnNiNW8ekTQaSuShqd0yyPPHIrnPQDaIovi+PM7bjag4TwZSOJokFWg6Rrsdl1/Rl0eyf53dcm+f2TCCyzCqE8oZ7Zqm94L1VvJ6dJh4iI0IuWpuCyVwzxVRu7Z2IdTo9a2SjGLvqTHLZXLFv8SfF6XuvJNugafMR3DT7mP8IeGpRNYFQ5RGsznQsSan2CSjdi+xk9/5uW00RHNh+TUOgKTC66KJ2rLqEomiEDgW4oK1O8wFnZ4/DCafcY03FtnGntGYYtVhcYFhxhWy954yVKU9DFJNo8suD9viQ2h/rKYeLhHM3W/hnzMnaJuRQlJ9PjlNuoyqo9gavYwxYFPUEcNxY2yPSwxuTktHx3R7JisxM01UOg3z3CXdYyOo3NIemUREsPX2cbopWGbUQ2pAM49mMNQavq2/iSxX/S1uMtiuzavCg8iRgyCJbk9LIyacF2ZtYh6O4cgfujvwsSFi4C0svChIJOHPoQKA01bE0EgYn4oftT/KLuQ+WpRvj4TEOA9Zu6YEWql1HbPUym+WqgUd8YBxKptA0Pi0XbH7JRTCXiSinxyMhgUG8+DzhkUHygB9upfyB3py+o/ugD+Pk2grvjCAscUVVNY7AGwmF1dqfQau54Oyr/tDCt2MOoq30Byi+HEzGdkAxV3psDdvPBG1CEYTlwI+irznE455kA5+CE4Gz/PdFP936DsxFV+F4IPEVIkF7eDom1I6CrvU4bjt6cQ6bz/yCS9TIKysagAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"git-flow",title:"git-flow",src:"/cloud-pak-deployer/static/1e53c397fd058873d2dc990bd0619a32/3cbba/git-flow.png",srcSet:["/cloud-pak-deployer/static/1e53c397fd058873d2dc990bd0619a32/7fc1e/git-flow.png 288w","/cloud-pak-deployer/static/1e53c397fd058873d2dc990bd0619a32/a5df1/git-flow.png 576w","/cloud-pak-deployer/static/1e53c397fd058873d2dc990bd0619a32/3cbba/git-flow.png 1152w","/cloud-pak-deployer/static/1e53c397fd058873d2dc990bd0619a32/0b124/git-flow.png 1728w","/cloud-pak-deployer/static/1e53c397fd058873d2dc990bd0619a32/4ea69/git-flow.png 2304w","/cloud-pak-deployer/static/1e53c397fd058873d2dc990bd0619a32/0a5ac/git-flow.png 2497w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"The Git repository consists of 4 branches: dev, uat, pp and prd. At the start, release 4.0.0 is being implemented and it will go through the stages from dev to prd. When the installation has been tested in development, a pull request (PR) is done to promote to the uat branch. The PR is reviewed, and changes are then merged into the uat branch. After testing in the uat branch, the steps are repeated until the 4.0.0 release is eventually in production."),Object(o.b)("p",null,"With each of the implementation and promotion steps, the registry namespaces and associated with the particular branch are updated with the images described in the manifests kept in the Git repository. Additionally, the changes are installed in the respective environments. The details of these processes will be outlined later."),Object(o.b)("p",null,"New patches are received, committed and installed on the dev branch on a regular basis and when no issues are found, the changes are gathered into a PR for uat. When no issues are found for 2 weeks, another PR is done for the pp branch and eventually for prd. During this promotion flow, new patches are still being received in dev."),Object(o.b)("p",null,"While version 4.0.2 is running in production, a critical defect is found for which a hot fix is developed. The hot fix is first committed to the pp branch and tested and then a PR is made to promote it to the prd branch. In the meantime, the dev and uat branches continue with their own release schedule. The hot fix is included in 4.0.4 which will be promoted as part of the 4.0.5 release."),Object(o.b)("p",null,"The uat, pp and prd branches can be protected by a branch protection rule so that changes from dev can only be promoted (via a pull request) after an approving review or, when the intention is to promote changes in a fully automated manner, after passing status checks and testing. Read Managing a branch protection rule for putting in these controls in GitHub or Protected branches for GitLab."),Object(o.b)("p",null,"With this flow, there is control over patches, promotion approvals and releases installed in each of the environments. Additional branches could be introduced if additional environments are in play or if different releases are being managed using the git-flow."),Object(o.b)("h2",null,"Feeding patches and releases into the flow"),Object(o.b)("p",null,"As discussed above, patches are first “developed” in the dev branch, i.e., changes are fed into the Git repository, images are loaded into the company’s registry (dev namespace) and the installed into the Dev environment."),Object(o.b)("p",null,"The process of receiving and installing the patches is common for all Cloud Paks: the ",Object(o.b)("inlineCode",{parentName:"p"},"cloudctl case")," tool downloads the CASE file associated with the operator version and the same CASE file can be used to upload images into the company’s registry. Then a Catalog Source is created which makes the images available to the operator subscriptions, which in turn manage the various custom resources in the Cloud Pak instance. For example, the ",Object(o.b)("inlineCode",{parentName:"p"},"ws")," operator manages the ",Object(o.b)("inlineCode",{parentName:"p"},"Ws")," custom resource and this CR ensures that OpenShift deployments, secrets, Config Maps, Stateful Sets, and so forth are managed within the Cloud Pak for Data instance project."),Object(o.b)("p",null,"In the git-flow example, Watson Studio release ",Object(o.b)("inlineCode",{parentName:"p"},"4.0.2")," is installed by updating the Catalog Source. Detailed installation steps for Cloud Pak for Data can be found in the IBM documentation."),Object(o.b)("h2",null,"Deploying the Cloud Pak changes"),Object(o.b)("p",null,"Now that the hard work of managing changes to the Git repository branches and image registry namespaces has been done, we can look at the (automatic) deployment of the changes."),Object(o.b)("p",null,"In a continuous adoption workflow, the implementation of new releases and patches is automated by means of a pipeline, which allows for deployment and testing in a predictable and controlled manner. A pipeline executes a series of steps to inspect the change and then run the command to install it in the respective environment. Moreover, after installation tests can be automatically executed. The most-popular tools for pipelines are ArgoCD, GitLab pipelines and Tekton (serverless)."),Object(o.b)("p",null,"To link the execution of a pipeline with the git-flow pull request, one can use ArcoCD or a GitHub/GitLab webhook. As soon as a PR is accepted and changes are applied to the Git branch, the pipeline is triggered and will run the Cloud Pak Deployer to automatically apply the changes according to the latest version."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-advanced-gitops-index-mdx-872fb87f257467a4491a.js.map