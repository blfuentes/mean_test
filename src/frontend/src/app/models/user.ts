export class User {

    constructor(_id = '', name = '', age= 0) {
        this._id = _id;
        this.name = name;
        this.age = age;
    }


    _id: string;
    name: string;
    age: number;    
}
