let Contacts = function () {
    this.get = function () {
        this.name1 = prompt('What is your name?');
        this.age = +prompt('How old are you?');
        this.phone = prompt('What is your phone number?');
        this.email = prompt('Enter your email');

        this.access();
    };

    this.access = function () {
if (this.ade<18){
    alert('Access is denied')
}
if (this.phone !== '+375'){
    alert('Wrong number')
}

    };

    this.contact = function () {

    };
}
    this.allContacts = function () {

    };

let contacts = new Contacts();
contacts.get();