---
Title: 'setProofApi'
Keywords: 'setProofApi, polygon, sdk'
Description: 'Get started with maticjs'
---

# setProofApi

You will see some of APIS with **faster** suffix, which makes a process faster by using backend. It does so by using backend resources and faster rpc.

For making `faster apis` to work - you will have to host a [proof api](#) at your expenses.

After you have deployed the api, you can set the api url in matic.js by using `setProofApi`.

```
import { setProofApi } from '@maticnetwork/maticjs'

setProofApi(<api url>);
```

<div class="highlight">
We recommend to use faster apis, because some api particularly where proof is being generated does lots of RPC calls and so slow with public RPC. 
</div>