(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("NmYn"),o=n.n(i),c=n("Wbzz"),l=n("Xrax"),s=n("k4MR"),d=n("TSYQ"),p=n.n(d),b=n("QH2O"),u=n.n(b),m=n("qKvR"),j=function(e){var t,n=e.title,a=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===a,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},n)))))},h=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,i=r.baseUrl,o=r.subDirectory,l=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},g=n("FCXl"),f=n("dI71"),y=n("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),i=n===r,l=new RegExp(r+"/?(#.*)?$"),s=a.replace(l,n);return Object(m.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(m.b)(c.Link,{className:y.link,to:""+s},e))}));return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:y.list},i))))))},t}(r.a.Component),_=n("MjG9"),x=n("CzIb"),C=n("Asxa"),v=n("OIbQ"),P=n.n(v),k=function(e){var t=e.date,n=new Date(t);return t?Object(m.b)(C.c,{className:P.a.row},Object(m.b)(C.a,null,Object(m.b)("div",{className:P.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,i=t.frontmatter,d=void 0===i?{}:i,p=t.relativePagePath,b=t.titleType,u=d.tabs,h=d.title,f=d.theme,y=d.description,C=d.keywords,v=d.date,P=Object(x.a)().interiorTheme,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,w=T?a.pathname.replace(T,""):a.pathname,$=u?w.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",D=f||P;return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:D,pageTitle:h,pageDescription:y,pageKeywords:C,titleType:b},Object(m.b)(j,{title:r?Object(m.b)(r,null):h,label:"label",tabs:u,theme:D}),u&&Object(m.b)(N,{title:h,slug:w,tabs:u,currentTab:$}),Object(m.b)(_.a,{padded:!0},n,Object(m.b)(O,{relativePagePath:p}),Object(m.b)(k,{date:v})),Object(m.b)(g.a,{pageContext:t,location:a,slug:w,tabs:u,currentTab:$}),Object(m.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Uh66:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("013z"),c=(n("qKvR"),["components"]),l={},s={_frontmatter:l},d=o.a;function p(e){var t=e.components,n=Object(r.a)(e,c);return Object(i.b)(d,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Cloud Pak Asset configuration"),Object(i.b)("p",null,"The Cloud Pak Deployer can implement demo assets and accelerators as part of the deployment process to standardize standing up fully-featured demo environments, or to test patches or new versions of the Cloud Pak using pre-defined assets."),Object(i.b)("h2",null,Object(i.b)("inlineCode",{parentName:"h2"},"cp4d_asset")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"cp4d_asset")," entry defines one or more assets to be deployed for a specific Cloud Pak for Data instance (OpenShift project). In the configuration, a directory relative to the configuration directory (",Object(i.b)("inlineCode",{parentName:"p"},"CONFIG_DIR"),") is specified. For example, if the directory where the configuration is stored is ",Object(i.b)("inlineCode",{parentName:"p"},"/cpd-config/sample")," and you specify ",Object(i.b)("inlineCode",{parentName:"p"},"assets")," as the asset directory, all assets under ",Object(i.b)("inlineCode",{parentName:"p"},"/cpd-config/sample/assets")," are processed."),Object(i.b)("p",null,"You can create one or more subdirectories under the specified location, each holding an asset to be deployed. The deployer finds all ",Object(i.b)("inlineCode",{parentName:"p"},"cp4d-asset.sh")," scripts and ",Object(i.b)("inlineCode",{parentName:"p"},"cp4d-asset.yaml")," Ansible task files and runs them."),Object(i.b)("p",null,"The following runtime attributes will be set prior to running the shell script or the Ansible task:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the Cloud Pak for Data instances has the Common Core Services (CCS) custom resource installed, ",Object(i.b)("inlineCode",{parentName:"li"},"cpdctl")," is configured for the current Cloud Pak for Data instance and the current context is set to the ",Object(i.b)("inlineCode",{parentName:"li"},"admin")," user of the instance. This means you can run all ",Object(i.b)("inlineCode",{parentName:"li"},"cpdctl")," commands without first having to login to Cloud Pak for Data."),Object(i.b)("li",{parentName:"ul"},"The current working directory is set to the directory holding the ",Object(i.b)("inlineCode",{parentName:"li"},"cp4d-asset.sh")," script."),Object(i.b)("li",{parentName:"ul"},"When running the ",Object(i.b)("inlineCode",{parentName:"li"},"cp4d-asset.sh")," shell script, the following environment variables are available:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CP4D_URL"),": Cloud Pak for Data URL"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CP4D_ADMIN_PASSWORD"),": Cloud Pak for Data admin password"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CP4D_OCP_PROJECT"),": OpenShift project that holds the Cloud Pak for Data instance"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"KUBECONFIG"),": OpenShift configuration file that allows you to run ",Object(i.b)("inlineCode",{parentName:"li"},"oc")," commands for the cluster")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cp4d_asset:\n- name: sample-asset\n  project: zen-40\n  asset_location: cp4d-assets\n")),Object(i.b)("h4",null,"Property explanation"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Property"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Mandatory"),Object(i.b)("th",{parentName:"tr",align:null},"Allowed values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"Name of the asset to be deployed. You can specify as many assets as wanted"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"project"),Object(i.b)("td",{parentName:"tr",align:null},"Name of OpenShift project of the matching ",Object(i.b)("inlineCode",{parentName:"td"},"cp4d")," entry. The cp4d project must exist."),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"asset_location"),Object(i.b)("td",{parentName:"tr",align:null},"Directory holding the asset(s). This is a directory relative to the config directory (CONFIG_DIR) that was passed to the deployer"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("h4",null,"Asset example"),Object(i.b)("p",null,"Below is an example asset that implements the ",Object(i.b)("strong",{parentName:"p"},"Customer Attrition")," industry accelerator, which can be found here: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/IBM/Industry-Accelerators/blob/master/CPD%204.0.1.0/utilities-customer-attrition-prediction-industry-accelerator.tar.gz"},"https://github.com/IBM/Industry-Accelerators/blob/master/CPD%204.0.1.0/utilities-customer-attrition-prediction-industry-accelerator.tar.gz")),Object(i.b)("p",null,"To implement:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Download the zip file to the ",Object(i.b)("inlineCode",{parentName:"li"},"cp4d-assets")," directory in the specified configuration directory"),Object(i.b)("li",{parentName:"ul"},"Create the ",Object(i.b)("inlineCode",{parentName:"li"},"cp4d-asset.sh")," shell script (example below)"),Object(i.b)("li",{parentName:"ul"},"Add a ",Object(i.b)("inlineCode",{parentName:"li"},"cp4d_asset")," entry to the Cloud Pak for Data config file in the ",Object(i.b)("inlineCode",{parentName:"li"},"config")," directory (or in any other file with extention ",Object(i.b)("inlineCode",{parentName:"li"},".yaml"),")")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cp4d-asset.sh")," shell script:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'#!/bin/bash\nSCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )\n\n# Function to retrieve project by name\nfunction retrieve_project {\n    project_name=$1\n\n    # First check if project already exists\n    project_id=$(cpdctl project list \\\n        --output json | \\\n        jq -r --arg project_name $project_name \\\n        \'if .total_results==0 then "" else .resources[] | select(.entity.name == $project_name) | .metadata.guid end\')\n\n    echo $project_id\n}\n\n# Function to create a project\nfunction create_project {\n    project_name=$1\n\n    retrieve_project $project_name\n\n    if [ "$project_id" != "" ];then\n        echo "Project $project_name already exists"\n        return\n    else\n        echo "Creating project $project_name"\n        storage_id=$(uuidgen)\n        storage=$(jq --arg storage_id $storage_id \'. | .guid=$storage_id | .type="assetfiles"\' <<< \'{}\')\n        cpdctl project create --name $project_name --storage "$storage"\n    fi\n\n    # Find project_id to return\n    project_id=$(cpdctl project list \\\n        --output json | \\\n        jq -r --arg project_name $project_name \\\n        \'if .total_results==0 then "" else .resources[] | select(.entity.name == $project_name) | .metadata.guid end\')\n}\n\n# Function to import a project\nfunction import_project {\n    project_id=$1\n    zip_file=$2\n    import_id=$(cpdctl asset import start \\\n        --project-id $project_id --import-file $zip_file \\\n        --output json --jmes-query "metadata.id" --raw-output)\n    \n    cpdctl asset import get --project-id $project_id --import-id $import_id --output json\n\n}\n\n# Function to run jobs\nfunction run_jobs {\n    project_id=$1\n    for job in $(cpdctl job list --project-id $project_id \\\n        --output json | jq -r \'.results[] | .metadata.asset_id\');do\n        cpdctl job run create --project-id $project_id --job-id $job --job-run "{}"\n    done\n}\n\n#\n# Start of the asset code\n#\n\n# Unpack the utilities-customer-attrition-prediction-industry-accelerator directory\nrm -rf /tmp/utilities-customer-attrition-prediction-industry-accelerator\ntar xzf utilities-customer-attrition-prediction-industry-accelerator.tar.gz -C /tmp\nasset_dir=/tmp/customer-attrition-prediction-industry-accelerator\n\n# Change to the asset directory\npushd ${asset_dir} > /dev/null\n\n# Log on to Cloud Pak for Data with the admin user\ncp4d_token=$(curl -s -k -H \'Content-Type: application/json\' -X POST $CP4D_URL/icp4d-api/v1/authorize -d \'{"username": "admin", "password": "\'$CP4D_ADMIN_PASSWORD\'"}\' | jq -r .token)\n\n# Import categories\ncurl -s -k -H \'accept: application/json\' -H "Authorization: Bearer ${cp4d_token}" -H "content-type: multipart/form-data" -X POST $CP4D_URL/v3/governance_artifact_types/category/import?merge_option=all -F "file=@./utilities-customer-attrition-prediction-glossary-categories.csv;type=text/csv"\n\n# Import glossary terms\ncurl -s -k -H \'accept: application/json\' -H "Authorization: Bearer ${cp4d_token}" -H "content-type: multipart/form-data" -X POST $CP4D_URL/v3/governance_artifact_types/glossary_term/import?merge_option=all -F "file=@./utilities-customer-attrition-prediction-glossary-terms.csv;type=text/csv"\n\n# Check if customer-attrition project already exists. If so, do nothing\nproject_id=$(retrieve_project "customer-attrition")\n\n# If project does not exist, import it and run jobs\nif [ "$project_id" == "" ];then\n    create_project "customer-attrition"\n    import_project $project_id \\\n        /tmp/utilities-customer-attrition-prediction-industry-accelerator/utilities-customer-attrition-prediction-analytics-project.zip\n    run_jobs $project_id\nelse\n    echo "Skipping deployment of CP4D asset, project customer-attrition already exists"\nfi\n\n# Return to original directory\npopd > /dev/null\n\nexit 0\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-objects-cloud-pak-assets-mdx-dc0bad2b2bb4ff009cf8.js.map