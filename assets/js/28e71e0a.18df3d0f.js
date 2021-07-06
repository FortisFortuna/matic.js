(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[562],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6328:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:10},l="Transfer ERC721",p={unversionedId:"api/ERC721/transferERC721Tokens",id:"api/ERC721/transferERC721Tokens",isDocsHomePage:!1,title:"Transfer ERC721",description:"`js",source:"@site/docs/api/ERC721/transferERC721Tokens.md",sourceDirName:"api/ERC721",slug:"/api/ERC721/transferERC721Tokens",permalink:"/matic.js/docs/api/ERC721/transferERC721Tokens",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/docs/api/ERC721/transferERC721Tokens.md",version:"current",lastUpdatedBy:"Aman",lastUpdatedAt:1625523537,formattedLastUpdatedAt:"7/5/2021",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docs",previous:{title:"Withdraw ERC721",permalink:"/matic.js/docs/api/ERC721/withdrawNFT"},next:{title:"Deposit Ethers",permalink:"/matic.js/docs/api/depositEthers"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transfer-erc721"},"Transfer ERC721"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"matic.transferERC721Tokens(token, user, tokenId, options);\n")),(0,o.kt)("p",null,"Transfer given ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenId")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"user"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"token")," must be valid ERC721 token address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user")," must be value account address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenId")," must be token amount in wei (string, not in Number)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," see ",(0,o.kt)("a",{parentName:"li",href:"#approveERC20TokensForDeposit"},"more infomation here"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parent")," must be boolean value. For token transfer on Main chain, use ",(0,o.kt)("inlineCode",{parentName:"li"},"parent: true")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"encodeAbi")," must be boolean value. For Byte code of transaction, use ",(0,o.kt)("inlineCode",{parentName:"li"},"encodeAbi: true"))))),(0,o.kt)("p",null,"This returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," object, which will be fulfilled when transaction gets confirmed (when receipt is generated)."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const user = <your-address> or <any-account-address>\n\nmatic.transferERC721Tokens('0x718Ca123...', user, '100006500000000000000', {\n  from: '0xABc578455...',\n\n  // For token transfer on Main network\n  // parent: true\n})\n")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);