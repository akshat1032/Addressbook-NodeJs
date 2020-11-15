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
exports.deleteContact = (name, addressBook) => {
    let found = addressBook.find((contact) => contact.firstName == name);
    if (found == undefined)
        console.log("No such contact");
    else {
        addressBook.pop(addressBook.find((contact) => contact.firstName == name));
        console.log("Deleted successfully!")
    }
}
exports.countContacts = (count) => count++;

exports.searchContactInCity = (name, addressBook) => {
    let cityName = prompt("Enter city name: ");
    let contactByCity = addressBook.filter(contact => contact.city == cityName).find(contact => contact.firstName == name);
    console.log("Contact found in given city:", contactByCity);
}
exports.searchContactInState = (name, addressBook) => {
    let stateName = prompt("Enter state name: ");
    let contactByState = addressBook.filter(contact => contact.state == stateName).find(contact => contact.firstName == name);
    console.log("Contact found in given state: ", contactByState);
}
exports.viewContactByCity = (addressBook) => {
    personByCity = addressBook.reduce((h, contact) => Object.assign(h, {
        [contact.city]: (h[contact.city] || []).concat({
            firstName: contact.firstName, lastName: contact.lastName
        })
    }), {});
    console.log(JSON.stringify(personByCity));
}
exports.viewContactByState = (addressBook) => {
    personByState = addressBook.reduce((h, contact) => Object.assign(h, {
        [contact.state]: (h[contact.state] || []).concat({
            firstName: contact.firstName, lastName: contact.lastName
        })
    }), {});
    console.log(JSON.stringify(personByState));
}