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