import { PixOptions } from '../models'
import { dataBcb } from '../databcb/dataBcb'
import { getCrc16, getValuePattern } from '../utils'

const handleAmount = (amount: PixOptions['amount']) => {
  if (!amount) {
    return ''
  } else {
    return getValuePattern(dataBcb.transactionAmountId, amount)
  }
}

const handleDescription = (description: PixOptions['description']) => {
  if (!description) {
    return ''
  } else {
    return getValuePattern(
      dataBcb.merchantAccountInformationDescriptionId,
      description
    )
  }
}

const getMerchantAccountInformation = (
  pixKey: PixOptions['pixKey'],
  description: PixOptions['description']
) => {
  const guiPattern = getValuePattern(
    dataBcb.merchantAccountInformationGuiId,
    dataBcb.merchantAccountInformationGuiValue
  )

  const keyPattern = getValuePattern(
    dataBcb.merchantAccountInformationKeyId,
    pixKey
  )

  const descriptionPattern = handleDescription(description)

  return getValuePattern(
    dataBcb.merchantAccountInformationPixId,
    `${guiPattern}${keyPattern}${descriptionPattern}`
  )
}

const getAdditionalDatField = (identifier: PixOptions['identifier']) => {
  const transactionId = getValuePattern(
    dataBcb.additionalDataFieldTxId,
    identifier || '***'
  )

  return getValuePattern(dataBcb.additionalDataFieldId, transactionId)
}

export const createCode = (options: PixOptions) => {
  const pixCode =
    getValuePattern(
      dataBcb.payloadFormatIndicatorId,
      dataBcb.payloadFormatIndicatorValue
    ) +
    getMerchantAccountInformation(options.pixKey, options.description) +
    getValuePattern(
      dataBcb.merchantCategoryCodeId,
      dataBcb.merchantCategoryCodeValue
    ) +
    getValuePattern(
      dataBcb.transactionCurrencyId,
      dataBcb.transactionCurrencyValue
    ) +
    handleAmount(options.amount) +
    getValuePattern(dataBcb.countryCodeId, dataBcb.countryCodeValue) +
    getValuePattern(dataBcb.merchantNameId, options.receiverName) +
    getValuePattern(dataBcb.merchantCityId, options.receiverCity) +
    getAdditionalDatField(options.identifier) +
    dataBcb.crc16Id +
    '04'

  return pixCode + getCrc16(pixCode)
}
