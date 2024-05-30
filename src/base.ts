type Config = {
  baseUrl?: string;
};
export abstract class Base {
  private baseUrl: string;
  constructor(config: Config) {
    this.baseUrl = config.baseUrl || "https://merchant.addispay.et/encrypt";
  }
  protected async encryptor(
    transaction_detail: any,
    public_key: string,
  ): Promise<any> {
    const encryptData = {
      data: {
        total_amount: transaction_detail.total_amount,
        tx_ref: transaction_detail.tx_ref,
        currency: transaction_detail.currency,
        first_name: transaction_detail.first_name,
        email: transaction_detail.email ? transaction_detail.email : 'test@gmail.com',
        phone_number: transaction_detail.phone_number,
        last_name: transaction_detail.last_name,
        session_expired: transaction_detail.session_expired ? transaction_detail.session_expired : 5000,
        nonce: transaction_detail.nonce,
        success_url: transaction_detail.success_url ? transaction_detail.success_url : "https://localhost/success",
        cancel_url: transaction_detail.cancel_url ? transaction_detail.cancel_url : "http://localhost/cancel",
        error_url: transaction_detail.error_url ? transaction_detail.error_url : "http://localhost/error/",

      }, public_key: public_key
    };
    const order_detail = transaction_detail.order_detail

    try {
      const response = await fetch("https://merchant.addispay.et/encrypt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(encryptData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const final = await response.json();
      const result = await this.createOrder({ ...final, order_detail: order_detail }, transaction_detail);
      return result;
    } catch (error) {
      console.error("Error in encryptor:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }

  protected async createOrder(paymentData: any, transaction_detail: any) {
    const url = "https://checkoutapi.addispay.et/api/v1/encrypted/receive-data";
on    cst data = {
      data: { ...paymentData.result, order_detail: paymentData.order_detail },
      message:
        "gJkBFAJ+v5yPWvk4c149gV7b9pdwHcXZVa2nyQQQm8e4UB3VBFc6OpLi8rGfUHOezNMvIbkMQkJTrWZ/amxxRCMqhjKt33hKZDpRWXdQFRKitZY1+Fo+dEJslsYo4EG3SX/lQvXpVvkCZfWA+wRLmizoQ+c1YawAmHjQsQ6TQmSzoqEKJUzlDN902DEbD7cqA34jbpCbMd1XUpedSP780DYcxCDQjhJpYrQUJU67FuOKwHdD3zH//htnTI7D1NV4/DICRZngmiok+K+fI5aq3iKRN2xTuBl8vsFNtij2+AW8fuKHAi0Vj7wjo7qpoxUeduuLoi2+1hYL5J7D+1LW4g==",
    };


    // Define the request options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Auth: "af026758-109d-46f7-a48d-5048d977898b_1",
      },
      body: JSON.stringify(data), // Convert data to JSON string
    };

    // Send the POST request
    try {
      const response = await fetch(url, options);
      console.log(response.status);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json(); // Parse response body as JSON
      console.log({ transaction_detail: transaction_detail })
      // console.log("Response:", responseData);
      if (transaction_detail.success_url) {
        return responseData.uuid;
      } else {
        return `${responseData.checkout_url}/${responseData.uuid}`;
      }
    } catch (error) {
      console.error("problem on creating order:", error); // Handle errors
    }
  }

  protected async waterBillRequest(billingData: any): Promise<any> {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bill_id: billingData.bill_id,
          biller_id: "247580",
          serviceType: "Derash",
        }),
      };

      const response = await fetch(
        "https://mi.addispay.et/api/v1/request_services",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      console.log({ port: process.env.PORT });
      return data.message;
    } catch (error) {
      console.error("Error:", error);
      return { Error: error };
    }
  }
}
