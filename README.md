# pixout
Crie chaves pix copia e cola dinamicamente, com QrCode.

# Instalação
```bash
$ npm install pixout
```

# Uso

### Gerar código copia e cola
Você pode gerar o código copia e cola separadamente importando o método ``createCode()``, como no exemplo abaixo:

```js
import { createCode } from 'pixout'

const pixCode = createCode({
  pixKey: '1234',
  amount: '10.00',
  description: 'Pagamento Tal',
  receiverCity: 'SAO PAULO',
  receiverName: 'Fulano de Tal',
  identifier: 'pgto123',
})
```
O método ``createCode()`` recebe um objeto com as propriedades para gerar o código pix, as quais são opcionais ``amount``, ``description``, e ``identifier``

### Gerar QrCode
Tendo armazenado o código copia e cola numa constante ou variável, como no exemplo acima, basta importar o método ``makeQrCode()``, como no exemplo abaixo:

```js
import {createCode, makeQrCode} from 'pixout'

const pixCode = createCode({
  pixKey: '1234',
  amount: '10.00',
  description: 'Pagamento Tal',
  receiverCity: 'SAO PAULO',
  receiverName: 'Fulano de Tal',
  identifier: 'pgto123',
})

const qrCode = makeQrCode(pixCode, '200x200')

```
o método ``makeQrCode()`` recebebe dois argumentos, o primeiro refere-se ao código copia e cola, e o segundo, opcional, refere-se ao tamanho do QrCode em pixels. O tamanho padrão é 300x300


