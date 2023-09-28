import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor (
        private container: HTMLUListElement){ }

        render (item : HasFormatter, heading: string, pos: 'start' | 'end' ){

            const listItem = document.createElement('li');
            const header = document.createElement('h4');
            const details = document.createElement('p');

            header.textContent = heading;
            details.textContent =item.format();
            listItem.append(header);
            listItem.append(details);

            if( pos === 'end') {
                this.container.append(listItem);
            } else {
                this.container.prepend(listItem);
            }
        }    
}