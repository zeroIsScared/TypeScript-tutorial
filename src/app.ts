'use strict';
import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import {Payment} from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

interface IsPerson {
    name: string;
    age: number;
    speak(a:string):void;
    spend(a:number):number;
}

const me: IsPerson = {
    name: 'Shaun',
    age : 30,
    speak (text: string):void {
        console.log(text);
    }, spend (amount: number):number {
        console.log(`I spent`, amount);
        return amount;
    }
}

// console.log(me);


// const firstInvoice = new Invoice('Ann', 'accounting services', 200);
// const secondInvoice = new Invoice('Marie', 'peanut butter', 300);
// console.log(firstInvoice.format());

// let invoices: Invoice [] = [];
// invoices.push(firstInvoice);
// invoices.push(secondInvoice);

// invoices.forEach(invoice => console.log(invoice.client, invoice.format()));

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);
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

