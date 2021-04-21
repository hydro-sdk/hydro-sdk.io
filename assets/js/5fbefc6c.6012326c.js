(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{87:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return d})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return l}));var i=o(3),n=o(7),r=(o(0),o(110)),a={sidebar_position:2},d={unversionedId:"edge-cases-and-errors/runtime",id:"edge-cases-and-errors/runtime",isDocsHomePage:!1,title:"Runtime",description:"Dispatched function prototypes are required to have debug symbols but the prototype from x-y in big-hashed-name could not be matched to a debug symbol",source:"@site/docs/edge-cases-and-errors/runtime.md",sourceDirName:"edge-cases-and-errors",slug:"/edge-cases-and-errors/runtime",permalink:"/docs/edge-cases-and-errors/runtime",editUrl:"https://github.com/hydro-sdk/hydro-sdk.io/edit/main/docs/edge-cases-and-errors/runtime.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Compile Time",permalink:"/docs/edge-cases-and-errors/compile-time"},next:{title:"Typescript",permalink:"/docs/limitations/typescript"}},s=[{value:"<code>Dispatched function prototypes are required to have debug symbols but the prototype from x-y in big-hashed-name could not be matched to a debug symbol</code>",id:"dispatched-function-prototypes-are-required-to-have-debug-symbols-but-the-prototype-from-x-y-in-big-hashed-name-could-not-be-matched-to-a-debug-symbol",children:[]},{value:"<code>Failed to dispatch to big-hashed-method-name from x-y in big-hashed-name</code>",id:"failed-to-dispatch-to-big-hashed-method-name-from-x-y-in-big-hashed-name",children:[]},{value:"<code>attempt to index a nil value null foo</code>",id:"attempt-to-index-a-nil-value-null-foo",children:[]}],c={toc:s};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"dispatched-function-prototypes-are-required-to-have-debug-symbols-but-the-prototype-from-x-y-in-big-hashed-name-could-not-be-matched-to-a-debug-symbol"},Object(r.b)("inlineCode",{parentName:"h2"},"Dispatched function prototypes are required to have debug symbols but the prototype from x-y in big-hashed-name could not be matched to a debug symbol")),Object(r.b)("p",null,"In debug mode, the CFR's virtual machine needs code being called into from the Flutter framework as part of Flutter's normal widget lifecycle to have debugging information attached to it in order to provide hot reload. This error can usually be observed being raised when trying to execute ",Object(r.b)("inlineCode",{parentName:"p"},"build")," methods in Typescript classes which extend ",Object(r.b)("inlineCode",{parentName:"p"},"StatelessWidget")," or ",Object(r.b)("inlineCode",{parentName:"p"},"State"),". This is NOT an error with your code. This usually means the compiler wasn't quite smart enough to find all of the anonymous functions/tear offs you're using in your ",Object(r.b)("inlineCode",{parentName:"p"},"build")," methods and report them to the VM for debugging and hot-reload. If you encounter this, please file an issue so we can make the compiler smarter."),Object(r.b)("h2",{id:"failed-to-dispatch-to-big-hashed-method-name-from-x-y-in-big-hashed-name"},Object(r.b)("inlineCode",{parentName:"h2"},"Failed to dispatch to big-hashed-method-name from x-y in big-hashed-name")),Object(r.b)("p",null,"In debug mode, the CFR's virtual machine will enforce that all code being called into from the Flutter framework as part of Flutter's normal widget lifecycle is looked up just in time before it's executed. If the virtual machine fails to lookup a function that is being called, this error will be thrown. This error can be observed when running code that is in the middle of attempting to call code that has just been deleted as part of a hot-reload."),Object(r.b)("h2",{id:"attempt-to-index-a-nil-value-null-foo"},Object(r.b)("inlineCode",{parentName:"h2"},"attempt to index a nil value null foo")),Object(r.b)("p",null,"This error can be seen by regular Typescript code that attempts to access a field ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," on an uninitialized object. If this error is observed originating in ",Object(r.b)("inlineCode",{parentName:"p"},"hydro-sdk/runtime")," Typescript code, after a hot-reload is performed, it may indicate a limitation of hot-reload. In debug mode, functions have their enclosing scopes refreshed before they are executed. This error can sometimes be caused by adding an ",Object(r.b)("inlineCode",{parentName:"p"},"import")," statement for a file which has never been imported before anywhere in the life of the currently running program. In this case, the code being executed is having it's enclosing scope refreshed to include the new symbols being ",Object(r.b)("inlineCode",{parentName:"p"},"import"),"ed, but the ",Object(r.b)("inlineCode",{parentName:"p"},"import"),"ed file itself is not being executed in order to initialise the new symbols being used, resulting in trying to index into ",Object(r.b)("inlineCode",{parentName:"p"},"nil")," values. This issue can be remedied by performing a hot-restart of the Dart code running the CFR virtual machine. This error does NOT necessarily indicate an error with your code."))}l.isMDXComponent=!0}}]);