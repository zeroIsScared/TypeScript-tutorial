'use strict';
import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import {Payment} from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const list = document.querySelector('ul') as HTMLUListElement;

form. addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    let doc : HasFormatter;
    let values:[string, string,number] = [tofrom.value, details.value, amount.valueAsNumber];
    
    if ( type.value === 'invoice') {
         doc = new Invoice (...values);
    } else {
        doc = new Payment (...values);
    }

    let newListItem = new ListTemplate (list);
    newListItem.render(doc, type.value, 'end');

    console.log( doc);
})

