'use strict';
import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
const me = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log(text);
    }, spend(amount) {
        console.log(`I spent`, amount);
        return amount;
    }
};
// console.log(me);
// const firstInvoice = new Invoice('Ann', 'accounting services', 200);
// const secondInvoice = new Invoice('Marie', 'peanut butter', 300);
// console.log(firstInvoice.format());
// let invoices: Invoice [] = [];
// invoices.push(firstInvoice);
// invoices.push(secondInvoice);
// invoices.forEach(invoice => console.log(invoice.client, invoice.format()));
const form = document.querySelector('.new-item-form');
//console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const list = document.querySelector('ul');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    let newListItem = new ListTemplate(list);
    newListItem.render(doc, type.value, 'end');
    console.log(doc);
});
