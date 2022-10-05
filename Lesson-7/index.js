let Contacts = function () {
    this.get = function () {
        this.name1 = prompt('What is your name?');
        this.age = +prompt('How old are you?');
        this.phone = prompt('What is your phone number?');
        this.email = prompt('Enter your email');

        this.access();
    };

    this.access = function () {
        while(this.age){
        if (this.age < 18) {
            alert('Access is denied')
            this.age = +prompt("How old are you?");
            continue;
        } else {
            if (this.age % 2 == 0 || this.age % 2 == 1) {
                break;
            } else {
                alert('Age entered incorrectly')
                this.age = +prompt("How old are you?");
              continue;
            }
        }
    }

        while (this.phone.length !== 13 || isNaN(this.phone)) {
            alert('Wrong number');
            this.phone = prompt('What is your phone number?');
            continue;
        }

        // if (this.email) {

        // }
        this.contact();
    };

    this.contact = function () {
        document.write('Name: ' + this.name1 + '<br>' + 'Age: ' + this.age + '<br>' + 'Phone number: ' + this.phone + '<br>' + 'Email: ' + this.email)
    };
}


let contacts = new Contacts();
contacts.get();
let contacts1 = new Contacts();
let contacts2 = new Contacts();