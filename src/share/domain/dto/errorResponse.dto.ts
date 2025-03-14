export class ErrorResponseDto {
  responseCode: number;
  messageCode: number;
  message: string;
  legacy: string;
  transactionId: string;
  timestamp: string;
  data: {
    Code: number;
    Message: string;
  };

  constructor(
    responseCode: number,
    messageCode: number,
    message: string,
    legacy: string,
    transactionId: string,
    timestamp: string,
    data: { Code: number; Message: string },
  ) {
    this.responseCode = responseCode;
    this.messageCode = messageCode;
    this.message = message;
    this.legacy = legacy;
    this.transactionId = transactionId;
    this.timestamp = timestamp;
    this.data = data;
  }
}