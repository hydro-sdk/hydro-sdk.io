(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{120:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return h}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},b=function(e){var a=l(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=t,h=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return n?r.a.createElement(h,d(d({ref:a},s),{},{components:n})):r.a.createElement(h,d({ref:a},s))}));function h(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d.mdxType="string"==typeof e?e:t,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return d})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return l}));var t=n(3),r=n(7),i=(n(0),n(120)),o={sidebar_position:2},d={unversionedId:"design-documents/swidi",id:"design-documents/swidi",isDocsHomePage:!1,title:"Swidi",description:"Swidi is a small, declarative language implemented by SWID and consumed by a dedicated Swidi frontend in SWID.",source:"@site/docs/design-documents/swidi.md",sourceDirName:"design-documents",slug:"/design-documents/swidi",permalink:"/docs/design-documents/swidi",editUrl:"https://github.com/hydro-sdk/hydro-sdk.io/edit/main/docs/design-documents/swidi.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Structured Wrapper and Interface Generator for Dart (SWID)",permalink:"/docs/design-documents/swid"},next:{title:"SWID Abstract Reduction System (SWARS)",permalink:"/docs/design-documents/swars"}},c=[{value:"Objective",id:"objective",children:[]},{value:"Background",id:"background",children:[]},{value:"Structure",id:"structure",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Reference Declaration Prefixes",id:"reference-declaration-prefixes",children:[]},{value:"Methods",id:"methods",children:[{value:"Optional Parameters",id:"optional-parameters",children:[]},{value:"Named Parameters",id:"named-parameters",children:[]},{value:"Constant Initializers",id:"constant-initializers",children:[]},{value:"Type Formals",id:"type-formals",children:[]}]},{value:"Function Types",id:"function-types",children:[]},{value:"Type Arguments",id:"type-arguments",children:[]},{value:"Symbol Annotations",id:"symbol-annotations",children:[]},{value:"Short Hand Overrides",id:"short-hand-overrides",children:[{value:"Classes",id:"classes-1",children:[]},{value:"Methods",id:"methods-1",children:[]}]},{value:"Errors",id:"errors",children:[{value:"Empty annotation on declaration (E1)",id:"empty-annotation-on-declaration-e1",children:[]},{value:"Number used as an annotation (E2)",id:"number-used-as-an-annotation-e2",children:[]},{value:"String used as an annotation (E3)",id:"string-used-as-an-annotation-e3",children:[]},{value:"Annotations can&#39;t have named parameters (E4)",id:"annotations-cant-have-named-parameters-e4",children:[]},{value:"Annotations must have a positional parameter (E5)",id:"annotations-must-have-a-positional-parameter-e5",children:[]},{value:"Annotations must have a single positional parameter (E6)",id:"annotations-must-have-a-single-positional-parameter-e6",children:[]},{value:"Number used as a parameter in an annotation (E7)",id:"number-used-as-a-parameter-in-an-annotation-e7",children:[]},{value:"Function used as a parameter in an annotation(E8)",id:"function-used-as-a-parameter-in-an-annotatione8",children:[]},{value:"Map used as a parameter in an annotation (E9)",id:"map-used-as-a-parameter-in-an-annotation-e9",children:[]},{value:"Map used as an annotation (E10)",id:"map-used-as-an-annotation-e10",children:[]},{value:"Number used as a method short hand override (E11)",id:"number-used-as-a-method-short-hand-override-e11",children:[]},{value:"String used as a method short hand override (E12)",id:"string-used-as-a-method-short-hand-override-e12",children:[]},{value:"Function used as a method short hand override (E13)",id:"function-used-as-a-method-short-hand-override-e13",children:[]},{value:"Number used as a key in a method short hand override (E14)",id:"number-used-as-a-key-in-a-method-short-hand-override-e14",children:[]},{value:"Function used as a key in a method short hand override (E15)",id:"function-used-as-a-key-in-a-method-short-hand-override-e15",children:[]},{value:"Map used as a key in a method short hand override (E16)",id:"map-used-as-a-key-in-a-method-short-hand-override-e16",children:[]},{value:"Key is not a valid short hand override key (E17)",id:"key-is-not-a-valid-short-hand-override-key-e17",children:[]},{value:"Invalid annotation name (E18)",id:"invalid-annotation-name-e18",children:[]},{value:"Invalid annotation parameter (E19)",id:"invalid-annotation-parameter-e19",children:[]},{value:"Boolean used as an annotation (E20)",id:"boolean-used-as-an-annotation-e20",children:[]},{value:"Boolean used as a parameter in an annotation (E21)",id:"boolean-used-as-a-parameter-in-an-annotation-e21",children:[]},{value:"Boolean used as a method short hand override (E22)",id:"boolean-used-as-a-method-short-hand-override-e22",children:[]},{value:"Boolean used as a key in a method short hand override (E23)",id:"boolean-used-as-a-key-in-a-method-short-hand-override-e23",children:[]},{value:"Number used as a value in a method short hand override (E24)",id:"number-used-as-a-value-in-a-method-short-hand-override-e24",children:[]},{value:"Function used as a value in a method short hand override (E25)",id:"function-used-as-a-value-in-a-method-short-hand-override-e25",children:[]},{value:"Map used as a value in a method short hand override (E26)",id:"map-used-as-a-value-in-a-method-short-hand-override-e26",children:[]}]}],s={toc:c};function l(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Swidi is a small, declarative language implemented by ",Object(i.b)("a",{parentName:"p",href:"https://hydro-sdk.io/docs/design-documents/swid"},"SWID")," and consumed by a dedicated ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/tree/master/lib/swid/frontend/swidi"},"Swidi frontend")," in SWID."),Object(i.b)("h2",{id:"objective"},"Objective"),Object(i.b)("p",null,"Provide an escape hatch in SWID to add declarations to existing Dart libraries to allow for clean type-system bridging, specify APIs that are underspecified, and override existing declarations in a clean and integrated way."),Object(i.b)("h2",{id:"background"},"Background"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://hydro-sdk.io/docs/design-documents/swid"},"SWID")," is based on the principle that the Dart package being consumed cannot (and should not) be hand-edited by the user in order to influence the kind of code that SWID will produce. This frees the user from having to specify every single symbol being emitted (whether through annotations or other methods). It however comes with the downside that SWID becomes impossible to influence. Swidi provides clear (and constrained) avenues for the user to influence code generation."),Object(i.b)("h2",{id:"structure"},"Structure"),Object(i.b)("p",null,"Swidi is used to describe the public API surface of one or more Dart symbols from one or more Dart libraries. Swidi attempts to be as simple (from an implementation perspective) as possible. It is not turing complete and does not support any form of file includes or imports. Swidi does not have any form of inference or intrinsics. All semantic information describing a symbol is given at its usage site."),Object(i.b)("p",null,"Declarations described in Swidi are merged by SWID with the declarations read from the original Dart source code with preference given to those declarations from Swidi. This allows for declarations in Swidi to selectively override those given in Dart source code."),Object(i.b)("h2",{id:"classes"},"Classes"),Object(i.b)("p",null,"Swidi classes are declared with a library scope prefix of the path an importer would use to import the declaring library in Dart. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:collection"::IterableBase {}\n')),Object(i.b)("p",null,"The above declares an empty set of overrides for the class ",Object(i.b)("inlineCode",{parentName:"p"},"IterableBase")," from the Dart library ",Object(i.b)("inlineCode",{parentName:"p"},"dart:collection"),". "),Object(i.b)("h2",{id:"reference-declaration-prefixes"},"Reference Declaration Prefixes"),Object(i.b)("p",null,"Because Swidi has neither inference nor intrinsics, all semantic information about a given symbol is given at its usage site. For types, Swidi expresses this through a combination of library scope prefixes (as for class declarations) and reference declaration prefixes. They are given in the order ",Object(i.b)("inlineCode",{parentName:"p"},"library::reference declaration::type name"),"."),Object(i.b)("p",null,"There are five reference declaration prefixes in Swidi"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"class"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The given symbol refers to the class type declared in the library specified in the library prefix scope."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"enum"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The given symbol refers to the enumeration type declared in the library specified in the library prefix scope."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"void"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The given symbol refers to the void type. No library scope prefix is permitted."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The given symbol refers to a type formal. No library scope prefix is permitted."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dynamic"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The given symbol refers to the dynamic type. No library scope prefix is permitted.")))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("p",null,"Methods are declared on classes in Swidi in the same manner as in Dart (though without bodies)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:collection"::IterableBase {\n    "dart:core"::class::bool contains(\n        "dart:core"::class::Object? element\n    );\n}\n')),Object(i.b)("p",null,"The above declares an override for the method called ",Object(i.b)("inlineCode",{parentName:"p"},"contains")," on the class ",Object(i.b)("inlineCode",{parentName:"p"},"IterableBase"),". ",Object(i.b)("inlineCode",{parentName:"p"},"contains")," has a return type of ",Object(i.b)("inlineCode",{parentName:"p"},"bool")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),"), has a single positional parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"element")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"Object")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),") and can be null."),Object(i.b)("h3",{id:"optional-parameters"},"Optional Parameters"),Object(i.b)("p",null,"Optional parameters can be declared in Swidi in the same manner as in Dart. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:typed_data"::UnmodifiableInt16ListView {\n    "dart:core"::class::int lastIndexOf(\n        "dart:core"::class::Object? element, [\n            "dart:core"::class::int? start,\n        ]\n    );\n')),Object(i.b)("p",null,"The above declares an override for the method called ",Object(i.b)("inlineCode",{parentName:"p"},"lastIndexOf")," on the class ",Object(i.b)("inlineCode",{parentName:"p"},"UnmodifiableInt16ListView"),". ",Object(i.b)("inlineCode",{parentName:"p"},"lastIndexOf")," has a return type of ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),"), has a single positional parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"element")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"Object")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),") and can be null, and has a single optional parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"start")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),") and can be null."),Object(i.b)("h3",{id:"named-parameters"},"Named Parameters"),Object(i.b)("p",null,"Named parameters can be declared in Swidi in the same manner as in Dart. In Swidi, the ",Object(i.b)("inlineCode",{parentName:"p"},"required")," keyword currently cannot be used. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux\n    });\n  }\n')),Object(i.b)("p",null,"The above declares an override for the method called ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," on the class ",Object(i.b)("inlineCode",{parentName:"p"},"IconData"),". ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," has a return type of ",Object(i.b)("inlineCode",{parentName:"p"},"void"),", has a single positional parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),"), has a named parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"baz")," which is type ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),"), a named parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"qux")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),") and can be null."),Object(i.b)("h3",{id:"constant-initializers"},"Constant Initializers"),Object(i.b)("p",null,"Constant initializers for parameters can be declared immediately after the parameter declaration in much the same way as in Dart. In Swidi, constant string literals are prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"@"),". Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo(\n      "dart:core"::class::int bar = 0, {\n        "dart:core"::class::int baz = 123,\n        "dart:core"::class::String? qux = @"default value"\n    });\n  }\n')),Object(i.b)("p",null,"The above declares an override for the method called ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," on the class ",Object(i.b)("inlineCode",{parentName:"p"},"IconData"),". ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," has a return type of ",Object(i.b)("inlineCode",{parentName:"p"},"void"),", has a single positional parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),") and has a default value of 0, has a named parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"baz")," which is type ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),") and has a default value of 123, a named parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"qux")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"String")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),') can be null and has a default value of "default value".'),Object(i.b)("h3",{id:"type-formals"},"Type Formals"),Object(i.b)("p",null,"Type formals can be declared on methods similarly as in Dart. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:core"::List {\n    "dart:core"::class::List foo<T extends "dart:core"::class::Object?, U, K extends type::T>();\n}\n')),Object(i.b)("p",null,"The above declares an override for the method called ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," on the class ",Object(i.b)("inlineCode",{parentName:"p"},"List"),". ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," has a return type of ",Object(i.b)("inlineCode",{parentName:"p"},"List")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),"), has a type formal called ",Object(i.b)("inlineCode",{parentName:"p"},"T")," (whos bound is nullable ",Object(i.b)("inlineCode",{parentName:"p"},"Object"),"), a type formal called ",Object(i.b)("inlineCode",{parentName:"p"},"U"),", and a type formal called ",Object(i.b)("inlineCode",{parentName:"p"},"T")," (which is bound to the type formal ",Object(i.b)("inlineCode",{parentName:"p"},"T"),")."),Object(i.b)("h2",{id:"function-types"},"Function Types"),Object(i.b)("p",null,"Function typed symbols in Swidi take a slightly different form to that of Dart. In Swidi, they begin with the function keyword, followed by their return type. Positional and optional parameters in function types cannot be named. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:core"::List {\n    void::void foo(\n        Function void::void (\n            "dart:core"::class:int, [\n                "dart:core"::class:String?,\n            ], {\n                dynamic::dynamic bar,\n            }\n        )? callback,\n    );\n}\n')),Object(i.b)("p",null,"The above declares an override for the method called ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," on the class ",Object(i.b)("inlineCode",{parentName:"p"},"List"),". ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," has a return type of ",Object(i.b)("inlineCode",{parentName:"p"},"void"),", has a single positional parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"callback")," which is a nullable function that has a return type of  ",Object(i.b)("inlineCode",{parentName:"p"},"void"),", has a positional parameter of type ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),"), has an optional parameter of type ",Object(i.b)("inlineCode",{parentName:"p"},"String")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),") that can be null, and a named parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"dynamic"),"."),Object(i.b)("h2",{id:"type-arguments"},"Type Arguments"),Object(i.b)("p",null,"Type arguments can be specified on symbols in the same manner as in Dart. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:core"::List {\n    void::void foo("dart:core"::class::List<"dart:core"::class:int> fooList);\n}\n')),Object(i.b)("p",null,"The above declares an override for the method called ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," on the class ",Object(i.b)("inlineCode",{parentName:"p"},"List"),". ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," has a return type of ",Object(i.b)("inlineCode",{parentName:"p"},"void"),", has a single positional parameter called ",Object(i.b)("inlineCode",{parentName:"p"},"fooList")," which is of type ",Object(i.b)("inlineCode",{parentName:"p"},"List")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),") and has a type argument of type ",Object(i.b)("inlineCode",{parentName:"p"},"int")," (which is a class declared in ",Object(i.b)("inlineCode",{parentName:"p"},"dart:core"),")."),Object(i.b)("h2",{id:"symbol-annotations"},"Symbol Annotations"),Object(i.b)("p",null,"Symbols in Swidi can be declared with one or more optional annotations. These are declared as a constant function invocation between pairs of ",Object(i.b)("inlineCode",{parentName:"p"},"[[ ]]"),". Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:core"::List {\n    [[ ignoreTransform(@"referenceRewriting") ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n}\n')),Object(i.b)("h2",{id:"short-hand-overrides"},"Short Hand Overrides"),Object(i.b)("p",null,"Short hand overrides in Swidi can be used to provide extra semantic information to an entire declaration. They are expressed as a constant map."),Object(i.b)("h3",{id:"classes-1"},"Classes"),Object(i.b)("p",null,"Short hand class overrides can be provided immediately after a class declaration. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:core"::List { } -> {\n    @"key": @"value",\n}\n')),Object(i.b)("h3",{id:"methods-1"},"Methods"),Object(i.b)("p",null,"Short hand method overrides can be provided immediately after a method declaration. Consider the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "dart:core"::List {\n    void::void foo() -> {\n        @"key": @"value",\n    };\n}\n')),Object(i.b)("h2",{id:"errors"},"Errors"),Object(i.b)("p",null,"While Swidi's grammar (especially around constants) is relatively permissive, not every possible declaration makes sense. The below are validation errors that may be encountered when writing Swidi declarations."),Object(i.b)("h3",{id:"empty-annotation-on-declaration-e1"},"Empty annotation on declaration (E1)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"number-used-as-an-annotation-e2"},"Number used as an annotation (E2)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ 1 ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"string-used-as-an-annotation-e3"},"String used as an annotation (E3)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ @"1" ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"annotations-cant-have-named-parameters-e4"},"Annotations can't have named parameters (E4)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ignoreTransform(bar: @"1" ) ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"annotations-must-have-a-positional-parameter-e5"},"Annotations must have a positional parameter (E5)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ignoreTransform() ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"annotations-must-have-a-single-positional-parameter-e6"},"Annotations must have a single positional parameter (E6)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ignoreTransform(1,2) ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"number-used-as-a-parameter-in-an-annotation-e7"},"Number used as a parameter in an annotation (E7)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ignoreTransform(1) ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"function-used-as-a-parameter-in-an-annotatione8"},"Function used as a parameter in an annotation(E8)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ignoreTransform(foo()) ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"map-used-as-a-parameter-in-an-annotation-e9"},"Map used as a parameter in an annotation (E9)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ignoreTransform({\n      @"foo" : @"bar",\n    }) ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"map-used-as-an-annotation-e10"},"Map used as an annotation (E10)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ {\n      @"foo" : @"bar",\n    } ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"number-used-as-a-method-short-hand-override-e11"},"Number used as a method short hand override (E11)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> 10;\n  }\n')),Object(i.b)("h3",{id:"string-used-as-a-method-short-hand-override-e12"},"String used as a method short hand override (E12)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> @"10";\n  }\n')),Object(i.b)("h3",{id:"function-used-as-a-method-short-hand-override-e13"},"Function used as a method short hand override (E13)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> bar();\n  }\n')),Object(i.b)("h3",{id:"number-used-as-a-key-in-a-method-short-hand-override-e14"},"Number used as a key in a method short hand override (E14)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> {\n      1 : @"bar",\n    };\n  }\n')),Object(i.b)("h3",{id:"function-used-as-a-key-in-a-method-short-hand-override-e15"},"Function used as a key in a method short hand override (E15)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> {\n      foo() : @"bar",\n    };\n  }\n')),Object(i.b)("h3",{id:"map-used-as-a-key-in-a-method-short-hand-override-e16"},"Map used as a key in a method short hand override (E16)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> {\n      {\n        1 : 2,\n      } : @"bar",\n    };\n  }\n')),Object(i.b)("h3",{id:"key-is-not-a-valid-short-hand-override-key-e17"},"Key is not a valid short hand override key (E17)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> {\n      @"foo" : @"bar",\n    };\n  }\n')),Object(i.b)("h3",{id:"invalid-annotation-name-e18"},"Invalid annotation name (E18)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ foo(@"bar") ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"invalid-annotation-parameter-e19"},"Invalid annotation parameter (E19)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ignoreTransform(@"1") ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"boolean-used-as-an-annotation-e20"},"Boolean used as an annotation (E20)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ true ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"boolean-used-as-a-parameter-in-an-annotation-e21"},"Boolean used as a parameter in an annotation (E21)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    [[ ignoreTransform(true) ]]\n    void::void foo(\n      "dart:core"::class::int bar, {\n        "dart:core"::class::int baz,\n        "dart:core"::class::int? qux,\n    });\n  }\n')),Object(i.b)("h3",{id:"boolean-used-as-a-method-short-hand-override-e22"},"Boolean used as a method short hand override (E22)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> true;\n  }\n')),Object(i.b)("h3",{id:"boolean-used-as-a-key-in-a-method-short-hand-override-e23"},"Boolean used as a key in a method short hand override (E23)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> {\n      true : @"bar",\n    };\n  }\n')),Object(i.b)("h3",{id:"number-used-as-a-value-in-a-method-short-hand-override-e24"},"Number used as a value in a method short hand override (E24)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> {\n      @"tsClassMethodDeclaration" : 123,\n    };\n  }\n')),Object(i.b)("h3",{id:"function-used-as-a-value-in-a-method-short-hand-override-e25"},"Function used as a value in a method short hand override (E25)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> {\n      @"tsClassMethodDeclaration" : bar(),\n    };\n  }\n')),Object(i.b)("h3",{id:"map-used-as-a-value-in-a-method-short-hand-override-e26"},"Map used as a value in a method short hand override (E26)"),Object(i.b)("p",null,"This error can be encountered in Swidi code like the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dart"},'class "package:flutter/src/widgets/icon_data.dart"::IconData {\n    void::void foo() -> {\n      @"tsClassMethodDeclaration" : {\n        123: 321,\n      },\n    };\n  }\n')))}l.isMDXComponent=!0}}]);