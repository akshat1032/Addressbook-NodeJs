const ContactRef = require("./Contact");
exports.addContact = (firstName, lastName, address, city, state, zip, phone, emailId) => {
    try {
        let contactObj = new ContactRef.Contact(firstName, lastName, address, city, state, zip, phone, emailId);
        return contactObj;
    }
    catch (e) {
        console.error("Error occurred : ", e);
    }
}
exports.editContact = (name, addressBook) => {
    let newName = prompt("Enter new name: ");
    let found = addressBook.find((contact) => contact.firstName == name);
    if (found == undefined) {
        console.log("No such contact");
    }
    else {
        addressBook.find((contact) => contact.firstName == name).firstName = newName;
    }
}