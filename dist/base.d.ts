type Config = {
    baseUrl?: string;
};
export declare abstract class Base {
    private baseUrl;
    constructor(config: Config);
    protected encryptor(transaction_detail: any, public_key: string): Promise<any>;
    protected createOrder(paymentData: any, transaction_detail: any): Promise<any>;
    protected waterBillRequest(billingData: any): Promise<any>;
}
export {};
