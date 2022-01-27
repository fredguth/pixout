export * from './functions'
export * from './models/PixOptions'

import { createCode, makeQrCode } from './functions'

const pixout = {
  createCode,
  makeQrCode,
}

export default pixout
