import InvalidArgumentError from '../errors/InvalidaArgumentError';

/**
 * Assert condition amd throw error message if condition is not met
 * @param {boolean} condition The condition
 * @param {string} message The error message
 */
export function assert(condition, message) {
	if (condition) {
		throw new InvalidArgumentError(message);
	}
};