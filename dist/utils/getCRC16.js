"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCrc16 = void 0;
const getCrc16 = (str) => {
    let crc = 0xffff;
    for (let c = 0; c < str.length; c++) {
        crc ^= str.charCodeAt(c) << 8;
        for (var i = 0; i < 8; i++) {
            if (crc & 0x8000)
                crc = (crc << 1) ^ 0x1021;
            else
                crc = crc << 1;
        }
    }
    const result = crc & 0xffff;
    return result.toString(16).toUpperCase();
};
exports.getCrc16 = getCrc16;
