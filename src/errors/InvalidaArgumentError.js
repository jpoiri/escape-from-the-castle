/**
 * This class represents an invalid argument error
 * @extends Error
 * @author Justin Poirier
 * @copyright 2025
 */
export default class InvalidArgumentError extends Error {
    /**
     * Constructor
     * @param {string} message The error message 
     */
    constructor(message) {
        super(message);
        this.name = 'InvalidArgumentError'
    }
}