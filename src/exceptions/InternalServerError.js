const AbstractError = require('./AbstractError');

class InternalServerError extends AbstractError {
  constructor(message = 'Internal server error') {
    super(500, message);
  }
}

module.exports = InternalServerError;
