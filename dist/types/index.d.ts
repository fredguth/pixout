export * from './functions';
export * from './models/PixOptions';
declare const pixout: {
    createCode: (options: import("./models/PixOptions").PixOptions) => string;
    makeQrCode: (pixCode: string, size?: string) => string;
};
export default pixout;
