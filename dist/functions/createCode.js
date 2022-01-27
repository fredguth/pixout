"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCode = void 0;
const dataBcb_1 = require("../databcb/dataBcb");
const utils_1 = require("../utils");
const handleAmount = (amount) => {
    if (!amount) {
        return '';
    }
    else {
        return (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.transactionAmountId, amount);
    }
};
const handleDescription = (description) => {
    if (!description) {
        return '';
    }
    else {
        return (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.merchantAccountInformationDescriptionId, description);
    }
};
const getMerchantAccountInformation = (pixKey, description) => {
    const guiPattern = (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.merchantAccountInformationGuiId, dataBcb_1.dataBcb.merchantAccountInformationGuiValue);
    const keyPattern = (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.merchantAccountInformationKeyId, pixKey);
    const descriptionPattern = handleDescription(description);
    return (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.merchantAccountInformationPixId, `${guiPattern}${keyPattern}${descriptionPattern}`);
};
const getAdditionalDatField = (identifier) => {
    const transactionId = (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.additionalDataFieldTxId, identifier || '***');
    return (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.additionalDataFieldId, transactionId);
};
const createCode = (options) => {
    const pixCode = (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.payloadFormatIndicatorId, dataBcb_1.dataBcb.payloadFormatIndicatorValue) +
        getMerchantAccountInformation(options.pixKey, options.description) +
        (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.merchantCategoryCodeId, dataBcb_1.dataBcb.merchantCategoryCodeValue) +
        (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.transactionCurrencyId, dataBcb_1.dataBcb.transactionCurrencyValue) +
        handleAmount(options.amount) +
        (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.countryCodeId, dataBcb_1.dataBcb.countryCodeValue) +
        (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.merchantNameId, options.receiverName) +
        (0, utils_1.getValuePattern)(dataBcb_1.dataBcb.merchantCityId, options.receiverCity) +
        getAdditionalDatField(options.identifier) +
        dataBcb_1.dataBcb.crc16Id +
        '04';
    return pixCode + (0, utils_1.getCrc16)(pixCode);
};
exports.createCode = createCode;
