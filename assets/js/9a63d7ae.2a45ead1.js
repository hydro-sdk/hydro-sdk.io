(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(113)),o={sidebar_position:1},s={unversionedId:"design-documents/swid",id:"design-documents/swid",isDocsHomePage:!1,title:"Structured Wrapper and Interface Generator for Dart (SWID)",description:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid",source:"@site/docs/design-documents/swid.md",sourceDirName:"design-documents",slug:"/design-documents/swid",permalink:"/docs/design-documents/swid",editUrl:"https://github.com/hydro-sdk/hydro-sdk.io/edit/main/docs/design-documents/swid.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Codepush and the Hydro-SDK Registry",permalink:"/docs/codepush"},next:{title:"Common Flutter Runtime (CFR)",permalink:"/docs/design-documents/cfr"}},d=[{value:"Objective",id:"objective",children:[]},{value:"Background",id:"background",children:[]},{value:"Binding System Overview",id:"binding-system-overview",children:[{value:"Boxing",id:"boxing",children:[]},{value:"Virtual Machine Managed Class",id:"virtual-machine-managed-class",children:[]},{value:"Runtime Managed Class",id:"runtime-managed-class",children:[]}]},{value:"Intermediate Representation (IR)",id:"intermediate-representation-ir",children:[]},{value:"Frontends",id:"frontends",children:[]},{value:"Backends",id:"backends",children:[]}],c={toc:d};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid"},"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid")),Object(i.b)("h2",{id:"objective"},"Objective"),Object(i.b)("p",null,"Provide a tool to automatically produce code to bind a given Dart package to CFR and provide an interface that can be consumed from supported programming languages."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,"In the past, bindings for classes in ",Object(i.b)("inlineCode",{parentName:"p"},"package:flutter")," and ",Object(i.b)("inlineCode",{parentName:"p"},"dart:*")," have been written by hand. These hand written bindings usually expose the smallest surface area possible to satisfy the intended use case. i.e. being able to call ",Object(i.b)("inlineCode",{parentName:"p"},"new AppBar")," from Typescript rather than being able to also extend and override ",Object(i.b)("inlineCode",{parentName:"p"},"AppBar"),", or to access properties and methods on a given ",Object(i.b)("inlineCode",{parentName:"p"},"AppBar"),". Changes in the bound API need to be hand updated as the original package changes."),Object(i.b)("p",null,"Taking a given piece of code in a given source language, binding it to (making it callable from) and projecting it (making APIs that capture the intent of the original language in the target language) to one or more target languages is a well explored space. SWID takes great inspiration from projects like the ",Object(i.b)("a",{parentName:"p",href:"http://www.swig.org/"},"Simplified Wrapper and Interface Generator (SWIG) project")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/microsoft/xlang"},"Microsoft's Xlang"),","),Object(i.b)("p",null,'SWIG relies heavily on "SWIG interface files" to drive code generation. Xlang similarly relies on "Windows Metadata" files. The intent in both cases is to describe the API that is to be bound and projected. SWID aims to remove this boilerplace as much as possible and drive its code generation from Dart source code.'),Object(i.b)("h2",{id:"binding-system-overview"},"Binding System Overview"),Object(i.b)("p",null,"In addition to providing far superior developer ergonomics over hand writing bindings for Dart packages, SWID also presents an opportunity to formalize and standardize binding schemes and uses cases."),Object(i.b)("h3",{id:"boxing"},"Boxing"),Object(i.b)("p",null,'Instances of classes passing call boundaries from Dart code and into CFR code are said to be "boxed". That is, they are wrapped in an instance of ',Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/cfr/builtins/boxing/boxes.dart"},Object(i.b)("inlineCode",{parentName:"a"},"Box<T>")),". ",Object(i.b)("inlineCode",{parentName:"p"},"Box<T>")," combines the original object with a Lua table. The CFR has special knowledge of ",Object(i.b)("inlineCode",{parentName:"p"},"Box<T>"),"s. Table set and get operations are directed to the table field of the ",Object(i.b)("inlineCode",{parentName:"p"},"Box<T>"),"."),Object(i.b)("p",null,'Instances of classes passing call boundaries from CFR code and into Dart code are said to be "unboxed". That is, the containing ',Object(i.b)("inlineCode",{parentName:"p"},"Box<T>")," is stripped away and the enclosed ",Object(i.b)("inlineCode",{parentName:"p"},"T")," is returned."),Object(i.b)("h3",{id:"virtual-machine-managed-class"},"Virtual Machine Managed Class"),Object(i.b)("p",null,'A "virtual machine managed class" is a term used to describe an instance of a class that was allocated in Dart code, not in CFR. For each class in a Dart package being bound, SWID emits a "virtual machine managed class declaration". That is, a class that extends ',Object(i.b)("inlineCode",{parentName:"p"},"Box<T>")," where ",Object(i.b)("inlineCode",{parentName:"p"},"T")," is the class being bound and that provides redirections and appropriate bindings from its Lua table to the class instance that it manages. Instances of this class will allow CFR code to access the underlying instance in terms of the associated Lua table."),Object(i.b)("h3",{id:"runtime-managed-class"},"Runtime Managed Class"),Object(i.b)("p",null,'A "runtime managed class" is a term used to describe an instance of a class that was allocated in CFR, not in Dart code. For each class that is being bound, SWID emits a "runtime managed class declaration". That is, a class that extends ',Object(i.b)("inlineCode",{parentName:"p"},"T")," and implements ",Object(i.b)("inlineCode",{parentName:"p"},"Box<T>")," where ",Object(i.b)("inlineCode",{parentName:"p"},"T")," is the class being bound and that provides redirections and appropriate bindings from its Lua table to the class instance that it manages."),Object(i.b)("p",null,'Each "runtime managed class declaration" provides overrides for every method, getter and setter of ',Object(i.b)("inlineCode",{parentName:"p"},"T"),' that redirect to its Lua table. This allows Dart code to opaquely access methods of the "runtime managed class" which are actually implemented in CFR.'),Object(i.b)("p",null,'Unlike a "virtual machine managed class", "runtime managed classes" Lua table redirections are given in terms ',Object(i.b)("inlineCode",{parentName:"p"},"_dart_method")," where ",Object(i.b)("inlineCode",{parentName:"p"},"method")," is the name of the method from ",Object(i.b)("inlineCode",{parentName:"p"},"T")," being bound. In order to make the given projection natural for consumers, language projections are expected to provide ",Object(i.b)("inlineCode",{parentName:"p"},"method")," declarations that redirect by default to ",Object(i.b)("inlineCode",{parentName:"p"},"_dart_method"),". This allows target language consumers to extend projected classes and provide method overrides implemented in terms of CFR."),Object(i.b)("h2",{id:"intermediate-representation-ir"},"Intermediate Representation (IR)"),Object(i.b)("p",null,"SWID maintains its own IR. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/ir"},"SWID IR")," closely mirrors a Dart abstract syntax tree (AST). The important caveat is that SWID IR does not fully represent the semantics of the Dart language. Getters, setters and operator overloads are not specially represented in SWID IR. SWID IR also does not explicitly represent Dart libraries or packages. "),Object(i.b)("p",null,"SWID IR is the primitive upon which all analyses, transformations and code generation are performed."),Object(i.b)("h2",{id:"frontends"},"Frontends"),Object(i.b)("p",null,"SWID frontends are responsible for producing SWID IR. "),Object(i.b)("p",null,"SWID's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/frontend/dart"},"Dart frontend")," takes a Dart package and produces SWID IR."),Object(i.b)("p",null,"There is a second (though still experimental) frontend called ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/frontend/swidi"},"SWIDI")," for producing SWID IR from SWID interface (or SWIDI) files."),Object(i.b)("h2",{id:"backends"},"Backends"),Object(i.b)("p",null,"SWID backends are responsible for producing translation units which will be written to disk as code files."),Object(i.b)("p",null,"SWID's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/backend/dart"},"Dart backend")," is responsible for producing Dart code that can be loaded into CFR to provide bindings for a given Dart package."),Object(i.b)("p",null,"SWID's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/backend/ts"},"Typescript backend")," is responsible for producing Typescript code that accurately projects the given Dart package and works with the associated Dart binding code to allow consumers to access, allocate and extend classes from the given Dart package."))}l.isMDXComponent=!0}}]);