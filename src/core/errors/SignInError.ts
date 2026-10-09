export class SignInError extends Error {
  status?: number;
  responseMessage?: string;

  constructor(message: string, status?: number, responseMessage?: string) {
    super(message);
    this.name = "SignInError";
    this.status = status;
    this.responseMessage = responseMessage;
  }
}
