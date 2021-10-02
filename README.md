## POC SPFx DashBoard com Redux 

Essa poc consulta uma lista de produtos com pnpjs e popula um objeto que é compartilhado através do redux em todo o SPA

### Lista necessária Products

Você precisar criar uma lista chamada Products com os seguintes campos:

```
name	          Texto com uma linha	
category	      Opção	(legumes, verduras, frutas)
description	    Texto com uma linha	
amount	        Número	
price	          Moeda	
hasExpiryDate	  Sim/Não
```

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.
