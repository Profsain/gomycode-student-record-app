// fetch data from local storage
const studentDatabase = JSON.parse(localStorage.getItem('studentsData'));
console.log('My Student Database', studentDatabase);

// function to display render array
const grid = document.querySelector('#grid-container');

function render() {
    for (const student of studentDatabase) {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-4');
        card.style.width = '15rem';
        card.style.margin = '10px';

        const h5 = document.createElement('h5');
        h5.textContent = `${student.firstName} ${student.lastName}`;

        const phoneElem = document.createElement('p');
        phoneElem.textContent = `Phone No: ${student.phone}`;

        const emailElem = document.createElement('p');
        emailElem.textContent = `Email: ${student.email}`;

        const genderElem = document.createElement('p');
        genderElem.textContent = `Gender: ${student.gender}`;

        const locationElem = document.createElement('p');
        locationElem.textContent = `Location: ${student.city} ${student.state} ${student.country}`;

        const addressElem = document.createElement('p');
        addressElem.textContent = `Address: ${student.address}`;

        // append elements to card
        card.appendChild(h5);
        card.appendChild(phoneElem);
        card.appendChild(emailElem);
        card.appendChild(genderElem);
        card.appendChild(locationElem);
        card.appendChild(addressElem);

        // append card to grid
        grid.appendChild(card);
    }
}
render();