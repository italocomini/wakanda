class AbstractError extends Error {
  constructor(statusCode, message) {
    if (new.target === AbstractError) throw new TypeError('Abstract class "AbstractError" cannot be instantiated directly.');
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = statusCode;
    Error.captureStackTrace(this, this.contructor);
  }
}

module.exports = AbstractError;
