import {Base} from "src/base"
export class Posts extends Base{
    

    payNow(transaction_detail:any,public_key:string){
        return this.encryptor(transaction_detail,public_key);
    }

    askBill(billingData:any){
        return this.waterBillRequest(billingData);
    }
  
}