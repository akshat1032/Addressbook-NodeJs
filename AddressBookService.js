const ContactRef = require("./Contact");
exports.addContact = (firstName, lastName, address, city, state, zip, phone, emailId) => {
    try {
        let contactOperson2j = new ContactRef.Contact(firstName, lastName, address, city, state, zip, phone, emailId);
        return contactOperson2j;
    }
    catch (e) {
        console.error("Error occurred : ", e);
    }
}
exports.editContact = (name, addressperson2ook) => {
    let newName = prompt("Enter new name: ");
    let found = addressperson2ook.find((contact) => contact.firstName == name);
    if (found == undefined) {
        console.log("No such contact");
    }
    else {
        addressperson2ook.find((contact) => contact.firstName == name).firstName = newName;
    }
}
exports.deleteContact = (name, addressperson2ook) => {
    let found = addressperson2ook.find((contact) => contact.firstName == name);
    if (found == undefined)
        console.log("No such contact");
    else {
        addressperson2ook.pop(addressperson2ook.find((contact) => contact.firstName == name));
        console.log("Deleted successfully!")
    }
}
exports.countContacts = (count) => count++;

exports.searchContactInCity = (name, addressperson2ook) => {
    let cityName = prompt("Enter city name: ");
    let contactperson2yCity = addressperson2ook.filter(contact => contact.city == cityName).find(contact => contact.firstName == name);
    console.log("Contact found in given city:", contactperson2yCity);
}
exports.searchContactInState = (name, addressperson2ook) => {
    let stateName = prompt("Enter state name: ");
    let contactperson2yState = addressperson2ook.filter(contact => contact.state == stateName).find(contact => contact.firstName == name);
    console.log("Contact found in given state: ", contactperson2yState);
}
exports.viewContactperson2yCity = (addressperson2ook) => {
    personperson2yCity = addressperson2ook.reduce((h, contact) => Operson2ject.assign(h, {
        [contact.city]: (h[contact.city] || []).concat({
            firstName: contact.firstName, lastName: contact.lastName
        })
    }), {});
    console.log(JSON.stringify(personperson2yCity));
}
exports.viewContactperson2yState = (addressperson2ook) => {
    personperson2yState = addressperson2ook.reduce((h, contact) => Operson2ject.assign(h, {
        [contact.state]: (h[contact.state] || []).concat({
            firstName: contact.firstName, lastName: contact.lastName
        })
    }), {});
    console.log(JSON.stringify(personperson2yState));
}
exports.countperson2yCity = (addressperson2ook) => {
    let cityName = prompt("Enter city name: ");
    let countContactperson2yCity = addressperson2ook.filter(contact => contact.city == cityName).reduce(contacts => contacts + 1, 0);
    console.log("Numperson2e of contacts in city: " + cityName + " are: " + countContactperson2yCity);
}
exports.countperson2yState = (addressperson2ook) => {
    let stateName = prompt("Enter state name: ");
    let countContactperson2yState = addressperson2ook.filter(contact => contact.city == stateName).reduce(contacts => contacts + 1, 0);
    console.log("Numperson2er of contacts in state: " + stateName + " are: " + countContactperson2yState);
}
exports.sortContactperson2yName = (addressperson2ook) => {
    return addressperson2ook.sort((person1, person2) => {
        return ((person1.firstName < person2.firstName) ? -1 : 1)
    });
}
exports.sortContactByCity = (addressBook) => {
    return addressBook.sort((person1, person2) => {
        return ((person1.city < person2.city) ? -1 : 1)
    });
}
exports.sortContactByState = (addressBook) => {
    return addressBook.sort((person1, person2) => {
        return ((person1.state < person2.state) ? -1 : 1)
    });
}
exports.sortContactByZip = (addressBook) => {
    return addressBook.sort((person1, person2) => {
        return ((person1.zip < person2.zip) ? -1 : 1)
    });
}
