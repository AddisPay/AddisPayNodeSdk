import { Base } from "src/base";
export declare class Posts extends Base {
    payNow(transaction_detail: any, public_key: string): Promise<any>;
    askBill(billingData: any): Promise<any>;
}
