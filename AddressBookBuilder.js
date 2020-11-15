const ServiceRef = require("./AddressBookService");
const ContactRef = require("./Contact");
const prompt = require('prompt-sync')();
let addressBook = new Array();
let choice = 0;
do {
    choice = Number(prompt("Enter :\n1-Add contact \n2-Edit Contact \n3-Delete contact \n4-Count contact \n5-Search person by city or state"
        + "\n6-View person by city or state\n7-Count person by city or state"
        + "\n8-Sort person by name\n0-Exit : \n "));
    switch (choice) {
        case 1:
            let firstName = prompt("Enter the first name :");
            let lastName = prompt("Enter the last name :");
            if (addressBook.find((contact) => (contact.firstName + contact.lastName) == (firstName + lastName))) {
                console.log("Person is present in address book");
                return;
            }
            let address = prompt("Enter the address :");
            let city = prompt("Enter the city:");
            let state = prompt("Enter the state :");
            let zip = prompt("Enter the zip code :")
            let phone = prompt("Enter the phone Number :");
            let emailId = prompt("Enter the email Id :");
            try {
                contact = ServiceRef.addContact(firstName, lastName, address, city, state, zip, phone, emailId);
                addressBook.push(contact);
            } catch (e) {
                console.error(e);
            }
            break;
        case 2:
            if (addressBook.length == 0) {
                console.log("Address book is empty");
            } else {
                let name = prompt("Enter the name whose details should be edited : ");
                ServiceRef.editContact(name, addressBook);
            }
            break;
        case 3:
            if (addressBook.length == 0) {
                console.log("Address book is empty");
            } else {
                let name = prompt("Enter the name whose contact you want to delete: ");
                ServiceRef.deleteContact(name, addressBook);
            }
            break;
        case 4:
            let numberOfContacts = addressBook.reduce(ServiceRef.countContacts, 0);
            console.log("Count of contacts :" + numberOfContacts);
            break;
        case 5:
            if (addressBook.length == 0)
                console.log("Address book is empty");
            else {
                let name = prompt("Enter the name whose contact you want to search");
                ServiceRef.searchContactInCity(name, addressBook);
                ServiceRef.searchContactInState(name, addressBook);
            }
            break;
        case 6:
            if (addressBook.length == 0)
                console.log("Address book is empty");
            else {
                ServiceRef.viewContactByCity(addressBook);
                ServiceRef.viewContactByState(addressBook);
            }
            break;
        case 7:
            if (addressBook.length == 0)
                console.log("Address book is empty");
            else {
                ServiceRef.countByCity(addressBook);
                ServiceRef.countByState(addressBook);
            }
            break;
        case 8:
            if (addressBook.length == 0)
                console.log("Address book is empty");
            else {
                let sortedByName = ServiceRef.sortContactByName(addressBook);
                console.log(sortedByName);
            }
            break;
    }
} while (choice != 0);