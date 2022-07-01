import { LightningElement,api } from 'lwc';

export default class LineV extends LightningElement {
    privateName;
    @api get name() {
        return this.privateName;
    }
    set name(value) {
        this.privateName = value;
        this.setAttribute('name', this.privateName);
        this.setAttribute('class', this.privateName);
    }
}