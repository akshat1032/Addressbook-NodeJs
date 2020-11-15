const ServiceRef = require("./AddressBookService");
const ContactRef = require("./Contact");
const prompt = require('prompt-sync')();
let addressBook = new Array();
let choice = 0;
do {
    choice = prompt("Enter 1-Add contact \n2-Edit Contact \n0-Exit: ");
    switch (choice) {
        case 1:
            let firstName = prompt("Enter the first name :");
            let lastName = prompt("Enter the last name :");
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
    }
} while (choice != 0);