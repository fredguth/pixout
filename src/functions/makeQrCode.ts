export const makeQrCode = (pixCode: string, size: string = '300x300') => {
  return encodeURI(
    `https://chart.googleapis.com/chart?cht=qr&chl=${pixCode}&chs=${size}&chld=L|0`
  )
}
