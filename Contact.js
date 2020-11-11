export class Contact {

    //constructors
    constructor(...contactDetails) {
        this.firstName =contactDetails[0]
        this.lastName =contactDetails[1]
        this.address =contactDetails[2]
        this.city =contactDetails[3]
        this.state =contactDetails[4]
        this.zip =contactDetails[5]
        this.phoneNumber =contactDetails[6]
        this.emailId =contactDetails[7]
    }

     //converting JSON to String
     toString(){
        return "First Name: "+this.firstName+" Last Name: "+this.lastName+" Address: "+this.address+" City: "+this.city+
        " State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}