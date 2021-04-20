(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),s=(a(0),a(110)),r={slug:"expressing-inexpressible-constant-values",title:"Expressing Inexpressible Constant Values",author:"Chris Gibb",author_title:"Recovering Structural Typing Enthusiast",author_url:"https://github.com/chgibb",author_image_url:"https://avatars.githubusercontent.com/u/18079458?s=400&v=4",tags:["flutter","typescript","react-native"]},o={permalink:"/hydro-sdk.io/blog/expressing-inexpressible-constant-values",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-04-03-expressing-inexpressible-constant-values.md",source:"@site/blog/2021-04-03-expressing-inexpressible-constant-values.md",title:"Expressing Inexpressible Constant Values",description:"Adventures in automatically binding Dart to Typescript.",date:"2021-04-03T00:00:00.000Z",formattedDate:"April 3, 2021",tags:[{label:"flutter",permalink:"/hydro-sdk.io/blog/tags/flutter"},{label:"typescript",permalink:"/hydro-sdk.io/blog/tags/typescript"},{label:"react-native",permalink:"/hydro-sdk.io/blog/tags/react-native"}],readingTime:4.72,truncated:!0,nextItem:{title:"Closing Over Type Formals, Satisfying Type Parameters",permalink:"/hydro-sdk.io/blog/closing-over-type-formals-satisying-type-parameters"}},l=[],c={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Adventures in automatically binding Dart to Typescript."),Object(s.b)("p",null,"This was originally posted here: ",Object(s.b)("a",{parentName:"p",href:"https://chgibb.github.io/expressing-inexpressible-constant-values/"},"https://chgibb.github.io/expressing-inexpressible-constant-values/")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk"},"Hydro-SDK"),' is a project with one large, ambitious goal. "Become React Native for Flutter".',Object(s.b)("br",{parentName:"p"}),"\n","It aims to do that by:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Decoupling the API surface of Flutter from  the Dart programming language."),Object(s.b)("li",{parentName:"ol"},"Decoupling the development time experience of Flutter from the Dart programming language."),Object(s.b)("li",{parentName:"ol"},"Providing first-class support for over-the-air distribution of code."),Object(s.b)("li",{parentName:"ol"},"Providing an ecosystem of packages from ",Object(s.b)("inlineCode",{parentName:"li"},"pub.dev"),", automatically projected to supported languages and published to other package systems.")),Object(s.b)("p",null,"I wrote previously about the past and future of ",Object(s.b)("a",{parentName:"p",href:"https://github.com/hydro-sdk/hydro-sdk"},"Hydro-SDK")," ",Object(s.b)("a",{parentName:"p",href:"https://chgibb.github.io/one-year-of-hydro-sdk/"},"here"),". "),Object(s.b)("p",null,"Structured Wrapper and Interface generator for Dart (SWID) is a component of Hydro-SDK supporting goals 1 and 4. SWID takes as input a Dart package (like ",Object(s.b)("inlineCode",{parentName:"p"},"package:flutter"),") and produces as output Typescript files representing the input Dart package's public API and Dart files to allow for gluing Typescript code written against that API together into a host app that can be run on Hydro-SDK's Common Flutter Runtime (CFR). This process is referred to as \"language projection\". "),Object(s.b)("p",null,"Representing Dart constructs in Typescript has come with many challenges. One recently encountered is how to express constant values which are composed of private symbols. "),Object(s.b)("p",null,"Every Flutter programmer should be familiar with the concept of ",Object(s.b)("inlineCode",{parentName:"p"},"const")," in Dart. It\u2019s used perhaps most prolifically in Flutter\u2019s Material and Cupertino design icons APIs. For instance, the ",Object(s.b)("inlineCode",{parentName:"p"},"Icons")," class in Flutter\u2019s ",Object(s.b)("inlineCode",{parentName:"p"},"material"),' library contains thousands of static fields that appear like the following which represents the "directions boat" material design icon: '),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-dart"},"//package:flutter/lib/src/material/icons.dart\nclass Icons {\n    Icons._();\n    //abridged\n    static const IconData directions_boat = IconData(0xe6b9, fontFamily: 'MaterialIcons'); \n}\n")),Object(s.b)("p",null,"Describing how Flutter ",Object(s.b)("inlineCode",{parentName:"p"},"IconData")," instances, font ligatures and font loading work is out of scope of this article."),Object(s.b)("p",null,"When performing language projection of ",Object(s.b)("inlineCode",{parentName:"p"},"package:flutter"),", SWID will emit the above declaration as the following:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},'//runtime/flutter/material/icons.ts\nimport { IconData } from "./../widgets/iconData";\nexport class Icons {\n    //abridged\n    public static directions_boat = new IconData(0xe6b9, {\n        fontFamily: "MaterialIcons",\n    });\n}\n')),Object(s.b)("p",null,"SWID will perform a simple syntax transform for the ",Object(s.b)("inlineCode",{parentName:"p"},"Icons")," class and ",Object(s.b)("inlineCode",{parentName:"p"},"directions_boat")," field while making sure the translation unit (",Object(s.b)("inlineCode",{parentName:"p"},"flutter/material/icons.ts"),") imports required symbols (in this case, simply ",Object(s.b)("inlineCode",{parentName:"p"},"IconData"),"). "),Object(s.b)("p",null,"The only area of language projection that SWID aims to describe one-to-one between Dart and Typescript is ",Object(s.b)("inlineCode",{parentName:"p"},"const")," values. This is done to free host applications from having to compile every possible constant value that guest code might want to access. This approach works great for constant values that consist simply of public symbols (like ",Object(s.b)("inlineCode",{parentName:"p"},"IconData")," above), and primitive values."),Object(s.b)("p",null,"This becomes trickier however when fields consist of private symbols. For instance, the ",Object(s.b)("inlineCode",{parentName:"p"},"Rect")," class from ",Object(s.b)("inlineCode",{parentName:"p"},"dart:ui")," has some static constant fields which are declared as the following:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-dart"},"//package:sky_engine/ui/geometry.dart\nclass Rect {\n    static const Rect zero = Rect.fromLTRB(0.0, 0.0, 0.0, 0.0);\n    static const double _giantScalar = 1.0E+9; \n    static const Rect largest = Rect.fromLTRB(-_giantScalar, -_giantScalar, _giantScalar, _giantScalar);\n}\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"zero")," field references a public static method, so it is fine to perform a simple syntax transform. At first glance, the ",Object(s.b)("inlineCode",{parentName:"p"},"largest")," field appears impossible to express in Typescript. There is no way to expose the ",Object(s.b)("inlineCode",{parentName:"p"},"_giantScalar")," symbol in a way that it can be accessed from Typescript. "),Object(s.b)("p",null,"SWID has enough semantic understanding to understand that the reference to ",Object(s.b)("inlineCode",{parentName:"p"},"_giantScalar")," from ",Object(s.b)("inlineCode",{parentName:"p"},"largest")," is not only a field on ",Object(s.b)("inlineCode",{parentName:"p"},"Rect")," but that it's also just a primitive. Therefore, both are safe to emit."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"//runtime/dart/ui/rect.ts\nexport class Rect {\n    public static zero = Rect.fromLTRB(0.0, 0.0, 0.0, 0.0);\n    private static _giantScalar = 1.0e9;\n    public static largest = Rect.fromLTRB(\n        -Rect._giantScalar,\n        -Rect._giantScalar,\n        Rect._giantScalar,\n        Rect._giantScalar\n    );\n}\n")),Object(s.b)("p",null,'SWID\'s semantic understanding of the Dart code it is projecting allow it to categorize constant values into two categories: "expressible" and "inexpressible". Constant values which can be decomposed into references to primitives or public symbols are considered to be "expressible". In the ',Object(s.b)("inlineCode",{parentName:"p"},"Rect")," example above, ",Object(s.b)("inlineCode",{parentName:"p"},"_giantScalar"),", despite being private, decomposes into a reference to a primitive which allows ",Object(s.b)("inlineCode",{parentName:"p"},"largest")," to decompose into primitive references. ",Object(s.b)("inlineCode",{parentName:"p"},"largest")," referencing ",Object(s.b)("inlineCode",{parentName:"p"},"_giantScalar")," causes ",Object(s.b)("inlineCode",{parentName:"p"},"_giantScalar")," to be emitted in the final translation unit."),Object(s.b)("p",null,"Consider the ",Object(s.b)("inlineCode",{parentName:"p"},"Endian")," class from ",Object(s.b)("inlineCode",{parentName:"p"},"dart:typed_data"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-dart"},"//package:sky_engine/typed_data/typed_data.dart\nclass Endian {\n  final bool _littleEndian;\n  const Endian._(this._littleEndian);\n\n  static const Endian big = const Endian._(false);\n  static const Endian little = const Endian._(true);\n  //abridged\n}\n")),Object(s.b)("p",null,"Here, ",Object(s.b)("inlineCode",{parentName:"p"},"big")," and ",Object(s.b)("inlineCode",{parentName:"p"},"little"),' both include references to a private constructor. This can\'t be further decomposed into an expressible form and so both fields are considered to be "inexpressible". SWID expresses "inexpressible" constant values by emitting code like the following:'),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"//runtime/dart/typed_data/endian.ts\ndeclare const dart: {\n    typed_data: {\n        endianBig: (this: void) => Endian;\n        endianLittle: (this: void) => Endian;\n    };\n};\n//abridged\nexport class Endian {\n    public static big = dart.typed_data.endianBig();\n    public static little = dart.typed_data.endianLittle();\n}\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"declare"),' block is what SWID calls a "virtual machine declaration". This is a typed description of the environment that the code in the given translation unit expects. "virtual machine declarations" in SWID\'s Typescript backend and their associated "namespace symbol declarations" that fulfill their expectations in SWID\'s Dart backend are how SWID expresses API bindings not just for "inexpressible" constant values but for all methods and fields. This binding system will be the subject of a future blog post.'),Object(s.b)("p",null,"As seen above, ",Object(s.b)("inlineCode",{parentName:"p"},"big")," and ",Object(s.b)("inlineCode",{parentName:"p"},"little")," are expressed as calls to their associated declarations. Unfortunately, this scheme prevents the host application from ever being able to tree-shake away the definitions of ",Object(s.b)("inlineCode",{parentName:"p"},"big")," and ",Object(s.b)("inlineCode",{parentName:"p"},"little")," but still allows guest code access to these fields."),Object(s.b)("p",null,"Hopefully this problem and its solution was as fun to read about as it was to discover and solve. Hydro-SDK is an endless fractal of problems like this. Hopefully I\u2019ll be able to make \u201cAdventures in automatically binding Dart to Typescript\u201d a continuing series of posts."))}p.isMDXComponent=!0}}]);