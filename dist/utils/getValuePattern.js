"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValuePattern = void 0;
const getValuePattern = (id, value) => {
    const valueSize = value.length.toString().padStart(2, '0');
    return `${id}${valueSize}${value}`;
};
exports.getValuePattern = getValuePattern;
