'use strict';
const dogNames = [];

for (let i = 0; i < 6; i++) {
    const dogName = prompt(`Enter name for dog ${i + 1}`);
    dogNames.push(dogName);
}

dogNames.sort((a, b) => b.localeCompare(a));

const unorderedList = document.createElement('ul');

for (const dogName of dogNames) {
    const listItem = document.createElement('li');
    listItem.textContent = dogName;
    unorderedList.appendChild(listItem);
}
document.body.appendChild(unorderedList);
