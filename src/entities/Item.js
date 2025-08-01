export default class Item {

	name = null;
	texture = null;
	frame = null;
    description = null;
    
    constructor(name, description, texture, frame) {
        this.name = name;
        this.description = description;
        this.texture = texture;
        this.frame = frame;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getTexture() {
        return this.texture;
    }

    setTexture(texture) {
        this.texture = texture;
    }

    setFrame(frame) {
        this.frame = frame;
    }

    getFrame() {
        return this.frame;
    }
}