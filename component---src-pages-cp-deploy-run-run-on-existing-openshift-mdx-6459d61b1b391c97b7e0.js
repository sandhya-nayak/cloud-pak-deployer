(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("NmYn"),l=n.n(i),r=n("Wbzz"),c=n("Xrax"),s=n("k4MR"),u=n("TSYQ"),b=n.n(u),p=n("QH2O"),d=n.n(p),h=n("qKvR"),m=function(e){var t,n=e.title,a=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(h.b)("div",{className:b()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===a,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:d.a.text},n)))))},f=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,i=o.baseUrl,l=o.subDirectory,c=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(h.b)("div",{className:"bx--row "+f.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},O=n("FCXl"),y=n("dI71"),j=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),i=n===o,c=new RegExp(o+"/?(#.*)?$"),s=a.replace(c,n);return Object(h.b)("li",{key:e,className:b()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(h.b)(r.Link,{className:j.link,to:""+s},e))}));return Object(h.b)("div",{className:j.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:j.list},i))))))},t}(o.a.Component),N=n("MjG9"),k=n("CzIb"),x=n("Asxa"),w=n("OIbQ"),C=n.n(w),T=function(e){var t=e.date,n=new Date(t);return t?Object(h.b)(x.c,{className:C.a.row},Object(h.b)(x.a,null,Object(h.b)("div",{className:C.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,i=t.frontmatter,u=void 0===i?{}:i,b=t.relativePagePath,p=t.titleType,d=u.tabs,f=u.title,y=u.theme,j=u.description,x=u.keywords,w=u.date,C=Object(k.a)().interiorTheme,I=Object(r.useStaticQuery)("2456312558").site.pathPrefix,P=I?a.pathname.replace(I,""):a.pathname,_=d?P.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"",S=y||C;return Object(h.b)(s.a,{tabs:d,homepage:!1,theme:S,pageTitle:f,pageDescription:j,pageKeywords:x,titleType:p},Object(h.b)(m,{title:o?Object(h.b)(o,null):f,label:"label",tabs:d,theme:S}),d&&Object(h.b)(v,{title:f,slug:P,tabs:d,currentTab:_}),Object(h.b)(N.a,{padded:!0},n,Object(h.b)(g,{relativePagePath:b}),Object(h.b)(T,{date:w})),Object(h.b)(O.a,{pageContext:t,location:a,slug:P,tabs:d,currentTab:_}),Object(h.b)(c.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Vs2r:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));var a,o=n("wx14"),i=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("013z"),c=(n("qKvR"),["components"]),s={},u=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),b={_frontmatter:s},p=r.a;function d(e){var t=e.components,n=Object(i.a)(e,c);return Object(l.b)(p,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Running the Cloud Pak Deployer on an existing OpenShift cluster"),Object(l.b)("p",null,"When running the Cloud Pak Deployer on an existing OpenShift cluster, the following is assumed:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The OpenShift cluster is up and running with sufficient compute nodes"),Object(l.b)("li",{parentName:"ul"},"The appropriate storage class(es) have been pre-created"),Object(l.b)("li",{parentName:"ul"},"You have cluster administrator permissions to OpenShift")),Object(l.b)("p",null,"With the ",Object(l.b)("strong",{parentName:"p"},"Existing OpenShift")," type of deployment you can install and configure the Cloud Pak(s) both on connected and disconnected (air-gapped) cluster. When using the deployer for a disconnected cluster, make sure you specify ",Object(l.b)("inlineCode",{parentName:"p"},"--air-gapped")," for the ",Object(l.b)("inlineCode",{parentName:"p"},"cp-deploy.sh")," command."),Object(l.b)("h2",null,"Acquire an IBM Cloud Pak Entitlement Key (connected cluster only)"),Object(l.b)("p",null,"If you want to pull the Cloud Pak images from the entitled registry (i.e. an online install), or if you want to mirror the images to your private registry, you need to download the entitlement key. You can skip this step if you’re installing from a private registry and all Cloud Pak images have already been downloaded to the private registry."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Navigate to ",Object(l.b)("a",{parentName:"li",href:"https://myibm.ibm.com/products-services/containerlibrary"},"https://myibm.ibm.com/products-services/containerlibrary")," and login with your IBMId credentials"),Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("strong",{parentName:"li"},"Get Entitlement Key")," and create a new key (or copy your existing key)"),Object(l.b)("li",{parentName:"ul"},"Copy the key value")),Object(l.b)(u,{kind:"warning",mdxType:"InlineNotification"},"As stated for the API key, you can choose to download the entitlement key to a file. However, when we reference the entitlement key, we mean the 80+ character string that is displayed, not the file."),Object(l.b)("h2",null,"Prepare for running"),Object(l.b)("h3",null,"Set environment variables"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"export CP_ENTITLEMENT_KEY=your_cp_entitlement_key\n\nexport STATUS_DIR=/data/status/sample\nexport CONFIG_DIR=/data/config/sample\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CP_ENTITLEMENT_KEY"),": This is the entitlement key you acquired as per the instructions above, this is a 80+ character string. ",Object(l.b)("strong",{parentName:"li"},"You don’t need to set this environment variable when you do an air-gapped installation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"STATUS_DIR"),": The directory where the Cloud Pak Deployer keeps all status information and logs files. ",Object(l.b)("strong",{parentName:"li"},"Please note")," that if you have chosen to use a File Vault, the properties file is keps under the ",Object(l.b)("inlineCode",{parentName:"li"},"vault")," directory within the status directory"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"CONFIG_DIR"),": Directory that holds the configuration, it must have ",Object(l.b)("inlineCode",{parentName:"li"},"config"),", ",Object(l.b)("inlineCode",{parentName:"li"},"defaults")," and ",Object(l.b)("inlineCode",{parentName:"li"},"inventory")," subdirectories")),Object(l.b)(u,{mdxType:"InlineNotification"},"Cloud Pak Deployer uses the status directory to logs its activities and also to keep track of its running state. For a given environment you're provisioning or destroying, you should always specify the same status directory to avoid contention between different deploy runs. You can run the Cloud Pak Deployer in parallel for different environments (different configuration directories)."),Object(l.b)("h3",null,"Store the OpenShift login command or configuration"),Object(l.b)("p",null,"Because you will be deploying the Cloud Pak on an existing OpenShift cluster, the deployer needs to be able to access OpenShift. There are 2 methods for passing the login credentials of your OpenShift cluster(s) as vault secrets:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"oc login command"),Object(l.b)("li",{parentName:"ul"},"kubeconfig file")),Object(l.b)("p",null,"Regardless of which authentication option you choose, the deployer will retrieve this secret from the vault when it requires access to OpenShift. If the secret cannot be found or if it is invalid or the OpenShift login token has expired, the deployer will fail and you will need to update the secret of your choice."),Object(l.b)("h4",null,"Option 1: store the ",Object(l.b)("inlineCode",{parentName:"h4"},"oc login")," command"),Object(l.b)("p",null,"This is the most straightforward option. For most OpenShift installations, you can retrieve the ",Object(l.b)("inlineCode",{parentName:"p"},"oc login")," command from the console. Go to the console and click on your user at the top right of the page to get the login command. Typically this command looks something like this: ",Object(l.b)("inlineCode",{parentName:"p"},"oc login api.pluto-01.coc.ibm.com:6443 -u kubeadmin -p BmxQ5-KjBFx-FgztG-gpTF3")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Optional"),": If your cluster’s API service certificate is not signed by a known certificate authority, you may have to add the ",Object(l.b)("inlineCode",{parentName:"p"},"--insecure-skip-tls-verify")," flag to the ",Object(l.b)("inlineCode",{parentName:"p"},"oc login")," command. If you have the OpenShift client ",Object(l.b)("inlineCode",{parentName:"p"},"oc")," on the server running the deployer, you can test that you can login to the cluster."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"oc login api.pluto-01.coc.ibm.com:6443 -u kubeadmin -p BmxQ5-KjBFx-FgztG-gpTF3 --insecure-skip-tls-verify\n")),Object(l.b)("p",null,"Output:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-output"},"Login successful.\n\nYou have access to 65 projects, the list has been suppressed. You can list all projects with 'oc projects'\n\nUsing project \"default\".\n")),Object(l.b)("p",null,"Store the login command in secret ",Object(l.b)("inlineCode",{parentName:"p"},"<cluster name>-oc-login")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'./cp-deploy.sh vault set \\\n  -vs pluto-01-oc-login \\\n  -vsv "oc login api.pluto-01.coc.ibm.com:6443 -u kubeadmin -p BmxQ5-KjBFx-FgztG-gpTF3 --insecure-skip-tls-verify"\n')),Object(l.b)(u,{kind:"info",mdxType:"InlineNotification"},"Make sure you put the oc login command between quotes (single or double) to make sure the full command is stored."),Object(l.b)("h4",null,"Option 2: store the kubeconfig file"),Object(l.b)("p",null,"If you already have a “kubeconfig” file that holds the credentials of your cluster, you can use this, otherwise:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Log in to OpenShift as a cluster administrator using your method of choice"),Object(l.b)("li",{parentName:"ul"},"Locate the Kubernetes config file. If you have logged in with the OpenShift client, this is typically ",Object(l.b)("inlineCode",{parentName:"li"},"~/.kube/config"))),Object(l.b)("p",null,"If you did not just login to the cluster, the current context of the kubeconfig file may not point to your cluster. The deployer will check that the server the current context points to matches the ",Object(l.b)("inlineCode",{parentName:"p"},"cluster_name")," and ",Object(l.b)("inlineCode",{parentName:"p"},"domain_name")," of the configured ",Object(l.b)("inlineCode",{parentName:"p"},"openshift")," object. To check the current context, run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"oc config current-context\n")),Object(l.b)("p",null,"Now, store the Kubernetes config file as a vault secret."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh vault set \\\n    --vault-secret kubeconfig \\\n    --vault-secret-file ~/.kube/config\n")),Object(l.b)("p",null,"If the deployer manages multiple OpenShift clusters, you can specify a kubeconfig file for each of the clusters by prefixing the ",Object(l.b)("inlineCode",{parentName:"p"},"kubeconfig")," with the name of the ",Object(l.b)("inlineCode",{parentName:"p"},"openshift")," object, for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh vault set \\\n    --vault-secret pluto-01-kubeconfig \\\n    --vault-secret-file /data/pluto-01/kubeconfig\n\n./cp-deploy.sh vault set \\\n    --vault-secret venus-02-kubeconfig \\\n    --vault-secret-file /data/venus-02/kubeconfig\n")),Object(l.b)("p",null,"When connecting to the OpenShift cluster, a cluster-specific kubeconfig vault secret will take precedence over the generic ",Object(l.b)("inlineCode",{parentName:"p"},"kubeconfig")," secret."),Object(l.b)("h2",null,"Optional: validate the configuration"),Object(l.b)("p",null,"If you only want to validate the configuration, you can run the dpeloyer with the ",Object(l.b)("inlineCode",{parentName:"p"},"--check-only")," argument. This will run the first stage to validate variables and vault secrets and then execute the generators."),Object(l.b)("p",null,"If the cluster is air-gapped, make sure you add the ",Object(l.b)("inlineCode",{parentName:"p"},"--air-gapped")," flag"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh env apply -e env_id=pluto-01 --check-only [--accept-all-licenses]\n")),Object(l.b)("h2",null,"Run the Cloud Pak Deployer"),Object(l.b)("p",null,"To run the container using a local configuration input directory and a data directory where temporary and state is kept, use the example below. If you don’t specify the status directory, the deployer will automatically create a temporary directory. Please note that the status directory will also hold secrets if you have configured a flat file vault. If you lose the directory, you will not be able to make changes to the configuration and adjust the deployment. It is best to specify a permanent directory that you can reuse later. If you specify an existing directory the current user ",Object(l.b)("strong",{parentName:"p"},"must")," be the owner of the directory. Failing to do so may cause the container to fail with insufficient permissions."),Object(l.b)("p",null,"If the cluster is air-gapped, make sure you add the ",Object(l.b)("inlineCode",{parentName:"p"},"--air-gapped")," flag"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh env apply [--accept-all-licenses]\n")),Object(l.b)("p",null,"If you have chosen to use dynamic properties (extra variables), you can specify these on the command line, see below. Extra variables are covered in ",Object(l.b)("a",{parentName:"p",href:"/cloud-pak-deployer/advanced/advanced-configuration"},"advanced configuration"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh env apply -e env_id=pluto-01 [--accept-all-licenses]\n")),Object(l.b)("p",null,"In the above command, the ",Object(l.b)("inlineCode",{parentName:"p"},"env_id")," extra variable defines the names of the objects that are being created; these are referenced in the ",Object(l.b)("inlineCode",{parentName:"p"},".yaml")," configuration files as ",Object(l.b)("inlineCode",{parentName:"p"},"{{ env_id }}"),". For more information about the extra (dynamic) variables, see ",Object(l.b)("a",{parentName:"p",href:"/cloud-pak-deployer/advanced/advanced-configuration"},"advanced configuration"),"."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"--accept-all-licenses")," flag is optional and confirms that you accept all licenses of the installed cartridges and instances. Licenses must be either accepted in the configuration files or at the command line."),Object(l.b)("p",null,"When running the command, the container will start as a daemon and the command will tail-follow the logs. You can press Ctrl-C at any time to interrupt the logging but the container will continue to run in the background."),Object(l.b)("p",null,"You can return to view the logs as follows:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh env logs\n")),Object(l.b)("p",null,"Preparing OpenShift and installing the Cloud Pak will take a long time, typically between 1-5 hours, dependent on which Cloud Pak cartridges you configured. For estimated duration of the steps, refer to ",Object(l.b)("a",{parentName:"p",href:"/cloud-pak-deployer/cpd-design/timings"},"Timings"),"."),Object(l.b)("p",null,"If you need to interrupt the automation, use CTRL-C to stop the logging output and then use:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh env kill\n")),Object(l.b)("h2",null,"On failure"),Object(l.b)("p",null,"If the Cloud Pak Deployer fails, for example because certain infrastructure components are temporarily not available, fix the cause if needed and then just re-run it with the same ",Object(l.b)("inlineCode",{parentName:"p"},"CONFIG_DIR")," and ",Object(l.b)("inlineCode",{parentName:"p"},"STATUS_DIR")," as well extra variables. The provisioning process has been designed to be idempotent and it will not redo actions that have already completed successfully."),Object(l.b)("h2",null,"Finishing up"),Object(l.b)("p",null,"Once the process has finished, it will output the URLs by which you can access the deployed Cloud Pak. You can also find this information under the ",Object(l.b)("inlineCode",{parentName:"p"},"cloud-paks")," directory in the status directory you specified."),Object(l.b)("p",null,"To retrieve the Cloud Pak URL(s):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"cat $STATUS_DIR/cloud-paks/*\n")),Object(l.b)("p",null,"This will show the Cloud Pak URLs:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-output"},"Cloud Pak for Data URL for cluster pluto-01 and project zen-40:\nhttps://cpd-zen-40.apps.pluto-01.example.com\n")),Object(l.b)("p",null,"List the secrets in the vault:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh vault list\n")),Object(l.b)("p",null,"This will show something similar to the following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-output"},"Secret list for group sample:\n- ibm_cp_entitlement_key\n- pluto-01-oc-login\n- cp4d_admin_zen_sample_sample\n")),Object(l.b)("p",null,"You can then retrieve the Cloud Pak for Data admin password like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"./cp-deploy.sh vault get --vault-secret cp4d_admin_zen_sample_sample\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-output"},"PLAY [Secrets] *****************************************************************\nincluded: /cloud-pak-deployer/automation-roles/99-generic/vault/vault-get-secret/tasks/get-secret-file.yml for localhost\ncp4d_admin_zen_sample_sample: gelGKrcgaLatBsnAdMEbmLwGr\n")),Object(l.b)("h2",null,"Post-install configuration"),Object(l.b)("p",null,"You can find examples of a couple of typical changes you may want to do here: ",Object(l.b)("a",{parentName:"p",href:"/cloud-pak-deployer/cp-deploy/post-run"},"Post-run changes"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cp-deploy-run-run-on-existing-openshift-mdx-6459d61b1b391c97b7e0.js.map