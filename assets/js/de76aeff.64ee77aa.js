(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),i=(r(0),r(120)),s={sidebar_position:3},o={unversionedId:"design-documents/swars",id:"design-documents/swars",isDocsHomePage:!1,title:"SWID Abstract Reduction System (SWARS)",description:"SWARS is a set of highly opinionated building blocks for building referentially transparent transformations over immutable data.",source:"@site/docs/design-documents/swars.md",sourceDirName:"design-documents",slug:"/design-documents/swars",permalink:"/docs/design-documents/swars",editUrl:"https://github.com/hydro-sdk/hydro-sdk.io/edit/main/docs/design-documents/swars.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Swidi",permalink:"/docs/design-documents/swidi"},next:{title:"Common Flutter Runtime (CFR)",permalink:"/docs/design-documents/cfr"}},d=[{value:"Objective",id:"objective",children:[]},{value:"Background",id:"background",children:[]},{value:"Concepts",id:"concepts",children:[{value:"Identity",id:"identity",children:[]},{value:"Terms",id:"terms",children:[]},{value:"Pipelines",id:"pipelines",children:[]}]}],b={toc:d};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"SWARS is a set of highly opinionated building blocks for building referentially transparent transformations over immutable data."),Object(i.b)("h2",{id:"objective"},"Objective"),Object(i.b)("p",null,"Provide a standard and coherent way to build referentially transparent transformations over immutable data. Inspired by ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_rewriting_system"},"abstract rewriting systems"),"."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://hydro-sdk.io/docs/design-documents/swid"},"SWID")," aims to produce binding and projection code that provides end users with rich interoperation. This requires SWID to traverse, analyze and flatten types. In the context of Flutter, these types exist in class hierarchies that are both deep and extremely wide."),Object(i.b)("p",null,"For any set of types with common ancestors in the class hierarchy, analysis and code generation performed by SWID will be repeated. In the context of Flutter, this repeat work was seen to consume an extremely long amount of time."),Object(i.b)("p",null,"SWARS aims to allow SWID to break up the graph of analyses and code generation tasks for any given type (and any given sub set of any given type) into an arbitrary number of arbitrarily complex operations that can be composed and who's usage sites can be opaquely replaced with their results."),Object(i.b)("h2",{id:"concepts"},"Concepts"),Object(i.b)("h3",{id:"identity"},"Identity"),Object(i.b)("p",null,"The identities of inputs and outputs in SWARS is uniquely determined by each type that implements ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iHashKey.dart"},Object(i.b)("inlineCode",{parentName:"a"},"IHashKey")),". Types are expected to describe how to uniquely identify themselves by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hashableParts"),"."),Object(i.b)("h3",{id:"terms"},"Terms"),Object(i.b)("p",null,"The core concept of SWARS is the term. Terms in SWARS are represented by the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsTerm.dart"},Object(i.b)("inlineCode",{parentName:"a"},"ISwarsTerm")),' interface. Terms can be "called" in order to produce a term result (represented by the ',Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsTerm.dart"},Object(i.b)("inlineCode",{parentName:"a"},"ISwarsTermResult"))," interface). Terms and term results must implement ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iCopyable.dart"},Object(i.b)("inlineCode",{parentName:"a"},"ICopyable")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iCloneable.dart"},Object(i.b)("inlineCode",{parentName:"a"},"ICloneable")),", ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iHashKey.dart"},Object(i.b)("inlineCode",{parentName:"a"},"IHashKey"))," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/iHashComparable.dart"},Object(i.b)("inlineCode",{parentName:"a"},"IHashComparable")),". SWARS' guarantees about identity and referential transparency are enforced through the implementation of these interfaces. Default implementations are provided by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/hashKeyMixin.dart"},Object(i.b)("inlineCode",{parentName:"a"},"HashKeyMixin"))," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/util/hashComparableMixin.dart"},Object(i.b)("inlineCode",{parentName:"a"},"HashComparableMixin")),"."),Object(i.b)("p",null,"In cases where terms cannot be uniquely identified based on their inputs (such as when their inputs are closures or types that do not implement the aformentioned interfaces), ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/swarsNonUniqueTermMixin.dart"},Object(i.b)("inlineCode",{parentName:"a"},"SwarsNonUniqueTermMixin"))," can be used to opt a given term out of the identity system."),Object(i.b)("h4",{id:"transformations-and-analyses"},"Transformations and Analyses"),Object(i.b)("p",null,"Transformations and analyses in SWARS are terms with some extra type-level sugar to help express their intended semantics. This is provided by the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsTransform.dart"},Object(i.b)("inlineCode",{parentName:"a"},"ISwarsTransform"))," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsAnalysis.dart"},Object(i.b)("inlineCode",{parentName:"a"},"ISwarsAnalysis"))," interfaces with default implementations ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/swarsTransformMixin.dart"},Object(i.b)("inlineCode",{parentName:"a"},"SwarsTransformMixin"))," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/swarsAnalysisMixin.dart"},Object(i.b)("inlineCode",{parentName:"a"},"SwarsAnalysisMixin")),"."),Object(i.b)("h3",{id:"pipelines"},"Pipelines"),Object(i.b)("p",null,"When SWARS terms are called, an ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/iSwarsPipeline.dart"},Object(i.b)("inlineCode",{parentName:"a"},"ISwarsPipeline"))," is always provided. Terms are composed by calling additional terms using the provided pipeline. The exact type of pipeline provided and what that pipeline does with terms that are composed should be completely opaque. A pipeline which caches term results and opaquely replaces term invocations with their results if they've been seen before is provided by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/lib/swid/swars/cachingPipeline.dart"},Object(i.b)("inlineCode",{parentName:"a"},"CachingPipeline")),". The ability to do this safely is guaranteed by the identity and term systems described above."))}c.isMDXComponent=!0},120:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),c=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,h=l["".concat(s,".").concat(m)]||l[m]||p[m]||i;return r?n.a.createElement(h,o(o({ref:t},b),{},{components:r})):n.a.createElement(h,o({ref:t},b))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var b=2;b<i;b++)s[b]=r[b];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);