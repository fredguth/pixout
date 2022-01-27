import { createCode, makeQrCode } from './index'

const pixCode = createCode({
  pixKey: 'b9d1854d-8c6d-48ae-af24-60a8238255f5',
  amount: '65.78',
  description: 'Topados',
  receiverCity: 'SAO PAULO',
  receiverName: 'Opa Silva',
  identifier: '',
})

const image = makeQrCode(pixCode)

console.log(pixCode, image)
