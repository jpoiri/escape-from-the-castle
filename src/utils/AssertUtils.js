import InvalidArgumentError from '../errors/InvalidaArgumentError';

export function assert(condition, message) {
	if (condition) {
		throw new InvalidArgumentError(message);
	}
};