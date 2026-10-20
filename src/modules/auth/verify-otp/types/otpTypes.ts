export type VerifyOtpBody  = {email:string ; otp:string} ;

export type ResendOtpBody  = {email:string};

export type OtpResponse = {status:number ; message:string} ;