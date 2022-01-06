(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var o=r(3),a=r(7),n=(r(0),r(122)),s={slug:"two-years-of-hydro-sdk",title:"Two Years of Hydro-SDK",author:"Chris Gibb",author_title:"Recovering Structural Typing Enthusiast",author_url:"https://github.com/chgibb",author_image_url:"https://avatars.githubusercontent.com/u/18079458?s=400&v=4",tags:["flutter","typescript","react-native"]},i={permalink:"/blog/two-years-of-hydro-sdk",editUrl:"https://github.com/hydro-sdk/hydro-sdk.io/edit/main/blog/2022-01-06-two-years-of-hydro-sdk.md",source:"@site/blog/2022-01-06-two-years-of-hydro-sdk.md",title:"Two Years of Hydro-SDK",description:"370 releases in 365 days of 2021. Looking ahead to 2022.",date:"2022-01-06T00:00:00.000Z",formattedDate:"January 6, 2022",tags:[{label:"flutter",permalink:"/blog/tags/flutter"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"react-native",permalink:"/blog/tags/react-native"}],readingTime:2.885,truncated:!0,nextItem:{title:"DartUP 2021",permalink:"/blog/dartup-2021"}},p=[],d={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"370 releases in 365 days of 2021. Looking ahead to 2022."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://flutter.dev/"},"Flutter")," is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, desktop and embedded devices from a single codebase."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk"},"Hydro-SDK"),' is a software development kit (SDK) enabling Flutter developers to write portions of their app (or their entire app) using TypeScript. It is a project with one large, ambitious goal. "Become React Native for Flutter".',Object(n.b)("br",{parentName:"p"}),"\n","It aims to do that by:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Decoupling the API surface of Flutter from  the Dart programming language."),Object(n.b)("li",{parentName:"ol"},"Decoupling the development time experience of Flutter from the Dart programming language."),Object(n.b)("li",{parentName:"ol"},"Providing first-class support for over-the-air distribution of code."),Object(n.b)("li",{parentName:"ol"},"Providing an ecosystem of packages from ",Object(n.b)("inlineCode",{parentName:"li"},"pub.dev"),", automatically projected to supported languages and published to other package systems.")),Object(n.b)("p",null,"In 2021, ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk"},"the Hydro-SDK Github organization")," saw 11,710 commits, 1,616 pull requests merged and 136 issues closed. The ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk"},"main Hydro-SDK repository")," saw 2,342 commits, 382 pull requests merged, 136 issues closed, and 370 releases. While Hydro-SDK is still very much pre-beta software, releases are automated and frequent using Hydro-SDK's own ",Object(n.b)("a",{parentName:"p",href:"https://github.com/waveform-bot"},"waveform-bot"),". This has led to publishing 5 more releases than there are days in 2021."),Object(n.b)("p",null,"The other 9,368 commits and 1,234 pull requests were made against Hydro-SDK's showcase and test repositories. In addition to the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/e03ea38704abdd13dce932fa10101ed0659a956b/.github/workflows"},"extensive CI")," on the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk"},"main Hydro-SDK repository"),", these repositories act not only as starting points for users of Hydro-SDK but also as high-level integration tests. On every Hydro-SDK release, ",Object(n.b)("a",{parentName:"p",href:"https://github.com/waveform-bot"},"waveform-bot")," opens pull requests updating the Hydro-SDK version used by these repositories to the latest (and resolves merge conflicts with itself)."),Object(n.b)("p",null,"The focus in 2021 was on proving the potential of the ",Object(n.b)("a",{parentName:"p",href:"https://hydro-sdk.io/docs/design-documents/swid"},"Structured Wrapper and Interface Generator for Dart (SWID) project")," and building out a ",Object(n.b)("a",{parentName:"p",href:"http://localhost:3000/blog/fluttering-over-the-air"},"codepush MVP"),"."),Object(n.b)("p",null,"SWID started 2021 at ~26,509 LOC (lines of code) with ~3,692 LOC of tests and ended the year at ~98,291 LOC with ~34,399 LOC of tests. While LOC is not a measure of value, it is a reasonable proxy for complexity. Two sub-projects spun out of SWID (",Object(n.b)("a",{parentName:"p",href:"https://hydro-sdk.io/docs/design-documents/swidi"},"Swidi"),", ",Object(n.b)("a",{parentName:"p",href:"https://hydro-sdk.io/docs/design-documents/swars"},"SWARS"),") as a result of the growing complexity and needs of SWID. SWID even managed to trigger a bug in the Dart compiler (",Object(n.b)("a",{parentName:"p",href:"https://github.com/dart-lang/sdk/issues/46936"},"dart-lang/sdk#46936"),")."),Object(n.b)("p",null,"Getting to even the basic codepush MVP that is now available required completely rethinking both the development time and deployment experience of code built and ran using Hydro-SDK. Previously, all components of Hydro-SDK operated directly on bytecode chunks. A new ",Object(n.b)("a",{parentName:"p",href:"https://hydro-sdk.io/docs/design-documents/ota"},"packaging format (",Object(n.b)("inlineCode",{parentName:"a"},".ota")," packages)")," was created along with new SDK-tools and supporting libraries to ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/build-project"},"build"),", ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/bin/run-project.dart"},"serve"),", ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/runComponent"},"run"),", and ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/master/bin/codepush.dart"},"deploy")," ",Object(n.b)("inlineCode",{parentName:"p"},".ota")," packages. The (closed-source) service powering the ",Object(n.b)("a",{parentName:"p",href:"https://hydro-sdk.io/docs/design-documents/registry"},"Hydro-SDK Registry")," at ",Object(n.b)("a",{parentName:"p",href:"https://registry.hydro-sdk.io"},"https://registry.hydro-sdk.io")," was created along with ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/registry/dto"},"(open-source) support to interact with it"),"."),Object(n.b)("p",null,"Work done in 2021 proved the value of the approach taken by SWID to the larger problem space of automatic language projection and ecosystem bridging faced by Hydro-SDK (goals 1 and 4 above). The codepush MVP provides a complete steel thread from developing, to deploying and operating experiences built using Hydro-SDK."),Object(n.b)("p",null,"The focus over the course of 2022 will be on the development experience for users of Hydro-SDK. It is hoped that SWID will be able to provide in-tree support for the whole of Flutter. The barrier to entry for web developers looking to Hydro-SDK as a way to bridge their skills into using Flutter (and mobile development in general) is high due to the inherent complexities of mobile development. Hopefully, exploring ways to lower these barriers for web developers can begin in 2022 ",Object(n.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/issues/763"},"hydro-sdk/hydro-sdk#763"),"."))}l.isMDXComponent=!0},122:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return h}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(r),u=o,h=c["".concat(s,".").concat(u)]||c[u]||b[u]||n;return r?a.a.createElement(h,i(i({ref:t},d),{},{components:r})):a.a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<n;d++)s[d]=r[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);