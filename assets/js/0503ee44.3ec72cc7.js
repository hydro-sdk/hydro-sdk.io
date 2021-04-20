(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return r})),t.d(o,"metadata",(function(){return c})),t.d(o,"toc",(function(){return a})),t.d(o,"default",(function(){return l}));var n=t(3),i=t(7),d=(t(0),t(110)),r={sidebar_position:6},c={unversionedId:"sdk-tools",id:"sdk-tools",isDocsHomePage:!1,title:"SDK-Tools",description:"SDK-Tools are the command line programs produced as part of each Hydro-SDK release.",source:"@site/docs/sdk-tools.md",sourceDirName:".",slug:"/sdk-tools",permalink:"/hydro-sdk.io/docs/sdk-tools",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sdk-tools.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/hydro-sdk.io/docs/limitations/typescript"},next:{title:"Common Flutter Runtime",permalink:"/hydro-sdk.io/docs/cfr"}},a=[{value:"Storage",id:"storage",children:[]},{value:"<code>hydroc</code>",id:"hydroc",children:[]},{value:"<code>build-project</code>",id:"build-project",children:[]},{value:"<code>hc2dart</code>",id:"hc2dart",children:[]},{value:"<code>luac52</code>",id:"luac52",children:[]},{value:"<code>run-project</code>",id:"run-project",children:[]},{value:"<code>swid</code>",id:"swid",children:[]},{value:"<code>ts2hc</code>",id:"ts2hc",children:[]}],s={toc:a};function l(e){var o=e.components,t=Object(i.a)(e,["components"]);return Object(d.b)("wrapper",Object(n.a)({},s,t,{components:o,mdxType:"MDXLayout"}),Object(d.b)("p",null,"SDK-Tools are the command line programs produced as part of each Hydro-SDK release."),Object(d.b)("h1",{id:""}),Object(d.b)("h2",{id:"storage"},"Storage"),Object(d.b)("p",null,"By default, Hydro-SDK sets up a ",Object(d.b)("inlineCode",{parentName:"p"},".hydroc")," directory in the current working directory that the ",Object(d.b)("inlineCode",{parentName:"p"},"hydroc")," command is run in. The directory is organized by Hydro-SDK version. ",Object(d.b)("inlineCode",{parentName:"p"},".hydroc/<version>/sdk-tools")," are where the SDK-Tools of a given version are stored. Other cache and temp directories will be created under ",Object(d.b)("inlineCode",{parentName:"p"},".hydroc/<version>")," as needed. ",Object(d.b)("inlineCode",{parentName:"p"},".hydroc")," should be ignored by version control."),Object(d.b)("h2",{id:"hydroc"},Object(d.b)("inlineCode",{parentName:"h2"},"hydroc")),Object(d.b)("p",null,"The ",Object(d.b)("inlineCode",{parentName:"p"},"hydroc")," command is the interface to Hydro-SDK. ",Object(d.b)("inlineCode",{parentName:"p"},"hydroc")," will download and manage SDK-Tools for the currently active Hydro-SDK version and provide a convenient interface to the SDK-Tools. Run ",Object(d.b)("inlineCode",{parentName:"p"},"hydroc --help")," for a full description of available commands."),Object(d.b)("h2",{id:"build-project"},Object(d.b)("inlineCode",{parentName:"h2"},"build-project")),Object(d.b)("p",null,"Parses Hydro project descriptions, using ",Object(d.b)("inlineCode",{parentName:"p"},"ts2hc")," to compile Typescript chunk entrypoints. Produces ",Object(d.b)("inlineCode",{parentName:"p"},".ota")," package files. This command should not be called directly by users."),Object(d.b)("h2",{id:"hc2dart"},Object(d.b)("inlineCode",{parentName:"h2"},"hc2dart")),Object(d.b)("p",null,"Takes as input ",Object(d.b)("inlineCode",{parentName:"p"},".hc")," bytecode chunk files. Produces as output an ",Object(d.b)("inlineCode",{parentName:"p"},"hc.g.dart")," file which exports a ",Object(d.b)("inlineCode",{parentName:"p"},"thunks")," variable that can be loaded into a CFR instance in a host app to provide native functions. This command should not be called directly by users."),Object(d.b)("h2",{id:"luac52"},Object(d.b)("inlineCode",{parentName:"h2"},"luac52")),Object(d.b)("p",null,"A distribution of the PUC-RIO Lua 5.2 compiler. This command should not be called directly by users."),Object(d.b)("h2",{id:"run-project"},Object(d.b)("inlineCode",{parentName:"h2"},"run-project")),Object(d.b)("p",null,"Parses Hydro project descriptions, using ",Object(d.b)("inlineCode",{parentName:"p"},"ts2hc")," to compile Typescript chunk entrypoints. Produces ",Object(d.b)("inlineCode",{parentName:"p"},".ota")," package files and serves them for listening host apps. This command should not be called directly by users."),Object(d.b)("h2",{id:"swid"},Object(d.b)("inlineCode",{parentName:"h2"},"swid")),Object(d.b)("p",null,"Parses a SWID configuration file and produces as output Typescript language projections and Dart bindings. This command should not be called directly by users."),Object(d.b)("h2",{id:"ts2hc"},Object(d.b)("inlineCode",{parentName:"h2"},"ts2hc")),Object(d.b)("p",null,"Takes as input a Typescript entrypoint. Produces as output a Lua bundle, debugging symbols, incremental compilation data and a ",Object(d.b)("inlineCode",{parentName:"p"},".hc")," bytecode chunk. This command should not be called directly by users."))}l.isMDXComponent=!0}}]);