(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{opbm:function(e,t,a){"use strict";a.r(t);a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var n=a("SAVP"),l=a("TjRS"),i=a("ZFoC"),o=a("mXGw"),r=a.n(o),d=(a("26tY"),a("hJYY"),a("WzGj"),a("IKQL"),function(e){var t=e.fill;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"23",viewBox:"0 0 16 23"},r.a.createElement("path",{fill:t,fillRule:"nonzero",d:"M2.824 9.109V5.322C2.824 2.66 5.14.5 8 .5c2.859 0 5.176 2.161 5.176 4.822V9.11h1.05c.98 0 1.774.858 1.774 1.911v9.568c0 1.056-.793 1.912-1.773 1.912H1.773C.794 22.5 0 21.642 0 20.588V11.02C0 9.965.793 9.11 1.773 9.11h1.05zm-.942 1.913v9.565h12.236v-9.565H1.882zm9.412-1.913V5.322c0-1.566-1.44-2.909-3.294-2.909-1.855 0-3.294 1.341-3.294 2.91v3.786h6.588zM7.06 14.642c0-.529.418-.957.941-.957.52 0 .941.425.941.957v2.87a.947.947 0 0 1-.941.956.946.946 0 0 1-.941-.956v-2.87z"}))}),c=a("YJui"),s=a.n(c),u=function(e){var t=e.id,a=e.labelText,n=void 0===a?void 0:a,l=e.labelledBy,i=void 0===l?void 0:l,o=e.alternative,c=void 0!==o&&o,u=e.className,b=void 0===u?"":u,p=e.defaultValue,m=void 0===p?void 0:p,h=e.disabled,v=void 0!==h&&h,f=e.helperText,x=void 0===f?void 0:f,O=e.hideLabel,j=void 0!==O&&O,g=e.invalid,y=void 0!==g&&g,w=e.invalidText,T=void 0===w?void 0:w,N=e.onChange,_=void 0===N?function(){return null}:N,P=e.placeholder,E=void 0===P?"":P,C=e.readOnly,L=void 0!==C&&C,V=e.tooltipText,k=void 0===V?void 0:V,W=e.type,z=void 0===W?"text":W,D=e.value,I=void 0===D?void 0:D,J=n?r.a.createElement("label",{htmlFor:t,className:s.a.label+" "+(j?s.a.hiddenLabel:"")},n):null,M=k?r.a.createElement("div",null," ",k):null,B=x?r.a.createElement("div",{className:s.a.helperText},x):null,F=T?r.a.createElement("div",{className:s.a.invalidText},T):null,G=L?r.a.createElement("div",{className:s.a.inputIcon},r.a.createElement(d,{fill:"var("+(c?"--hds-theme-color-secondary":"--hds-ui-color-black-80")+")"})):null;return r.a.createElement("div",{className:"\n      "+(c?s.a.alternative:"")+"\n      "+(v?s.a.disabled:"")+"\n      "+(L?s.a.readOnly:"")+"\n      "+(y?s.a.invalid:"")+"\n      "+b},J,M,r.a.createElement("div",{className:s.a.inputWrapper},r.a.createElement("input",{className:s.a.input,defaultValue:m,"aria-labelledby":i,disabled:v,id:t,readOnly:L,onChange:_,placeholder:E,type:z,value:I}),G),B,F)};a("aD51");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return v}));var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/text_fields.mdx"}});var m={_frontmatter:p},h=l.a;function v(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(h,b({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"text-fields"},"Text Fields"),Object(n.b)("hr",null),Object(n.b)("p",null,"A text field is an input field that the user can interact with and input content and data. This component can be used for long and short form entries.\nIt has a range of options and supports several text formats including numbers.\nText fields are normally found within a form but can also be part of a modal or search. Common text input types include: usernames, descriptions, URLs, emails, addresses, and plain text searches."),Object(n.b)("h2",{id:"basic-usage"},"Basic usage"),Object(n.b)(i.c,{__position:0,__code:'<TextInput\n  labelText="label"\n  placeholder="placeholder text"\n  helperText="helper text"\n/>',__scope:{props:a,DefaultLayout:l.a,Playground:i.c,TextInput:u},mdxType:"Playground"},Object(n.b)(u,{labelText:"label",placeholder:"placeholder text",helperText:"helper text",mdxType:"TextInput"})),Object(n.b)("h2",{id:"general-guidelines"},"General guidelines"),Object(n.b)("p",null,"Allow the text input to reflect the length of the content you expect the user to enter."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Text input:")," When a single line of text is expected."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Text area:")," When the input is more than one sentence.")),Object(n.b)("p",null,"Where possible, add programmatic assistance. Detect and pre-fill inputs to reduce errors and save time. Use sentence-case for default values, detected values, and auto-completion text."),Object(n.b)("h2",{id:"content"},"Content"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Label: Should indicate what sort of information the field requires and should be short and concise. Put labels directly above their input and align them to the left."),Object(n.b)("li",{parentName:"ol"},"Placeholder text: Provides hints or examples of what to enter. Placeholder text disappears after the user begins entering data into the input and should not contain crucial information."),Object(n.b)("li",{parentName:"ol"},"Helper text: Gives context about a field's input."),Object(n.b)("li",{parentName:"ol"},"Validation marker: Warns in case the input value isn’t valid.")),Object(n.b)("h2",{id:"best-practises"},"Best practises"),Object(n.b)("p",null,"Text fields should:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"be clear with a meaningful label, 1-3 word"),Object(n.b)("li",{parentName:"ul"},"be labeled as ",Object(n.b)("em",{parentName:"li"},"optional")," when something is not required"),Object(n.b)("li",{parentName:"ul"},"only ask for information which is really needed")))}v&&v===Object(v)&&Object.isExtensible(v)&&!v.hasOwnProperty("__filemeta")&&Object.defineProperty(v,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/text_fields.mdx"}}),v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-text-fields-mdx-1cafe67b83d57d72918c.js.map