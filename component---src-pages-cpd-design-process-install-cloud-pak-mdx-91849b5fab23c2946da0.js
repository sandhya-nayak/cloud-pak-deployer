(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),b=a.n(d),p=a("QH2O"),h=a.n(p),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:b()(h.a.pageHeader,(t={},t[h.a.withTabs]=i.length,t[h.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),C=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(u.b)("li",{key:e,className:b()((t={},t[C.selectedItem]=i,t),C.listItem)},Object(u.b)(l.Link,{className:C.link,to:""+c},e))}));return Object(u.b)("div",{className:C.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:C.list},i))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb"),k=a("Asxa"),N=a("OIbQ"),x=a.n(N),P=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(k.c,{className:x.a.row},Object(u.b)(k.a,null,Object(u.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,d=void 0===i?{}:i,b=t.relativePagePath,p=t.titleType,h=d.tabs,g=d.title,j=d.theme,C=d.description,k=d.keywords,N=d.date,x=Object(w.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,S=h?I.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"",D=j||x;return Object(u.b)(c.a,{tabs:h,homepage:!1,theme:D,pageTitle:g,pageDescription:C,pageKeywords:k,titleType:p},Object(u.b)(m,{title:r?Object(u.b)(r,null):g,label:"label",tabs:h,theme:D}),h&&Object(u.b)(y,{title:g,slug:I,tabs:h,currentTab:S}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:b}),Object(u.b)(P,{date:N})),Object(u.b)(O.a,{pageContext:t,location:n,slug:I,tabs:h,currentTab:S}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},buTT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),["components"]),s={},c={_frontmatter:s},d=o.a;function b(e){var t=e.components,a=Object(r.a)(e,l);return Object(i.b)(d,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Install the Cloud Pak(s)"),Object(i.b)("p",null,"This stage focuses on preparing the OpenShift cluster for installing the Cloud Pak(s) and then proceeds with the installation of Cloud Paks and the cartridges. The below documentation will start with a list of steps that will be executed for all Cloud Paks, then proceed with Cloud Pak specific activities. The execution of the steps may slightly differ from the sequence in the documentation."),Object(i.b)("p",null,"Sections:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#remove-cloud-pak-for-data"},"Remove obsolete Cloud Pak for Data instances")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#prepare-private-image-registry"},"Prepare private image registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#install-cloud-pak-for-data-and-cartridges"},"Install Cloud Pak for Data and cartridges"))),Object(i.b)("h2",null,"Remove Cloud Pak for Data"),Object(i.b)("p",null,"Before going ahead with the mirroring of container images and installation of Cloud Pak for Data, the previous configuration (if any) is retrieved from the vault to determine if a Cloud Pak for Data instance has been removed. If a previously installed ",Object(i.b)("inlineCode",{parentName:"p"},"cp4d")," object no longer exists in the current configuration, its associated instance is removed from the OpenShift cluster."),Object(i.b)("p",null,"First, the custom resources are removed from the OpenShift project. This happens with a grace period of 5 minutes. After the grace period has expired, OpenShift automatically forcefully deletes the custom resource and its associated definitions. Then, the control plane custom resource ",Object(i.b)("inlineCode",{parentName:"p"},"Ibmcpd")," is removed and finally the namespace (project). For the namespace deletion, a grace period of 10 minutes is applied."),Object(i.b)("h2",null,"Prepare private image registry"),Object(i.b)("p",null,"When installing the Cloud Paks, images must be pulled from an image registry. All Cloud Paks support pulling images directly from the IBM Entitled Registry using the entitlement key, but there may be situations this is not possible, for example in air-gapped environents, or when images must be scanned for vulnerabilities before they are allowed to be used. In those cases, a private registry will have to be set up."),Object(i.b)("p",null,"The Cloud Pak Deployer can mirror images to a private registry from the entitled registry. On IBM Cloud, the deployer is also capable of creating a namespace in the IBM Container Registry and mirror the images to that namespace."),Object(i.b)("p",null,"When a private registry has been specified in the Cloud Pak entry (using the ",Object(i.b)("inlineCode",{parentName:"p"},"image_registry_name")," property), the necessary OpenShift configuration changes will also be made."),Object(i.b)("h3",null,"Create IBM Container Registry namespace (IBM Cloud only)"),Object(i.b)("p",null,"If OpenShift is deployed on IBM Cloud (ROKS), the IBM Container Registry should be used as the private registry from which the images will be pulled. Images in the ICR are organized by namespace and can be accessed using an API key issued for a service account. If an ",Object(i.b)("inlineCode",{parentName:"p"},"image_registry")," object is specified in the configuration, this process will take care of creating the service account, then the API key and it will store the API key in the vault."),Object(i.b)("h3",null,"Connect to the specified private image registry"),Object(i.b)("p",null,"If an image registry has been specified for the Cloud Pak using the ",Object(i.b)("inlineCode",{parentName:"p"},"image_registry_name")," property, the referenced ",Object(i.b)("inlineCode",{parentName:"p"},"image_registry")," entry is looked up in the configuration and the credentials are retrieved from the vault. Then the connection to the registry is tested by logging on."),Object(i.b)("h2",null,"Install Cloud Pak for Data and cartridges"),Object(i.b)("h3",null,"Prepare OpenShift cluster for Cloud Pak for Data installation"),Object(i.b)("p",null,"Cloud Pak for Data requires a number of cluster-wide settings:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an ",Object(i.b)("inlineCode",{parentName:"li"},"ImageContentSourcePolicy")," if images must be pulled from a private registry"),Object(i.b)("li",{parentName:"ul"},"Set the global pull secret with the credentials to pull images from the entitled or private image registry"),Object(i.b)("li",{parentName:"ul"},"Create a ",Object(i.b)("inlineCode",{parentName:"li"},"Tuned")," object to set kernel semaphores and other properties of CoreOS containers being spun up"),Object(i.b)("li",{parentName:"ul"},"Allow unsafe system controls in the Kubelet configuration"),Object(i.b)("li",{parentName:"ul"},"Set PIDs limit and default ulimit for the CRI-O configuration")),Object(i.b)("p",null,"For all OpenShift clusters, except ROKS on IBM Cloud, these settings are applied using OpenShift configuration objects and then picked up by the Machine Config Operator. This operator will then apply the settings to the control plane and compute nodes as appropriate and reload them one by one."),Object(i.b)("p",null,"To avoid having to reload the nodes more than once, the Machine Config Operator is paused before the settings are applied. After all setup, the Machine Config Operator is released and the deployment process will then wait until all nodes are ready with the configuration applied."),Object(i.b)("h4",null,"Prepare OpenShift cluster on IBM Cloud"),Object(i.b)("p",null,"As mentioned before, ROKS on IBM Cloud does not include the Machine Config Operator and would normally require the compute nodes to be reloaded (classic ROKS) or replaced (ROKS on VPC) to make the changes effective. While implementing this process, we have experienced intermittent reliability issues where replacement of nodes never finished or the cluster ended up in a unusable state. To avoid this, the process is applying the settings in a different manner."),Object(i.b)("p",null,"On every node, a cron job is created which starts every 5 minutes. It runs a script that checks if any of the cluster-wide settings must be (re-)applied, then updates the local system and restarts the ",Object(i.b)("inlineCode",{parentName:"p"},"crio")," and ",Object(i.b)("inlineCode",{parentName:"p"},"kubelet")," daemons. If no settings are to be adjusted, the daemons will not be restarted and therefore the cron job has minimal or no effect on the running applications."),Object(i.b)("p",null,"Compute node changes that are made by the cron job:\n",Object(i.b)("strong",{parentName:"p"},"ImageContentSourcePolicy"),": File ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/containers/registries.conf")," is updated to include registry mirrors for the private registry.\n",Object(i.b)("strong",{parentName:"p"},"Kubelet"),": File ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/kubernetes/kubelet.conf")," is appended with the ",Object(i.b)("inlineCode",{parentName:"p"},"allowedUnsafeSysctls")," entries.\n",Object(i.b)("strong",{parentName:"p"},"CRI-O"),": ",Object(i.b)("inlineCode",{parentName:"p"},"pids_limit")," and ",Object(i.b)("inlineCode",{parentName:"p"},"default_ulimit")," changes are made to the ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/crio/crio.conf")," file.\n",Object(i.b)("strong",{parentName:"p"},"Pull secret"),": The registry and credentials are appended to the ",Object(i.b)("inlineCode",{parentName:"p"},"/.docker/config.json")," configuration."),Object(i.b)("h3",null,"Mirror images to the private registry"),Object(i.b)("p",null,"If a private image registry is specified, and if the IBM Cloud Pak entitlement key is available in the vault (",Object(i.b)("inlineCode",{parentName:"p"},"cp_entitlement_key")," secret), the Cloud Pak case files for the Foundational Services, the Cloud Pak control plane and cartridges are downloaded to a subdirectory of the status directory that was specified. Then all images defined for the cartridges are mirrored from the entitled registry to the private image registry. Dependent on network speed and how many cartridges have been configured, the mirroring can take a very long time (12+ hours). All images which have already been mirrored to the private registry are skipped by the mirroring process."),Object(i.b)("p",null,"Even if all images have been mirrored, the act of checking existence and digest can still take a bit of time (10-15 minutes). To avoid this, you can remove the ",Object(i.b)("inlineCode",{parentName:"p"},"cp_entitlement_key")," secret from the vault and unset the ",Object(i.b)("inlineCode",{parentName:"p"},"CP_ENTITLEMENT_KEY")," environment variable before running the Cloud Pak Deployer."),Object(i.b)("h3",null,"Create catalog sources"),Object(i.b)("p",null,"The images of the operators which control the Cloud Pak are defined in OpenShift ",Object(i.b)("inlineCode",{parentName:"p"},"CatalogSource")," objects which reside in the ",Object(i.b)("inlineCode",{parentName:"p"},"openshift-marketplace")," project. Operator subscriptions subsequently reference the catalog source and define the update channel. When images are pulled from the entitled registry, most subscriptions reference the same ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-operator-catalog")," catalog source (and also a Db2U catalog source). If images are pulled from a private registry, the control plane and also each cartridge reference their own catalog source in the ",Object(i.b)("inlineCode",{parentName:"p"},"openshift-marketplace")," project."),Object(i.b)("p",null,"This step creates the necessary catalog sources, dependent on whether the entitled registry or a private registry is used. For the entitled registry, it creates the catalog source directly using a YAML template; when using a private registry, the ",Object(i.b)("inlineCode",{parentName:"p"},"cloudctl case")," command is used for the control plane and every cartridge to install the catalog sources and their dependencies."),Object(i.b)("h3",null,"Get OpenShift storage classes"),Object(i.b)("p",null,"Most custom resources defined by the cartridge operators require some back-end storage. To be able to reference the correct OpenShift storage classes, they are retrieved based on the ",Object(i.b)("inlineCode",{parentName:"p"},"openshift_storage_name")," property of the Cloud Pak object."),Object(i.b)("h3",null,"Prepare the Cloud Pak for Data operator"),Object(i.b)("p",null,"When using express install, the Cloud Pak for Data operator also installs the Cloud Pak Foundational Services. Consecutively, this part of the deployer:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creates the ",Object(i.b)("inlineCode",{parentName:"li"},"ibm-common-services")," project if it doesn’t exist already"),Object(i.b)("li",{parentName:"ul"},"Creates an OperatorGroup"),Object(i.b)("li",{parentName:"ul"},"Creates the platform operator subscription"),Object(i.b)("li",{parentName:"ul"},"Waits until the ClusterServerVersion objects for the platform operator and Operand Deployment Lifecycle Manager have been created")),Object(i.b)("h3",null,"Install the Cloud Pak for Data control plane"),Object(i.b)("p",null,"When the Cloud Pak for Data operator has been installed, the process continues by creating an OperandRequest object for the platform operator which manages the project in the which Cloud Pak for Data instance is installed. Then it creates an Ibmcpd custom resource in the project which installs the controle plane with nginx the metastore, etc."),Object(i.b)("p",null,"The Cloud Pak for Data control plane is a pre-requisite for all cartridges so at this stage, the deployer waits until the Ibmcpd status reached the ",Object(i.b)("inlineCode",{parentName:"p"},"Completed")," state."),Object(i.b)("p",null,"Once the control plane has been installed successfully, the deployer generates a new strong 25-character password for the Cloud Pak for Data ",Object(i.b)("inlineCode",{parentName:"p"},"admin")," user and stores this into the vault. Additionally, the ",Object(i.b)("inlineCode",{parentName:"p"},"admin-user-details")," secret in the OpenShift project is updated with the new password."),Object(i.b)("h3",null,"Install the license service"),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"cpfs")," cartridge specifies ",Object(i.b)("inlineCode",{parentName:"p"},"license_service")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"state")," attribute is ",Object(i.b)("inlineCode",{parentName:"p"},"enabled"),", the OperandRequest for the license service is created in OpenShift project ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-common-services"),". This automatically takes care of installing the operator and an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"IBMLicensing")," and set the number of threads per core (default 1). The value of ",Object(i.b)("inlineCode",{parentName:"p"},"threads_per_core")," is applied to the ",Object(i.b)("inlineCode",{parentName:"p"},"IBMLicensing")," instance once it has been created by the operator."),Object(i.b)("h3",null,"Install the specified Cloud Pak for Data cartridges"),Object(i.b)("p",null,"Now that the control plane has been installed in the specified OpenShift project, cartridges can be installed. Every cartridge is controlled by its own operator subscription in the ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-common-services")," project and a custom resource. The deployer iterates twice over the specified cartridges, first to create the operator subscriptions, then to create the custom resources."),Object(i.b)("h4",null,"Create cartridge operator subscriptions"),Object(i.b)("p",null,"This steps creates ",Object(i.b)("inlineCode",{parentName:"p"},"subscription")," objects for each cartridge in the ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-common-services")," project, using a YAML template that is included in the deployer code and the ",Object(i.b)("inlineCode",{parentName:"p"},"subscription_channel")," specified in the cartridge definition. Keeping the subscription channel separate delivers flexibility when new subscription channels become available over time."),Object(i.b)("p",null,"Once the subscription has been created, the deployer waits for the associate CSV(s) to be created and reach the ",Object(i.b)("inlineCode",{parentName:"p"},"Installed")," state."),Object(i.b)("h4",null,"Delete obsolete cartridges"),Object(i.b)("p",null,"If this is not the first installation, earlier configured cartridges may have been removed. This steps iterates over all supported cartridges and checks if the cartridge has been installed and wheter it exists in the configuration of the current ",Object(i.b)("inlineCode",{parentName:"p"},"cp4d")," object. If the cartridge is no longer defined, its custom resource is removed; the operator will then take care of removing all OpenShift configuration."),Object(i.b)("h4",null,"Install the cartridges"),Object(i.b)("p",null,"This steps creates the Custom Resources for each cartridge. This is the actual installation of the cartridge. Cartridges can be installed in parallel to a certain extent and the operator will wait for the dependencies to be installed first before starting the processes. For example, if Watson Studio and Watson Machine Learning are installed, both have a dependency on the Common Core Services (CCS) and will wait for the CCS object to reach the Completed state before proceeding with the install. Once that is the case, both WS and WML will run the installation process in parallel."),Object(i.b)("h3",null,"Wait until all cartridges are ready"),Object(i.b)("p",null,"Installation of the cartridges can take a very long time; up to 5 hours for Watson Knowledge Catalog. While cartridges are being installed, the deployer checks the states of all cartridges on a regular basis and reports these in a log file. The deployer will retry until all specified cartridges have reached the ",Object(i.b)("inlineCode",{parentName:"p"},"Completed")," state."),Object(i.b)("h3",null,"Configure LDAP authentication for Cloud Pak for Data"),Object(i.b)("p",null,"If LDAP has been configured for the Cloud Pak for Data element, it will be configured after all cartridges have finished installing."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-process-install-cloud-pak-mdx-91849b5fab23c2946da0.js.map