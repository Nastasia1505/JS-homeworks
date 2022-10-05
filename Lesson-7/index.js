let Contacts = function () {
    this.get = function () {
        this.name1 = prompt('What is your name?');
        this.age = +prompt('How old are you?');
        this.phone = prompt('What is your phone number?');
        this.email = prompt('Enter your email');

        this.access();
    };

    this.access = function () {
        if (this.ade > 18 ) {
        } else {
            alert('Access is denied')      // Not work
        }
        if (this.phone == 13) { 

        }
        else {
            alert('Wrong number')            // Bad work (13 elements)
        }
        if (this.email) {

        }
        this.contact();
    };

    this.contact = function () {
        document.write('Name: ' + this.name1 + '<br>' + 'Age: ' + this.age + '<br>' + 'Phone number: ' + this.phone + '<br>' + 'Email: ' + this.email)
    };
}
this.allContacts = function () {

};

let contacts = new Contacts();
contacts.get();