(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{351:function(e,t,r){"use strict";r.r(t);var n=r(42),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"jenkins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[e._v("#")]),e._v(" Jenkins")]),e._v(" "),r("p",[e._v("Because the testcafe-reporter-allure package used Allure to visualize the reports, it is also compatible with the "),r("a",{attrs:{href:"https://plugins.jenkins.io/allure-jenkins-plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Allure-Jenkins"),r("OutboundLink")],1),e._v(" allowing for the reports to be added to each pipeline run.")]),e._v(" "),r("p",[e._v("An example "),r("a",{attrs:{href:"https://github.com/isaaceindhoven/testcafe-reporter-allure/blob/master/examples/base-implementation/Jenkinsfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkinsfile"),r("OutboundLink")],1),e._v(" implementing this can be found in the "),r("a",{attrs:{href:"https://github.com/isaaceindhoven/testcafe-reporter-allure/tree/master/examples/base-implementation",target:"_blank",rel:"noopener noreferrer"}},[e._v("examples/base-implementation"),r("OutboundLink")],1),e._v(". These pipeline stages can be added to your own projects Jenkinsfile to implement the plugins features. Within the "),r("code",[e._v("test:e2e")]),e._v(" stage, the environment property "),r("code",[e._v("TESTCAFE_BROWSER")]),e._v(" can be set to define the browser used within the test run.")]),e._v(" "),r("p",[e._v("Do note that these browsers behave differently because they are running within a docker container. For example, Chrome needs the "),r("code",[e._v("--no-sandbox")]),e._v(" tag to function properly; otherwise, the following error will occur: "),r("code",[e._v("Error: Unable to establish one or more of the specified browser connections. This can be caused by network issues or remote device failure.")]),e._v(" This issue is further detailed "),r("a",{attrs:{href:"https://github.com/DevExpress/testcafe/issues/1133#issuecomment-350775990",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("To avoid running the browsers within the docker container, using a service like "),r("a",{attrs:{href:"https://devexpress.github.io/testcafe/documentation/guides/concepts/browsers.html#browsers-in-cloud-testing-services",target:"_blank",rel:"noopener noreferrer"}},[e._v("BrowserStack"),r("OutboundLink")],1),e._v(" is recommended.")]),e._v(" "),r("p",[e._v("Lastly, all browsers have to be run in "),r("code",[e._v(":headless")]),e._v(" mode, as can be seen within the Jenkinsfile example.")])])}),[],!1,null,null,null);t.default=s.exports}}]);