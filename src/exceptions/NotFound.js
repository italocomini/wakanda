const AbstractError = require('./AbstractError');

class NotFound extends AbstractError {
  constructor(message = 'Resource not found') {
    super(404, message);
  }
}

module.exports = NotFound;
