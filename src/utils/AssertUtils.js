import InvalidArgumentError from '../errors/InvalidaArgumentError';

const assert = function (condition, message) {
	if (condition) {
		throw new InvalidArgumentError(message);
	}
};

export { assert };
