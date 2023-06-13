export interface CustomServerErrorType {
  statusCode?: number;
  message?: string;
  location?: string;
}

export default class CustomServerError extends Error {
  public statusCode: number;
  public location?: string;

  constructor({ statusCode = 500, message, location }: CustomServerErrorType) {
    super(message);

    this.statusCode = statusCode;
    this.location = location;
  }

  serializeError(): { message: string } | string {
    return {
      message: this.message,
    };
  }
}
