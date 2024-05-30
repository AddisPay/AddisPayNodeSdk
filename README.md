## Installation

NPM

```bash
 npm i addispay
```

Yarn

```bash
yarn add addispay
```

## usage

Once the installation process is complete, we can import the sdk in any file.
```bash
import Addispay from "addispay-checkout";
```

inside your component

```bash
const client = new Addispay({});
const transaction_detail = {
        total_amount: "insert amount in birr",
        tx_ref: "transaction reference",
        currency: "your currency for local transaction use ETB",
        first_name: "first name",
        email: "email",
        phone_number: "phone number",
        last_name: "last name",
        session_expired: "expiration delay for this transaction to expire in minutes",
        nonce: unique key for this transaction,
        success_url: "success url",
        cancel_url: "cancel url",
        error_url: "error",
        order_detail: {your order detail
        },
        };

const makePayment=()=>{
        client.payNow(transaction_detail,"public key")
            .then((response) => {
                    window.open(response);
                    }
            });
        }
```

## Example
```bash
const client = new Addispay({});
const transaction_detail = {
        total_amount: "100",
        tx_ref: "2226787667",
        currency: "ETB",
        first_name: "abebe",
        email: "abebe@gmail.com",
        phone_number: "+251921309013",
        last_name: "kebede",
        session_expired: "5",
        nonce: new Date().toISOString(),
        order_detail: {
        items: "test item",
        description: "I am testing this",
        },

        };
const testPayment = () => {
        client.payNow(transaction_detail,"LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBd3dISjBtdmVMWXh3MDRvdGtxTVkKRXAwQzdkSkN1VmxJd3ZOOTRaalA0WS90YTBWNyt1S1JqRGJFRkl6SUZWR1YxYXZMcDhPZDNJbXVTZnBlT29kOApQbitjL2hGY0dSYnlqa2dhNitwZHZNZ21EWFlPZDUyR05OZFZHRm00eDhnUzdWTEgrZmJHUDM2aVgwdnE4TFIrCmhoa3RXdFpUWDM3SGRWWEZySkQxaERBc3dDemhQSVNSbS9rallGMkRObVFybGhwNXhSd1Q3VFBaNEdBVkpSdkkKSDZaMFpkT0t6cCtTUnJhVTUvNjdBS2VuNnBxUXZvcmh1U21QN0RXQVpBV3U2YVlIR0tBY0hWVEc0YmZHZHFSdgpPcUViZWhEeXpmS01lR3FFZzg4bC91czV5M0V3blRFNVllOTNtdHNYbUFrZElIdmpxWFNBemlWTVJHRlFmRlpaCk93SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K"
        )
        .then((res) => {
            window.open(res);             
        });
