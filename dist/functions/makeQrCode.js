"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeQrCode = void 0;
const makeQrCode = (pixCode, size = '300x300') => {
    return encodeURI(`https://chart.googleapis.com/chart?cht=qr&chl=${pixCode}&chs=${size}&chld=L|0`);
};
exports.makeQrCode = makeQrCode;
