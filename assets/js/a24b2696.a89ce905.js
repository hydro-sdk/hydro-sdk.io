(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return c}));var r=a(3),n=a(7),o=(a(0),a(110)),i={slug:"closing-over-type-formals-satisying-type-parameters",title:"Closing Over Type Formals, Satisfying Type Parameters",author:"Chris Gibb",author_title:"Recovering Structural Typing Enthusiast",author_url:"https://github.com/chgibb",author_image_url:"https://avatars.githubusercontent.com/u/18079458?s=400&v=4",tags:["flutter","typescript","react-native"]},s={permalink:"/blog/closing-over-type-formals-satisying-type-parameters",editUrl:"https://github.com/hydro-sdk/hydro-sdk.io/edit/main/blog/2021-02-07-closing-over-type-formals-satisying-type-parameters.md",source:"@site/blog/2021-02-07-closing-over-type-formals-satisying-type-parameters.md",title:"Closing Over Type Formals, Satisfying Type Parameters",description:"Adventures in automatically binding Dart to Typescript.",date:"2021-02-07T00:00:00.000Z",formattedDate:"February 7, 2021",tags:[{label:"flutter",permalink:"/blog/tags/flutter"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"react-native",permalink:"/blog/tags/react-native"}],readingTime:4.77,truncated:!0,prevItem:{title:"Expressing Inexpressible Constant Values",permalink:"/blog/expressing-inexpressible-constant-values"},nextItem:{title:"One Year of Hydro-SDK",permalink:"/blog/one-year-of-hydro-sdk"}},p=[],l={toc:p};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Adventures in automatically binding Dart to Typescript."),Object(o.b)("p",null,"This was originally posted here: ",Object(o.b)("a",{parentName:"p",href:"https://chgibb.github.io/closing-over-type-formals-satisying-type-parameters/"},"https://chgibb.github.io/closing-over-type-formals-satisying-type-parameters/")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk"},"Hydro-SDK"),' is a project with one large, ambitious goal. "Become React Native for Flutter".',Object(o.b)("br",{parentName:"p"}),"\n","It aims to do that by:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Decoupling the API surface of Flutter from  the Dart programming language."),Object(o.b)("li",{parentName:"ol"},"Decoupling the development time experience of Flutter from the Dart programming language."),Object(o.b)("li",{parentName:"ol"},"Providing first-class support for over-the-air distribution of code."),Object(o.b)("li",{parentName:"ol"},"Providing an ecosystem of packages from ",Object(o.b)("inlineCode",{parentName:"li"},"pub.dev"),", automatically projected to supported languages and published to other package systems.")),Object(o.b)("p",null,"I wrote previously about the past and future of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk"},"Hydro-SDK")," ",Object(o.b)("a",{parentName:"p",href:"https://chgibb.github.io/one-year-of-hydro-sdk/"},"here"),". "),Object(o.b)("p",null,"Structured Wrapper and Interface generator for Dart (SWID) is a component of Hydro-SDK supporting goals 1 and 4. SWID takes as input a Dart package (like ",Object(o.b)("inlineCode",{parentName:"p"},"package:flutter"),") and produces as output Typescript files representing the input Dart package's public API and Dart files to allow for glueing Typescript code written against that API together into a host app that can be run on Hydro-SDK's Common Flutter Runtime (CFR). This process is referred to as \"language projection\". "),Object(o.b)("p",null,"Representing Dart constructs in Typescript has come with many challenges. The most interesting so far has been Dart's ",Object(o.b)("a",{parentName:"p",href:"https://dart.dev/guides/language/language-tour#factory-constructors"},Object(o.b)("inlineCode",{parentName:"a"},"factory")," constructors"),". Consider the ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," class from ",Object(o.b)("inlineCode",{parentName:"p"},"dart:core"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dart"},"//abridged for readability\nclass Iterable<E> {\n    Iterable<E> Iterable();\n    Iterable<T> map<T>(T f(E e))\n    factory Iterable<E> Iterable<E>.empty()\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," factory allows consumers to write code like the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dart"},"Iterable<MyType> myEmptyIterable = Iterable<MyType>.empty();\n")),Object(o.b)("p",null,"Factory constructors are nothing new. While Typescript doesn't have direct support at the language level as Dart does, the same syntax for consumers can be had by the following class:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"class Iterable<E> {\n    public constructor();\n    public map<T>(f: (e: E) => T): Iterable<T>;\n    public static empty(): Iterable<E>;\n}\n")),Object(o.b)("p",null," Which would enable consumers to call the ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," method from Typescript as the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"let myEmptyIterable: Iterable<MyType> = Iterable.empty();\n")),Object(o.b)("p",null," It would, except the definition of ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable.empty")," in our Typescript ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," class above is actually invalid. The Typescript compiler tells us that ",Object(o.b)("inlineCode",{parentName:"p"},"Static members cannot reference class type parameters.(2302)"),". There is a fairly lengthy discussion on why the TS2302 error exists and why this is the case over on the Typescript repo ",Object(o.b)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/32211"},"here")," which is out of scope for this post. The jist of the problem is that our ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," method is trying to reference the type parameter ",Object(o.b)("inlineCode",{parentName:"p"},"E")," which is defined on the class. "),Object(o.b)("p",null,"SWID is structured as a frontend which takes in Dart source code, producing an intermediate representation (IR). This IR is then passed onto the Typescript backend to produce Typescript source code. SWID IR closely mirrors an abstract syntax tree (AST) of the input Dart code. The ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," ",Object(o.b)("inlineCode",{parentName:"p"},"factory")," constructor in the original ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," class defines no type parameters of its own and makes references to ",Object(o.b)("inlineCode",{parentName:"p"},"E")," defined on the class and therefore so does the IR and the output Typescript. From a purely code generation perspective, our Typescript ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," class is perfect. From a perspective of semantics preservation from our input language (and simply a correctness perspective), this is obviously far from perfect."),Object(o.b)("p",null,"In SWID IR, the declaration of a generic type is said to be a type formal while uses of that generic are said to be type parameters. In SWID parlance, the ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," class declares a type formal ",Object(o.b)("inlineCode",{parentName:"p"},"E")," while ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," has a type parameter ",Object(o.b)("inlineCode",{parentName:"p"},"E"),"."),Object(o.b)("p",null,"In order to stop the Typescript backend from producing broken code in the face of patterns like ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable"),", a type propagation pass was introduced prior to sending IR off to be turned into Typescript. The type propagation pass is responsible for rewriting IR in order to satisfy type parameters that are unsatisfied. "),Object(o.b)("p",null,"In SWID IR, a type formal closure defines all of the type formals that are in scope for a particular IR node. A type parameter is said to be unsatisfied if there is no type formal in it's type formal closure that matches it. The extent to which a particular IR node closes over the type formals of its parent nodes depends on the position of the IR node."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"map")," method in the ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," class for example has type parameters ",Object(o.b)("inlineCode",{parentName:"p"},"E"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"T"),". The type formal closure of ",Object(o.b)("inlineCode",{parentName:"p"},"map")," consists of ",Object(o.b)("inlineCode",{parentName:"p"},"T")," because ",Object(o.b)("inlineCode",{parentName:"p"},"T")," is declared on ",Object(o.b)("inlineCode",{parentName:"p"},"map")," itself as well as ",Object(o.b)("inlineCode",{parentName:"p"},"E")," because ",Object(o.b)("inlineCode",{parentName:"p"},"map")," is an instance method of ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," method in the ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," class has a type parameter ",Object(o.b)("inlineCode",{parentName:"p"},"E")," but its type formal closure contains nothing. ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," is a static method and therefore does not close over the type formals of it's parent ",Object(o.b)("inlineCode",{parentName:"p"},"class"),"."),Object(o.b)("p",null,"The type propagation pass will discover the unsatisfied type parameter ",Object(o.b)("inlineCode",{parentName:"p"},"E")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," method, realise that it could be satisfied if the type formal ",Object(o.b)("inlineCode",{parentName:"p"},"E")," declared on its parent ",Object(o.b)("inlineCode",{parentName:"p"},"class")," was also made a type formal of ",Object(o.b)("inlineCode",{parentName:"p"},"empty")," itself and perform the rewriting. This gives us the following ",Object(o.b)("inlineCode",{parentName:"p"},"Iterable")," class:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"class Iterable<E> {\n    public constructor();\n    public map<T>(f: (e: E) => T): Iterable<T>;\n    public static empty<E>(): Iterable<E>;\n}\n")),Object(o.b)("p",null,"With consumers able to use it like the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"let myEmptyIterable: Iterable<MyType> = Iterable.empty<MyType>();\n")),Object(o.b)("p",null," The end result for consumers is having to shift where they ordinarily write their generics when calling ",Object(o.b)("inlineCode",{parentName:"p"},"factory")," constructors."),Object(o.b)("p",null," The type propagation pass itself can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/0.0.1-nightly.99/lib/swid/ir/frontend/dart/util/propagateUnsatisfiedTypeParameters.dart"},"here"),". Tests for satisfying type parameters and propagating formals can be found ",Object(o.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk/blob/0.0.1-nightly.99/test/swid/typeFormals/unsatisfiedTypeFormals_test.dart"},"here"),". The extent of type formal closures can be controlled by the ",Object(o.b)("inlineCode",{parentName:"p"},"SwidClassTypeFormalClosureKind")," ",Object(o.b)("inlineCode",{parentName:"p"},"enum"),". SWID's Typescript backend uses ",Object(o.b)("inlineCode",{parentName:"p"},"SwidClassTypeFormalClosureKind.kNoCloseOverTypeFormalsInStaticMembers")," for propagation. Other options exist to preserve Dart's semantics should a future SWID backend need to."),Object(o.b)("p",null,' Hopefully this problem and its solution was as fun to read about as it was to discover and solve. Hydro-SDK is an endless fractal of problems like this. Hopefully I\'ll be able to make "Adventures in automatically binding Dart to Typescript" a series of posts.'))}c.isMDXComponent=!0}}]);