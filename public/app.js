'use strict';
import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
const form = document.querySelector('.new-item-form');
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
