function e(){return e=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},e.apply(this,arguments)}function r(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,t(e,r)}function t(e,r){return t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},t(e,r)}function o(e,r){try{var t=e()}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}var n,s=/*#__PURE__*/function(){function r(e){this.baseUrl=void 0,this.baseUrl=e.baseUrl||"https://merchant.addispay.et/encrypt"}var t=r.prototype;return t.encryptor=function(r,t){try{var n=this,s={data:{total_amount:r.total_amount,tx_ref:r.tx_ref,currency:r.currency,first_name:r.first_name,email:r.email?r.email:"test@gmail.com",phone_number:r.phone_number,last_name:r.last_name,session_expired:r.session_expired?r.session_expired:5e3,nonce:r.nonce,success_url:r.success_url?r.success_url:"https://checkout.addispay.et/",cancel_url:r.cancel_url?r.cancel_url:"http://localhost/cancel",error_url:r.error_url?r.error_url:"http://localhost/error/"},public_key:t},i=r.order_detail;return Promise.resolve(o(function(){return Promise.resolve(fetch("https://merchant.addispay.et/encrypt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).then(function(t){if(!t.ok)throw new Error("HTTP error! status: "+t.status);return Promise.resolve(t.json()).then(function(t){return Promise.resolve(n.createOrder(e({},t,{order_detail:i}),r))})})},function(e){throw console.error("Error in encryptor:",e),e}))}catch(e){return Promise.reject(e)}},t.createOrder=function(r,t){try{var n={data:e({},r.result,{order_detail:r.order_detail}),message:"gJkBFAJ+v5yPWvk4c149gV7b9pdwHcXZVa2nyQQQm8e4UB3VBFc6OpLi8rGfUHOezNMvIbkMQkJTrWZ/amxxRCMqhjKt33hKZDpRWXdQFRKitZY1+Fo+dEJslsYo4EG3SX/lQvXpVvkCZfWA+wRLmizoQ+c1YawAmHjQsQ6TQmSzoqEKJUzlDN902DEbD7cqA34jbpCbMd1XUpedSP780DYcxCDQjhJpYrQUJU67FuOKwHdD3zH//htnTI7D1NV4/DICRZngmiok+K+fI5aq3iKRN2xTuBl8vsFNtij2+AW8fuKHAi0Vj7wjo7qpoxUeduuLoi2+1hYL5J7D+1LW4g=="},s={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Auth:"af026758-109d-46f7-a48d-5048d977898b_1"},body:JSON.stringify(n)};return Promise.resolve(o(function(){return Promise.resolve(fetch("https://checkoutapi.addispay.et/api/v1/encrypted/receive-data",s)).then(function(e){if(console.log(e.status),!e.ok)throw new Error("Network response was not ok");return Promise.resolve(e.json()).then(function(e){return console.log({transaction_detail:t}),t.success_url?e.uuid:e.checkout_url+"/"+e.uuid})})},function(e){console.error("problem on creating order:",e)}))}catch(e){return Promise.reject(e)}},t.waterBillRequest=function(e){try{return Promise.resolve(o(function(){var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bill_id:e.bill_id,biller_id:"247580",serviceType:"Derash"})};return Promise.resolve(fetch("https://mi.addispay.et/api/v1/request_services",r)).then(function(e){return Promise.resolve(e.json()).then(function(e){return console.log(e),console.log({port:process.env.PORT}),e.message})})},function(e){return console.error("Error:",e),{Error:e}}))}catch(e){return Promise.reject(e)}},r}(),i=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var o=t.prototype;return o.payNow=function(e,r){return this.encryptor(e,r)},o.askBill=function(e){return this.waterBillRequest(e)},t}(s),c=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}return r(t,e),t}(s);n=c,[i].forEach(function(e){Object.getOwnPropertyNames(e.prototype).forEach(function(r){Object.defineProperty(n.prototype,r,Object.getOwnPropertyDescriptor(e.prototype,r)||Object.create(null))})}),module.exports=c;
