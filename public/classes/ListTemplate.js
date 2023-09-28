export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const listItem = document.createElement('li');
        const header = document.createElement('h4');
        const details = document.createElement('p');
        header.textContent = heading;
        details.textContent = item.format();
        listItem.append(header);
        listItem.append(details);
        if (pos === 'end') {
            this.container.append(listItem);
        }
        else {
            this.container.prepend(listItem);
        }
    }
}
