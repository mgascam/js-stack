/**
 * Created by miguel on 5/02/17.
 */
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Wah wah, I am ${this.name}`;
    }
}

export default Dog;
