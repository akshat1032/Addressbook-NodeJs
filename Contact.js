const namePattern = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
const addressPattern = RegExp('^[A-Za-z0-9/,]{4,}$');
const cityStateNamePattern = RegExp('^[a-zA-Z]{4,}$');
const zipPattern = RegExp('^[1-9]{1}[0-9]{5}$');
const phonePattern = RegExp('^[1-9]{1}[0-9]{9}$');
const emailIdPattern = RegExp('^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$');
export class Contact {

    //constructor
    constructor(...contactDetails) {
        if (!namePattern.test(contactDetails[0])) throw "First Name is incorrect"
        {
            this.firstName = contactDetails[0];
        }
        if (!namePattern.test(contactDetails[1])) throw "Last Name is incorrect"
        {
            this.lastName = contactDetails[1];
        }
        if (!addressPattern.test(contactDetails[2])) throw "Address is incorrect"
        {
            this.address = contactDetails[2];
        }
        if (!cityStateNamePattern.test(contactDetails[3])) throw "City is incorrect"
        {
            this.city = contactDetails[3];
        }
        if (!cityStateNamePattern.test(contactDetails[4])) throw "State is incorrect"
        {
            this.state = contactDetails[4];
        }
        if (!zipPattern.test(contactDetails[5])) throw "Zip is incorrect"
        {
            this.zip = contactDetails[5];
        }
        if (!phonePattern.test(contactDetails[6])) throw "Phone Number is incorrect"
        {
            this.phoneNumber = contactDetails[6];
        }
        if (!emailIdPattern.test(contactDetails[7])) throw "Email Id is incorrect"
        {
            this.emailId = contactDetails[7];
        }
    }

     //converting JSON to String
     toString(){
        return "First Name: "+this.firstName+" Last Name: "+this.lastName+" Address: "+this.address+" City: "+this.city+
        " State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}