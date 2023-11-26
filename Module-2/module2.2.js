const participantCount = prompt('Enter the number of participants');
const participantNames = [];

for (let i = 0; i < participantCount; i++) {
    const participantName = prompt(`Enter name for participant ${i + 1}`);
    participantNames.push(participantName);
}

participantNames.sort();

const orderedList = document.createElement('ol');

for (const participantName of participantNames) {
    const listItem = document.createElement('li');
    listItem.textContent = participantName;
    orderedList.appendChild(listItem);
}

document.body.appendChild(orderedList);
