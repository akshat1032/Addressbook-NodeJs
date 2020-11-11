import {Contact} from "./Contact.js"
try{
let contact = new Contact("Naruto", "Uzumaki", "Hokage", "Konoha","Fireland","500023","9835298032","naruto@konoha.com");
console.log(contact.toString()); }
catch(e){
    console.error("Error occurred : ",e);
}