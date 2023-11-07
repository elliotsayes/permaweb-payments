declare namespace _default {
    /**
     * @param {Env} env
     * @returns {Payments}
     */
    function init(env: Env): Payments;
}
export default _default;
export type Env = {
    warp: any;
    wallet: any;
    /**
     * - url for arweave graphql server
     */
    gateway: string;
};
export type HasLicense = (contract: string) => Promise<boolean>;
export type Licensed = (contract: string, addr: string) => Promise<boolean>;
export type Pay = (contract: string, address: string) => Promise<{
    ok: boolean;
}>;
export type Payments = {
    hasLicense: HasLicense;
    isLicensed: Licensed;
    pay: Pay;
};
