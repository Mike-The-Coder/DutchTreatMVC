class Shopper {

    firstName = "";
    lastName = "";

    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    showName() {
        alert('${this.firstName} ${this.lastName');

    }
}