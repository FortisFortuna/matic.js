(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[750],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5514:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:5},p="Get Transfer Signature",u={unversionedId:"api/getTransferSignature",id:"api/getTransferSignature",isDocsHomePage:!1,title:"Get Transfer Signature",description:"`js",source:"@site/docs/api/getTransferSignature.md",sourceDirName:"api",slug:"/api/getTransferSignature",permalink:"/matic.js/docs/api/getTransferSignature",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/docs/api/getTransferSignature.md",version:"current",lastUpdatedBy:"Aman",lastUpdatedAt:1625523537,formattedLastUpdatedAt:"7/5/2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Deposit Ethers",permalink:"/matic.js/docs/api/depositEthers"},next:{title:"Transfer with Signature",permalink:"/matic.js/docs/api/transferWithSignature"}},s=[],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-transfer-signature"},"Get Transfer Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"matic.getTransferSignature(toSell, toBuy);\n")),(0,o.kt)("p",null,"Off-chain signature generation for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/a9b77252ece25adcd3f74443411821883bb970e6/contracts/child/BaseERC20.sol#L35"},"transferWithSig")," function call"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"toSell")," object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token"),": address of token owned,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": amount/tokenId of the token to sell,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expiry"),": expiry (block number after which the signature should be invalid),"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"orderId"),": a random 32 byte hex string,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spender"),": the address approved to execute this transaction"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"toBuy")," object"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token"),": address of token to buy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": amount/tokenId of token to buy"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"options")," see ",(0,o.kt)("a",{parentName:"p",href:"#approveERC20TokensForDeposit"},"more infomation here")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from"),": owner of the token (toSell)")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// sell order\nlet toSell = {\n  token: token2,\n  amount: value2,\n  expiry: expire,\n  orderId: orderId,\n  spender: spender,\n};\n\n// buy order\nlet toBuy = {\n  token: token1,\n  amount: value1,\n};\n\nconst sig = await matic.getTransferSignature(toSell, toBuy, {\n  from: tokenOwner,\n});\n")))),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);