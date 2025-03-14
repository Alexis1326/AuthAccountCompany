export class ApiResponseDto {
  responseCode: number;
  messageCode: string;
  message: string;
  legacy: string;
  transactionId: string;
  timestamp: string;
  data: {
    cuentaPadre: string;
    cuentaHija: string;
  };

  constructor(
    responseCode: number,
    messageCode: string,
    message: string,
    legacy: string,
    transactionId: string,
    timestamp: string,
    data: { cuentaPadre: string; cuentaHija: string },
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
